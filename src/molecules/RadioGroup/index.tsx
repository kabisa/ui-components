import React from "react";
import classNames from 'classnames';

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

import styles from "./index.module.css";

type RadioGroupOption = {
  label: string;
  value: string | number;
  checked?: boolean;
};

type RadioGroupProps = {
  name: string;
  options: RadioGroupOption[];
  legend?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  legend,
  onChange
}) => (
  <fieldset className={styles.group}>
    {legend && <legend>{legend}</legend>}
    {options.map(({ label, value, checked }, index) => (
      <Label key={index} className={ classNames({ [styles.checked]: checked }) }>
        {label}
        <Input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          defaultChecked={checked}
        />
      </Label>
    ))}
  </fieldset>
);

export default RadioGroup;