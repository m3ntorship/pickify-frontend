import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import OptionGroup from '.';
import type { IOptionGroup } from './IOptionGroupl';
import { apiDummyData } from './data';

export default {
  title: 'Molecules/OptionGroup',
  component: OptionGroup,
  argTypes: {},
};

const Template: Story<IOptionGroup.IProps> = (args): ReactElement => (
  <OptionGroup {...args} />
);
export const Default = Template.bind({});
Default.args = {
  caption: apiDummyData.caption,
  optionsGroups: apiDummyData.options_groups,
};
