import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const SectionText = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.lightBlue};
    text-shadow: ${props => props.theme.shadowDimensions} ${props => props.theme.textShadow};
`

export default function SectionTitle({title}) {
    return(
        <div className="section-title-flex">
            <SectionText className="title-title">{title}</SectionText>
        </div>
    );
}