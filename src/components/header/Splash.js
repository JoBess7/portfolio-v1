import Header from "./Header";
import styled from "styled-components";
import Main from "../main/Main";

/* Header styles */
import "../../styles/burgerStyles.css";
import "../../styles/headerStyles.css";
import "../../styles/linkerStyles.css";
import "../../styles/queries.css";

/* Container1 styles */
import "../../styles/mainStyles.css";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    transition: all 0.5s;
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
        </Page>
    );
}

export default Splash;
