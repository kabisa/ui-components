import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Label from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Settings UI/Atoms/Label",
  component: Label,
  args: {
    children: "Hello world"
  }
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
