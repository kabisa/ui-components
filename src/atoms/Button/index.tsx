import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

export type ButtonProps = JSX.IntrinsicElements["button"] & {
    variant?: 'primary' | 'secondary' | 'tertiary'
    disabled?: boolean
};
const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    disabled = false,
    ...props
}) => (
    <button
        className={ classNames(styles.button, styles[variant], className) }
        disabled={ disabled }
        // eslint-disable-next-line react/jsx-props-no-spreading
        { ...props }
    >
        { children }
    </button>
);

export default Button;
