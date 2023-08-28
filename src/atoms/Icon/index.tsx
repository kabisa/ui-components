import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

export type IconProps = JSX.IntrinsicElements['span'] & {
    name: string;
}

const Icon: React.FC<IconProps> = ({ className, name }) => (
    <span className={ classNames('material-symbols-rounded', styles.icon, className) }>
        { name }
    </span>
);

export default Icon;
