import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
    title: 'Settings UI/Atoms/Input',
    component: Input,
    args: {
        disabled: false,
        error: false
    },
    argTypes: {
        type: {
            control: { disable: true }
        }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input { ...args } />;

export const Text = Template.bind({});

Text.args = {
    type: 'text'
}

export const Number = Template.bind({});

Number.args = {
    type: 'number'
}

export const Radio = Template.bind({});

Radio.args = {
    type: 'radio'
}

export const Search = Template.bind({});

Search.args = {
    type: 'search'
}

export const Error = Template.bind({});

Error.args = {
    error: true
}