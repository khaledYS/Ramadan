import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ramadanStartsAt } from "../../../../constants/ramadan";
import useInterval from "../../../../hooks/useInterval";
import { msToTime } from "../../../../utils";
import ColonSymbol from "./components/colonSymbol/ColonSymbol";
// NICD: stands for Number in count Down
import NICD from "./components/numberInCountDown/NumberInCountDown";
import TimeBox from "./components/timeBox/TimeBox";
import moonImg from "/jacob-dyer-NWIOx1BKZrc-unsplash.jpg"

function SectionFive(props) {
    const [timeLeftForRamadan, setTimeLeftForRamadan] = useState(msToTime(ramadanStartsAt - new Date().getTime()));
    const [isItRamadan, setIsItRamadan] = useState(false);
    const [afterTimer, setAfterTimer] = useState({
        time: 6000,
        isActive: false
    })
    const {ref, inView} = useInView({threshold: .5, triggerOnce:true});
    const isMounted = useRef(false);
    const containerRef = useRef();

    useInterval(()=>{
        if(!inView)return ;
        // !test;
        // let res = msToTime(0);
        let res = msToTime(ramadanStartsAt - new Date().getTime());
        if(res.duration <= 0){
            let time = afterTimer.time - 1000;
            if(time <= 0){
                setIsItRamadan(true)
            }else{
                setTimeLeftForRamadan(msToTime(time))
                setAfterTimer({...afterTimer, time})
            }
        }else{
            setTimeLeftForRamadan(res)
        }
    }, 1000)

    return (
        <div
         ref={containerRef}
         className="Five grid place-items-center h-full"
        >
            <div
             ref={ref}
             className={`bg-[#7f9a88] py-4 px-2 rounded-xl ${isItRamadan && "bg-black border-solid border-8 border-[#5da399]"}`}
             style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
             }}
            >
                {
                    !isItRamadan ?
                    <div
                     className="ramadanIcon mx-auto mb-8 cursor-pointer"
                    >
                    </div> :
                    <img 
                     src={moonImg}
                     className="w-full max-w-[180px] mx-auto"
                    />
                }
                <div className={`text-2xl text-center my-6 ${isItRamadan ? " mt-4 " : " mt-14 "}`}>
                    {props.lang == "ar" && 
                        <div className="ar " style={{direction:"rtl"}}>
                            {
                                isItRamadan ?
                                "رمضان كريــم" :
                                "باقي لرمضان : "
                            }
                        </div>
                    }
                    {props.lang == "en" && 
                        <div className="en">
                            {
                                isItRamadan ? 
                                "Ramadan Kareem!" :
                                "Ramadan CountDown : "
                            }
                        </div>
                    }
                </div>
                <div
                 className="flex items-center justify-center w-full h-full"
                >
                    { !isItRamadan && 
                        <>
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
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default SectionFive;