import { THEME_TOGGLE_SPEED } from "../../assets/constants";
import styled from "styled-components";
import Button from "../../components/Button";

const NameIs = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.blue}
`
const Name = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.lightBlue}
`
const PersonalDesc = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.grey}
`

export default function Main(props) {

    return(
        <div className="main">
            <div className="keeper"></div>
            <div className={props.inView ? "main-flex main-up" : "main-flex main-down"}>
                <NameIs className="my-name-is">Hi, my name is</NameIs>
                <Name className="name">Jonathan Bessette</Name>
                <PersonalDesc className="main-desc">I'm a computer science student at Laval University. Currently, I'm focused on learning web development and relational database models.</PersonalDesc>
                <Button text="Resume"/>
            </div>
        </div>
    );

}