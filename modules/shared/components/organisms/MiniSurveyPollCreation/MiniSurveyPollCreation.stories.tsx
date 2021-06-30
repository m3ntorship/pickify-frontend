import { useState } from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import MiniSurveyPollCreation from './MiniSurveyPollCreation';
import type { IMiniSurveyPollCreation } from './IMiniSurveyPollCreation';
import type { IPostCreation } from '../PostCreation/types/IPostCreation';
import postCreationInitialState from '../PostCreation/postCreationInitialState';

export default {
  title: 'organisms/MiniSurveyPollCreation',
  component: MiniSurveyPollCreation,
};

const Template: Story<IMiniSurveyPollCreation.IPorps> = (
  args,
): ReactElement => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [postCreationGlobalState, setPostCreationGlobalState] =
    useState<IPostCreation.IState>(postCreationInitialState);

  return (
    <FormProvider {...methods}>
      <MiniSurveyPollCreation
        {...args}
        post={postCreationGlobalState.miniSurvey}
        setPostCreationGlobalState={setPostCreationGlobalState}
        postCreationGlobalState={postCreationGlobalState}
      />
    </FormProvider>
  );
};

export const Default = Template.bind({});
