import React, { forwardRef } from "react";

import Input from '../Input';

import styles from "./index.module.css";

type SlideToggleProps = {
  disabled?: boolean;
  value?: boolean;
  onChange?: (newValue: boolean) => void;
};

const SlideToggle = forwardRef<HTMLInputElement, SlideToggleProps>(
  ({ disabled, value = false, onChange }, ref) => (
    <Input
      type="checkbox"
      checked={value}
      className={styles.slideToggle}
      onChange={(event) => {
        if (onChange) {
          onChange(event.target.checked);
        }
      }}
      disabled={disabled}
      ref={ref}
    />
  )
);

SlideToggle.displayName = "SlideToggle";

export default SlideToggle;
