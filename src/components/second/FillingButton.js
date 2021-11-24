import { useState } from "react/cjs/react.development";


export default function FillingButton(props) {

    const [fillButton, setFillButton] = useState(false);

    return(
        <div className="filling-button"
            onMouseEnter={() => {setFillButton(true)}}
            onMouseOut={() => {setFillButton(false)}}>
            <div 
                className={`filler-button ${fillButton ? "fill-button" : ""}`}>

            </div>
        </div>
    );
} 