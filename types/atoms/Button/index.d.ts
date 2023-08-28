import React from 'react';
export type ButtonProps = JSX.IntrinsicElements["button"] & {
    variant?: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
