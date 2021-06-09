import React from 'react';
import * as renderer from 'react-test-renderer';
import CreatePostHeader from './CreatePostHeader';
import { tabGroupData } from '../TabGroup/data';

describe('CreatePostHeader', () => {
  it('should render three tabs with filled avatar', () => {
    const changeValHandler = jest.fn();

    const tree = renderer
      .create(
        <CreatePostHeader
          tabsData={tabGroupData()}
          checkedValue="Image Poll"
          changeValHandler={changeValHandler}
          profilePic="https://images.unsplash.com/photo-1620577610365-86c411bad78d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render three tabs with notFilled avatar', () => {
    const changeValHandler = jest.fn();

    const tree = renderer
      .create(
        <CreatePostHeader
          tabsData={tabGroupData()}
          checkedValue="Image Poll"
          changeValHandler={changeValHandler}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
