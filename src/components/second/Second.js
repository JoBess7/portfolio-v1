import React, { useLayoutEffect, useState } from 'react';
import Project from "./Project";

function GetWindowSize() {
    const [size, setSize] = useState([0, 0]);


    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;

}

export default function Second() {

    const [projectWidth, projectHeight] = GetWindowSize();

    const options = {
        max: 10,
        perspective: 1000,
        scale: 1.05,
      }

    const defaultStyles = {
        borderRadius: "14px 14px 14px 14px",
        marginTop: "100px",
        height: projectHeight/2,
        width: projectWidth/2,
        cursor: "pointer",
    }

    return  (
        <div className="works-section">
                <Project 
                    style={
                        defaultStyles
                    }
                    options={options}
                />
                <Project 
                    style={
                        defaultStyles
                    }
                />
                <Project
                    style={
                        Object.assign(
                            defaultStyles, 
                            {marginBottom: "100px"}
                        )
                    }
                />
        </div>
    );
}