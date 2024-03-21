// import React from 'react';
// import { Meta } from '@storybook/react';
// import TextInput from './TextInput';

import { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/atoms/TextInput";

// export default {
//   title: 'Components/TextInput',
//   component: TextInput,
// } as Meta;

// const Template = (args) => <TextInput {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   // 기본 props
// };

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  render: () => <TextInput />,
};
