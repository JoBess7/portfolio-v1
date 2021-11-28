import {FiGithub} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";
import { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import heart from 'react-useanimations/lib/heart';
export default function Foot(props) {

    const {theme, initialIconColor, animatedIconColor} = props;

    const [githubClasses, setGithubClasses] = useState("icon icon-anim-down");
    const [githubIconColor, setGithubIconColor] = useState(initialIconColor);

    const [LIIClasses, setLIIClasses] = useState("icon icon-anim-down");
    const [LIIconColor, setLIIconColor] = useState(initialIconColor);

    return(
        <div className="foot">
            <div className="foot-flex">
                <div className="foot-icon-flex" >
                    <div className="icon-container"
                        onMouseEnter={() => {
                            setGithubClasses("icon icon-anim-up");
                            setGithubIconColor(animatedIconColor);
                        }}
                        onMouseOut={() => {
                            setGithubClasses("icon icon-anim-down")
                            setGithubIconColor(initialIconColor);
                        }}>
                        <FiGithub 
                            className={githubClasses}
                            size={23}
                            stroke={githubIconColor}
                            strokeWidth={1.7}/>
                    </div>

                    <div className="icon-container"
                        onMouseEnter={() => {
                            setLIIClasses("icon icon-anim-up");
                            setLIIconColor(animatedIconColor);
                        }}
                        onMouseOut={() => {
                            setLIIClasses("icon icon-anim-down")
                            setLIIconColor(initialIconColor);
                        }}>
                        <FiLinkedin 
                            className={LIIClasses}
                            size={23}
                            stroke={LIIconColor}
                            strokeWidth={1.3}/>
                    </div>

                    <div className="foot-line"></div>
                </div>
                
            </div>
        </div>
    );
}