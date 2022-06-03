import { filterObject } from "../../../../utils";
import {GoLogoGithub, GoMarkGithub} from "react-icons/go";
import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <>
            <div 
             className="w-full"
             {...filterObject(props, ["className", "lang", "setLang"])}
            >   
                <div className="h-1 w-full block bg-[#457c75]"></div>
                <div className="font-bold text-xl text-gray-400 pt-2 px-1 flex items-center">
                    { props.lang == "en" &&
                        <div className="en ">
                            This website has been made with HUGE &hearts; By Ammar Ys.
                        </div>
                    }
                    { props.lang == "ar" &&
                        <div className="ar ">
                            تم صناعة هذا الموقع مع
                            &hearts; 
                            كبير بواسطة عمار ياسر . 
                        </div>
                    }
                    <a href="https://github.com/khaledYs" target="_blank" className="px-2 text-3xl block">
                        <GoMarkGithub className="hover:text-white transition-all" />
                    </a>
                </div>
                <div>
                    <Link to="/language" className="font-bold text-xl text-gray-400 px-1 py-0 border-[#07070A] hover:border-gray-400 border-b-4 mb-5 block w-fit" >
                        <span className="en">
                            Language 
                        </span>
                        <span className="ar px-2">
                            اللغة
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Footer;