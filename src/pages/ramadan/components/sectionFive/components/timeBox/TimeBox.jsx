import NICD from "../numberInCountDown/NumberInCountDown";
import {v1 as uuidv1} from "uuid"

function TimeBox(props) {
    return (
        <div 
         className={` days mx-1 flex-col items-center ${props.colon && " TimeColon "} ${props.className || " "} `}
        >
            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-center">
                        {props.title}
                    </div>
                    <div className="NICD flex items-center bg-[#397367] ">
                        {props.num.toString().length == 1 && <NICD num={0} />}
                        {props.num.toString().split("").map(num=>
                            <NICD
                            num={num} 
                            key={uuidv1()}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeBox;