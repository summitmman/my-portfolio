import { PropsWithChildren } from "react";
import styles from './Section.module.css';

interface SectionProps extends PropsWithChildren {
    title: string;
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <section className="mt-8 page-appear">
            <h2 className={`${styles.stickyHeader} font-bold text-xl py-4`}>{title}</h2>
            {children}
        </section>
    );
};

export default Section;