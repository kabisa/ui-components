import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

export type IconProps = JSX.IntrinsicElements["span"] & {
  name: string;
  fill?: boolean;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ className, name, color, fill = true }) => (
  <span
    className={classNames(
      fill ? "material-symbols-rounded" : "material-symbols-rounded-outlined",
      styles.icon,

      className
    )}
    style={{ color: color ?? "inherit" }}
  >
    {name}
  </span>
);

export default Icon;
