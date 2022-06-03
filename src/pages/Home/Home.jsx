import { useContext, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router";
import WideBtn from "../../components/btns/WideBtn";
import useLang from "../../hooks/useLang";
import Ramadan from "../ramadan/Ramadan";

function Home() {
    const navigate = useNavigate();
    const {language} = useOutletContext();
    const [lang, setLang] = language;

    return ( 
        <div className="w-full h-full grid place-items-center text-center text-lg">
            <div className="center">
                <div className="up mb-4 text-xl">
                    <h1 className="ar">أختر اللغة</h1>
                    <h1 className="en">Choose language</h1>
                </div>
                <div className="langs-btns flex flex-col ">
                    <WideBtn
                     title="العربيه"
                     onClick={()=>{
                        setLang("arabic")
                        navigate("/ramadan")
                     }}
                     className=""
                     >

                    </WideBtn>
                    <WideBtn
                     title="English"
                     onClick={()=>{
                        setLang("english")
                        navigate("/ramadan")
                     }}
                     className=""
                     >

                    </WideBtn>
                </div>
            </div>
        </div>
    );
}

export default Home;