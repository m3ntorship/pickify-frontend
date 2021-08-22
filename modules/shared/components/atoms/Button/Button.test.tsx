import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import Button from './Button';
import * as EButton from './types/EButton';
import ArrowDownIcon from '../../icons/arrowDown.svg';

describe('Button component', () => {
  it('should render (large) button when we apply (large)', () => {
    const tree = renderer
      .create(
        <Button
          size={EButton.buttonSizeValues.LARGE}
          variant={EButton.buttonVariantValues.PRIMARY}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (MEDIUM) button when we apply (MEDIUM)', () => {
    const tree = renderer
      .create(
        <Button
          size={EButton.buttonSizeValues.MEDIUM}
          variant={EButton.buttonVariantValues.PRIMARY}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (small) button when we apply (small)', () => {
    const tree = renderer
      .create(
        <Button
          size={EButton.buttonSizeValues.SMALL}
          variant={EButton.buttonVariantValues.PRIMARY}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (primary) button when we apply primary', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.PRIMARY}
          size={EButton.buttonSizeValues.MEDIUM}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (secondary) button when we apply (secondary)', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.SECONDARY}
          size={EButton.buttonSizeValues.MEDIUM}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (text) button when we apply text', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.TEXT}
          size={EButton.buttonSizeValues.MEDIUM}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (disapled) button when we apply disapled', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.PRIMARY}
          size={EButton.buttonSizeValues.MEDIUM}
          disabled
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (righticon) button when we apply righticon', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.PRIMARY}
          size={EButton.buttonSizeValues.MEDIUM}
          rightIcon
        >
          <ArrowDownIcon />
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (lefticon) button when we apply lefticon', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.PRIMARY}
          size={EButton.buttonSizeValues.MEDIUM}
          leftIcon
        >
          <ArrowDownIcon />
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render (onlyicon)  button when we apply nothing', () => {
    const tree = renderer
      .create(
        <Button
          variant={EButton.buttonVariantValues.PRIMARY}
          size={EButton.buttonSizeValues.MEDIUM}
          onlyIcon
        >
          <ArrowDownIcon />
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test button component', () => {
  it('should be disabled (not active) ', () => {
    const { getByRole } = render(
      <Button
        variant={EButton.buttonVariantValues.PRIMARY}
        size={EButton.buttonSizeValues.MEDIUM}
        disabled
      />,
    );
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should run a function when clicked', () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <Button
        variant={EButton.buttonVariantValues.PRIMARY}
        size={EButton.buttonSizeValues.MEDIUM}
        onClick={mockFunction}
      />,
    );
    const button = getByText('Button');
    userEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});
