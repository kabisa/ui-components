import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "../../atoms/Link";
import Navigation from "./index";

export default {
  title: "Settings UI/Molecules/Navigation",
  component: Navigation,
  args: {
    children: ["Home", "Dashboards", "View"].map((title) => (
      <Link key={title} theme="dark" href="/">
        {title}
      </Link>
    ))
  },
  argTypes: {
    direction: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"]
      }
    }
  }
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = ({ children, ...args }) => (
  <Navigation {...args}>{children}</Navigation>
);

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: "horizontal"
};

export const Vertical = Template.bind({});

Vertical.args = {
  direction: "vertical"
};