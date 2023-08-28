import React from "react";
import classNames from 'classnames';

import styles from "./index.module.css";

const Card: React.FC<JSX.IntrinsicElements['div']> = ({ className, children, ...props }) => (
  <div
      className={  classNames(styles.card, className) }
      { ...props }
  >
      { children }
  </div>
);

export default Card;
