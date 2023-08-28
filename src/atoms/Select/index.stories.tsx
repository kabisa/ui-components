import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from ".";

export default {
    title: "Settings UI/Atoms/Select",
    component: Select,
    args: {
        name: "select",
        options: [
            { label: "Option 1", value: "option-1" },
            { label: "Option 2", value: "option-2" },
            { label: "Option 3", value: "option-3" },
        ]
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select { ...args } />;

export const Default = Template.bind({});

Default.args = {
    name: "default"
};

export const Expanded = Template.bind({});

Expanded.args = {
    size: 3
};
