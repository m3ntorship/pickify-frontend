import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import SingleImagePollOption from './SingleImagePollOption';
import type { ISingleImagePollOption } from './ISingleImagePollOption';

export default {
  component: SingleImagePollOption,
  title: 'Molecules/SingleImagePollOption',
};
const Template: Story<ISingleImagePollOption.IProps> = (args): ReactElement => (
  <div className="flex">
    <SingleImagePollOption {...args} />
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
