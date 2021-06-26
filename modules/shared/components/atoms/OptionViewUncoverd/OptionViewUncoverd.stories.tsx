import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import OptionViewUncoverd from './OptionViewUncoverd';
import type { IOptionViewUncoverd } from './IOptionViewUncoverd';

export default {
  title: 'Atoms/OptionViewUncoverd',
  component: OptionViewUncoverd,
  argTypes: {},
};

const Template: Story<IOptionViewUncoverd.IProps> = (args): ReactElement => (
  <OptionViewUncoverd {...args} />
);
export const Default = Template.bind({});
Default.args = {
  optionBody: 'option 1',
  letter: 'A',
  percentage: 25,
  isOptionChecked: false,
  mostVoted: true,
};
