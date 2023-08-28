import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "./index";

export default {
  title: "Settings UI/Atoms/Link",
  component: Link,
  args: {
    children: "Home",
    theme: "dark"
  },
  argTypes: {
    theme: {
      control: {
        type: "radio",
        options: ["light", "dark"]
      }
    }
  },
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "green", value: "#18242b" }
      ]
    }
  }
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ children, ...args }) => (
  <Link {...args}>{children}</Link>
);

export const Light = Template.bind({});

Light.args = { theme: "light" };
Light.parameters = {
  backgrounds: {
    default: "green"
  }
};

export const Dark = Template.bind({});

Dark.args = {
  theme: "dark"
};