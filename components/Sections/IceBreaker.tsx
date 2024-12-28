import Section from "./Section";
import styles from './IceBreaker.module.css';

const IceBreaker = () => {
    return (
        <Section title="Ice Breaker">
            <p>
                Come talk to me about <span className={`sm:shimmer ${styles.cursorScience}`}>science</span>, I am a big time nerd. From galaxies to microscopic life, evolution to philosophy, I love learning more about them all.
                I watch <span className={`sm:shimmer ${styles.cursorSamurai}`}>anime</span> and love manga art. I had loved Animax when it first came to India.
                Started playing <span className={`sm:shimmer ${styles.cursorGame}`}>games</span> late but got addicted to titles like Diablo 2, Red Faction, Call of Duty, Battlefield, Splinter cell and ofcourse NFS.
                I like upbeat music no matter the language, comedy and sci-fi <span className={`sm:shimmer ${styles.cursorMovie}`}>movies and popular web series</span>.
                Or let&apos;s just talk about the weather and see where it goes from there, no pressure.
            </p>
        </Section>
    );
};

export default IceBreaker;