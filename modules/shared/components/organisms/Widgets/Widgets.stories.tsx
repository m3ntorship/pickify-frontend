import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Widgets from './Widgets';

export default {
  component: Widgets,
  title: 'Organisms/Widgets',
};

const Template: Story = (args): ReactElement => <Widgets {...args} />;

export const Default = Template.bind({});
