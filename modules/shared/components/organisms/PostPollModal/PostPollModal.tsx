import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import PostCreation from '../PostCreation/PostCreation';

const PostPollModal: FC = (): ReactElement => {
  const [active, setActive] = useState(false);
  const inputHandler = (): void => {
    setActive(true);
  };

  return (
    <>
      <div className="flex justify-center relative">
        <div
          aria-hidden="true"
          onClick={inputHandler}
          className="misc-box bg-white shadow-dark rounded-md flex items-center p-m mb-10"
        >
          <div className="mr-4">
            <Avatar size="medium" variant="anonymous" />
          </div>
          <TextInput
            variants={ETextInput.Variants.Default}
            inputType={ETextInput.InputType.Default}
            id="1"
            onChange={(): undefined => undefined}
            value=""
            placeholder="What do you want to ask about?"
            onClick={(): undefined => undefined}
          />
        </div>
        {active ? (
          <>
            <div
              className="absolute z-10 top-0 left-0 w-full h-screen bg-dark bg-opacity-50"
              onClick={(): void => {
                setActive(false);
              }}
              aria-hidden="true"
            />
            <div className="z-20 absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-0.5  transition-all duration-200 ease-out">
              <PostCreation />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default PostPollModal;
