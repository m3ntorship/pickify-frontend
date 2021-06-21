import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TextPollCreation from './TextPollCreation';
import type { ITextPollCreation } from './types/ITextPollCreation';

export default {
  title: 'organisms/TextPollCreation',
  component: TextPollCreation,
};

const Template: Story<ITextPollCreation.IProps> = (args): ReactElement => (
  <TextPollCreation {...args} />
);
export const Default = Template.bind({});
Default.args = {};
