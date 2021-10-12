import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import Box from '../../../shared/components/atoms/Box/Box';
import PostCreation from '../../../shared/components/organisms/PostCreation/PostCreation';
import Modal from '../../../shared/components/organisms/Modal/Modal';
import TextInput from '../../../shared/components/atoms/TextInputs/TextInput';
import * as ETextInput from '../../../shared/components/atoms/TextInputs/types/ETextInput';
import Avatar from '../../../shared/components/atoms/Avatar/Avatar';
import styles from './NewPost.module.css';
import initialState from '../../../shared/components/organisms/PostCreation/postCreationInitialState';
import type { IPostCreation } from '../../../shared/components/organisms/PostCreation/types/IPostCreation';
import { useAuth } from '../../../../context/AuthUserContext/AuthUserContext';

const NewPost = (): ReactElement => {
  const { user } = useAuth();

  const [creating, setCreating] = useState<boolean>(false);

  const [postCreationGlobalState, setPostCreationGlobalState] =
    useState<IPostCreation.IState>(initialState);

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (): void => {
    setShowModal(true);
  };

  const closeModalHandler = (): void => {
    setShowModal(false);
  };

  const useFormConfig = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const avatarVariant = user?.userImg ? 'filled' : 'notFilled';

  return (
    <>
      <Box isWhiteColor classes="mb-6">
        <Box.Body>
          <div className="flex">
            <div className="mr-4">
              <Avatar
                size="medium"
                variant={avatarVariant}
                profilePic={user?.userImg ?? ''}
              />
            </div>
            <div className="relative flex w-full">
              <div
                className={styles['input-placeholder']}
                onClick={showModalHandler}
                data-testid="post-creation-input"
                role="button"
                aria-hidden
              />
              <TextInput
                variants={ETextInput.Variants.Default}
                inputType={ETextInput.InputType.Default}
                id="id_1"
                value=""
                placeholder="What do you want to ask about?"
                onBlurInputHandler={(): boolean => true}
                onChangeInputValueHandler={(): boolean => true}
                onClickDeleteInputValueHandler={(): boolean => true}
              />
            </div>
          </div>
        </Box.Body>
      </Box>
      {showModal && (
        <Modal closeModalHandler={closeModalHandler}>
          <PostCreation
            closeModalHandler={closeModalHandler}
            postCreationGlobalState={postCreationGlobalState}
            setPostCreationGlobalState={setPostCreationGlobalState}
            useFormConfig={useFormConfig}
            creating={creating}
            setCreating={setCreating}
          />
        </Modal>
      )}
    </>
  );
};

export default NewPost;
