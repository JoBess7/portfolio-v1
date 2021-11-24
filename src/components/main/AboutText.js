import { useInView } from "react-intersection-observer";
import { useState } from "react/cjs/react.development";


export default function AboutText(props) {

    // Called whenever the user scrolls 
    function eventMainIntersected(inView, entry) {

    }

    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    }) 

    return(
        <div 
            ref={ref}
            onChange={(inView, entry) => {
                eventMainIntersected(inView, entry);
            }}
            className={inView ? "about-text textUp" : "about-text textDown"}
        
        >
        </div>
    );
}