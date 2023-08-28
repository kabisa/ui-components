import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from '../../atoms/Card';

import SortableList from "./index";

export default {
    title: "Settings UI/Molecules/SortableList",
    component: SortableList,
    args: {
        children: [
            <Card key={ 1 }>Card 1</Card>,
            <Card key={ 2 }>Card 2</Card>,
            <Card key={ 3 }>Card 3</Card>,
            <Card key={ 4 }>Card 4</Card>,
        ]
    }
} as ComponentMeta<typeof SortableList>;

const Template: ComponentStory<typeof SortableList> = args => <SortableList { ...args } />;

export const Default = Template.bind({});
