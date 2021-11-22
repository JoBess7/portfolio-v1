import "../../styles/socials.css";
import React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

export default function Socials(props) {
    return (
        <div className="socials-flex">
            <UseAnimations
                animation={github}
                strokeColor={props.theme === "light" ? "black" : "white"}
                size={33}
                speed={.4}
                loop={true}
                autoplay={true}
                wrapperStyle={{cursor: "pointer", marginRight: "10px"}}
            />
        </div>
    );
}