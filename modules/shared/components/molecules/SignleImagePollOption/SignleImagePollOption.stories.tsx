import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import SignleImagePollOption from './SignleImagePollOption';
import type { ISignleImagePollOption } from './ISignleImagePollOption';

export default {
  component: SignleImagePollOption,
  title: 'Molecules/SignleImagePollOption',
};
const Template: Story<ISignleImagePollOption.IProps> = (args): ReactElement => (
  <div className="flex">
    <SignleImagePollOption {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  groupName: 'caption',
  media: [{ url: 'https://placeimg.com/640/480/any' }],
  options: [
    { body: 'yes', id: 'option_1', media: [], voted: false },
    { body: 'no', id: 'option_2', media: [], voted: false },
  ],
};
