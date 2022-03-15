import MotionFadeInLeft from "../../../../components/motionAnimatedComponents/fadeInLeft/FadeInLeft";
import MotionFadeInRight from "../../../../components/motionAnimatedComponents/fadeInRight/fadeInRight";
import { filterObject } from "../../../../utils";
import GivingMoney from "/money-g2b05e2473_640.png"

function SectionTwo(props) {
    return (
        <div
        {...filterObject(props, ["className", "lang", "setLang"])}
         id="sec2"
         className={"snap reveal flex justify-center items-center text-[#eeeeee] px-5 smm:px-1 text-2xl smm:text-xl text-center my-10 lrr:min-h-[70%] lrr:w-full" + props?.className || " "} 
        >
            <div
             className="flex items-center h-full w-full lrr:flex-col-reverse lrr:justify-center"
            >
                <div
                 className="w-full lrr:max-w-none lrr:w-full max-w-[50vw]"
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
                 className="flex items-center h-full w-full lrr:justify-center lrr:mb-8"
                >
                    <div
                     className="h-full w-full lrr:h-auto flex justify-center items-center "
                    >
                        <MotionFadeInRight once >
                            <img 
                            src={GivingMoney} 
                            alt=""
                            className=" w-full h-full block lrr:max-h-[300px] max-w-[30vw] lrr:max-w-none" 
                            style={{clipPath:"circle(50% at 50% 50%)"}} 
                            />
                        </MotionFadeInRight>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SectionTwo;