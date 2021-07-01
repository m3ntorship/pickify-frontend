import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TextOptionViewUncoverd from './TextOptionViewUncoverd';
import type { ITextOptionViewUncoverd } from './ITextOptionViewUncoverd';

export default {
  title: 'Atoms/TextOptionViewUncoverd',
  component: TextOptionViewUncoverd,
  argTypes: {},
};

const Template: Story<ITextOptionViewUncoverd.IProps> = (
  args,
): ReactElement => <TextOptionViewUncoverd {...args} />;
export const Default = Template.bind({});
Default.args = {
  optionBody: 'option 1',
  letter: 'A',
  percentage: 25,
  isOptionChecked: false,
  mostVoted: true,
};
