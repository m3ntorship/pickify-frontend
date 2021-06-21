import React, { useState, useEffect } from 'react';
import type { FC, ReactElement, ChangeEvent, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';
import { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import OptionGroups from '../../molecules/OptionGroups/OptionGroups';
import TextInput from '../../atoms/TextInputs/TextInput';
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { IMiniSurveyPollCreation } from './IMiniSurveyPollCreation';
import type { IOptionGroup } from '../../molecules/OptionGroup/types/IOptionGroup';
import ThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import FileUploader from '../../atoms/FileUploader/FileUploader';
import Misc from '../../molecules/Misc/Misc';
import { MiscType } from '../../molecules/Misc/types/EMisc';
import type { IGetPosts } from '../../../api/IGetPosts';

const MiniSurveyPollCreation: FC<IMiniSurveyPollCreation.IProps> = ({
  createMiniSurveyPollPost,
}): ReactElement => {
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };
  const zero = 0;
  const [miniSurveyState, setMiniSurveyState] =
    useState<IMiniSurveyPollCreation.IState>({
      postType: PostCreationRequestTypeEnum.MiniSurvey,
      postCaption: { id: 'id_123181239', value: '' },
      groups: [
        {
          id: randomId(),
          name: '',
          options: [
            { id: randomId(), body: '' },
            { id: randomId(), body: '' },
          ],
        },
      ],
      hiddenIdentity: false,
      privacy: 'friends',
      image: '',
    });

  const [imageFiles, setImageFiles] = useState<IUploadedFiles.IImagesData[]>([
    {
      error: true,
      file: new File(['hello'], 'hello.png', { type: 'image/png' }),
      message: '',
      imgCaption: '',
      imgId: 'id_1212312',
    },
  ]);
  const [errorData, setErrorData] = useState<IGetPosts.IErrorData>({
    error: false,
    message: '',
    errorCode: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitted },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });

  const onError = (): boolean => {
    return true;
  };
  const onSubmit = async (): Promise<boolean> => {
    if (imageFiles[zero].error) {
      return onError();
    }
    setLoading(true);
    const data: IGetPosts.IErrorData = await createMiniSurveyPollPost(
      miniSurveyState,
    );
    setLoading(false);
    setErrorData({
      error: data.error,
      message: data.message,
      errorCode: data.errorCode,
    });
    return true;
  };

  const variantMessage = (optionId: string): ETextInput.Variants => {
    if (errors[optionId]) {
      return ETextInput.Variants.Error;
    }
    if (dirtyFields[optionId]) {
      return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };

  const changeCaptionInputValueHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      postCaption: {
        ...miniSurveyState.postCaption,
        value: e.target.value,
      },
    });
  };
  const captionInputRegister = {
    ...register('id_123181239', {
      required: {
        value: true,
        message: 'This field is required',
      },
      minLength: { value: 3, message: 'Minimum letters is 3' },
    }),
  };

  const handleTheRadioButtonOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      hiddenIdentity: e.target.checked,
    });
  };

  const handlePrivacySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setMiniSurveyState({ ...miniSurveyState, privacy: e.target.value });
  };

  const addGroupHandler = (): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      groups: [
        ...miniSurveyState.groups,
        {
          id: randomId(),
          name: '',
          options: [
            { id: randomId(), body: '' },
            { id: randomId(), body: '' },
          ],
        },
      ],
    });
  };

  const deleteGroupHandler = (groupId: string): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      groups: miniSurveyState.groups.filter((group) => group.id !== groupId),
    });
  };

  const setOptionsInGroup = (
    options: IOptionGroup.IOption[],
    groupId: string,
  ): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      groups: miniSurveyState.groups.map((group) => {
        if (groupId === group.id) {
          return { ...group, options };
        }
        return group;
      }),
    });
  };
  useEffect(() => {
    if (!imageFiles[zero].error) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFiles[zero].file as Blob);
      fileReader.onload = (): void => {
        setMiniSurveyState({
          ...miniSurveyState,
          image: fileReader.result as string,
        });
      };
    }
  }, [imageFiles]);

  return (
    <>
      <div className="space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          {loading ? (
            'loading...'
          ) : (
            <>
              {errorData.error ? (
                <Misc
                  type={MiscType.Error}
                  msg="failed to create your post :("
                  subMsg={errorData.message}
                />
              ) : (
                <>
                  {errorData.message && (
                    <Misc
                      type={MiscType.Success}
                      msg="success"
                      subMsg={errorData.message}
                    />
                  )}
                </>
              )}
            </>
          )}
          <TextInput
            id="id_123181239"
            value={miniSurveyState.postCaption.value}
            variants={
              isSubmitted
                ? variantMessage('id_123181239')
                : ETextInput.Variants.Default
            }
            inputType={ETextInput.InputType.Default}
            placeholder="What do you want  to ask about?"
            disabled={false}
            {...captionInputRegister}
            /* eslint-disable @typescript-eslint/no-floating-promises */
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              changeCaptionInputValueHandler(e);
              captionInputRegister.onChange(e);
            }}
            onClick={(): void => {
              setMiniSurveyState({
                ...miniSurveyState,
                postCaption: {
                  ...miniSurveyState.postCaption,
                  value: '',
                },
              });
              reset({ id_123181239: '' });
            }}
            /* eslint-disable @typescript-eslint/no-floating-promises */
            onBlur={(e: FocusEvent<HTMLInputElement>): void => {
              captionInputRegister.onBlur(e);
              setMiniSurveyState({
                ...miniSurveyState,
                postCaption: {
                  ...miniSurveyState.postCaption,
                  value: e.target.value,
                },
              });
            }}
          />
          <>
            {miniSurveyState.image ? (
              <div className="relative">
                <button
                  type="button"
                  className="absolute z-50 rounded-full focus:outline-none right-4 top-4 bg-white h-8 w-8 flex justify-center items-center cursor-pointer"
                >
                  <ThreeDotsIcon className="fill-dark-grey w-4 h-4" />
                </button>
                <img
                  alt="mini survey"
                  src={miniSurveyState.image}
                  width={300}
                  height={300}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            ) : (
              imageFiles[zero].error && (
                <Misc
                  msg="Image couldn’t be uploaded!"
                  subMsg={imageFiles[zero].message}
                  type={MiscType.Error}
                />
              )
            )}
            {!miniSurveyState.image && (
              <FileUploader
                register={register}
                files={imageFiles}
                setFiles={setImageFiles}
                maxFiles={1}
              />
            )}
          </>
          <OptionGroups
            groups={miniSurveyState.groups}
            register={register}
            isSubmitted={isSubmitted}
            reset={reset}
            errors={errors}
            dirtyFields={dirtyFields}
            variantMessage={variantMessage}
            addOptionGroup={addGroupHandler}
            deleteOptionGroup={deleteGroupHandler}
            setOptionsInGroup={setOptionsInGroup}
            miniSurveyState={miniSurveyState}
            setMiniSurveyState={setMiniSurveyState}
          />
          <PostFooterCreation
            postButtonIsDisabled={false}
            handleSubmitButtonClick={(): void => {
              console.log('post button clicked');
            }}
            handleCancelButtonClick={(): void => {
              console.log('cancel button clicked');
            }}
            handleTheRadioButtonOnChange={handleTheRadioButtonOnChange}
            handlePrivacySelectChange={handlePrivacySelectChange}
            togglerIsChecked={miniSurveyState.hiddenIdentity}
          />
        </form>
      </div>
    </>
  );
};

export default MiniSurveyPollCreation;
