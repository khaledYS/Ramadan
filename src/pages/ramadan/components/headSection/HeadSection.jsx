import MotionFadeInUp from "../../../../components/motionAnimatedComponents/fadeInUp/fadeInUp";
import { filterObject } from "../../../../utils";

function HeadSection(props) {
    return (
        <div
         {...filterObject(props, ["className", "lang", "setLang"])}
         className={"reveal w-full h-full text-[15vw] grid place-items-center snap " + props.className || ""}
        >
            <MotionFadeInUp once>
                <a 
                 href="#sec1" 
                 className=" block cursor-pointer relative text-[#5BA499]"
                >
                    { props.lang == "ar" && <h1 
                                        className="ar welcome-ramadan-text" 
                                        data-text="رمضان"
                                        > رمضان</h1>}
                    { props.lang == "en" && <h1 
                                        className="en welcome-ramadan-text"
                                        data-text="Ramadan"
                                        >Ramadan</h1>}
                </a>
            </MotionFadeInUp>
        </div>
    );
}

export default HeadSection;