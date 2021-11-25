import React, { useLayoutEffect, useState } from 'react';
import Project from "./Project";
import { PROJECTS } from '../../assets/constants';

function GetWindowSize() {
    const [size, setSize] = useState([0, 0]);


    useLayoutEffect(() => {
        function updateSize() {

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            
            setSize([screenWidth, screenHeight]);
        }

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;

}

export default function Second() {

    const options = {
        max: 7,
        perspective: 1000,
        scale: 1.05,
      }

    const defaultStyles = {
        borderRadius: "14px 14px 14px 14px",
        marginTop: "40px",
    }

    return  (
        <div className="works-section">
            <div className="works-container">
                {PROJECTS.map((project, index) => {
                    return (
                        <Project 
                        json={PROJECTS[index]}
                        style={
                            defaultStyles
                        }
                        options={options}
                        />
                    );
                })};
            </div>
        </div>
    );
}