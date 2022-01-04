import { useState } from "react";
import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Label = styled.label`
    color: ${props => props.theme.lightBlue};
`;

const TextAreay = styled.textarea`
    color: ${props => props.theme.lightBlue};
    border-bottom: 2px solid ${props => props.theme.lightBlue};
`;

export default function TextArea({display, marginbottom, margintop, what, id}) {

    const [value, setValue] = useState(" ");
    const [valid, setValid] = useState(false);
    const [iconClasses, setIconClasses] = useState("icon-small");
    const [heightVal, setHeightVal] = useState("20px");

    function modifyValue(event) {
        var newValue = event.target.value;
        setValue(newValue);

        if(!valid && (newValue !== "" || newValue !== " ")) {
            setIconClasses("icon-big");
            setValid(true);
        } else if (valid && (newValue === "" || newValue === " ")) {
            setIconClasses("icon-small");
            setValid(false);
        }
    }

    function focusEvent() {
        setHeightVal("50px");
    }

    function blurEvent() {
        if(value === "" || value === " ") {
            setHeightVal("20px");
        }
    }

    return(
        <div style={{marginTop: `${margintop * 25}px`, marginBottom: `${marginbottom * 70}px`}} className="input-div">
            <TextAreay 
                spellCheck="false" 
                placeholder=" " 
                onBlur={blurEvent} 
                onFocus={focusEvent} 
                onChange={(event) => {modifyValue(event)}} 
                style={{resize: "none", height: heightVal, transition: "height 200ms"}} 
                className="input" 
                type="text" 
                autoComplete="off" 
                autoCapitalize="true" 
                id={id} 
                name={id}
            />
            <Label className="label" htmlFor={id}>{display}</Label>
            <IoIosCheckmarkCircle fill="rgb(0, 175, 0)" size={20} className={"input-icon " + iconClasses}/>
        </div>
    );
}