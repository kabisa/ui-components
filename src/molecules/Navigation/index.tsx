import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { ExtraClasses } from "../../utils";

type Props = {
  direction: "horizontal" | "vertical";
  extraClasses?: ExtraClasses<"nav" | "list" | "child">;
};

const Navigation: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  direction,
  extraClasses = {}
}) => (
  <nav className={classNames(styles.nav, styles[direction], extraClasses.nav)}>
    <ol className={classNames(extraClasses.list)}>
      {React.Children.map(children, (child) => (
        <li className={classNames(extraClasses.child)}>{child}</li>
      ))}
    </ol>
  </nav>
);

export default Navigation;