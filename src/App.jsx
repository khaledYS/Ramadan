import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import LangContext from './contexts/LangContext';
import useLang from './hooks/useLang';

function App() {  
  const [lang, setLang] = useLang();
  const location = useLocation();
  const navigate = useNavigate();

  // if the lang isn't known and the client isn't on the lang switcher then navigate him to it.
  useEffect(()=>{
    console.log(lang)
    if(location.pathname != "/" && !lang){
      console.log("hi")
    }
  }, [])

  return (
      <div className="App text-white bg-[#07070A] w-full h-full snap-container">
        <Outlet context={[lang, setLang]} />
      </div>
  )
}

export default App
