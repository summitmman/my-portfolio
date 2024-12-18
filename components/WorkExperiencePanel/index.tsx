import Pill, { PillVariant } from '../Pill';
import styles from './WorkExperiencePanel.module.css';

export interface IWorkExperience {
    year?: number;
    position: string;
    company: {
        name: string;
        link: string;
    };
    startDate: string;
    endDate?: string;
    location: string;
    description: string;
    details?: string[];
    tech?: (string|{label: string; variant: PillVariant})[];
    showKnowMore?: boolean;
}
interface WorkExperiencePanelProps {
    data: IWorkExperience;
}

const WorkExperiencePanel = ({ data }: WorkExperiencePanelProps) => {
    return (
        <div className={styles.workExperience}>
            <div className={styles.header}>
                {data.year != null ? <div className={`${styles.years} hidden sm:block`}>{data.year}{data.year > 1 ? 'yrs' : 'yr'}</div> : null }
                <div className="heading">
                    {data.position}
                    <a href={data.company.link} className={`${styles.company} arrow-link`}>{data.company.name}</a>
                </div>
                <div className={styles.tenure}>
                    <span className={styles.date}>{data.startDate} - {data.endDate ?? 'Present'}</span>
                    <span>{data.location}</span>
                </div>
            </div>
            <p className={styles.description}>
                {data.description}
            </p>
            {data.details?.length && <ul className={styles.workDetails}>
                {data.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>}
            {data.tech?.length && <div className="pill-container text-sm py-4">
                {data.tech.map((t, index) => <Pill key={index} variant={(t as any).variant}>{typeof t === 'string' ? t : t.label}</Pill>)}
            </div>}
            {data.showKnowMore && <div>
                <span className={`underline-link text-xs ${styles.knowMore}`}>Know More</span>
            </div>}
        </div>
    );
};

export default WorkExperiencePanel;