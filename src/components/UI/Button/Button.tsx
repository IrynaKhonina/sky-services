import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    ariaLabel?: string;
};

export const Button = ({
                           children,
                           onClick,
                           variant = 'primary',
                           size = 'medium',
                           disabled = false,
                           type = 'button',
                           className = '',
                           ariaLabel,
                       }: ButtonProps) => {
    const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};