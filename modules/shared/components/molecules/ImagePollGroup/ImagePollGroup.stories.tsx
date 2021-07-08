import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollGroup from './ImagePollGroup';
import type { IImagePollGroup } from './IImagePollGroup';

export default {
  title: 'Molecules/ImagePollGroup',
  component: ImagePollGroup,
};

const Template: Story<IImagePollGroup.IProps> = (args): ReactElement => (
  <div className="flex">
    <ImagePollGroup {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  group: {
    id: '03644270-7171-4147-b5a1-4233ff547f7a',
    name: 'Group Name',
    media: [{ url: 'eb519bfc-6f4c-4dfb-addc-75310e3945aa' }],
    options: [
      {
        id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53d',
        body: 'yes',
        media: [{ url: 'eb519bfc-6f4c-4dfb-addc-75310e3945aa' }],
        vote_count: 10,
      },
      {
        id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53c',
        body: 'no',
        media: [{ url: 'eb519bfc-6f4c-4dfb-addc-75310e3945aa' }],
        vote_count: 30,
      },
    ],
  },
};
