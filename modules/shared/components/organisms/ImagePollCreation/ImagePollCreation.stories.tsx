import { useState } from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import ImagePollCreation from './ImagePollCreation';
import type { IImagePollCreation } from './types/ImagePollCreation';
import postCreationInitialState from '../PostCreation/postCreationInitialState';
import type { IPostCreation } from '../PostCreation/types/IPostCreation';

export default {
  title: 'organisms/ImagePollCreation',
  component: ImagePollCreation,
};

const Template: Story<IImagePollCreation.IProps> = (args): ReactElement => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [postCreationGlobalState, setPostCreationGlobalState] =
    useState<IPostCreation.IState>(postCreationInitialState);

  return (
    <FormProvider {...methods}>
      <ImagePollCreation
        {...args}
        post={postCreationGlobalState.imagePoll}
        setPostCreationGlobalState={setPostCreationGlobalState}
        postCreationGlobalState={postCreationGlobalState}
      />
    </FormProvider>
  );
};

export const Default = Template.bind({});
