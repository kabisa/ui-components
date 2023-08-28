import { Argument } from "classnames";

export type ExtraClasses<T extends string> = {
  [classname in T]?: Argument;
};

export const getCSSPropertyValue = (variableName: string) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();