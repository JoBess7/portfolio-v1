import SectionTitle from "../../components/SectionTitle";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from '../../components/Button'
import { EMAILJS } from "../../assets/constants";
import emailjs from "emailjs-com";
import SimpleLoader from "../../components/SimpleLoader";
import { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const NoSubmit = styled.div`
    transition: all .2s;
    color: ${props => props.theme.title}
`

export default function Contact(props) {

    const [ scratcherRef, scratcherInView ] = useInView({
        threshold: 0,
        triggerOnce: true
    });


    const [noSubmitClasses, setNoSubmitClasses] = useState("opacity0");
    const [loaderClasses, setLoaderClasses] = useState("");
    const [formClasses, setFormClasses] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoaderClasses("loader-appear");
        setFormClasses("form-disappear");

        emailjs.sendForm(
            EMAILJS.SERVICE_ID, 
            EMAILJS.TEMPLATE_ID, 
            document.getElementsByClassName("form")[0], 
            EMAILJS.USER_ID)
        .then((result) => {
            console.log(result);
            setLoaderClasses("loader-disappear");
            setFormClasses("form-appear");
        },
        (error) => {
            setLoaderClasses("loader-disappear");
            setNoSubmitClasses("opacity1");
        })
        .catch((error) => {
            console.log("O no! An error occured!")
        });
    };

    return (
        <div className="contact">
            <div className="contact-flex website-width">
                <div className="contact-title-flex">
                    <SectionTitle title="Contact Me"/>
                </div>
                <div className="character-flex">
                    <div className={`form-flex ${scratcherInView ? "" : "element-hidden"}`}>
                        <NoSubmit ref={scratcherRef} className={"unable-to-submit " + noSubmitClasses}>
                            <div className="error-submit">
                                Oops! An <span className="error">error</span> occured! <br /> <br />
                                If the problem persists, you can reach me at <span className="email">jbey078@gmail.com</span>.
                            </div>   
                        </NoSubmit>

                        <div style={{opacity: 0}} className={"loader-flex " + loaderClasses}>
                            <SimpleLoader/>
                        </div>

                        <form className={"form " + formClasses}>
                            <Input margintop={1} marginbottom={0} display="Name" what={"fullname"} id={"fullname"}/>
                            <Input margintop={3} marginbottom={0} display="Email" what={"email"} id={"email"}/>
                            <Input margintop={3} marginbottom={0} display="Subject" what={"subject"} id={"subject"}/>
                            <TextArea margintop={3} marginbottom={1} display="Message" what={"message"} id={"message"}/>
                            <Button action={handleSubmit} text="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

