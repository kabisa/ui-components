import React from "react";
import { ExtraClasses } from "../../utils";
type Props = {
    direction: "horizontal" | "vertical";
    extraClasses?: ExtraClasses<"nav" | "list" | "child">;
};
declare const Navigation: React.FC<React.PropsWithChildren<Props>>;
export default Navigation;
