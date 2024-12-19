import Pill, { PillVariant } from '../Pill';
import Section from './Section';
import { FaReact, FaVuejs, FaAngular, FaT, FaNodeJs, FaDatabase, FaC } from 'react-icons/fa6';

const Skills = () => {
    return (
        <Section title="Skills">
            <p className="pill-container mt-1">
                <Pill icon={<FaReact />}>React</Pill>
                <Pill icon={<FaVuejs />}>Vue</Pill>
                <Pill icon={<FaT />}>Typescript</Pill>
                <Pill icon={<FaNodeJs />}>Node</Pill>
                <Pill icon={<FaDatabase />}>MySQL</Pill>
                <Pill icon={<FaAngular />} variant={PillVariant.Secondary}>Angular</Pill>
                <Pill icon={<FaC />} variant={PillVariant.Secondary}>C#</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Secondary}>MSSQL</Pill>
            </p>
        </Section>
    );
};

export default Skills;