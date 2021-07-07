import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import SignleImagePollOption from './SignleImagePollOption';
import type { ISignleImagePollOption } from './ISignleImagePollOption';

export default {
  component: SignleImagePollOption,
  title: 'Molecules/SignleImagePollOption',
};
const Template: Story<ISignleImagePollOption.IProps> = (args): ReactElement => (
  <SignleImagePollOption {...args} />
);
export const Default = Template.bind({});
Default.args = {
  groupName: 'caption',
  media: [{ url: 'eb519bfc-6f4c-4dfb-addc-75310e3945aa' }],
  options: [
    { body: 'yes', id: 'option_1', media: [] },
    { body: 'no', id: 'option_2', media: [] },
  ],
};
