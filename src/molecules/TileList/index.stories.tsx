import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TileList from ".";

export default {
    title: "Settings UI/Molecules/TileList",
    component: TileList,
    args: {
        children: [
            'Child 1',
            'Child 2',
            'Child 3',
            'Child 4',
            'Child 5'
        ]
    },
    decorators: [
        Story => (
            <div style={ { width: "25rem" } }>
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof TileList>;

const Template: ComponentStory<typeof TileList> = args => <TileList { ...args } />;

export const Default = Template.bind({});
