import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';
import * as ETextInput from './types/ETextInput';

describe('TextInput', () => {
  it('should render TextInput with DeleteIcon', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();

    userEvent.type(input, 'aa');

    const deleteIcon: TargetElement = screen.getByTestId('delete-icon');

    expect(input).toHaveValue('aa');
    expect(deleteIcon).toBeInTheDocument();
  });

  it('should render TextInput with variant [error]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Error}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-variant', 'error');
  });

  it('should render TextInput with variant [default]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-variant', 'default');
  });

  it('should render TextInput with variant [success]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Success}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-variant', 'success');
  });

  it('should render TextInput with input type [default]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-input-type', 'default');
  });

  it('should render TextInput with input type [left-icon]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.LeftIcon}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-input-type', 'left-icon');
  });

  it('should render TextInput with input type [prefix-dropdown]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.PrefixDropdown}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-input-type', 'prefix-dropdown');
  });

  it('should render TextInput with input type [prefix]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Prefix}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-input-type', 'prefix');
  });

  it('should render TextInput with input type [right-icon]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.RightIcon}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-input-type', 'right-icon');
  });

  it('should render TextInput with input type [choices]', () => {
    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Choices}
        variants={ETextInput.Variants.Default}
        disabled={false}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-input-type', 'choices');
  });
});
