import React from "react";
type SlideToggleProps = {
    disabled?: boolean;
    value?: boolean;
    onChange?: (newValue: boolean) => void;
};
declare const SlideToggle: React.ForwardRefExoticComponent<SlideToggleProps & React.RefAttributes<HTMLInputElement>>;
export default SlideToggle;
