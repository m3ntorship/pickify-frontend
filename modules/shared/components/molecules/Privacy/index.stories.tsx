import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Privacy from './index';
import type { PrivacyTypes } from './PrivacyTypes';

export default {
  component: Privacy,
  title: 'Molecules/Privacy',
};
const Template: Story<PrivacyTypes.Props> = (args): ReactElement => (
  <Privacy {...args} />
);
export const privacy = Template.bind({});
privacy.args = {
  privacyOptions: ['family', 'friends'],
  withDivider: true,
};
