import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../assets/constants";

const AnimatedButton = styled.button`
    transition: all .2s;
    background-color: ${props => props.theme.buttonText};
    border: 1px solid ${props => props.theme.generalized};
    box-shadow: 5px 7px 20px ${props => props.theme.buttonShadow};
`;

const ButtonText = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.burger};
`;

export default function Button({type, action, text, style}) {

    return (
        <AnimatedButton
        typeof=""
        type={type}
        style={style}
        className="button"
        onClick={(event) => action(event)}>
            <ButtonText 
            className="text-button">
                {text}
            </ButtonText>
        </AnimatedButton>
    );
}