import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ramadanStartsAt } from "../../../../constants/ramadan";
import { msToTime } from "../../../../utils";
import ColonSymbol from "./components/colonSymbol/ColonSymbol";
// NICD: stands for Number in count Down
import NICD from "./components/numberInCountDown/NumberInCountDown";
import TimeBox from "./components/timeBox/TimeBox";

function SectionFive(props) {
    const [timeLeftForRamadan, setTimeLeftForRamadan] = useState(msToTime(ramadanStartsAt - new Date().getTime()));
    const [isItRamadan, setIsItRamadan] = useState(false);
    const {ref, inView} = useInView({threshold: .5, triggerOnce:true});
    const isMounted = useRef(false);
    let timer = null;

    // !note: this should be taken in final project
    let time = 4000;

    useEffect(()=>{
        isMounted.current = true;
        
        if(inView && !isItRamadan){
            timer = setInterval(()=>{
                // !note : this should be taken in final projects.
                time = time - 1000;
                isMounted.current && setTimeLeftForRamadan(msToTime(ramadanStartsAt - new Date().getTime()));
            }, 1000)
        }

        return ()=>{
            isMounted.current = false;
        }
    }, [inView])
    
    useEffect(()=>{
        isMounted.current = true;
        if(timeLeftForRamadan.duration <= 0){
            isMounted.current && setIsItRamadan(true);
            clearInterval(timer)
            console.log("yeaaaaaaah, ramadan is here.")
        }

        return ()=>{
            isMounted.current = false;
        }
    }, [timeLeftForRamadan])

    return (
        <div
         className="Five grid place-items-center h-full"
        >
            <div
             ref={ref}
             className="bg-[#7f9a88] py-4 px-2 rounded-xl "
            >
                <div
                 className="ramadanIcon mx-auto mb-8 cursor-pointer"
                >
                </div>
                <div className="text-2xl text-center my-6 mt-10">
                    {props.lang == "ar" && 
                        <div className="ar">
                            {
                                isItRamadan ?
                                "رمضان كريــم" :
                                "يبدأ رمضان عنـد"
                            }
                        </div>
                    }
                    {props.lang == "en" && 
                        <div className="en">
                            {
                                isItRamadan ? 
                                "Ramadan Kareem!" :
                                "Ramadan CountDown"
                            }
                        </div>
                    }
                </div>
                <div
                 className="flex items-center justify-center w-full h-full"
                >
                    <TimeBox
                     title={props.lang == "ar" ? "أيام" :"days"}
                     num={timeLeftForRamadan.duration && timeLeftForRamadan.days} 
                     colon
                    />
                    <TimeBox
                     title={props.lang == "ar" ? "ساعات" :"hours"}
                     num={timeLeftForRamadan.duration && timeLeftForRamadan.hours} 
                     colon
                    />
                    <TimeBox
                     title={props.lang == "ar" ? "دقائق" :"min"}
                     num={timeLeftForRamadan.duration && timeLeftForRamadan.minutes} 
                     colon
                    />
                    <TimeBox
                     title={props.lang == "ar" ? "ثواني" :"sec"}
                     num={timeLeftForRamadan.duration && timeLeftForRamadan.seconds} 
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionFive;