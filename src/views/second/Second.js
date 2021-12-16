import SectionTitle from "../../components/SectionTitle";
import { ABOUT } from "../../assets/constants";
import LazyLoader from "../../components/LazyLoader";
import styled from "styled-components";
import { THEME_TOGGLE_SPEED } from "../../assets/constants";

const AboutDescription = styled.div`
    transition: all ${THEME_TOGGLE_SPEED}s;
    color: ${props => props.theme.description};
`

export default function Second(props) {

    return  (
        <div className="about">
            <div className="about-flex website-width">
                <SectionTitle title="About"/>
                <div className="about-hori-flex">
                    <AboutDescription className="about-description">
                        {ABOUT.description}
                    </AboutDescription>

                    <LazyLoader observable={true} intersectRatio={-1} className={"about-img"} src={ABOUT.image} threshold={[0, 0.5, 1]} />

                </div>
            </div>
        </div>
    );
}