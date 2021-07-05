import React, { useState, useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import type { IGetPosts } from '@modules/shared/api/IGetPosts';
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

const randomId = (): string => {
  const randomHelper = 10000000000;
  return `id_${Math.round(Math.random() * randomHelper)}`;
};

const PostCreation: FC = (): ReactElement => {
  // post creation global initial state setup
  const [postCreationGlobalState, setPostCreationGlobalState] =
    useState<IPostCreation.IState>(initialState);
  console.log(postCreationGlobalState);
  useEffect(() => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...initialState.miniSurvey,
        groups: [
          {
            id: randomId(),
            name: '',
            options: [
              { id: randomId(), body: '', media: [] },
              { id: randomId(), body: '', media: [] },
            ],
            media: [],
          },
        ],
        media: [],
      },
      textPoll: {
        ...initialState.textPoll,
        groups: [
          {
            id: randomId(),
            name: 'Group 0',
            options: [
              { id: randomId(), body: '', media: [] },
              { id: randomId(), body: '', media: [] },
            ],
            media: [],
          },
        ],
        media: [],
      },
      imagePoll: {
        ...initialState.imagePoll,
        groups: [
          {
            id: randomId(),
            name: 'Group 0',
            options: [],
            media: [],
          },
        ],
        media: [],
      },
    });
  }, []);

  const transformFromOptionsToGroup = (): void => {
    const zero = 0;
    const one = 1;
    const imagePollGroup = postCreationGlobalState.imagePoll.groups[zero];
    if (imagePollGroup.options.length === one) {
      const firstOption = imagePollGroup.options[zero];
      setPostCreationGlobalState({
        ...postCreationGlobalState,
        imagePoll: {
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
        },
      });
    }
  };

  // hook-form setup
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const onSubmit = (): void => {
    const {
      privacy,
      isHiddenIdentity,
      currentSelectedTab,
      textPoll,
      miniSurvey,
      // imagePoll,
    } = postCreationGlobalState;
    const state = {
      createdAt: new Date().toISOString(),
      privacy,
      isHiddenIdentity,
      currentSelectedTab,
    };
    switch (currentSelectedTab) {
      case EPollType.TextPoll:
        createPollPost({ ...state, ...textPoll }).then((res) => {
          console.log(res);
        }) as Promise<IGetPosts.IErrorData>;
        break;
      case EPollType.MiniSurvey:
        createPollPost({ ...state, ...miniSurvey }).then((res) => {
          console.log(res);
        }) as Promise<IGetPosts.IErrorData>;
        break;
      case EPollType.ImagePoll:
        // createPollPost({ ...state, ...imagePoll }).then((res) => {
        //   console.log(res);
        // }) as Promise<IGetPosts.IErrorData>;
        transformFromOptionsToGroup();
        break;
      default:
        break;
    }
    setPostCreationGlobalState(initialState);
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-white shadow-soft mb-6 p-m rounded-md">
          <CreatePostHeader
            profilePic=""
            checkedValue={postCreationGlobalState.currentSelectedTab}
            tabsData={tabGroupData()}
            onTabChangeHandler={handleChangeTabsValue}
          />

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
          <PostFooterCreation
            postButtonIsDisabled={!methods.formState.isDirty}
            handleSubmitButtonClick={(): boolean => true}
            handleCancelButtonClick={(): boolean => true}
            handleTheRadioButtonOnChange={handleTheRadioButtonOnChange}
            handlePrivacySelectChange={handlePrivacySelectChange}
            togglerIsChecked={postCreationGlobalState.isHiddenIdentity}
          />
        </div>
      </form>
    </FormProvider>
  );
};
export default PostCreation;
