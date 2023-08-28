import React from "react";
import classNames from 'classnames';

import styles from "./index.module.css";

export type TileProps = JSX.IntrinsicElements['div'];

const Tile: React.FC<TileProps> = ({ className, children }) => (
    <div className={  classNames(styles.tile, className) } >
        { children }
    </div>
);

export default Tile;
