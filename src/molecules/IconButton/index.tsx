import React from "react";
import classNames from 'classnames';

import Button, { ButtonProps } from '../../atoms/Button';
import Icon, { IconProps } from '../../atoms/Icon';

import styles from './index.module.css';

const IconButton: React.FC<ButtonProps & IconProps> = ({
    className,
    variant= 'primary',
    disabled,
    name,
    ...props
}) => (
    <Button
        className={ classNames(styles['icon-button'], className) }
        variant={ variant }
        disabled={ disabled }
        { ...props }
    >
        <Icon className={ styles.icon } name={ name } />
    </Button>
);

export default IconButton;
