import styled from "styled-components";
import Header from "./header/Header";
import Main from "./main/Main";
import About from './about/About'
import Foot from "./foot/Foot";
import { useInView } from "react-intersection-observer";

import "../styles/reusables.css"
import "../styles/appStyles.css";

/* Header styles */
import "../styles/headerStyles.css";

/* Container styles */
import "../styles/mainStyles.css";
import "../styles/aboutStyles.css";
import "../styles/skillsStyles.css";

/* Queries */
import "../styles/_queries.css";

/* Foot & Footer */
import "../styles/foot.css";

import { THEME_TOGGLE_SPEED } from "../assets/constants";
import Skills from "./skills/Skills";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    transition: all ${THEME_TOGGLE_SPEED}s;
    background: ${props => props.theme.pageBackground}
`

export default function Splash(props) {

    const {theme} = props;

    const [ ref, inView ] = useInView({
        threshold: 0,
    });

    function changeTheme() {
        if(theme === 'light') props.setTheme('dark');
        else props.setTheme('light');
    }

    return (
        <Page>

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
                // Key forces a rerender of child, in this case Foot.
                key={props.theme}
                theme={theme}
                initialIconColor={"grey"}
                animatedIconColor={"rgb(41, 116, 230)"}
            />

            <Skills
                theme={theme}
            />

        </Page>
    );
}