'use client';
import { useState } from 'react';
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
    shortDescription?: string;
    details?: string[];
    tech?: (string|{label: string; variant: PillVariant})[];
    showKnowMore?: boolean;
}
interface WorkExperiencePanelProps {
    data: IWorkExperience;
}

const WorkExperiencePanel = ({ data }: WorkExperiencePanelProps) => {
    const [isExpanded, setExpanded] = useState(false);
    const expand = data.showKnowMore ? 'expand' : '';
    const contract = data.showKnowMore ? 'contract' : '';
    const expanded = isExpanded ? 'expanded' : '';
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
            {data.shortDescription && <p className={`pt-4 ${contract} ${expanded}`}>
                { data.shortDescription }
            </p>}
            <p className={`${styles.description} ${expand} ${expanded}`}>
                {data.description}
            </p>
            {data.details?.length && <ul className={`${styles.workDetails} ${expand} ${expanded}`}>
                {data.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>}
            {data.tech?.length && <div className="pill-container text-sm py-4">
                {data.tech.map(
                    (t, index) => (
                        <Pill
                            key={index}
                            variant={(t as any).variant}
                            className={`${(t as any).variant === PillVariant.Secondary ? 'expand' : ''} ${expanded}`}
                        >
                            {typeof t === 'string' ? t : t.label}
                        </Pill>
                    )
                )}
            </div>}
            {data.showKnowMore && <div>
                <span className={`underline-link text-xs ${styles.knowMore}`} onClick={() => setExpanded(!isExpanded)}>
                    {isExpanded ? 'Keep it brief' : 'Know More' }
                </span>
            </div>}
        </div>
    );
};

export default WorkExperiencePanel;