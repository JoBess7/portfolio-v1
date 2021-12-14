import { THEME_TOGGLE_SPEED } from "../../assets/constants";
import styled from "styled-components";
import Button from "../../components/Button";

const Name = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.lightBlue};
`
const PersonalDesc = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.grey};
`
const Separator = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.grey};
    width: 160px;
    height: 1px;
    margin: 20px 0 35px 0;
`

export default function Main(props) {

    return(
        <div className="main">
            <div className="keeper"></div>
            <div className={props.inView ? "website-width main-flex main-up" : "website-width main-flex main-down"}>
                <Name className="name">Jonathan Bessette</Name>
                <Separator></Separator>
                <PersonalDesc className="main-desc">COMPUTER SCIENCE STUDENT</PersonalDesc>
                <div className="button-flex">
                    <Button text="Work"></Button>
                    <Button text="About"></Button>
                    <Button text="Contact"></Button>
                </div>
            </div>
        </div>
    );

}