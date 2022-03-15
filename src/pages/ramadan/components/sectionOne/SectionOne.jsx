import MotionFadeInLeft from "../../../../components/motionAnimatedComponents/fadeInLeft/FadeInLeft";
import MotionFadeInRight from "../../../../components/motionAnimatedComponents/fadeInRight/fadeInRight";
import useLang from "../../../../hooks/useLang";
import { filterObject } from "../../../../utils";
import Hilal from "/night-gae18dc4ef_1280.png"

function SectionOne(props) {
    
    return (
            <div
             {...filterObject(props, ["className", "lang", "setLang"])}
             id="sec1"
             className={"snap reveal grid place-items-center text-[#eeeeee] px-5 smm:px-1 text-2xl smm:text-xl text-center my-10 lrr:w-full " + props?.className || " "} 
            >
                <div
                 className="flex items-center h-full w-full lrr:flex-col lrr:justify-center"
                >
                    <div 
                     className="h-full lrr:h-auto flex justify-center items-center lrr:w-full w-[50vw] "
                    >
                        <MotionFadeInLeft 
                         className=""
                         once 
                        >
                            <img
                             src={Hilal} 
                             alt="" 
                             className=" w-full h-full block lrr:max-h-[40vh]" 
                             style={{clipPath:"circle(34.6% at 50% 50%)"}} 
                            />
                        </MotionFadeInLeft>
                    </div>
                    <div
                     className="max-w-[50%] lrr:max-w-none lrr:h-1/2 "
                    >
                        <MotionFadeInRight
                         className=" 
                         px-8"
                         once 
                        >
                                <div 
                                 className="grid place-items-center"
                                >
                                    { props.lang == "en" && 
                                        <div>
                                            Ramadan is the ninth month of Islamic calendar&#8288;, and it's the second pillar of Islam and lasts 
                                            twenty&#8288;-&#8288;nine to thirty days&#8288;, It is a month of fasting&#8288;, where Muslims fast from dawn to sunset and it's fard (obligatory) for all adult Muslims&#8288;, Ramadan is famous where people fast and pray "&#8288;Al&#8288;-&#8288;Taraweeh&#8288;" prayer&#8288;.
                                        </div>
                                    }
                                    { props.lang == "ar" &&
                                        <div className="" style={{direction: "rtl"}}>
                                            &#8288;رمضان هو الشهر التاسع من التقويم الإسلامي، وهو الركن الثاني من أركان الإسلام ويستمر من تسعة وعشرين إلى ثلاثين يومًا&#8288;، إنه شهر صيام يصوم فيه المسلمون من الفجر حتى غروب الشمس وفرض (واجب) على جميع المسلمين البالغين ، ويشتهر رمضان حيث يصوم الناس ويصلون صلاة التراويح. 
                                        </div>
                                    }
                                </div>
                        </MotionFadeInRight>
                    </div>
                </div>
            </div>
    );
}

export default SectionOne;