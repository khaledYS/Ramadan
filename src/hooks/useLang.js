import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function useLang(passedLang = null) {
    const navigate = useNavigate();
    const location = useLocation();
    const [lang, setLang] = useState(
        passedLang || JSON.parse(window.localStorage.getItem("lang")) || null
    )  
    useEffect(()=>{
        window.localStorage.setItem("lang", JSON.stringify(lang || null));
        if(lang){
            if(location.pathname == "/"){
                navigate("/ramadan")
            }
        }else{
            if(location.pathname != "/"){
                navigate("/")
            }
        }
    }, [lang])

    return [lang ? (lang[0]+lang[1]) : null, setLang];
}

export default useLang;