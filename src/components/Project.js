import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Title = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.title};
`

const Description = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.projectBackground};
    box-shadow: rgba(0, 0, 0, 1) 0px 12px 25px -12px;
    color: ${props => props.theme.projectDescription};
`

const Ft = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.projectFt};
`

export default function Project({ project, idx }) {

    const imgPos = (idx % 2) === 0 ? {left: 0} : {right: 0};
    const textAlign = (idx % 2) === 0 ? "end" : "start";
    const horizontalAlign = (idx % 2) === 0 ? "flex-end" : "flex-start";
    const padding = (idx % 2) === 0 ? "30px 30px 30px 30px" : "30px 30px 30px 30px";
    const ftPadding = (idx % 2) === 0 ? "0 20px 0 0" : "0 0 0 20px";

    return(
        <div className="project" style={{justifyContent: horizontalAlign}}>
            <div style={imgPos} className="project-img-container">
                <a className="project-a-ref" href={project.link}>
                    <img style={{filter: `brightness(${project.brightness}%)`}} className="project-img" src={project.imageURL} alt=""></img>
                </a>
            </div>
            <div className="project-flex" style={{ alignItems: horizontalAlign}}>
                <Title className="project-name">{project.title}</Title>
                <Description className="project-desc" style={{textAlign: textAlign, padding: padding}}>{project.description}</Description>
                <div className="project-ft-flex">
                    {
                        project.featured.map((ft, idx) => {
                            return (
                                <Ft key={idx} style={{margin: ftPadding}} className="ft">{ft}</Ft>
                            );
                        })
                    }
                </div>
                <div className="project-link-flex">

                        {
                            project.link !== null 
                            ?
                            <a href={project.link}>
                            <FiExternalLink className={`project-icon`} style={{margin: ftPadding}} size={26}/>
                            </a>
                            :
                            <></>
                        }

                        {
                            project.github !== null
                            ?
                            <a href={project.github}>
                                <FiGithub className={`project-icon`} style={{margin: ftPadding}} size={24}/>
                            </a>
                            :
                            <></>
                        }

                    </div>
            </div>
        </div>
    );
}