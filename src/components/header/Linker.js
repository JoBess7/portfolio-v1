import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";

const Link = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.headerLink}
`

function Linker(props) {

    const burgerOpened = props.burgerOpened;

    var firstLinkStyle = {
        animationDelay: `${burgerOpened ? ".05s" : ".12s"}`
    };
    var secndLinkStyle = {
        animationDelay: `${burgerOpened ? ".10s" : ".06s"}`
    };
    var thirdLinkStyle = {
        animationDelay: `${burgerOpened ? ".20s" : ".02s"}`
    };
    
    return (
        <div className="linker-flex">
            <Link style={firstLinkStyle} className={`link ${burgerOpened ? "linkAppear" : "linkDisappear"}`}>About</Link>
            <Link style={secndLinkStyle} className={`link ${burgerOpened ? "linkAppear" : "linkDisappear"}`}>Resume</Link>
            <Link style={thirdLinkStyle} className={`link ${burgerOpened ? "linkAppear" : "linkDisappear"}`}>Projects</Link> 
        </div>
    );
}

export default Linker;