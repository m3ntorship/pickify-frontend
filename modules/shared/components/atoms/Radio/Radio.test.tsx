import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '.';

describe('Testing Radio with snapshot', () => {
  it('Testing Radio with required props', () => {
    const tree = renderer
      .create(
        <Radio
          size="default"
          name="laptops"
          id="dell"
          value="dell"
          defaultChecked={false}
          onChange={(): string => {
            return 'test';
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Radio with required and optional props', () => {
    const tree = renderer
      .create(
        <Radio
          size="small"
          name="laptops"
          id="dell"
          value="dell"
          defaultChecked={false}
          onChange={(): string => {
            return 'test';
          }}
          disabled
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Radio with RTL', () => {
  it('Expect Radio is not to be checked', () => {
    const { getByTestId } = render(
      <Radio
        size="default"
        name="laptops"
        id="dell"
        value="dell"
        defaultChecked={false}
        onChange={(): string => {
          return 'test';
        }}
      />,
    );
    expect(getByTestId('Radio')).not.toBeChecked();
  });
  it('Expect Radio is checked when defaultChecked is true', () => {
    const { getByTestId } = render(
      <Radio
        size="default"
        name="laptops"
        id="dell"
        value="dell"
        defaultChecked
        onChange={(): string => {
          return 'test';
        }}
      />,
    );
    expect(getByTestId('Radio')).toBeChecked();
  });
  it('Expect Radio is checked after clicking', () => {
    const { getByTestId } = render(
      <Radio
        size="default"
        name="laptops"
        id="dell"
        value="dell"
        defaultChecked={false}
        onChange={(): string => {
          return 'test';
        }}
      />,
    );
    userEvent.click(getByTestId('Radio'));
    expect(getByTestId('Radio')).toBeChecked();
  });
  it('Expect Radio is disabled', () => {
    const { getByTestId } = render(
      <Radio
        size="default"
        name="laptops"
        id="dell"
        value="dell"
        defaultChecked={false}
        onChange={(): string => {
          return 'test';
        }}
        disabled
      />,
    );
    expect(getByTestId('Radio')).toBeDisabled();
  });
  it('Expect onChange is called once', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Radio
        size="default"
        name="laptops"
        id="dell"
        value="dell"
        defaultChecked={false}
        onChange={handleChange}
      />,
    );
    userEvent.click(getByTestId('Radio'));
    expect(handleChange).toHaveBeenCalled();
  });
});
