import { useEffect, useState } from "react";
import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";

const SectionText = styled.div`
    padding-top: 5px;
    position: relative;
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.title};
    text-shadow: 1px 1px ${props => props.theme.textShadow};
`

export default function SelectableTitle({theme, id, setSelected, selected, title}) {

    const [selectedClasses, setSelectedClasses] = useState("");

    useEffect(() => {
        var clickedClass = theme === "light" ? "clicked-light" : "clicked-dark";

        if(selected === id) {
            setSelectedClasses(clickedClass);
        } else {
            setSelectedClasses("");
        }
    }, [selected, id, theme]);

    function selectionEvent(event) {

        var clickedClass = theme === "light" ? "clicked-light" : "clicked-dark";

        switch(event) {
            case "hover":
                if(selectedClasses.includes(clickedClass)) 
                    setSelectedClasses("hovered " + clickedClass);

                else setSelectedClasses("hovered");

                break;

            case "":
                if(selectedClasses.includes(clickedClass))
                    setSelectedClasses(clickedClass); 

                else setSelectedClasses("");

                break;

            case "click":
                if(!selectedClasses.includes(clickedClass)) {
                    setSelectedClasses(selectedClasses + " " + clickedClass);
                    setSelected(id);
                }
                break;

            default:
                break;
        }

        if(selectedClasses.includes(clickedClass) && selected !== id) {
            setSelectedClasses(selectedClasses.replace(clickedClass, ""));
        }
    }

    return (
        <SectionText
            className="selectable-title"
            onMouseEnter={() => selectionEvent("hover")}
            onMouseLeave={() => selectionEvent("")}
            onClick={() => selectionEvent("click")}
        >
            
            <div className={`highlight ${selectedClasses}`}></div>
            <div className="selection">{title}</div>

        </SectionText>
    );
}