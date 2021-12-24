export default function ExperienceSection({title, visible, experiences}) {
    return(
        <div className="exp-main">
            {experiences.map((exp, idx) => {
                return(
                    <div key={idx} className="exp-flex">
                        <div className="exp-img-flex">
                            <div className="exp-name">{exp.name}</div>

                            <img 
                                src={exp.image}
                                alt=""
                                style={{width: exp.imageWidth, height: exp.imageHeight}}
                            />
                       </div>
                    </div>
                );
            })}
        </div>
    );   
}