import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, {useState} from "react";
import Burger from "./Burger";
import Linker from "./Linker";
import styled from "styled-components";
import { HEADER_WIDTH, DELTA_HEADER, THEME_TOGGLE_SPEED } from "../../assets/constants";
import { themeTogglerProperties } from "../../assets/themeTogglerProperties";

const HeaderFlex = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.headerBackground}
`
const HeaderContainer = styled.div`
    width: ${HEADER_WIDTH}%;
`

function Header(props) {

    const [canAnimate, setCanAnimate] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [burgerOpened, setBurgerOpened] = useState(false);
    const [headerClasses, setHeaderClasses] = useState("headerExpand");
    var didScroll = false;


    function animateButton() {
        setCanAnimate(false);
        setTimeout(function() {
            setCanAnimate(true);
        }, 400);
    }

    function sendBurgerState() {
        setBurgerOpened(!burgerOpened);
    }

    setInterval(() => {
        if(didScroll) {
            didScroll = false;
            onScrollEvent();
        }
    }, 250);

    var expanded = false;
    var ST;
    function onScrollEvent() {
        ST = window.scrollY;
        if(ST >= DELTA_HEADER && !expanded) {
            expanded = true;
            setHeaderClasses("headerReduce");
        } else if (ST < DELTA_HEADER && expanded) {
            expanded = false;
            setHeaderClasses("headerExpand");
        }
    }

    window.addEventListener('scroll', () => {
        if(!didScroll) didScroll = true;
    });

    return (
        <HeaderFlex className={`header ${headerClasses}`}>
            <HeaderContainer className="header-container">
                <div className="burger-flex">
                    <Burger sendBurgerState={sendBurgerState} theme={props.theme}/>
                    <Linker burgerOpened={burgerOpened}/>
                </div>

                <DarkModeSwitch
                    animationProperties={themeTogglerProperties}
                    className="darkModeToggler"
                    onChange={() => {
                        if(canAnimate) {
                            animateButton();
                            props.changeTheme();
                            setIsDarkMode(!isDarkMode);
                        }
                    }}
                    checked={isDarkMode}
                    size={30}
                    speed={5}
                />
            </HeaderContainer>
        </HeaderFlex>
    );
}


export default Header;