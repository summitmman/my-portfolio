import Pill, { PillVariant } from '../Pill';
import Section from './Section';
import { FaPersonSwimming, FaPersonWalking, FaPencil, FaBezierCurve, FaFilm, FaFaceSmile } from 'react-icons/fa6';

const Interests = () => {
    return (
        <Section title="Interests">
            <p className="pill-container">
                <Pill variant={PillVariant.Outline} icon={<FaPersonSwimming />}>Swimming</Pill>
                <Pill variant={PillVariant.Outline} icon={<FaPersonWalking />}>Trekking</Pill>
                <Pill variant={PillVariant.Outline} icon={<FaPencil />}>Sketching</Pill>
                <Pill variant={PillVariant.Outline} icon={<FaBezierCurve />}>Digital Art</Pill>
                <Pill icon={<FaFilm />} variant={PillVariant.Dashed}>Animation</Pill>
                <Pill icon={<FaFaceSmile />} variant={PillVariant.Dashed}>Sculpting</Pill>
            </p>
        </Section>
    );
};

export default Interests;