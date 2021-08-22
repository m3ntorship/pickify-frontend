import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ImgWithInfo from './ImgWithInfo';
import TextPollIcon from '../../icons/textPoll.svg';

describe('ImgWithInfo snapshots', () => {
  it('should render avatar with filled variant if there is an image and isHidden={false}', () => {
    const tree = renderer
      .create(
        <ImgWithInfo
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
        <ImgWithInfo
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
        <ImgWithInfo
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
        <ImgWithInfo
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
        <ImgWithInfo
          isHidden={false}
          subTitle="3 months ago"
          title="Ahmed Ayoub"
          variant="icon"
        >
          <TextPollIcon />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('ImgWithInfo RTL', () => {
  it('should display {Anonymous} as title if the post owner choose to hide his identity', () => {
    render(
      <ImgWithInfo title="" variant="icon" isHidden subTitle="3 months ago" />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Anonymous');
  });

  it('should display a title if it is passed even if isHidden={ture}', () => {
    render(
      <ImgWithInfo
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
      <ImgWithInfo
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
      <ImgWithInfo
        variant="icon"
        isHidden={false}
        subTitle="3 months ago"
        title="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Ahmed Ayoub');
  });
});
