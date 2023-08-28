import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tile from ".";

export default {
    title: "Settings UI/Atoms/Tile",
    component: Tile,
    decorators: [
        Story => (
            <div style={ { width: "25rem" } }>
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = args => <Tile { ...args }>Example</Tile>

export const Default = Template.bind({});
