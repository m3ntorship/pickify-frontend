import React from 'react';
import * as renderer from 'react-test-renderer';
import { EPostType } from '../../../types/postFeed/EPostType';
import CreatePostHeader from './CreatePostHeader';
import { tabGroupData } from '../TabGroup/data';

describe('CreatePostHeader', () => {
  it('should render three tabs with filled avatar', () => {
    const onTabChangeHandler = jest.fn();

    const tree = renderer
      .create(
        <CreatePostHeader
          tabsData={tabGroupData()}
          checkedValue={EPostType.ImagePoll}
          onTabChangeHandler={onTabChangeHandler}
          profilePic="https://images.unsplash.com/photo-1620577610365-86c411bad78d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render three tabs with notFilled avatar', () => {
    const onTabChangeHandler = jest.fn();

    const tree = renderer
      .create(
        <CreatePostHeader
          tabsData={tabGroupData()}
          checkedValue={EPostType.ImagePoll}
          onTabChangeHandler={onTabChangeHandler}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
