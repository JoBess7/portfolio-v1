import React from "react";
import octocat from "../../assets/octocat.png";

export default function Socials(props) {
    return (
        <div className="socials-flex">
            <img
                alt=""
                className="socials-github"
                src={octocat}
            />
        </div>
    );
}