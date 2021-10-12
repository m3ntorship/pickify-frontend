import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import DropDown from './DropDown';
import type { IDropDown } from './IDropDown';
import { options } from './mockedOptions';

export default {
  title: 'Atoms/DropDown',
  component: DropDown,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md'],
      },
    },
  },
};

const Template: Story<IDropDown.IProps> = (args): ReactElement => (
  <div className="flex justify-end">
    <DropDown {...args} />
  </div>
);
export const postViewHeader = Template.bind({});
postViewHeader.args = {
  options,
  size: 'sm',
};
