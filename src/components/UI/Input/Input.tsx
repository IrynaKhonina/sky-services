import React from 'react';
import styles from './Input.module.css';

type InputType = 'text' | 'number' | 'email' | 'password';
type InputSize = 'small' | 'medium' | 'large';

type InputProps = {
    value: string | number;
    onChange: (value: string) => void;
    type?: InputType;
    placeholder?: string;
    size?: InputSize;
    disabled?: boolean;
    className?: string;
    min?: number;
    max?: number;
    ariaLabel?: string;
    required?: boolean;
};

export const Input = ({
                          value,
                          onChange,
                          type = 'text',
                          placeholder = '',
                          size = 'medium',
                          disabled = false,
                          className = '',
                          min,
                          max,
                          ariaLabel,
                          required = false,
                      }: InputProps) => {
    const inputClasses = `${styles.input} ${styles[size]} ${className}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={inputClasses}
            disabled={disabled}
            min={min}
            max={max}
            aria-label={ariaLabel}
            required={required}
        />
    );
};