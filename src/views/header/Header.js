import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, {useEffect, useState} from "react";
import Burger from "./Burger";
import Linker from "./Linker";
import Heart from "../../components/Heart";
import styled from "styled-components";
import { HEADER_WIDTH, THEME_TOGGLE_SPEED } from "../../assets/constants";
import { themeTogglerProperties } from "../../assets/themeTogglerProperties";

const HeaderFlex = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.headerBackground};
    box-shadow: ${props => props.theme.headerShadow};
`
const HeaderContainer = styled.div`
    width: ${HEADER_WIDTH}%;
`

function Header({ theme, inView, changeTheme }) {

    const [canAnimate, setCanAnimate] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [burgerOpened, setBurgerOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => scrollEvent(e));

        return () => {
            window.removeEventListener('scroll', (e) => scrollEvent(e));
        }
    }, []);

    function scrollEvent() {
        // handle scroll
    }

    function animateButton() {
        setCanAnimate(false);
        setTimeout(function() {
            setCanAnimate(true);
        }, 400);
    }

    function sendBurgerState() {
        setBurgerOpened(!burgerOpened);
    }

    return (
        <HeaderFlex className={`header`}>
            <HeaderContainer className="header-container">
                <div className={inView ? "burger-flex header-show-comp" : "burger-flex header-hidden-comp"}>
                    <Burger sendBurgerState={sendBurgerState} theme={theme}/>
                    <Linker burgerOpened={burgerOpened}/>
                </div>

                <div className={inView ? "heart-flex header-show-comp" : "heart-flex header-hidden-comp"}>
                    <Heart theme={theme} />
                    <DarkModeSwitch
                        animationProperties={themeTogglerProperties}
                        className={"darkModeToggler"}
                        onChange={() => {
                            if(canAnimate) {
                                animateButton();
                                changeTheme();
                                setIsDarkMode(!isDarkMode);
                            }
                        }}
                        checked={isDarkMode}
                        size={30}
                        speed={5}
                    />
                    
                </div>
            </HeaderContainer>
        </HeaderFlex>
    );
}


export default Header;