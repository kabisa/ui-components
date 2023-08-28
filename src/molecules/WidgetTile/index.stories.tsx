import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WidgetCard from ".";

export default {
    title: "Settings UI/Molecules/WidgetCard",
    component: WidgetCard,
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
} as ComponentMeta<typeof WidgetCard>;

const Template: ComponentStory<typeof WidgetCard> = args => <WidgetCard { ...args } />;

export const Empty = Template.bind({});

export const Widget = Template.bind({});

Widget.args = {
    widgetName: 'Time'
};


