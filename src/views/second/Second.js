import SectionTitle from "../../components/SectionTitle";
import { ABOUT } from "../../assets/constants";

export default function Second(props) {

    return  (
        <div className="about">
            <div className="about-flex website-width">
                <SectionTitle title="About"></SectionTitle>
                <div className="about-hori-flex">
                    <div className="about-description">
                        sfd sf ds fs fnnsdi nasdn asin diajd jasp d padp jsadjqwkeq ajsd jasd jasd  ajd pasjpd jasip djasjija pi d
                    </div>

                    <img src={ABOUT.image} className="about-img">

                    </img>
                </div>
            </div>
        </div>
    );
}