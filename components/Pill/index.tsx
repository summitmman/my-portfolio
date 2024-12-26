import { PropsWithChildren, ReactElement, cloneElement } from "react";
import styles from './Pill.module.css';

export enum PillVariant {
    Default = 'defaultVariant',
    Outline = 'outline',
    Dashed = 'dashed'
}
export enum PillType {
    Default = 'defaultType',
    Primary = 'primary',
    Secondary = 'secondary'
}

interface PillProps extends PropsWithChildren {
    variant?: PillVariant;
    type?: PillType;
    className?: string;
    onClick?: () => void;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    icon?: ReactElement<any>;
}

const Pill = ({ variant = PillVariant.Default, type = PillType.Default, className = '', children, icon }: PillProps) => {
    return (
        <span className={`${styles.pill} ${styles[type]} ${styles[variant]} ${className}`.trim()}>
            {/* {icon && <span className={styles.icon}>{icon}</span>}{children} */}
            {icon && cloneElement(icon, { className: styles.icon })}{children}
        </span>
    );
};

export default Pill;