import React from "react";
type RadioGroupOption = {
    label: string;
    value: string | number;
    checked?: boolean;
};
type RadioGroupProps = {
    name: string;
    options: RadioGroupOption[];
    legend?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
