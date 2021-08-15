import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UserInfo from './UserInfo';
import TextPollIcon from '../../icons/textPoll.svg';

describe('UserInfo snapshots', () => {
  it('should render avatar with filled variant if there is an image and isHidden={false}', () => {
    const tree = renderer
      .create(
        <UserInfo
          isHidden={false}
          subTitle="3 months ago"
          title="Ahmed Ayoub"
          profilePic="https://placeimg.com/640/480/any"
          variant="avatar"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render avatar with filled variant event if isHidden={true} but there is an image', () => {
    const tree = renderer
      .create(
        <UserInfo
          isHidden
          subTitle="3 months ago"
          title="Ahmed Ayoub"
          profilePic="https://placeimg.com/640/480/any"
          variant="avatar"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render avatar with anonymous variant if isHidden={true} with no image', () => {
    const tree = renderer
      .create(
        <UserInfo
          isHidden
          subTitle="3 months ago"
          title="Ahmed Ayoub"
          variant="avatar"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render avatar with notFilled variant if isHidden={false} with no image', () => {
    const tree = renderer
      .create(
        <UserInfo
          isHidden={false}
          subTitle="3 months ago"
          title="Ahmed Ayoub"
          variant="avatar"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Icon without avatar when passing variant={icon}', () => {
    const tree = renderer
      .create(
        <UserInfo
          isHidden={false}
          subTitle="3 months ago"
          title="Ahmed Ayoub"
          variant="icon"
        >
          <TextPollIcon />
        </UserInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('UserInfo RTL', () => {
  it('should display {Anonymous} as title if the post owner choose to hide his identity', () => {
    render(
      <UserInfo title="" variant="icon" isHidden subTitle="3 months ago" />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Anonymous');
  });

  it('should display a title if it is passed even if isHidden={ture}', () => {
    render(
      <UserInfo
        variant="icon"
        isHidden
        subTitle="3 months ago"
        title="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Ahmed Ayoub');
  });

  it('should display a title if it is passed and isHidden={false}', () => {
    render(
      <UserInfo
        variant="icon"
        isHidden={false}
        subTitle="3 months ago"
        title="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Ahmed Ayoub');
  });

  it('should display a title if it is passed and isHidden={false}', () => {
    render(
      <UserInfo
        variant="icon"
        isHidden={false}
        subTitle="3 months ago"
        title="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Ahmed Ayoub');
  });
});
