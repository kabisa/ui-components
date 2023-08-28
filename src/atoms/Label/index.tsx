import React, { PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./index.module.css";

type LabelProps = JSX.IntrinsicElements['label'] & PropsWithChildren<{
  disabled?: boolean;
}>;
const Label: React.FC<LabelProps> = ({ children, disabled, ...props }) => (
  <label
    className={ classNames({
      [styles.label]: true,
      [styles.disabled]: disabled
    })}
    { ...props }
  >
    { children }
  </label>
);

Label.displayName = "Label";

export default Label;
