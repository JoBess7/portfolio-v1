import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const ScratchUpper = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    border-bottom: 35px solid transparent;
    border-left: 70px solid ${props => props.theme.pageBackground};
`

const ScratchLower = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    border-top: 35px solid transparent;
    border-right: 70px solid ${props => props.theme.pageBackground};
`

export default function Scratch(props) {
    return(
        <div className="scratch-flex">
            <ScratchUpper className="scratch-square scratch-upper"/>
            <div className="scratch-square scratch-middle"/>
            <ScratchLower className="scratch-square scratch-lower"/>
        </div>
    );
}