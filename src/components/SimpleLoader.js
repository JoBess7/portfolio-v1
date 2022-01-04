import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const Ball = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.blue};
`

export default function SimpleLoader() {
    return(
        <div className="lds-ellipsis">
            <Ball/>
            <Ball/>
            <Ball/>
            <Ball/>
        </div>
    );
}