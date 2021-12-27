import { useState } from "react";
import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Label = styled.label`
    color: ${props => props.theme.lightBlue};
`;

const Inputy = styled.input`
    color: ${props => props.theme.lightBlue};
    border-bottom: 2px solid ${props => props.theme.lightBlue};
`;

export default function Input({margintop, what, id}) {

    const [value, setValue] = useState(" ");
    const [valid, setValid] = useState(false);
    const [iconClasses, setIconClasses] = useState("icon-small");

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

    return(
        <div style={{marginTop: `${margintop * 25}px`}} className="input-div">
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
            <Label className="label" for={id}>{what}</Label>
            <IoIosCheckmarkCircle fill="rgb(0, 175, 0)" size={20} className={"input-icon " + iconClasses}/>
        </div>
    );
}