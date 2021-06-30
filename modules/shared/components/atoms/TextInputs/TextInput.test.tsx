import React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import type { TargetElement } from '@testing-library/user-event';
import TextInput from './TextInput';
import * as ETextInput from './types/ETextInput';

describe('TextInput', () => {
  it('should render TextInput with DeleteIcon when we pass filled value', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();

    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value="aaa"
        placeholder="Type something..."
        onChangeInputValueHandler={onChange}
        onClickDeleteInputValueHandler={onClick}
        onBlurInputHandler={(): boolean => true}
      />,
    );

    const deleteIcon: TargetElement = screen.getByTestId('delete-icon');

    expect(deleteIcon).toBeInTheDocument();
  });

  it('should call onChange Handler', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const calledTwice = 2;

    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        onChangeInputValueHandler={onChange}
        onClickDeleteInputValueHandler={onClick}
        onBlurInputHandler={(): boolean => true}
        placeholder="Type something..."
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    userEvent.type(input, 'aa');

    expect(onChange).toHaveBeenCalledTimes(calledTwice);
  });

  it('should call onClick Handler', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const calledOnce = 1;

    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value="aaa"
        placeholder="Type something..."
        onChangeInputValueHandler={onChange}
        onClickDeleteInputValueHandler={onClick}
        onBlurInputHandler={(): boolean => true}
      />,
    );

    const input: TargetElement = screen.getByTestId('delete-icon');

    userEvent.click(input);

    expect(onClick).toHaveBeenCalledTimes(calledOnce);
  });

  it('should call onBlur Handler', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const onBlur = jest.fn();
    const calledOnce = 1;

    render(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={onChange}
        onClickDeleteInputValueHandler={onClick}
        onBlurInputHandler={onBlur}
      />,
    );

    const input: TargetElement = screen.getByTestId('text-input');

    userEvent.click(input);
    userEvent.tab();

    expect(onBlur).toHaveBeenCalledTimes(calledOnce);
  });

  it('should render TextInput with variant [error]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Error}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with variant and input type [default]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with variant [success]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Default}
        variants={ETextInput.Variants.Success}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with input type [left-icon]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.LeftIcon}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with input type [prefix-dropdown]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.PrefixDropdown}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with input type [prefix]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Prefix}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with input type [right-icon]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.RightIcon}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render TextInput with input type [choices]', () => {
    const funHandler = jest.fn();

    const tree = renderer.create(
      <TextInput
        label="label"
        id="my label"
        inputType={ETextInput.InputType.Choices}
        variants={ETextInput.Variants.Default}
        disabled={false}
        value=""
        placeholder="Type something..."
        onChangeInputValueHandler={funHandler}
        onClickDeleteInputValueHandler={funHandler}
        onBlurInputHandler={(): boolean => true}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
