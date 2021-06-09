import React from 'react';
import type { FC, ReactElement } from 'react';
import DragIcon from '../../icons/drag.svg';
import DeleteIcon from '../../icons/delete.svg';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { ITextDefault } from './types/TextDefault';

const TextDefault: FC<ITextDefault.IProps> = ({
  id,
  letter = '#',
  deletable = false,
  placeholder,
  deleteInputHandler,
  register,
  reset,
}): ReactElement => {
  return (
    <div className="flex items-center" id={`option-${id}-box`}>
      <DragIcon className="mr-3" />
      <span className="flex-1">
        <TextInput
          id={id}
          variants={ETextInput.Variants.Default}
          inputType={ETextInput.InputType.Choices}
          letter={letter}
          placeholder={placeholder}
          disabled={false}
          reset={reset}
          {...register}
        />
      </span>
      {deletable ? (
        <DeleteIcon
          className="ml-3 cursor-pointer"
          onClick={deleteInputHandler}
        />
      ) : null}
    </div>
  );
};

export default TextDefault;
