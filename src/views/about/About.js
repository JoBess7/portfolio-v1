import SectionTitle from "../../components/SectionTitle";
import { ABOUT } from "../../assets/constants";
import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const AboutDescription = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.description};
`

export default function About(props) {

    const [hoverClasses, setHoverClasses] = useState("");

    const [ scratcherRef, scratcherInView ] = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return  (
        <div className="about">
            <div className="about-flex website-width">
                <SectionTitle inView={scratcherInView} title="About"/>      
                <div ref={scratcherRef} className={`about-hori-flex ${scratcherInView ? "" : "element-hidden"}`}>
                    <img 
                        src={ABOUT.image}
                        className={"about-img " + hoverClasses}
                        alt=""
                        onMouseEnter={() => {setHoverClasses("to-color");}}
                        onMouseLeave={() => {setHoverClasses("");}}
                    />

                    <AboutDescription className="about-description">
                        {ABOUT.description}
                    </AboutDescription>
                </div>
            </div>
        </div>
    );
}