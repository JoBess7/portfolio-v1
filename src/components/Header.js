import DarkModeToggle from "react-dark-mode-toggle";
import React, {useState} from "react";
import '../styles/headerStyles.css'
//import styled from 'styled-components';


var canAnimate = true;
// For some reason, couldn't use a hook here.
// Might want to check that out later.

function Header(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);


    function animateButton() {
        canAnimate = false;
        setTimeout(function() {
            canAnimate = true;
        }, 450);
    }


    return (
        <header>
            <DarkModeToggle
                className="darkModeToggler"
                onChange={() => {
                    console.log(canAnimate);
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
        </header>
    );
}


export default Header;