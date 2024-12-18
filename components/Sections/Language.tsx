import Pill, { PillVariant } from '../Pill';
import Section from './Section';

const Language = () => {
    return (
        <Section title="Language">
            <p className="pill-container">
                <Pill>English</Pill>
                <Pill>Hindi</Pill>
                <Pill>Bengali</Pill>
                <Pill>Marathi</Pill>
                <Pill variant={PillVariant.Secondary}>Jag lär mig svenska</Pill>
            </p>
        </Section>
    );
};

export default Language;