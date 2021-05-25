import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import OptionGroup from '.';
import type { IOptionGroup } from './IOptionGroupl';

export default {
  title: 'organisms/OptionGroup',
  component: OptionGroup,
  argTypes: {},
};

const Template: Story<IOptionGroup.IProps> = (args): ReactElement => (
  <OptionGroup {...args} />
);
export const Default = Template.bind({});
Default.args = {};
