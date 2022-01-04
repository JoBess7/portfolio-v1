import SectionTitle from "../../components/SectionTitle";
import { IMAGES } from "../../assets/constants";

export default function Works() {
    return (
        <div className="works">
            <div className="works-flex website-width">
                <SectionTitle title="Works"/>
                <img src={IMAGES[15]} alt=""></img>
            </div>
        </div>
    );
}