import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const ScratchCover = styled.div`
    transition: background-color ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.pageBackground};
`

export default function Scratch(props) {
    return(
        <div className="scratch-flex">
            <div className="scratcher"></div>
            <ScratchCover className={`scratcher-cover ${props.visible ? "scratcher-shown" : ""}`}></ScratchCover>
        </div>
    );
}