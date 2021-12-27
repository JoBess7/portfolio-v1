import SectionTitle from "../../components/SectionTitle";
import mustache from "../../assets/images/mustache.png";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from '../../components/Button'

export default function Contact(props) {
    return (
        <div className="contact">
            <div className="contact-flex website-width">
                <div className="contact-title-flex">
                    <SectionTitle title="Contact Me"/>
                </div>
                <div className="character-flex">
                    <div className="form-flex">
                        <form className="form">
                            <Input margintop={1} marginbottom={0} what={"Name"} id={"Name"}/>
                            <Input margintop={3} marginbottom={0} what={"Email"} id={"Email"}/>
                            <Input margintop={3} marginbottom={0} what={"Subject"} id={"Subject"}/>
                            <TextArea margintop={3} marginbottom={1} what={"Message"} id={"Message"}/>
                            <Button style={{borderRadius: "10px"}} text="send"/>
                        </form>
                        <div className="character-box">
                            <div className="character">
                                <div className="hat">
                                    <div className="hat-top"></div>
                                    <div className="hat-mid hat-mid1"></div>
                                    <div className="hat-mid hat-mid2"></div>
                                    <div className="hat-mid hat-mid3"></div>
                                </div>
                                <div className="head">
                                    <div className="triangle triangle-right"></div>
                                    <div className="triangle triangle-left"></div>
                                    <div className="ear ear-right"></div>
                                    <div className="ear ear-left"></div>
                                    <div className="head-main"></div>
                                    <div className="mouth">
                                        <div className="mouth-shine"></div>
                                    </div>
                                    <img alt="" src={mustache} className="mustache"></img>
                                </div>
                                <div className="neck">
                                    <div className="neck-skin">
                                        <div className="neck-left"></div>
                                        <div className="neck-right"></div>
                                    </div>
                                </div>
                                <div className="shirt">
                                    <div className="shirt-top">
                                        <div className="shirt-top-right"></div>
                                        <div className="shirt-top-left"></div>
                                    </div>

                                    <div className="shirt-bottom">
                                    <div className="shirt-bottom-right"></div>
                                        <div className="shirt-bottom-left"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

