import React from 'react';
import * as renderer from 'react-test-renderer';
import ImagePoll from '../../icons/imagePoll.svg';
import Tab from './Tab';

describe('Tab', () => {
  it('should render tab with default status', () => {
    const changeValHandler = jest.fn();

    const tree = renderer
      .create(
        <Tab
          checkedValue="Image Poll"
          changeValHandler={changeValHandler}
          value="Mini survey"
          id="anyid"
          svg={<ImagePoll />}
          content="Mini survey"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render tab wit only label status', () => {
    const changeValHandler = jest.fn();

    const tree = renderer
      .create(
        <Tab
          checkedValue="Image Poll"
          changeValHandler={changeValHandler}
          value="Mini survey"
          id="anyid"
          onlyLabel
          content="Mini survey"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render tab with disabled status', () => {
    const changeValHandler = jest.fn();

    const tree = renderer
      .create(
        <Tab
          checkedValue="Image Poll"
          changeValHandler={changeValHandler}
          value="Mini survey"
          id="anyid"
          svg={<ImagePoll />}
          disabled
          content="Mini survey"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render tab with checked status', () => {
    const changeValHandler = jest.fn();

    const tree = renderer
      .create(
        <Tab
          checkedValue="Image Poll"
          changeValHandler={changeValHandler}
          value="Image Poll"
          id="anyid"
          svg={<ImagePoll />}
          content="Image Poll"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
