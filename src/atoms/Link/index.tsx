import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";

type Props = Omit<React.ComponentProps<"a">, "className"> & {
  theme: "light" | "dark";
};

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, theme, ...props }, ref) => (
    <a {...props} className={classNames(styles.link, styles[theme])} ref={ref}>
      {children}
    </a>
  )
);

Link.displayName = "Link";
export default Link;