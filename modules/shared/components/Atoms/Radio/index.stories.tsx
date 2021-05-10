import React from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Radio from '.';
import type { IRadio } from './IRadio';

const defaultExport = {
  title: 'Atoms/Radio/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default defaultExport;

const Template: Story<IRadio.IProps> = (args): ReactElement => (
  <Radio {...args} />
);

export const radio = Template.bind({});
radio.args = {
  size: 'default',
  disabled: false,
};
