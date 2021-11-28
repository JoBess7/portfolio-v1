import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";
import FillingButton from "./FillingButton";

const Title = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.projectDescription}
`

const Description = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.projectDescription}
`

export default function ProjectContent(props) {

    // Destructure the prop.
    const {json} = props;

    // Get information on current project by destructuring.
    const {title, description, fillButtonColor, imageURL, link, github} = json;


    return (
        <div className="project-content">
            <div className="title-flex">
                <Title className="project-title">
                    {title}
                </Title>
            </div>

            <div className="desc-img-flex">
                <Description className="project-description">
                    {description}
                    
                </Description>
            
                <img className="project-img" alt="" src={imageURL}></img>
            </div>
        </div>
    );
}