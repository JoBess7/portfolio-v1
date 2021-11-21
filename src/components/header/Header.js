import DarkModeToggle from "react-dark-mode-toggle";
import React, {useState} from "react";
import Burger from "./Burger";
import Linker from "./Linker";
import styled from "styled-components";
import { WEBSITE_WIDTH, DELTA_HEADER } from "../../assets/constants";

var canAnimate = true;
// For some reason, couldn't use a hook in the function Header().
// Might want to check that out later.


const HeaderFlex = styled.div`
    transition: all 0.5s;
    background-color: ${props => props.theme.headerBackground}
`
const HeaderContainer = styled.div`
    width: ${WEBSITE_WIDTH}%;
`

function Header(props) {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [burgerOpened, setBurgerOpened] = useState(false);
    const [headerClasses, setHeaderClasses] = useState("headerExpand");
    var didScroll = false;


    function animateButton() {
        canAnimate = false;
        setTimeout(function() {
            canAnimate = true;
        }, 450);
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

                <DarkModeToggle
                    className="darkModeToggler"
                    onChange={() => {
                        if(canAnimate) {
                            animateButton();
                            props.changeTheme();
                            setIsDarkMode(!isDarkMode);
                        }
                    }}
                    checked={isDarkMode}
                    size={70}
                    speed={2.6}
                />
            </HeaderContainer>
        </HeaderFlex>
    );
}


export default Header;