import styled from "styled-components";
import Header from "./header/Header";
import Main from "./main/Main";
import About from './about/About'
import Foot from "./foot/Foot";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Works from "./works/Works";
import RepoInfo from "./repoInfo/RepoInfo";
import { useInView } from "react-intersection-observer";

import "../styles/reusables.css"
import "../styles/appStyles.css";

/* Header styles */
import "../styles/headerStyles.css";

/* Container styles */
import "../styles/mainStyles.css";
import "../styles/aboutStyles.css";
import "../styles/skillsStyles.css";
import "../styles/contactStyles.css"
import "../styles/worksStyles.css";

/* Queries */
import "../styles/_queries.css";

/* Foot & Footer */
import "../styles/foot.css";

import { THEME_TOGGLE_SPEED } from "../assets/constants";

const Page = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    transition: all ${THEME_TOGGLE_SPEED}s;
    background: ${props => props.theme.pageBackground};
`

export default function Splash(props) {

    const {theme, pageDisplay} = props;

    const [ ref, inView ] = useInView({
        threshold: 0,
    });

    function changeTheme() {
        if(theme === 'light') props.setTheme('dark');
        else props.setTheme('light');
    }

    return (
        <Page style={{display: `${pageDisplay ? "flex" : "none"}`}}>

            <div ref={ref} className="initial-trigger"></div>

            <Header
                inView={inView}
                theme={theme}
                changeTheme={changeTheme}
            />

            <Main
                inView={inView}
            />

            <About/>
            
            <Foot
                // Key forces a rerender
                key={props.theme}
                theme={theme}
                initialIconColor={props.theme === "dark" ? "rgba(189, 199, 199, 1)" : "rgba(103, 103, 103, 1)"}
                emailTag={props.theme === "dark" ? "rgba(189, 199, 199, 1)" : "rgba(0, 0, 0, 1)"}
                lineColor={props.theme === "dark" ? "rgba(189, 199, 199, 1)" : "rgba(103, 103, 103, 1)"}
            />

            <Skills
                theme={theme}
            />

            <Works/>

            <Contact/>

            <RepoInfo/>
        </Page>
    );
}