import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TextPoll from '.';
import type { ITextPoll } from './ITextPoll';

export default {
  title: 'Atoms/TextPoll',
  component: TextPoll,
  argTypes: {},
};

const Template: Story<ITextPoll.IProps> = (args): ReactElement => (
  <TextPoll {...args} />
);
export const Default = Template.bind({});
Default.args = {
  option: 'option 1',
  letter: 'A',
  percentage: 25,
  showResult: false,
  isChecked: false,
  mostVoted: false,
};
