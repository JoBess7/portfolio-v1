import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const SectionNumber = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.blue};
`

const SectionText = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.grey};

`

export default function SectionTitle({number, title}) {
    return(
        <div className="section-title-flex">
            <SectionText className="title-title">{title}</SectionText>
            <div className="title-line"></div>
        </div>
    );
}