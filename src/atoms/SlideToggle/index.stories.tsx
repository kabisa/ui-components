import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SlideToggle from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Settings UI/Atoms/SlideToggle",
  component: SlideToggle,
  args: {
    disabled: false,
    value: false
  }
} as ComponentMeta<typeof SlideToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SlideToggle> = (args) => {
  const [value, setValue] = useState(false);

  return <SlideToggle { ...args } value={ value } onChange={setValue} />;
};

export const Default = Template.bind({});
