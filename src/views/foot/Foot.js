import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { useState } from "react";

export default function Foot({ initialIconColor, animatedIconColor }) {

    const [githubClasses, setGithubClasses] = useState("icon icon-anim-down");
    const [githubIconColor, setGithubIconColor] = useState(initialIconColor);

    const [LIIClasses, setLIIClasses] = useState("icon icon-anim-down");
    const [LIIconColor, setLIIconColor] = useState(initialIconColor);

    return(
        <div className="foot">
            <div className="foot-flex">
                <div className="foot-icon-flex" >
                    <div className="icon-container"
                        onMouseEnter={() => {setGithubClasses("icon icon-anim-up"); setGithubIconColor(animatedIconColor);}}
                        onMouseOut={() => {setGithubClasses("icon icon-anim-down"); setGithubIconColor(initialIconColor);}}>
                        <a href="">
                            <FiGithub 
                            className={githubClasses}
                            size={23}
                            stroke={githubIconColor}
                            strokeWidth={1.7}/>
                        </a>
                    </div>

                    <div className="icon-container"
                        onMouseEnter={() => {setLIIClasses("icon icon-anim-up"); setLIIconColor(animatedIconColor);}}
                        onMouseOut={() => {setLIIClasses("icon icon-anim-down"); setLIIconColor(initialIconColor);}}>
                        <a href="">
                            <FiLinkedin 
                                className={LIIClasses}
                                size={23}
                                stroke={LIIconColor}
                                strokeWidth={1.3}/>
                        </a>
                    </div>

                    <div className="foot-line"></div>
                </div>
                
            </div>
        </div>
    );
}