import React from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import FileUploader from './FileUploader';
import type { IFileUploader } from './IFileUploader';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

export default {
  component: FileUploader,
  title: 'Atoms/FileUploader',
};

const Template: Story<IFileUploader.IProps> = (args): ReactElement => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <FileUploader {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  maxFiles: configPostCreation.maxUploadedFiles,
  onFileSuccess: (): boolean => true,
  entityType: 'option',
  lastFilesLength: 0,
};
