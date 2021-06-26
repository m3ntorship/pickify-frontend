import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import OptionViewCovered from './OptionViewCovered';
import type { IOptionViewCovered } from './IOptionViewCovered';

export default {
  title: 'Atoms/OptionViewCovered',
  component: OptionViewCovered,
  argTypes: {},
};

const Template: Story<IOptionViewCovered.IProps> = (args): ReactElement => (
  <OptionViewCovered {...args} />
);
export const Default = Template.bind({});
Default.args = {
  optionBody: 'option 1',
  letter: 'A',
};
