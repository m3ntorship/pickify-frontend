import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Footer from './Footer';
import type { IFooter } from './IFooter';

export default {
  title: 'molecules/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

const Template: Story<IFooter.IProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
