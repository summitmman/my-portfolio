import { BiLogoTypescript } from 'react-icons/bi';
import {
    FaAngular,
    FaCompassDrafting,
    FaDatabase,
    FaHashtag,
    FaNodeJs,
    FaReact,
    FaRocket,
    FaVuejs
} from 'react-icons/fa6';
import { SiAmp, SiGraphql, SiStrapi } from 'react-icons/si';
import Pill, { PillType, PillVariant } from '../Pill';
import Section from './Section';

const Skills = () => {
    return (
        <Section title="Skills">
            <p>Tools and technologies I have worked with but not limited to:</p>
            <p className="pill-container mt-1">
                <Pill icon={<FaReact />} variant={PillVariant.Outline} type={PillType.Primary}>React</Pill>
                <Pill icon={<FaVuejs />} variant={PillVariant.Outline} type={PillType.Primary}>Vue</Pill>
                <Pill icon={<BiLogoTypescript />} variant={PillVariant.Outline} type={PillType.Primary}>Typescript</Pill>
                <Pill icon={<FaNodeJs />} variant={PillVariant.Outline} type={PillType.Primary}>Node</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Outline} type={PillType.Primary}>MySQL</Pill>
                <Pill icon={<FaCompassDrafting />} variant={PillVariant.Outline} type={PillType.Primary}>Frontend Architecture</Pill>
                <Pill icon={<FaRocket />} variant={PillVariant.Outline} type={PillType.Primary}>CI/CD</Pill>
                <Pill icon={<SiStrapi />} variant={PillVariant.Outline} type={PillType.Primary}>Strapi CMS</Pill>
                <Pill icon={<SiAmp />} variant={PillVariant.Outline} type={PillType.Primary}>AMP</Pill>
                <Pill icon={<SiGraphql />} variant={PillVariant.Outline} type={PillType.Primary}>GraphQL</Pill>
                <Pill icon={<FaAngular />} variant={PillVariant.Dashed} type={PillType.Primary}>Angular</Pill>
                <Pill icon={<FaHashtag />} variant={PillVariant.Dashed} type={PillType.Primary}>C#</Pill>
                <Pill icon={<FaDatabase />} variant={PillVariant.Dashed} type={PillType.Primary}>MSSQL</Pill>
            </p>
        </Section>
    );
};

export default Skills;