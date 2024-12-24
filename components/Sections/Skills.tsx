import Pill, { PillVariant } from '../Pill';
import Section from './Section';
import { FaReact, FaVuejs, FaAngular, FaT, FaNodeJs, FaDatabase, FaC } from 'react-icons/fa6';

const Skills = () => {
    return (
        <Section title="Skills">
            <p>Tools and technologies I have experience with</p>
            <p className="pill-container mt-1">
                <Pill icon={<FaReact />} variant={PillVariant.Outline}>React</Pill>
                <Pill icon={<FaVuejs />} variant={PillVariant.Outline}>Vue</Pill>
                <Pill icon={<FaT />} variant={PillVariant.Outline}>Typescript</Pill>
                <Pill icon={<FaNodeJs />} variant={PillVariant.Outline}>Node</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Outline}>MySQL</Pill>
                <Pill icon={<FaAngular />} variant={PillVariant.Dashed}>Angular</Pill>
                <Pill icon={<FaC />} variant={PillVariant.Dashed}>C#</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Dashed}>MSSQL</Pill>
            </p>
        </Section>
    );
};

export default Skills;