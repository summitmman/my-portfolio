import { ReactElement } from 'react';
import styles from './Timeline.module.css';
import TimelineItem from './TimelineItem';

interface TimelineProps {
    children: ReactElement<typeof TimelineItem> | Array<ReactElement<typeof TimelineItem>>;
    className?: string;
}

const Timeline = ({ children, className = '' }: TimelineProps) => {
    return (
        <div className={`${styles.timelineContainer} ${className}`.trim()}>
            {children}
        </div>
    );
};

export default Timeline;