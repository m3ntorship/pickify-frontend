import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Toggler from './index';
import type { TogglerTypes } from './TogglerTypes';

export default {
  component: Toggler,
  title: 'Atoms/Toggle',
  argTypes: {
    size: {
      options: ['sm', 'default'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<TogglerTypes.Props> = (args): ReactElement => (
  <Toggler {...args} />
);
export const togglerTS = Template.bind({});
togglerTS.args = {
  size: 'default',
  disabled: false,
  checked: false,
};
