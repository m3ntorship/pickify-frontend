import { SinglePostResponseTypeEnum } from '@m3ntorship/posts-client/dist/client';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import PostViewWrapper from './PostViewWrapper';
import type { IPostViewWrapper } from './IPostViewWrapper';

export default {
  title: 'organisms/PostViewWrapper',
  component: PostViewWrapper,
};

const Template: Story<IPostViewWrapper.IProps> = (args): ReactElement => (
  <PostViewWrapper {...args} />
);
export const Default = Template.bind({});
Default.args = {
  postData: {
    created_at: '1958-09-03T11:17:03.861Z',
    is_hidden: true,
    id: '4c04d6b5-acd9-4049-9bad-0509c329ab1e',
    type: SinglePostResponseTypeEnum.TextPoll,
    options_groups: {
      groups: [
        {
          id: '5c304d19-97d4-4d4d-a541-1141ee53130c',
          options: [
            {
              id: '4ccc4d2b-4257-4c3b-a7ab-63c20bc1db49',
              votes_count: 73577,
              body: 'optical invoice',
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
              id: 'aafe44ae-ccd2-4747-8e39-a6057f853f81',
              body: 'fuchsia payment',
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
              votes_count: 37330,
            },
            {
              id: '929572ca-3a37-4387-a49b-32233f438e15',
              votes_count: 24807,
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
              body: 'Thailand parsing',
            },
            {
              id: '8a3bc789-7a82-4637-9daa-c44da842beed',
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
              body: 'architectures administration',
              votes_count: 64782,
            },
          ],
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
          name: 'Debbie Howell',
        },
        {
          id: '6ea7219c-7c35-45d2-a303-2a769e9802d2',
          options: [
            {
              id: '4d014a6c-236b-4028-8306-bb71a4394801',
              votes_count: 52220,
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
              body: 'Dalasi capacitor',
            },
            {
              id: '3231c7bd-c20e-42a1-82b9-193301104ccc',
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
              votes_count: 55085,
              body: 'mission-critical',
            },
            {
              id: 'ef17d1a3-77be-4974-a810-f11ce3ae9528',
              votes_count: 23800,
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
              body: 'interface Home',
            },
            {
              id: 'e6ee65d8-a4d7-4ff3-8265-ee46baf9cd53',
              votes_count: 59573,
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
              body: 'Berkshire sticky',
            },
          ],
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
          name: 'Laura Sawayn',
        },
        {
          id: 'f6280d65-0580-4117-930e-82ff9a1e9826',
          options: [
            {
              id: '875430f1-f300-43e7-9b86-dc45631f29f5',
              body: 'seize Borders panel',
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
              votes_count: 99981,
            },
            {
              id: 'e5f0e206-6b7b-4025-ab39-e602e58218ce',
              votes_count: 68308,
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
              body: 'maroon Specialist engineer',
            },
            {
              id: 'b2ba731f-09b8-4730-b5c6-c03b76d26e7f',
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
              body: 'Loan vertical Wooden',
              votes_count: 52650,
            },
            {
              id: 'a2e7d311-e536-4346-a2dc-c2c4a3afd9d9',
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
              body: 'Cambridgeshire Metal Soap',
              votes_count: 49282,
            },
          ],
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
          name: 'Simon Ruecker',
        },
        {
          id: '5c739a8a-7d94-44c9-9af5-de027fde5486',
          options: [
            {
              id: '795fb3bc-9ac2-41b1-8f15-56e9d4b22171',
              body: 'hybrid Avon',
              votes_count: 2724,
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
              id: '6c764f1d-2be7-499a-8eb0-16eb14c52c5f',
              body: 'Kids',
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
              votes_count: 79203,
            },
            {
              id: '31ff9d7c-5a7c-4c55-90d9-63dcac070f6a',
              votes_count: 57556,
              body: 'Steel Developer Representative',
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
              id: 'fd6c88b4-f402-4733-a29a-1eff7d46487a',
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
              votes_count: 91980,
              body: 'dynamic',
            },
          ],
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
          name: 'Cristina Mosciski',
        },
      ],
    },
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
    caption: 'analyzing Delaware Frozen',
    user: {
      name: 'Kristopher Ritchie DDS',
      id: 'eb03499a-7dcf-45a3-bf32-ade0ee876d3d',
      profile_pic:
        'https://i.pinimg.com/564x/32/f2/43/32f24381b05fcf53d8088c98963fe326.jpg',
    },
  },
};
