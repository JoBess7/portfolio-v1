import { useInView } from "react-intersection-observer";

export default function AboutText(props) {

    // Called whenever the user scrolls 
    function eventMainIntersected(inView, entry) {

    }

    const { ref, inView } = useInView({
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