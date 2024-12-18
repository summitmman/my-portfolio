import { PropsWithChildren } from 'react';
import styles from './Timeline.module.css';

const TimelineItem = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.timelineItem}>{ children }</div>
    );
};

export default TimelineItem;