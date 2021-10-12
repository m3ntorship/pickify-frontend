import { useState } from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import TextPollCreation from './TextPollCreation';
import type { ITextPollCreation } from './types/ITextPollCreation';
import postCreationInitialState from '../PostCreation/postCreationInitialState';
import type { IPostCreation } from '../PostCreation/types/IPostCreation';

export default {
  title: 'organisms/TextPollCreation',
  component: TextPollCreation,
};

const Template: Story<ITextPollCreation.IProps> = (args): ReactElement => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [postCreationGlobalState, setPostCreationGlobalState] =
    useState<IPostCreation.IState>(postCreationInitialState);

  return (
    <FormProvider {...methods}>
      <TextPollCreation
        {...args}
        post={postCreationGlobalState.textPoll}
        setPostCreationGlobalState={setPostCreationGlobalState}
        postCreationGlobalState={postCreationGlobalState}
      />
    </FormProvider>
  );
};

export const Default = Template.bind({});
