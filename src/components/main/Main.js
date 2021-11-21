import styled from "styled-components";


const MIN_CONTAINER1_HEIGHT = 700;

function getResponsiveElement(elem) {

    switch(elem) {
        case("height"):
            let windowHeight = window.innerHeight;
            if(windowHeight >= MIN_CONTAINER1_HEIGHT) return windowHeight + "px";
            else return MIN_CONTAINER1_HEIGHT + "px";

        default:
            console.log("Element not found: " + elem);
            break;
    }
}

const Container1Main = styled.div`
    width: 100vw;
    height: ${getResponsiveElement("height")};
`

function Main() {
    return(
        <Container1Main className="main-container1">
            dd
        </Container1Main>

    );
}

export default Main;