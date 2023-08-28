import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInput from '.';

export default {
    title: 'Settings UI/Molecules/SearchInput',
    component: SearchInput,
    args: {
        suggestions: [],
        disabled: false
    }
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => <SearchInput { ...args } />;

export const Default = Template.bind({});

Default.args = {
    suggestions: [
        'Suggestion 1',
        'Suggestion 2',
        'Suggestion 3',
    ],
    disabled: false
}
