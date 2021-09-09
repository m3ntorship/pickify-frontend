import React from 'react';
import renderer from 'react-test-renderer';
import ImgWithInfo from './ImgWithInfo';
import TextPoll from '../../icons/textPoll.svg';

describe('ImgWithInfo component', () => {
  it('should render ImgWithInfo parent component with text Hello', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <>Hello</>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render responsive ImgWithInfo parent component with text Hello when we pass isResponsive={true}', () => {
    const tree = renderer
      .create(
        <ImgWithInfo isResponsive>
          <>Hello</>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Image component', () => {
  it('should render Image with Avatar component with extra small profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="extra-small"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with Avatar component with small profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="small"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with Avatar component with medium profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="medium"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should render Image with Avatar component with large profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="large"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with Avatar component with extra large profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="extra-large"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with Avatar component with super large profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="super-large"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with Icon component with medium size', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image ImageSize="medium" ImageVariant="icon">
            <TextPoll />
          </ImgWithInfo.Image>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with not filled avatar component when we do not pass profile picture', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image ImageSize="medium" ImageVariant="avatar" />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with anonymous avatar component when we pass isHidden={true}', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="medium"
            ImageVariant="avatar"
            isHidden
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Image with filled avatar component when we pass profile picture even if when we pass isHidden={true}', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Image
            ImageSize="medium"
            ImageVariant="avatar"
            isHidden
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render responsive Image component when we pass isResponsive={true}', () => {
    const tree = renderer
      .create(
        <ImgWithInfo isResponsive>
          <ImgWithInfo.Image
            isResponsive
            ImageSize="medium"
            ImageVariant="avatar"
            profilePic="https://placeimg.com/640/480/any"
          />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Info component', () => {
  it('should render ImgWithInfo parent with Info component contains text Hello', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info>
            <>Hello</>
          </ImgWithInfo.Info>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render ImgWithInfo parent with responsive Info component when we pass isResponsive={true}', () => {
    const tree = renderer
      .create(
        <ImgWithInfo isResponsive>
          <ImgWithInfo.Info isResponsive>
            <>Hello</>
          </ImgWithInfo.Info>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Title component', () => {
  it('should render ImgWithInfo with Title component with small text', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info.Title titleSize="small">
            Hello
          </ImgWithInfo.Info.Title>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render ImgWithInfo with Title component with large text', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info.Title titleSize="large">
            Hello
          </ImgWithInfo.Info.Title>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render ImgWithInfo with Title component Anonymous text', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info.Title titleSize="small" />
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('SubTitle component', () => {
  it('should render ImgWithInfo with SubTitle component with small text', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info.SubTitle subTitleSize="small">
            Hello
          </ImgWithInfo.Info.SubTitle>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render ImgWithInfo with SubTitle component with medium text', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info.SubTitle subTitleSize="medium">
            Hello
          </ImgWithInfo.Info.SubTitle>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('MoreInfo component', () => {
  it('should render ImgWithInfo with MoreInfo component with Hello text', () => {
    const tree = renderer
      .create(
        <ImgWithInfo>
          <ImgWithInfo.Info.MoreInfo>
            <>Hello</>
          </ImgWithInfo.Info.MoreInfo>
        </ImgWithInfo>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
