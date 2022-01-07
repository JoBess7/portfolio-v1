import { useState } from "react";
import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Label = styled.label`
    color: ${props => props.theme.title};
`;

const Inputy = styled.input`
    color: ${props => props.theme.title};
    border-bottom: 2px solid ${props => props.theme.title};
`;

export default function Input({action, display, marginbottom, margintop, what, id}) {

    const [valid, setValid] = useState(false);
    const [iconClasses, setIconClasses] = useState("icon-small");

    function modifyValue(event) {
        var newValue = event.target.value;

        if(!valid && (newValue !== "" || newValue !== " ")) {
            setIconClasses("icon-big");
            setValid(true);
        } else if (valid && (newValue === "" || newValue === " ")) {
            setIconClasses("icon-small");
            setValid(false);
        }
        
        action(what, newValue);
    }

    return(
        <div style={{marginTop: `${margintop * 25}px`, marginBottom: `${marginbottom * 25}px` }} className="input-div">
            <Inputy
                spellCheck="false" 
                onChange={(event) => {modifyValue(event)}} 
                placeholder=" " 
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