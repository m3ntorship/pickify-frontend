import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Molecules/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => {
  return (
    <>
      <div className="mb-8">
        <Footer showCenteredLogo {...args} />
      </div>
      <div className="w-19xl m-auto">
        <Footer showCenteredLogo={false} {...args} />
      </div>
    </>
  );
};

export const footer = Template.bind({});
