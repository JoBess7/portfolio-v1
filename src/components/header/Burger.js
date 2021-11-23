import {useState} from 'react';
import styled from 'styled-components';
import { THEME_TOGGLE_SPEED } from '../../assets/constants';

const Arrow = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    background-color: ${props => props.theme.burger}
`

function Burger(props) {

    const [burgerOpened, setBurgerOpened] = useState(false);
    
    function burgerOnClick() {
        setBurgerOpened(!burgerOpened);
    }
    
    return (
        <div className="burger"
            onClick={() => {
                burgerOnClick();
                props.sendBurgerState();
            }}>

            <Arrow className={`arrow a1 ${burgerOpened ? "animArrow1" : "a1Back"}`}></Arrow>
            <Arrow className={`arrow a2 ${burgerOpened ? "animArrow2" : "a2Back"}`}></Arrow>
            <Arrow className={`arrow a3 ${burgerOpened ? "animArrow3" : "a3Back"}`}></Arrow>
        </div>
    );
}

export default Burger;