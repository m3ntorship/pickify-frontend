import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import DeveloperPics from './DeveloperPics';

export default {
  component: DeveloperPics,
  title: 'Molecules/DeveloperPics',
};

const Template: Story = (args): ReactElement => <DeveloperPics {...args} />;

export const Default = Template.bind({});
