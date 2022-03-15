import { useEffect, useState } from "react";
import { msToTime } from "../../../../utils";

function SectionFive() {
    const [timeLeftForRamadan, setTimeLeftForRamadan] = useState(msToTime(1648846800000 - new Date().getTime()))

    useEffect(()=>{

        let timer = setInterval(()=>{
            
            setTimeLeftForRamadan(msToTime(1648846800000 - new Date().getTime()))
        }, 1000)

    }, [])

    return (
        <div>
            {timeLeftForRamadan.days}-{Object.entries(timeLeftForRamadan)}
        </div>
    );
}

export default SectionFive;