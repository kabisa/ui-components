import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

type InputProps = JSX.IntrinsicElements['input'] & {
    error?: boolean
};

const Input: React.FC<InputProps> = ({ className, error, ...props  }) => (
    <input
        className={ classNames(styles.input, className, { [styles.error]: error }) }
        { ...props }
    />
);

export default Input;
