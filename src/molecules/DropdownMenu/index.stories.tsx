import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DropdownMenu, { MenuItem } from "./index";

const meta: Meta<typeof DropdownMenu> = {
  title: "Settings UI/Molecules/DropdownMenu",
  component: DropdownMenu,
  args: {
    text: "Home",
    direction: "bottom",
  },
  argTypes: {
    direction: {
      control: {
        type: "radio",
        options: ["bottom", "top"],
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "green",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "green", value: "#18242b" },
      ],
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <MenuItem>About</MenuItem>
      <MenuItem>Work</MenuItem>
      <MenuItem>Contact</MenuItem>
    </DropdownMenu>
  ),
};
