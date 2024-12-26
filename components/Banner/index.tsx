import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6';
import { SiStackblitz } from 'react-icons/si';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className="mt-6">
            <h1 className={styles.title}>Sumit Man</h1>
            <h2 className={styles.subTitle}>Software Developer</h2>
            <p>I build experiences for the web and bring customizable solutions to problems</p>
            <ul className={styles.social}>
                <li><a href="https://www.linkedin.com/in/sumitman/" target="_blank" title="LinkedIn"><FaLinkedin /></a></li>
                <li><a href="https://github.com/summitmman" target="_blank" title="Github"><FaGithub /></a></li>
                <li><a href="https://medium.com/@summitmman" target="_blank" title="Medium"><FaMedium /></a></li>
                <li><a href="https://stackblitz.com/@summitmman" target="_blank" title="Stackblitz"><SiStackblitz /></a></li>
            </ul>
        </section>
    );
};

export default Banner;