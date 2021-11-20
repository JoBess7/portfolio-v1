import DarkModeToggle from "react-dark-mode-toggle";
import React, {useState} from "react";
//import styled from 'styled-components';



function Header(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <header>
            <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
            />
        </header>
    );
}


export default Header;