import SectionTitle from "../../components/SectionTitle";
import { PROJECTS } from "../../assets/constants";
import Project from "../../components/Project";
import { useInView } from "react-intersection-observer";

export default function Works() {

    const [ scratcherRef, scratcherInView ] = useInView({
        threshold: .01,
        triggerOnce: true
    });

    return (
        <div className="works">
            <div className="works-flex website-width">
                <SectionTitle inView={scratcherInView} class2={"project-works-title"} title="Works"/>
                <div ref={scratcherRef} className={`transit ${scratcherInView ? "" : "element-hidden"}`}>
                {

                    PROJECTS.map((project, idx) => {
                        return(
                            <Project project={project} key={idx} idx={idx}/>
                        );
                    })
                
                }
                </div>
            </div>
        </div>
    );
}