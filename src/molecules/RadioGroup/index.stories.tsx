import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioGroup from ".";

export default {
    title: "Settings UI/Molecules/RadioGroup",
    component: RadioGroup,
    args: {
        name: "radio-group",
        legend: "RadioGroup example",
        options: [
            { label: "Option 1", value: "option-1" },
            { label: "Option 2", value: "option-2" },
            { label: "Option 3", value: "option-3" },
        ]
    }
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = args => <RadioGroup { ...args } />;

export const Default = Template.bind({});

Default.args = {
    name: "default"
};

export const WithoutLegend = Template.bind({});

WithoutLegend.args = {
    name: "without-legend",
    legend: undefined
}
