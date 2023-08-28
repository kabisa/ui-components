import React, { PropsWithChildren, useState } from "react";
import classNames from 'classnames';
import { List, arrayMove } from "react-movable";

import styles from "./index.module.css";

const SortableList: React.FC<PropsWithChildren> = ({ children }) => {
    const [ items, setItems ] = useState(React.Children.toArray(children));

    const renderList = ({ children, props }) =>  (
        <ol className={ styles.list } { ...props }>
            { children }
        </ol>
    );

    const renderItem = ({ value, props, isDragged, isSelected }) => (
        <li
            className={ classNames({ [styles.dragging]: isDragged, [styles.selected]: isSelected }) }
            { ...props }
            style={{
                ...props.style,
                listStyleType: 'none', // Necessary to prevent list style applying on drag
            }}
        >
            { value }
        </li>
    );

    return (
        <List
            lockVertically
            values={ items }
            onChange={ ({ oldIndex, newIndex }) => setItems(arrayMove(items, oldIndex, newIndex)) }
            renderList={ renderList }
            renderItem={ renderItem }
        />
    );
};

export default SortableList;
