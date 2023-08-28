import React, { PropsWithChildren } from "react";
import classNames from 'classnames';

import Tile from "../../atoms/Tile";

import styles from "./index.module.css";

type TileListProps = PropsWithChildren<{
    className?: string;
}>;

const TileList: React.FC<TileListProps> = ({ className, children }) => (
    <ul className={ classNames(styles.tileList, className) }>
        { React.Children.map(children, (child, index) => (
            <li key={ index }>
                <Tile >{ child }</Tile>
            </li>
        )) }
    </ul>
);

export default TileList;
