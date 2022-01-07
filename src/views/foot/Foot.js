import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export default function Foot({ lineColor, emailTag, initialIconColor }) {

    return(
        <div className="foot">
            <div className="foot-flex">
                <div className="foot-icon-flex" >
                    <div style={{marginBottom: "40px"}} className="icon-container">
                        <a href="https://github.com/JoBess7">
                            <FiGithub 
                                size={26}
                                stroke={initialIconColor}
                                strokeWidth={2}/>
                        </a>
                    </div>

                    <div className="icon-container">
                        <a href="https://jobess7.com/">
                            <FiLinkedin 
                                size={26}
                                stroke={initialIconColor}
                                strokeWidth={1.6}/>
                        </a>
                    </div>

                    <div style={{backgroundColor: lineColor}} className="foot-line-1"></div>
                </div>

                <div className="foot-icon-flex" >
                    <a style={{color: emailTag}} className="emailTag" href="mailto:name@email.com">
                        jbey078@gmail.com
                    </a>

                    <div style={{backgroundColor: lineColor}} className="foot-line-2"></div>
                </div>
                
            </div>
        </div>
    );
}