import React from 'react';
import type { FC, ReactElement } from 'react';
import PlusCircle from '../../icons/plusCircle.svg';
import type { IOptionGroup } from './types/IOptionGroup';
import Option from '../Option/Option';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  id,
  options,
  onChangeOptionValueHandler,
  onClickDeleteOptionValueHandler,
  onBlurOptionHandler,
  addOptionHandler,
  deleteOptionHandler,
}): ReactElement => {
  const maximumOptionsLength = configPostCreation.maxOptions;
  const minimumOptionsLength = configPostCreation.minOptions;

  const isDeletable = (): boolean => {
    return options.length > minimumOptionsLength;
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2" data-testid="optionsWrapper">
          {options.map((option, index) => (
            <Option
              index={index}
              key={option.id}
              id={option.id}
              optionValue={option.body}
              onChangeOptionValueHandler={(optionId, e): void => {
                onChangeOptionValueHandler(optionId, id, e);
              }}
              onClickDeleteOptionValueHandler={(optionId): void => {
                onClickDeleteOptionValueHandler(optionId, id);
              }}
              onBlurOptionHandler={(optionId, e): void => {
                onBlurOptionHandler(optionId, id, e);
              }}
              deleteOptionHandler={(optionId): void => {
                deleteOptionHandler(optionId, id);
              }}
              deletable={isDeletable()}
            />
          ))}
        </div>
      </div>
      {options.length < maximumOptionsLength && (
        <div className="py-2.5">
          <button
            data-testid="addOptionBtn"
            type="button"
            className="text-accent cursor-pointer flex items-center self-start "
            onClick={(): void => {
              addOptionHandler(id);
            }}
          >
            <PlusCircle className="fill-accent mr-1 my-3xxs" />
            <span className="text-sm font-medium">Add choice</span>
          </button>
        </div>
      )}
    </>
  );
};

export default OptionGroup;
