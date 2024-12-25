import Pill, { PillType, PillVariant } from '../Pill';
import Section from './Section';

const Language = () => {
    return (
        <Section title="Language">
            <p className="pill-container">
                <Pill variant={PillVariant.Outline} type={PillType.Primary}>English</Pill>
                <Pill variant={PillVariant.Outline} type={PillType.Primary}>Hindi</Pill>
                <Pill variant={PillVariant.Outline} type={PillType.Primary}>Bengali</Pill>
                <Pill variant={PillVariant.Outline} type={PillType.Primary}>Marathi</Pill>
                <Pill variant={PillVariant.Dashed} type={PillType.Primary}>Jag lär mig svenska</Pill>
            </p>
        </Section>
    );
};

export default Language;