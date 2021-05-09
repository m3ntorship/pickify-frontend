import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Avatar from '.';

describe('Avatar', () => {
  it('renders with large size and filled variant', () => {
    const tree = renderer.create(<Avatar size="large" variant="filled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size and filled variant', () => {
    const tree = renderer.create(<Avatar size="medium" variant="filled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size and filled variant', () => {
    const tree = renderer.create(<Avatar size="small" variant="filled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with large size and anonymous variant', () => {
    const tree = renderer.create(<Avatar size="large" variant="anonymous" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size and anonymous variant', () => {
    const tree = renderer.create(<Avatar size="medium" variant="anonymous" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size and anonymous variant', () => {
    const tree = renderer.create(<Avatar size="small" variant="anonymous" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with large size and not filled variant', () => {
    const tree = renderer.create(<Avatar size="large" variant="notFilled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size and not filled variant', () => {
    const tree = renderer.create(<Avatar size="medium" variant="notFilled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size and not filled variant', () => {
    const tree = renderer.create(<Avatar size="small" variant="notFilled" />);
    expect(tree).toMatchSnapshot();
  });
});
