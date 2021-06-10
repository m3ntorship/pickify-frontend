import React from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImageUpload from '.';

export default {
  component: ImageUpload,
  title: 'Atoms/ImageUpload',
};

const Template: Story = (args): ReactElement => <ImageUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
