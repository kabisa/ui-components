import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  title: "Settings UI/Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary"]
      }
    }
  },
  args: {
    children: "Click me",
    variant: "primary",
    disabled: false
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary"
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary"
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  variant: "tertiary"
};