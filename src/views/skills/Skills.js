import SectionTitle from "../../components/SectionTitle";
import ExperienceSection from "./ExperienceSection";
import { EXPERIENCES } from "../../assets/constants";
import SelectableTitle from "./SelectableTitle";
import styled from "styled-components";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Separator = styled.div`
    background-color: ${props => props.theme.grey};
`

export default function Skills({theme}) {

    const [ scratcherRef, scratcherInView ] = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const [selectedTitle, setSelectedTitle] = useState(0);

    function setSelected(idx) {
        setSelectedTitle(idx);
    } 

    return  (
        <div className="skills" >
            <div className="skills-flex website-width">
                <SectionTitle inView={scratcherInView} title="A Few Skills"/>
                <div className="skills-horizontal">
                    <div ref={scratcherRef} className="skills-selection">
                        {EXPERIENCES.map((skill, idx) => {
                            return (
                                <SelectableTitle
                                    theme={theme}
                                    key={idx}
                                    id={idx}
                                    setSelected={setSelected}
                                    selected={selectedTitle}
                                    title={skill[1]}/>
                            );
                        })}
                    </div>
                    <Separator style={{height: `${EXPERIENCES[selectedTitle][0].length * 50}px`}} className="skills-separator"></Separator>
                    <div className="experiences">
                        {EXPERIENCES.map((skill, idx) => {
                            return (
                                <ExperienceSection
                                    key={idx}
                                    title={skill[1]}
                                    visible={selectedTitle === idx ? true : false}
                                    experiences={skill[0]}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}