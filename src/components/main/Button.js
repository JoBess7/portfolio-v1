import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";

const AnimatedButton = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    border: 1px solid ${props => props.theme.burger};
`
const ButtonText = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.burger};
`

export default function Button(props) {

    const {action, text} = props;
    
    return (
        <AnimatedButton 
        className="button"
        onClick={action}>
            <ButtonText 
            className="text-button">
                {text}
            </ButtonText>
        </AnimatedButton>
    );
}