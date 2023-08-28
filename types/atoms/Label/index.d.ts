import React, { PropsWithChildren } from "react";
type LabelProps = JSX.IntrinsicElements['label'] & PropsWithChildren<{
    disabled?: boolean;
}>;
declare const Label: React.FC<LabelProps>;
export default Label;
