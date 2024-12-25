import Pill, { PillType, PillVariant } from '../Pill';
import Section from './Section';
import { FaReact, FaVuejs, FaAngular, FaT, FaNodeJs, FaDatabase, FaC } from 'react-icons/fa6';

const Skills = () => {
    return (
        <Section title="Skills">
            <p>Tools and technologies I have experience with</p>
            <p className="pill-container mt-1">
                <Pill icon={<FaReact />} variant={PillVariant.Outline} type={PillType.Primary}>React</Pill>
                <Pill icon={<FaVuejs />} variant={PillVariant.Outline} type={PillType.Primary}>Vue</Pill>
                <Pill icon={<FaT />} variant={PillVariant.Outline} type={PillType.Primary}>Typescript</Pill>
                <Pill icon={<FaNodeJs />} variant={PillVariant.Outline} type={PillType.Primary}>Node</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Outline} type={PillType.Primary}>MySQL</Pill>
                <Pill icon={<FaAngular />} variant={PillVariant.Dashed} type={PillType.Primary}>Angular</Pill>
                <Pill icon={<FaC />} variant={PillVariant.Dashed} type={PillType.Primary}>C#</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Dashed} type={PillType.Primary}>MSSQL</Pill>
            </p>
        </Section>
    );
};

export default Skills;