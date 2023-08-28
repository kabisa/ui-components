import React, { PropsWithChildren } from "react";
import classNames from 'classnames';

import SortableList from '../../molecules/SortableList';
import WidgetTile from '../../molecules/WidgetTile';


import styles from "./index.module.css";

const WidgetSelector: React.FC<PropsWithChildren> = ({ children }) => {
    const widgets = ['Slide', 'Time', 'Weather', 'Grid'];


    return (
        <SortableList>
            { widgets.map((widget, index) => <WidgetTile key={index} widgetName={widget} />) }
        </SortableList>
    );
}

export default WidgetSelector;
