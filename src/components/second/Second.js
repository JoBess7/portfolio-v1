import Project from "./Project";
import { useInView } from "react-intersection-observer"; 

export default function Second() {

    var index = -1;
    const { ref1, inView1 } = useInView({
        threshold: 0.5
    });

    const { ref2, inView2 } = useInView({
        threshold: 0.5
    });

    const { ref3, inView3 } = useInView({
        threshold: 0.5
    });




    return  (
        <div
            className="sectionTwo"
            ref={ref1}
            >
                <Project 
                    index={++index} 
                    last={false}
                />
                <Project 
                    index={++index} 
                    last={false}
                />
                <Project 
                    index={++index} 
                    last={true}
                />
        </div>
    );
}