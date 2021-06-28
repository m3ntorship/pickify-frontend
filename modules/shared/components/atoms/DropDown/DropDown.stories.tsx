import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import DropDown from './DropDown';
import type { IDropDown } from './IDropDown';

export default {
  title: 'Atoms/DropDown',
  component: DropDown,
};

const Template: Story<IDropDown.IProps> = (args): ReactElement => (
  <DropDown {...args} />
);
export const postViewHeader = Template.bind({});
postViewHeader.args = {
  options: [
    { id: '1', body: 'Delete Post' },
    { id: '1', body: 'Report Post' },
    { id: '1', body: 'Save Post' },
  ],
};
