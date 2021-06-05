import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TextPollViewOptions from './TextPollViewOptions';
import type { ITextPollViewOptions } from './ITextPollViewOptions';
import { apiDummyData } from './data';

export default {
  title: 'Molecules/TextPollViewOptions',
  component: TextPollViewOptions,
  argTypes: {},
};

const Template: Story<ITextPollViewOptions.IProps> = (args): ReactElement => (
  <TextPollViewOptions {...args} />
);
export const Default = Template.bind({});
Default.args = {
  optionsGroups: apiDummyData.options_groups,
};
