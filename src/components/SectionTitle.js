import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";
import Scratch from "./Scratch";

const SectionText = styled.div`
    position: relative;
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.title};
    text-shadow: ${props => props.theme.shadowDimensions} ${props => props.theme.textShadow};
`

export default function SectionTitle({class2, title, inView}) {
    return(
        <div className={`section-title-flex ${class2}`}>
            <SectionText className="title-title">
                {title}
                <Scratch visible={inView}/>
            </SectionText>
        </div>
    );
}