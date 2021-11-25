import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";
import FillingButton from "./FillingButton";

const Title = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.headerLink}
`

const Description = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.projectDescription}
`

export default function ProjectContent(props) {

    // Destructure the props.
    const {json} = props;

    // Get information on current project.
    const title = json.title;
    const description = json.description;
    const fillButtonColor = json.fillUp;
    const imageURL = json.imageURL;

    return (
        <div className="project-content">
            <div className="title-flex">
                <Title className="project-title">
                    {title}
                </Title>

                <FillingButton
                    fillColor={fillButtonColor}/>
            </div>

            <Description className="project-description">
                {description}
            </Description>

            <img className="project-img" alt="" src={require("../../assets/images/igem_logo.svg")}></img>
        </div>
    );
}