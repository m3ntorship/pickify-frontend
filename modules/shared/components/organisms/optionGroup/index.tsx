import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IOptionGroup } from './IOptionGroupl';
import TextPoll from '../../atoms/textPoll/index';
import styles from './OptionGroup.module.css';

const OptionGroup: FC<IOptionGroup.IProps> = (): ReactElement => {
  const apiData = {
    created_at: '2002-09-16T06:51:54.262Z',
    is_hidden: false,
    id: '93ac4b90-8d08-4f15-9c33-7b037ac3a4b6',
    type: 'text poll',
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

  const indexOfArray = 0;
  return (
    <>
      <div>
        {apiData.options_groups.groups[indexOfArray].options.map((option) => {
          return (
            <div className={styles['container-for-text-poll']} key={option.id}>
              <TextPoll
                option={option.body}
                id={option.id}
                onOptionClick={(): void => undefined}
                showResult={false}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default OptionGroup;
