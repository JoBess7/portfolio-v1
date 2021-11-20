import Header from "./Header";
import {useState} from 'react';
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    transition: all 0.5s;
    background: ${props => props.theme.pageBackground}
`

function Splash(props) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    function changeTheme() {
        if(props.theme === 'light') props.setTheme('dark');
        else props.setTheme('light');

        setIsDarkMode(!isDarkMode);
    }

    return (
        <Page>
            <Header theme={props.theme}/>
            <DarkModeToggle
                onChange={changeTheme}
                checked={isDarkMode}
                size={80}
            />
 
        </Page>
    );
}

export default Splash;
