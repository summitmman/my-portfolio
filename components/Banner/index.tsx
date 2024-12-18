import { FaLinkedin, FaGithub, FaMedium, FaBolt } from 'react-icons/fa6';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className="mt-6">
            <h1 className={styles.title}>Sumit Man</h1>
            <h2 className={styles.subTitle}>Software Developer</h2>
            <p>10 years of work exp as an ic and a lead, creates libraries and exp building e-commerce websites</p>
            <ul className={styles.social}>
                <li><a href="#"><FaLinkedin /></a></li>
                <li><a href="#"><FaGithub /></a></li>
                <li><a href="#"><FaMedium /></a></li>
                <li><a href="#"><FaBolt /></a></li>
            </ul>
        </section>
    );
};

export default Banner;