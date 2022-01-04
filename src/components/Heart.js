import { useEffect } from "react";
import { useReducer, useState } from "react";
import { THEME_TOGGLE_SPEED } from "../assets/constants";
import styled from "styled-components";

const LikeIndicator = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.generalized};
`

const initialState = {
    activated: false,
    heartClasses: "heart not-activated",
    strokeClasses: "heart-stroke initial-stroke"
}

function reducer(state, action) {
    switch(action.type) {
        case "activate":
            return {
                ...state, 
                heartClasses: "heart heart-activate",
                strokeClasses: "heart-stroke activated-stroke"
            }
        case "deactivate":
            return {
                ...state, 
                heartClasses: "heart heart-deactivate",
                strokeClasses: "heart-stroke"
            }
        default:
            break;
    }
}

export default function Heart(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [likeValues, setLikeValues] = useState({});
    const [theme, setTheme] = useState(props.theme);
    const [clickTimes, setClickTimes] = useState(0);
    const [canAnimate, setCanAnimate] = useState(true);
    
    function dispatcher() {
        if (clickTimes % 2 === 0 && canAnimate) {
            dispatch({type: "activate"});

        }
        else if (canAnimate) {
            dispatch({type: "deactivate"});
        }
    }

    function delayAnimation() {
        if(canAnimate) {
            setCanAnimate(false);
            setTimeout(() => {
                setCanAnimate(true);
            }, 3000);
        }
    }

    useEffect(() => {
        setLikeValues({
            likeRotateValue: Math.random() * 13,
            likeXPosition: Math.random() < 0.5 ? Math.random() * -15 : Math.random() * 1,
            likeYPosition: Math.random() * 15
        });
    }, []);

    useEffect(() => {
        setTheme(props.theme);
    }, [props.theme]);

    return(
        <div className={"heart-flex"} style={{position: "relative"}}>
            <LikeIndicator 
                style={{top: `${likeValues.likeYPosition}px`, left: `${likeValues.likeXPosition}px`, transform: `rotate(${likeValues.likeRotateValue}deg)`}}
                className={clickTimes % 2 === 0 ? "like-indicator" : "like-indicator like-indicator-show"}
                
                >
                {clickTimes % 2 === 0 ? "+" : "-"}1
            </LikeIndicator>

            <svg 
                onClick={() => {
                    dispatcher();
                    delayAnimation();
                    setClickTimes(clickTimes + 1);
                }}

                style={{marginRight: "15px", cursor: 'pointer', overflow: "visible"}}

                width="30" height="30" viewBox="0 0 196 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="196" height="159" fill=""/>
                <path className={state.heartClasses} id="small" fillRule="evenodd" clipRule="evenodd" d="M106.499 73.0009C108.5 75.0021 108.5 78.2468 106.499 80.248C106.31 80.4366 106.111 80.6075 105.902 80.7606L98.0882 87.7229L90.7611 81.5875C90.3665 81.3515 89.9929 81.0624 89.6511 80.7206C87.5386 78.608 87.4401 75.2813 89.4313 73.2902C91.4225 71.299 94.7492 71.3974 96.8618 73.51C97.3384 73.9866 97.7125 74.5251 97.9832 75.0961C98.222 74.3295 98.6449 73.608 99.252 73.0009C101.253 70.9997 104.498 70.9997 106.499 73.0009Z" fill="#FF0000"/>
                <g id="big">
                    <mask id="path-3-inside-1_0_1" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M180.498 14.6447C200.025 34.1709 200.025 65.8291 180.498 85.3553C178.657 87.1963 176.709 88.8638 174.672 90.3576L98.4325 158.289L26.9413 98.4261C23.091 96.123 19.4455 93.3022 16.1101 89.9669C-4.50241 69.3543 -5.46261 36.895 13.9655 17.4669C33.3936 -1.9612 65.8529 -1.001 86.4655 19.6116C91.1163 24.2624 94.7667 29.5164 97.4081 35.0877C99.7376 27.6084 103.864 20.5683 109.788 14.6447C129.314 -4.88155 160.972 -4.88155 180.498 14.6447Z"/>
                    </mask>
                    <path className={[state.strokeClasses, `${theme === "dark" ? "darky" : "lighty"}`].join(" ")} d="M180.498 14.6447L176.963 18.1802L176.963 18.1802L180.498 14.6447ZM174.672 90.3576L171.715 86.3261L171.523 86.4666L171.346 86.6245L174.672 90.3576ZM98.4325 158.289L95.2225 162.123L98.534 164.896L101.759 162.022L98.4325 158.289ZM26.9413 98.4261L30.1513 94.5926L29.8477 94.3384L29.508 94.1352L26.9413 98.4261ZM16.1101 89.9669L12.5746 93.5024L12.5746 93.5024L16.1101 89.9669ZM13.9655 17.4669L17.501 21.0024L17.501 21.0024L13.9655 17.4669ZM86.4655 19.6116L90.001 16.076L90.001 16.076L86.4655 19.6116ZM97.4081 35.0877L92.8901 37.2297L98.3747 48.7978L102.182 36.5745L97.4081 35.0877ZM109.788 14.6447L113.323 18.1802L113.323 18.1802L109.788 14.6447ZM184.034 88.8909C205.513 67.412 205.513 32.588 184.034 11.1091L176.963 18.1802C194.537 35.7538 194.537 64.2462 176.963 81.8198L184.034 88.8909ZM177.63 94.3892C179.87 92.7454 182.013 90.9123 184.034 88.8909L176.963 81.8198C175.302 83.4804 173.547 84.9821 171.715 86.3261L177.63 94.3892ZM171.346 86.6245L95.1062 154.556L101.759 162.022L177.999 94.0907L171.346 86.6245ZM101.643 154.456L30.1513 94.5926L23.7313 102.26L95.2225 162.123L101.643 154.456ZM12.5746 93.5024C16.2021 97.1299 20.1733 100.204 24.3746 102.717L29.508 94.1352C26.0086 92.042 22.6888 89.4745 19.6457 86.4314L12.5746 93.5024ZM10.4299 13.9314C-11.145 35.5063 -9.79053 71.1373 12.5746 93.5024L19.6457 86.4314C0.785701 67.5714 0.219751 38.2837 17.501 21.0024L10.4299 13.9314ZM90.001 16.076C67.6359 -6.28911 32.0049 -7.64356 10.4299 13.9314L17.501 21.0024C34.7823 3.72117 64.07 4.28712 82.9299 23.1471L90.001 16.076ZM101.926 32.9457C99.0413 26.8612 95.06 21.135 90.001 16.076L82.9299 23.1471C87.1727 27.3898 90.492 32.1715 92.8901 37.2297L101.926 32.9457ZM106.252 11.1091C99.7425 17.6189 95.1988 25.367 92.6343 33.6008L102.182 36.5745C104.276 29.8498 107.986 23.5177 113.323 18.1802L106.252 11.1091ZM184.034 11.1091C162.555 -10.3697 127.731 -10.3697 106.252 11.1091L113.323 18.1802C130.897 0.606603 159.389 0.606602 176.963 18.1802L184.034 11.1091Z" mask="url(#path-2-inside-2_0_1)"/>
                </g>
            </svg>
        </div>
    );
}