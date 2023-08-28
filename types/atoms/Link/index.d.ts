import React from "react";
type Props = Omit<React.ComponentProps<"a">, "className"> & {
    theme: "light" | "dark";
};
declare const Link: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
