import { Argument } from "classnames";
export type ExtraClasses<T extends string> = {
    [classname in T]?: Argument;
};
export declare const getCSSPropertyValue: (variableName: string) => string;
