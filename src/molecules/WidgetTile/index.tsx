import React, { PropsWithChildren } from "react";
import classNames from 'classnames';

import Icon from '../../atoms/Icon';
import Tile, { TileProps } from '../../atoms/Tile';
import IconButton from '../IconButton';

import styles from "./index.module.css";

type WidgetCardProps = TileProps & {
    widgetName?: string;
};

const WidgetTile: React.FC<WidgetCardProps> = ({ className, widgetName, ...props }) => {
    const isEmpty = widgetName === undefined;


   return (
       <Tile className={ classNames(styles['widget-tile'], className, { [styles.empty]: isEmpty }) } { ...props }>

           <Icon
               name="drag_pan"
           />


           { widgetName || 'Empty'}

           { !isEmpty && (
               <div className={ styles.widgetActions }>
                   <IconButton
                       name="settings"
                   />
                   <IconButton
                       variant="tertiary"
                       name="delete"
                   />
               </div>
           ) }
       </Tile>
   );
}

export default WidgetTile;
