import DarkModeToggle from "react-dark-mode-toggle";
import React, {useState} from "react";
import Burger from "./Burger";
import Linker from "./Linker";
import styled from "styled-components";

var canAnimate = true;
// For some reason, couldn't use a hook in the function Header().
// Might want to check that out later.

const HeaderFlex = styled.div`
    transition: all 0.5s;
    background-color: ${props => props.theme.headerBackground}
`

function Header(props) {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [burgerOpened, setBurgerOpened] = useState(false);


    function animateButton() {
        canAnimate = false;
        setTimeout(function() {
            canAnimate = true;
        }, 450);
    }

    function sendBurgerState() {
        setBurgerOpened(!burgerOpened);
    }

    return (
        <HeaderFlex className="header">
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
                speed={2}
            />
        </HeaderFlex>
    );
}


export default Header;