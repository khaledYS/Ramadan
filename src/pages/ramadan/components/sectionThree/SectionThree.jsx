import MotionFadeInLeft from "../../../../components/motionAnimatedComponents/fadeInLeft/FadeInLeft";
import MotionFadeInRight from "../../../../components/motionAnimatedComponents/fadeInRight/fadeInRight";
import { filterObject } from "../../../../utils";
import QamerAldeenVector from "/Grapefruit vector 4.svg"


function SectionThree(props) {
    
    return (
        <div
         {...filterObject(props, ["className", "lang", "setLang"])}
         id="sec3"
         className={"snap reveal grid place-items-center text-[#eeeeee] px-5 text-2xl text-center my-10 lrr:w-full min-h-[30vw] " + props.className || " "}
        >
            <div 
             className="flex items-center h-full w-full lrr:flex-col lrr:justify-center"
            >
                <div
                 className="h-full w-1/2 lrr:w-full lrr:h-auto lrr:min-h-[40vh] flex justify-center items-center "
                >
                    <MotionFadeInLeft
                     className="w-full lrr:h-full flex justify-center items-center lrr:max-w-[340px] lrr:mb-6"
                     once 
                    >

                        <img
                         src={QamerAldeenVector}
                         alt="LittleKidPrays" 
                         className=" w-full lrr:w-auto block lrr:max-h-[50vh] lrr:max-w-[250px] max-w-[25vw] rounded-2xl" 
                        />

                    </MotionFadeInLeft>
                </div>
                <div 
                 className="lrr:max-w-none lrr:w-full w-[50vw] "
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