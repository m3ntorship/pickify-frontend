import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageBox from './MessageBox';
import * as EMessageBoxType from './types/EMessageBox';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

describe('MessageBox', () => {
  const maxSize = configPostCreation.maxFileSizeInMegaByte;
  it('should render Error MessageBox', () => {
    render(
      <MessageBox
        type={EMessageBoxType.MessageBoxType.Error}
        msg="Image couldn’t be uploaded!"
        subMsg={`Max size is ${maxSize} MB`}
      />,
    );
    const msg = screen.getByRole('heading');
    const subMsg = screen.getByText(`Max size is ${maxSize} MB`);
    expect(msg.textContent).toEqual('Image couldn’t be uploaded!');
    expect(subMsg).toBeInTheDocument();
  });
  it('should render success MessageBox', () => {
    render(
      <MessageBox
        type={EMessageBoxType.MessageBoxType.Success}
        msg="Congratulations!"
        subMsg="Subtext"
      />,
    );
    const msg = screen.getByRole('heading');
    const subMsg = screen.getByText('Subtext');
    expect(msg.textContent).toEqual('Congratulations!');
    expect(subMsg).toBeInTheDocument();
  });
});
