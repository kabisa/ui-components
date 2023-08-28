import React from "react";
import { TileProps } from '../../atoms/Tile';
type WidgetCardProps = TileProps & {
    widgetName?: string;
};
declare const WidgetTile: React.FC<WidgetCardProps>;
export default WidgetTile;
