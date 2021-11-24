import Header from "./header/Header";
import styled from "styled-components";
import Main from "./main/Main";
import Second from "./second/Second";

import "../styles/appStyles.css";

/* Header styles */
import "../styles/burgerStyles.css";
import "../styles/headerStyles.css";
import "../styles/linkerStyles.css";
import "../styles/burgerStyles.css";
import "../styles/socialsStyles.css";
import "../styles/projectStyles.css";

/* Container styles */
import "../styles/mainStyles.css";
import "../styles/secondStyles.css"

/* Queries */
import "../styles/_queries.css";

import { THEME_TOGGLE_SPEED } from "../assets/constants";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    transition: all ${THEME_TOGGLE_SPEED}s;
    background: ${props => props.theme.pageBackground}
`

function Splash(props) {

    function changeTheme() {
        if(props.theme === 'light') props.setTheme('dark');
        else props.setTheme('light');
    }

    return (
        <Page>
            <Header changeTheme={changeTheme}/>
            <Main/>
            <Second/>
        </Page>
    );
}

export default Splash;
