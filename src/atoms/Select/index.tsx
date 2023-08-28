import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

type SelectProps = JSX.IntrinsicElements['select'] & {
    options: JSX.IntrinsicElements['option'][];
}

const Select: React.FC<SelectProps> = ({ className, options, ...props }) => (
    <select
        className={ classNames(styles.select, className) }
        { ...props }
    >
        { options.map(({ value, label }, index) => (
            <option
                key={ index }
                value={ value }
            >
                { label || value }
            </option>
        )) }
    </select>
);

export default Select;
