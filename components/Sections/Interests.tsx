import Pill, { PillVariant, PillType } from '../Pill';
import Section from './Section';
import { FaPersonSwimming, FaPersonWalking, FaPencil, FaBezierCurve, FaFilm, FaFaceSmile } from 'react-icons/fa6';

const Interests = () => {
    return (
        <Section title="Interests">
            <p className="pill-container">
                <Pill variant={PillVariant.Outline} type={PillType.Primary} icon={<FaPersonSwimming />}>Swimming</Pill>
                <Pill variant={PillVariant.Outline} type={PillType.Primary} icon={<FaPersonWalking />}>Trekking</Pill>
                <Pill variant={PillVariant.Outline} type={PillType.Primary} icon={<FaPencil />}>Sketching</Pill>
                <Pill variant={PillVariant.Outline} type={PillType.Primary} icon={<FaBezierCurve />}>Digital Art</Pill>
                <Pill icon={<FaFilm />} type={PillType.Primary} variant={PillVariant.Dashed}>Animation</Pill>
                <Pill icon={<FaFaceSmile />} type={PillType.Primary} variant={PillVariant.Dashed}>Sculpting</Pill>
            </p>
        </Section>
    );
};

export default Interests;