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
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdError } from "react-icons/md";

const NoSubmit = styled.div`
    transition: all .2s;
    color: ${props => props.theme.title}
`;

const Submit = styled.div`
    transition: all .2s;
    color: ${props => props.theme.title}
`;

export default function Contact(props) {

    const [ scratcherRef, scratcherInView ] = useInView({
        threshold: .25,
        triggerOnce: true
    });

    // Input values
    const [inputs, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // To show different responses on submit
    const [noSubmitClasses, setNoSubmitClasses] = useState("opacity0");
    const [loaderClasses, setLoaderClasses] = useState("");
    const [formClasses, setFormClasses] = useState("");
    const [submitClasses, setSubmitClasses] = useState("");

    const modifyValue = (target, val) => {
        switch(target) {
            case "name":
                setInput({
                    name: val,
                    email: inputs.email,
                    subject: inputs.subject,
                    message: inputs.message
                });
                break;
            case "email":
                setInput({
                    name: inputs.name,
                    email: val,
                    subject: inputs.subject,
                    message: inputs.message
                });
                break;
            case "subject":
                setInput({
                    name: inputs.name,
                    email: inputs.email,
                    subject: val,
                    message: inputs.message
                });
                break;
            case "message":
                setInput({
                    name: inputs.name,
                    email: inputs.email,
                    subject: inputs.subject,
                    message: val
                });
                break;
            default:
                break;
        }
    };

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
            setLoaderClasses("loader-disappear");
            setSubmitClasses("opacity1");
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
                    <SectionTitle inView={scratcherInView} title="Contact Me"/>
                </div>
                <div className="character-flex">
                    <div className={`form-flex ${scratcherInView ? "" : "element-hidden"}`}>
                        <NoSubmit ref={scratcherRef} className={"unable-to-submit " + noSubmitClasses}>
                            <>
                            <div className="error-submit">
                                <span style={{paddingRight: "10px"}}>Oops! An error occured!</span>
                                <MdError size={50} fill="red"></MdError>  
                            </div>
                            
                            <div>If the error persists, you can reach me at <span className="email">jbey078@gmail.com</span> </div>
                            
                            </>
                        </NoSubmit>

                        <Submit className={"submitted " + submitClasses}>
                            <span>Message submitted. I'll get back to you soon!</span>
                            <IoIosCheckmarkCircle size={50} fill="rgb(0, 175, 0)"/>
                        </Submit>

                        <div style={{opacity: 0}} className={"loader-flex " + loaderClasses}>
                            <SimpleLoader/>
                        </div>

                        <form className={"form " + formClasses}>
                            <Input action={modifyValue} margintop={1} marginbottom={0} display="Name" what={"name"} id={"name"}/>
                            <Input action={modifyValue} margintop={3} marginbottom={0} display="Email" what={"email"} id={"email"}/>
                            <Input action={modifyValue} margintop={3} marginbottom={0} display="Subject" what={"subject"} id={"subject"}/>
                            <TextArea action={modifyValue} margintop={3} marginbottom={1} display="Message" what={"message"} id={"message"}/>
                            <Button action={handleSubmit} text="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

