import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from ".";

export default {
  title: "Settings UI/Atoms/Icon",
  component: Icon,
  args: {
    name: "search",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
