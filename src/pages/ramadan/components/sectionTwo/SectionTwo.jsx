import MotionFadeInLeft from "../../../../components/motionAnimatedComponents/fadeInLeft/FadeInLeft";
import MotionFadeInRight from "../../../../components/motionAnimatedComponents/fadeInRight/fadeInRight";
import { filterObject } from "../../../../utils";
import GivingMoney from "/money-g2b05e2473_640.png"

function SectionTwo(props) {
    return (
        <div
        {...filterObject(props, ["className", "lang", "setLang"])}
         id="sec2"
         className="snap reveal grid place-items-center text-[#eeeeee] px-5 text-2xl text-center lrr:min-h-[70%] lrr:w-full min-h-[30vw]" 
        >
            <div
             className="flex items-center h-full w-full lrr:flex-col-reverse lrr:justify-center"
            >
                <div
                 className="max-w-[50%] lrr:max-w-none "
                >
                    <MotionFadeInLeft
                     className=" px-8" 
                     once 
                    >
                            <div 
                             className="grid place-items-center"
                            >
                                { props.lang == "en" && 
                                    <div>
                                        It is known that people must fast the whole ramadan month so they feel how poor people live with no food&#8288;. at the end of Ramadan people must give charity to poor ones&#8288;.
                                    </div>
                                }
                                { props.lang == "ar" &&
                                    <div style={{direction: "rtl"}}>
                                        من المعروف أن الناس يجب أن يصوموا شهر رمضان كاملاً لكي يشعروا كيف يعيش الفقراء بلا طعام. في نهاية شهر رمضان يجب على الناس التبرع بالصدقة للفقراء&#8288;.
                                    </div>
                                }
                            </div>
                    </MotionFadeInLeft>
                </div>
                <div 
                 className="h-full w-full lrr:h-auto flex justify-center items-center"
                >
                    <MotionFadeInRight once >
                        <img 
                         src={GivingMoney} 
                         alt=""
                         className=" w-full h-full mb-8 block lrr:max-h-[40vh] max-h-[50vh]" 
                         style={{clipPath:"circle(50% at 50% 50%)"}} 
                        />
                    </MotionFadeInRight>
                </div>
            </div>
        </div>

    );
}

export default SectionTwo;