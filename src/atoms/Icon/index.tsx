import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

export type IconProps = JSX.IntrinsicElements["span"] & {
  name: string;
  fill?: boolean;
};

const Icon: React.FC<IconProps> = ({ className, name, fill = true }) => (
  <span
    className={classNames(
      fill ? "material-symbols-rounded" : " material-symbols-rounded-outlined",
      styles.icon,
      className
    )}
  >
    {name}
  </span>
);

export default Icon;
