import React, { useState, useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import type { IGetPosts } from '../../../api/IGetPosts';
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

const toasterHandler = (res: IGetPosts.IErrorData): void => {
  if (!res.error) {
    toast.success('your poll has been created successfully');
  } else {
    toast.error('Error has been occured!');
  }
};
const randomId = (): string => {
  const randomHelper = 10000000000;
  return `id_${Math.round(Math.random() * randomHelper)}`;
};

const PostCreation: FC<IPostCreation.IProps> = ({
  closeModalHandler,
}): ReactElement => {
  const zero = 0;
  // post creation global initial state setup
  const [postCreationGlobalState, setPostCreationGlobalState] =
    useState<IPostCreation.IState>(initialState);
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
      // setPostCreationGlobalState({
      //   ...postCreationGlobalState,
      //   imagePoll: newImagePoll,
      // });
    }
    return postCreationGlobalState.imagePoll;
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
        createPollPost({
          ...state,
          mediaCount: mediaCount.textPoll,
          ...textPoll,
        }).then((res) => {
          toasterHandler(res);
          console.log(res);
        }) as Promise<IGetPosts.IErrorData>;
        break;
      case EPollType.MiniSurvey:
        createPollPost({
          ...state,
          mediaCount: mediaCount.miniSurvey,
          ...miniSurvey,
        }).then((res) => {
          toasterHandler(res);
          console.log(res);
        }) as Promise<IGetPosts.IErrorData>;
        break;
      case EPollType.ImagePoll:
        createPollPost({
          ...state,
          mediaCount: mediaCount.imagePoll,
          ...transformFromOptionsToGroup(),
        }).then((res) => {
          toasterHandler(res);
          console.log(res);
        }) as Promise<IGetPosts.IErrorData>;
        break;
      default:
        break;
    }
    methods.reset();
    setPostCreationGlobalState({
      ...initialState,
      currentSelectedTab: postCreationGlobalState.currentSelectedTab,
    });
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
  const postButtonHandler = (): ReturnType<typeof setTimeout> => {
    return setTimeout(closeModalHandler, 200);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-white flex flex-col justify-between w-screen h-screen sm:w-auto sm:h-auto sm:max-h-33xl shadow-soft p-m rounded-md">
          <div>
            <CreatePostHeader
              profilePic=""
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
              postButtonIsDisabled={!methods.formState.isDirty}
              handleSubmitButtonClick={postButtonHandler}
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
