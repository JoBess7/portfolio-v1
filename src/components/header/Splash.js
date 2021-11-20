import Header from "./Header";
import styled from "styled-components";

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
            <Header theme={props.theme} changeTheme={changeTheme}/>
           
        </Page>
    );
}

export default Splash;
