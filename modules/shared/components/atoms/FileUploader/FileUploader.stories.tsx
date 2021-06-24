import React from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import FileUploader from './FileUploader';
import type { IFileUploader } from './IFileUploader';

export default {
  component: FileUploader,
  title: 'Atoms/FileUploader',
};

const Template: Story<IFileUploader.IProps> = (args): ReactElement => (
  <FileUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  maxFiles: 4,
  onFileSuccess: (): boolean => true,
  onFileError: (): boolean => true,
  onMaxFilesError: (): boolean => true,
};
