import type { ReactElement } from 'react';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import UploadingImage from './UploadingImage';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

const customRender = (ui: ReactElement): unknown => {
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return render(<Wrapper>{ui}</Wrapper>);
};

describe('UploadingImage', () => {
  it('should render Misc component when we pass invalid file', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const fileSizeInBytes = 10_000_000;
    Object.defineProperty(file, 'size', { value: fileSizeInBytes });

    customRender(
      <UploadingImage
        index={1}
        file={file}
        id="someId"
        entityType="option"
        handleVerticalThreeDotsClick={(): boolean => true}
      />,
    );

    const miscComponent = screen.findByTestId('misc-box');
    const subMsg = screen.findByTestId('sub-msg');

    await waitFor(async () => {
      expect(await miscComponent).toBeInTheDocument();
      expect(await subMsg).toHaveTextContent('Max size is 2 MB');
    });
  });

  it('should call setImagePollState function when we type something in the TextInput', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    const calledFiveTimes = 5;

    const optionChangeValueHandlerFn = jest.fn();

    customRender(
      <UploadingImage
        index={1}
        file={file}
        id="someId"
        entityType="option"
        handleVerticalThreeDotsClick={(): boolean => true}
      >
        <TextInput
          id="o1"
          inputType={ETextInput.InputType.Choices}
          variants={ETextInput.Variants.Default}
          value=""
          placeholder="Type caption (optional)"
          letter="A"
          onClickDeleteInputValueHandler={(): boolean => true}
          onChangeInputValueHandler={optionChangeValueHandlerFn}
          onBlurInputHandler={(): boolean => true}
        />
      </UploadingImage>,
    );

    const textInput: TargetElement = screen.getByTestId('text-input');

    userEvent.type(textInput, 'hello');

    expect(optionChangeValueHandlerFn).toHaveBeenCalledTimes(calledFiveTimes);
  });
});
