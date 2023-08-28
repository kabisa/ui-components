import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from ".";

export default {
    title: "Settings UI/Molecules/IconButton",
    component: IconButton,
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"]
            }
        }
    },
    args: {
        variant: "primary",
        disabled: false,
        name: "search",
    }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton { ...args } />;

export const Default = Template.bind({});
