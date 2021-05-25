import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import OptionGroup from '.';
import type { IOptionGroup } from './IOptionGroupl';

const apiData = {
  caption: 'nalyzing Delaware Frozen',
  options_groups: {
    groups: [
      {
        id: '03644270-7171-4147-b5a1-4233ff547f7a',
        options: [
          {
            id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53d',
            votes_count: 79423,
            body: 'ali tramsy',
            media: [
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
            ],
          },
          {
            id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53c',
            votes_count: 79423,
            body: ' ahmed essam',
            media: [
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
            ],
          },
          {
            id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53c',
            votes_count: 79423,
            body: ' omar gamal',
            media: [
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
              {
                url: 'http://placeimg.com/640/480',
              },
            ],
          },
        ],
      },
    ],
  },
};

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
  caption: apiData.caption,
  optionsGroups: apiData.options_groups,
};
