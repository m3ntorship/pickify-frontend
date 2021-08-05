import React, { useState, useEffect } from 'react';
import type { FC, ReactElement, ReactText } from 'react';
import { FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import type { IpostCreationAPI } from '../../../types/postCreation/IPostCreationAPI';
import CreatePostHeader from '../../molecules/CreatePostHeader/CreatePostHeader';
import { tabGroupData } from '../../molecules/TabGroup/data';
import TextPollCreation from '../TextPollCreation/TextPollCreation';
import ImagePollCreation from '../ImagePollCreation/ImagePollCreation';
import MiniSurveyPollCreation from '../MiniSurveyPollCreation/MiniSurveyPollCreation';
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';
import type { IPostCreation } from './types/IPostCreation';
import { EPollType } from './types/EPollType';
import initialState from './postCreationInitialState';
import { createPollPost } from '../../../api/createPollPost';
import { useRedirect } from '../../../hooks/useRedirect/useRedirect';
import { useAuth } from '../../../../../context/AuthUserContext/AuthUserContext';
import { logoutUser } from '../../../../../context/AuthUserContext/api/authApi';

const toasterHandler = (res: IpostCreationAPI.ICreatePollReturnedRes): void => {
  if (res.statusCode >= 400 || res.statusCode === 0) {
    res.errors.forEach((err) => toast.error(err));
  } else {
    toast.success('Your poll has been created successfully!');
  }
};

const PostCreation: FC<IPostCreation.IProps> = ({
  closeModalHandler,
  postCreationGlobalState,
  setPostCreationGlobalState,
  useFormConfig,
  creating,
  setCreating,
}): ReactElement => {
  const { user } = useAuth();
  const zero = 0;
  // post creation global initial state setup
  const { redirectToLoginPage } = useRedirect();
  const [mediaCount, setMediaCount] = useState<{
    imagePoll: number;
    textPoll: number;
    miniSurvey: number;
  }>({ imagePoll: 0, textPoll: 0, miniSurvey: 0 });

  function getMediaCount(post: IPostCreation.IPostStructure): number {
    return (
      post.media.length +
      post.groups
        .map((group) => group.media.length)
        .reduce((prev, current) => prev + current, zero) +
      post.groups
        .map((group) =>
          group.options
            .map((option) => option.media.length)
            .reduce((prev, current) => prev + current, zero),
        )
        .reduce((prev, current) => prev + current, zero)
    );
  }
  useEffect(() => {
    setMediaCount({
      textPoll: getMediaCount(postCreationGlobalState.textPoll),
      imagePoll: getMediaCount(postCreationGlobalState.imagePoll),
      miniSurvey: getMediaCount(postCreationGlobalState.miniSurvey),
    });
  }, [
    postCreationGlobalState.imagePoll.media,
    postCreationGlobalState.imagePoll.groups,
    postCreationGlobalState.textPoll.media,
    postCreationGlobalState.textPoll.groups,
    postCreationGlobalState.miniSurvey.media,
    postCreationGlobalState.miniSurvey.groups,
  ]);
  const transformFromOptionsToGroup = (): IPostCreation.IPostStructure => {
    const one = 1;
    const imagePollGroup = postCreationGlobalState.imagePoll.groups[zero];
    if (imagePollGroup.options.length === one) {
      const firstOption = imagePollGroup.options[zero];
      return {
        ...postCreationGlobalState.imagePoll,
        groups: postCreationGlobalState.imagePoll.groups.map((group) => {
          return {
            ...group,
            name: firstOption.body,
            media: firstOption.media,
            options: [
              { id: '', body: 'yes', media: [] },
              { id: '', body: 'no', media: [] },
            ],
          };
        }),
      };
    }
    return postCreationGlobalState.imagePoll;
  };

  // hook-form setup
  // const methods = useForm({
  //   mode: 'onSubmit',
  //   reValidateMode: 'onChange',
  // });
  const toastId = React.useRef<ReactText>();
  const onSubmit = (): void => {
    const {
      privacy,
      isHiddenIdentity,
      currentSelectedTab,
      textPoll,
      miniSurvey,
    } = postCreationGlobalState;
    const state = {
      createdAt: new Date().toISOString(),
      privacy,
      isHiddenIdentity,
      currentSelectedTab,
    };
    let res: IpostCreationAPI.ICreatePollReturnedRes = {
      data: null,
      errors: [],
      statusCode: 0,
    };
    (async function (): Promise<void> {
      setCreating(true);
      toastId.current = toast.warning('Please wait while creating the poll', {
        autoClose: false,
      });
      switch (currentSelectedTab) {
        case EPollType.TextPoll:
          res = await createPollPost({
            ...state,
            mediaCount: mediaCount.textPoll,
            ...textPoll,
          });
          break;
        case EPollType.MiniSurvey:
          res = await createPollPost({
            ...state,
            mediaCount: mediaCount.miniSurvey,
            ...miniSurvey,
          });
          break;
        case EPollType.ImagePoll:
          res = await createPollPost({
            ...state,
            mediaCount: mediaCount.imagePoll,
            ...transformFromOptionsToGroup(),
          });
          break;
        default:
          break;
      }
      toast.dismiss(toastId.current);
      setCreating(false);
      toasterHandler(res);
      closeModalHandler();
      if (res.statusCode === EStatusCode.Unauthorized) {
        await logoutUser();
        redirectToLoginPage();
      }
      window.location.reload();
      // reset
      useFormConfig.reset();
      setPostCreationGlobalState({
        ...initialState,
        currentSelectedTab: postCreationGlobalState.currentSelectedTab,
      });
    })() as unknown as Promise<void>;
  };
  const onError = (): void => {
    toast.error('Please, check the errors, and try again.');
  };
  // Header and footer events handlers
  const handleChangeTabsValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      currentSelectedTab: e.target.value,
    });
  };

  const handleTheRadioButtonOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      isHiddenIdentity: e.target.checked,
    });
  };

  const handlePrivacySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      privacy: e.target.value,
    });
  };

  return (
    <FormProvider {...useFormConfig}>
      <form onSubmit={useFormConfig.handleSubmit(onSubmit, onError)}>
        <div className="bg-white flex flex-col justify-between w-screen h-screen sm:w-auto sm:h-auto sm:max-h-33xl shadow-soft p-m rounded-md">
          <div>
            <CreatePostHeader
              profilePic={user?.userImg ?? ''}
              checkedValue={postCreationGlobalState.currentSelectedTab}
              tabsData={tabGroupData()}
              onTabChangeHandler={handleChangeTabsValue}
            />
          </div>
          <div className="overflow-y-scroll flex-grow scrollbar scrollbar-thumb-primary-shd3 scrollbar-track-white-DEFAULT -mx-4 px-4">
            {postCreationGlobalState.currentSelectedTab ===
              EPollType.TextPoll && (
              <TextPollCreation
                post={postCreationGlobalState.textPoll}
                postCreationGlobalState={postCreationGlobalState}
                setPostCreationGlobalState={setPostCreationGlobalState}
              />
            )}
            {postCreationGlobalState.currentSelectedTab ===
              EPollType.ImagePoll && (
              <ImagePollCreation
                post={postCreationGlobalState.imagePoll}
                postCreationGlobalState={postCreationGlobalState}
                setPostCreationGlobalState={setPostCreationGlobalState}
              />
            )}
            {postCreationGlobalState.currentSelectedTab ===
              EPollType.MiniSurvey && (
              <MiniSurveyPollCreation
                post={postCreationGlobalState.miniSurvey}
                postCreationGlobalState={postCreationGlobalState}
                setPostCreationGlobalState={setPostCreationGlobalState}
              />
            )}
          </div>
          <div>
            <PostFooterCreation
              postButtonIsDisabled={
                !useFormConfig.formState.isDirty || creating
              }
              handleSubmitButtonClick={(): boolean => true}
              handleCancelButtonClick={closeModalHandler}
              handleTheRadioButtonOnChange={handleTheRadioButtonOnChange}
              handlePrivacySelectChange={handlePrivacySelectChange}
              togglerIsChecked={postCreationGlobalState.isHiddenIdentity}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default PostCreation;
