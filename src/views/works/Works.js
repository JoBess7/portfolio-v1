import SectionTitle from "../../components/SectionTitle";
import { PROJECTS } from "../../assets/constants";
import Project from "../../components/Project";

export default function Works() {
    return (
        <div className="works">
            <div className="works-flex website-width">
                <SectionTitle title="Works"/>
                {PROJECTS.map((project, idx) => {
                    return(
                        <Project project={project} idx={idx}/>
                    );
                })}
            </div>
        </div>
    );
}