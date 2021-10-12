import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Privacy from './Privacy';
import type { IPrivacy } from './PrivacyTypes';

export default {
  component: Privacy,
  title: 'Molecules/Privacy',
};
const Template: Story<IPrivacy.IProps> = (args): ReactElement => (
  <Privacy {...args} />
);
export const privacy = Template.bind({});
privacy.args = {
  privacyOptions: ['family', 'friends'],
  withDivider: true,
};
