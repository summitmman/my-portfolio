import Pill, { PillVariant } from '../Pill';
import Section from './Section';
import { FaPersonSwimming, FaPersonWalking, FaPencil, FaBezierCurve, FaFilm, FaFaceSmile } from 'react-icons/fa6';

const Interests = () => {
    return (
        <Section title="Interests">
            <p className="pill-container">
                <Pill icon={<FaPersonSwimming />}>Swimming</Pill>
                <Pill icon={<FaPersonWalking />}>Trekking</Pill>
                <Pill icon={<FaPencil />}>Sketching</Pill>
                <Pill icon={<FaBezierCurve />}>Digital Art</Pill>
                <Pill icon={<FaFilm />} variant={PillVariant.Secondary}>Animation</Pill>
                <Pill icon={<FaFaceSmile />} variant={PillVariant.Secondary}>Sculpting</Pill>
            </p>
        </Section>
    );
};

export default Interests;