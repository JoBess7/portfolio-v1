import { THEME_TOGGLE_SPEED } from "../../assets/constants";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Name = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.title};
    text-shadow: ${props => props.theme.shadowDimensions} ${props => props.theme.textShadow};
`
const PersonalDesc = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.description};
    text-shadow: 0px 0px #B3C4D5;
`
const Separator = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.grey};
    width: 160px;
    height: 1px;
    margin: 30px 0 30px 0;
`
const Arrow = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    border-bottom: 1px solid ${props => props.theme.generalized};
    border-right: 1px solid ${props => props.theme.generalized};
`

export default function Main(props) {

    const [ refScroller, inViewScroller ] = useInView({
        threshold: 1,
    });

    return(
        <div className="main">
            <div className="keeper"></div>
            <div ref={refScroller} className={props.inView ? "website-width main-flex main-up" : "website-width main-flex main-down"}>
                <Name className="name">Jonathan Bessette</Name>
                <Separator></Separator>
                <PersonalDesc className="main-desc">computer science student</PersonalDesc>
            </div>
            <div className={inViewScroller ? "arrow-scroll visible-scroller" : "arrow-scroll invisible-scroller"}>
                <Arrow className="square square-top"></Arrow>
                <Arrow className="square square-mid"></Arrow>
                <Arrow className="square square-bottom"></Arrow>
            </div>
        </div>
    );

}