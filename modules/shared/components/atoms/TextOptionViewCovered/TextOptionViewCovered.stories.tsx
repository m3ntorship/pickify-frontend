import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TextOptionViewCovered from './TextOptionViewCovered';
import type { ITextOptionViewCovered } from './ITextOptionViewCovered';

export default {
  title: 'Atoms/TextOptionViewCovered',
  component: TextOptionViewCovered,
  argTypes: {},
};

const Template: Story<ITextOptionViewCovered.IProps> = (args): ReactElement => (
  <TextOptionViewCovered {...args} />
);
export const Default = Template.bind({});
Default.args = {
  optionBody: 'option 1',
  letter: 'A',
};
