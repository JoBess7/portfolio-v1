import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const Title = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.title};
    text-shadow: 1px 2px ${props => props.theme.textShadow};
`

const Description = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.headerBackground};
    box-shadow: ${props => props.theme.headerShadow};
    color: ${props => props.theme.description};
`

const Ft = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.description};
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
                <a href={project.link}>
                    <img className="project-img" src={project.imageURL} alt=""></img>
                </a>
            </div>
            <div className="project-flex" style={{alignItems: horizontalAlign}}>
                <Title className="project-name">{project.title}</Title>
                <Description className="project-desc" style={{textAlign: textAlign, padding: padding}}>{project.description}</Description>
                <div className="project-ft-flex">
                    {
                        project.featured.map((ft) => {
                            return (
                                <Ft style={{padding: ftPadding}} className="">{ft}</Ft>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}