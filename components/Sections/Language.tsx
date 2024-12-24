import Pill, { PillVariant } from '../Pill';
import Section from './Section';

const Language = () => {
    return (
        <Section title="Language">
            <p className="pill-container">
                <Pill variant={PillVariant.Outline}>English</Pill>
                <Pill variant={PillVariant.Outline}>Hindi</Pill>
                <Pill variant={PillVariant.Outline}>Bengali</Pill>
                <Pill variant={PillVariant.Outline}>Marathi</Pill>
                <Pill variant={PillVariant.Dashed}>Jag lär mig svenska</Pill>
            </p>
        </Section>
    );
};

export default Language;