import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import Button from './index';

describe('Button component', () => {
  it('should render (large) button when we apply (large)', () => {
    const tree = renderer.create(<Button size="lg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (meduim) button when we apply (meduim)', () => {
    const tree = renderer.create(<Button size="md" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (small) button when we apply (small)', () => {
    const tree = renderer.create(<Button size="sm" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (primary) button when we apply primary', () => {
    const tree = renderer.create(<Button variant="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (secondary) button when we apply (secondary)', () => {
    const tree = renderer.create(<Button variant="secondary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (text) button when we apply text', () => {
    const tree = renderer.create(<Button variant="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (disapled) button when we apply disapled', () => {
    const tree = renderer.create(<Button disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (righticon) button when we apply righticon', () => {
    const tree = renderer.create(<Button rightIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (lefticon) button when we apply lefticon', () => {
    const tree = renderer.create(<Button leftIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (onlyicon)  button when we apply nothing', () => {
    const tree = renderer.create(<Button onlyIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test button component', () => {
  it('should be disabled (not active) ', () => {
    const { getByRole } = render(<Button disabled />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should run a function when clicked', () => {
    const mockFunction = jest.fn();
    const { getByText } = render(<Button onClick={mockFunction} />);
    const button = getByText('Button');
    userEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});
