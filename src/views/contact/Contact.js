import SectionTitle from "../../components/SectionTitle";
import mustache from "../../assets/images/mustache.png";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

export default function Contact(props) {
    return (
        <div className="contact">
            <div className="contact-flex website-width">
                <SectionTitle title="Contact Me"/>
                <div className="character-flex">

                    <div className="form-flex">
                        <form className="form">
                            <Input margintop={1} what={"Name"} id={"Name"}/>
                            <Input margintop={3} what={"Email"} id={"Email"}/>
                            <Input margintop={3} what={"Subject"} id={"Subject"}/>
                            <TextArea margintop={3} what={"Message"} id={"Message"}/>
                        </form>
                        <div className="form-rectangle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}