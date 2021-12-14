import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, {useState} from "react";
import Burger from "./Burger";
import Linker from "./Linker";
import Heart from "../../components/Heart";
import styled from "styled-components";
import { HEADER_WIDTH, DELTA_HEADER, THEME_TOGGLE_SPEED } from "../../assets/constants";
import { themeTogglerProperties } from "../../assets/themeTogglerProperties";

const HeaderFlex = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.pageBackground}
`
const HeaderContainer = styled.div`
    width: ${HEADER_WIDTH}%;
`

function Header(props) {

    const {theme} = props;

    const [canAnimate, setCanAnimate] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [burgerOpened, setBurgerOpened] = useState(false);
    const [headerClasses, setHeaderClasses] = useState("headerExpand");
    var didScroll = false;


    function animateButton() {
        setCanAnimate(false);
        setTimeout(function() {
            setCanAnimate(true);
        }, 400);
    }

    function sendBurgerState() {
        setBurgerOpened(!burgerOpened);
    }

    //setInterval(() => {
    //    if(didScroll) {
    //        didScroll = false;
    //        onScrollEvent();
    //    }
    //}, 250);

    var expanded = false;
    var ST;
    function onScrollEvent() {
        ST = window.scrollY;
        if(ST >= DELTA_HEADER && !expanded) {
            expanded = true;
            setHeaderClasses("headerReduce");
        } else if (ST < DELTA_HEADER && expanded) {
            expanded = false;
            setHeaderClasses("headerExpand");
        }
    }

    window.addEventListener('scroll', () => {
        if(!didScroll) didScroll = true;
    });

    return (
        <HeaderFlex className={`header ${headerClasses}`}>
            <HeaderContainer className="header-container">
                <div className={props.inView ? "burger-flex header-show-comp" : "burger-flex header-hidden-comp"}>
                    <Burger sendBurgerState={sendBurgerState} theme={props.theme}/>
                    <Linker burgerOpened={burgerOpened}/>
                </div>

                <div className={props.inView ? "heart-flex header-show-comp" : "heart-flex header-hidden-comp"}>
                    <Heart theme={theme} />
                    <DarkModeSwitch
                        animationProperties={themeTogglerProperties}
                        className={"darkModeToggler"}
                        onChange={() => {
                            if(canAnimate) {
                                animateButton();
                                props.changeTheme();
                                setIsDarkMode(!isDarkMode);
                            }
                        }}
                        checked={isDarkMode}
                        size={30}
                        speed={5}
                    />
                    
                </div>
            </HeaderContainer>
        </HeaderFlex>
    );
}


export default Header;