import React from 'react';
type SelectProps = JSX.IntrinsicElements['select'] & {
    options: JSX.IntrinsicElements['option'][];
};
declare const Select: React.FC<SelectProps>;
export default Select;
