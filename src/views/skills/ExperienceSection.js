export default function ExperienceSection({title, visible, experiences}) {
    return(
        <div className="exp-main">
            {experiences.map((exp, idx) => {
                return(
                    <div key={idx} className={`exp-flex ${visible ? "opacity1" : "opacity0"}`}>

                        <div className="exp-img-container">
                            <img 
                                src={exp.image}
                                alt=""
                                style={{width: exp.imageWidth, height: exp.imageHeight}}
                            />
                        </div>

                        <div className="exp-name">
                            <div style={{width: exp.level + "%"}} className="exp-lvl-container">
                                <div style={{transition: "width " + exp.level/100 + "s ease-in-out"}} className={`exp-lvl ${visible ? "max-lvl" : ""}`}></div>
                            </div>
                            <div style={{position: "relative"}}>{exp.name}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );   
}