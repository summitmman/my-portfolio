import { PropsWithChildren, ReactElement, cloneElement } from "react";
import styles from './Pill.module.css';

export enum PillVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Outline = 'outline',
    Dashed = 'dashed'
}

interface PillProps extends PropsWithChildren {
    variant?: PillVariant;
    className?: string;
    onClick?: Function;
    icon?: ReactElement<any>;
}

const Pill = ({ variant = PillVariant.Primary, className = '', children, icon }: PillProps) => {
    return (
        <span className={`${styles.pill} ${styles[variant]} ${className}`.trim()}>
            {/* {icon && <span className={styles.icon}>{icon}</span>}{children} */}
            {icon && cloneElement(icon, { className: styles.icon })}{children}
        </span>
    );
};

export default Pill;