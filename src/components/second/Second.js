import { useRef, useEffect, useState } from "react";


function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if(ref) {
            observer.observe(ref);
        }

        return () => {
            if(ref) {
                observer.unobserve(ref);
            }
        };

    }, [ref, options]);

    return [setRef, visible];

}

export default function Second() {
    const [setRef, visible] = useOnScreen({
        threshold: 0.5
    })

    return  (
        <div 
            className="sectionTwo"
            ref={setRef}
            style={{backgroundColor: visible ? "#23cebd" : "#efefef"}}>

        </div>
    );
}