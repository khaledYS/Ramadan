import MotionFadeInLeft from "../../../../components/motionAnimatedComponents/fadeInLeft/FadeInLeft";
import MotionFadeInRight from "../../../../components/motionAnimatedComponents/fadeInRight/fadeInRight";
import { filterObject } from "../../../../utils";
import QamerAldeenVector from "/Grapefruit vector 4.svg"


function SectionThree(props) {
    
    return (
        <div
         {...filterObject(props, ["className", "lang", "setLang"])}
         id="sec3"
         className="snap reveal grid place-items-center text-[#eeeeee] px-5 text-2xl text-center my-10 lrr:min-h-[70%] lrr:w-full min-h-[30vw]" 
        >
            <div 
             className="flex items-center h-full w-full lrr:flex-col lrr:justify-center"
            >
                <div
                 className="h-full w-1/2 lrr:h-auto flex justify-center items-center "
                >
                    <MotionFadeInLeft
                     className="w-full h-full flex justify-center items-center"
                     once 
                    >

                        <img
                         src={QamerAldeenVector}
                         alt="LittleKidPrays" 
                         className="  h-full block lrr:max-h-[40vh] max-h-[40vh] rounded-lg lrr:mb-10" 
                        />

                    </MotionFadeInLeft>
                </div>
                <div 
                 className="max-w-[50%] lrr:max-w-none "
                >
                    <MotionFadeInRight
                     className=" px-8" 
                     once 
                    >
                        <div 
                         className="grid place-items-center"
                        >
                            { props.lang == "en" && 
                                <div>
                                    Ramadan also known with it&#8288;'&#8288;s traditional food and juice&#8288;, like Vimto and Qamer&#8288;Al&#8288;-&#8288;Deen&#8288;.
                                </div>
                            }
                            { props.lang == "ar" &&
                                <div style={{direction: "rtl"}}>
                                    رمضان معروف أيضًا بطعامه وعصيره التقليدي، مثل عصير فيمتو وقمر الدين.
                                </div>
                            }
                        </div>
                    </MotionFadeInRight>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;