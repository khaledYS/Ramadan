import MotionFadeInLeft from "../../../../components/motionAnimatedComponents/fadeInLeft/FadeInLeft";
import MotionFadeInRight from "../../../../components/motionAnimatedComponents/fadeInRight/fadeInRight";
import { filterObject } from "../../../../utils";
import LittleKidPrays from "/boy-ge07588ef1_640.png"

function SectionFour(props) {
    return (
        <div
         {...filterObject(props, ["className", "lang", "setLang"])}
         id="sec4"
         className="snap reveal grid place-items-center text-[#eeeeee] px-5 text-2xl text-center my-10 lrr:min-h-[70%] lrr:w-full min-h-[30vw]" 
        >
            <div
             className="flex items-center h-full w-full lrr:flex-col-reverse lrr:justify-center"
            >
                <div
                 className="max-w-[50%] lrr:max-w-none "
                >
                    <MotionFadeInRight
                     className=" px-8" 
                     once
                    >
                        <div className="grid place-items-center">
                            { props.lang == "en" && 
                                <div>
                                    also in Ramadan The spiritual rewards (thawab) of fasting and other worships are multiplied during Ramadan, so the majority of people plan to read The wholy quran in this month and gain the doubled reward (thawab).
                                </div>
                            }
                            { props.lang == "ar" &&
                                <div 
                                 style={{direction: "rtl"}}
                                >
                                    أيضا في رمضان يتضاعف الأجر للصيام وسائر العبادات، ولهذا يخطط غالبية الناس لقراءة القرآن الكريم كاملاً في هذا الشهر والحصول على الأجر والثواب المضاعف.
                                </div>
                            }
                        </div>
                    </MotionFadeInRight>
                </div>
                <div 
                 className="h-full w-full lrr:h-auto flex justify-center items-center "
                >
                    <MotionFadeInLeft once >
                        <img
                         src={LittleKidPrays} 
                         alt="LittleKidPrays" 
                         className=" w-full h-full block lrr:max-h-[40vh]" 
                         style={{clipPath:"polygon(92% 12%, 99% 83%, 3% 82%, 13% 20%)"}} 
                        />
                    </MotionFadeInLeft>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;