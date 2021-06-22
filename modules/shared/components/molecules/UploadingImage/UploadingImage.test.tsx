import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import UploadingImage from './UploadingImage';
import type { ICreateImagePoll } from '../../organisms/CreateImagePoll/ICreateImagePoll';

describe('UploadingImage', () => {
  it('should render Misc component when we pass error={true}', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const imagePollState = {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      imagesData: [],
      hiddenIdentity: false,
      privacy: 'friends',
    };

    render(
      <UploadingImage
        error
        file={file}
        id="someId"
        imagePollState={imagePollState}
        setImagePollState={(): boolean => true}
        imgCaption=""
        letter="A"
        message="Max size is 2 MB"
      />,
    );

    const miscComponent: TargetElement = screen.getByTestId('misc-box');
    const uploadedBox = screen.queryByTestId('uploaded-box');
    const subMsg: TargetElement = screen.getByTestId('sub-msg');

    expect(miscComponent).toBeInTheDocument();
    expect(uploadedBox).not.toBeInTheDocument();
    expect(subMsg).toHaveTextContent('Max size is 2 MB');
  });

  it('should render the uploaded image when we pass error={false}', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const imagePollState: ICreateImagePoll.IProps = {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      imagesData: [],
      hiddenIdentity: false,
      privacy: 'friends',
    };

    render(
      <UploadingImage
        error={false}
        file={file}
        id="someId"
        imagePollState={imagePollState}
        setImagePollState={(): boolean => true}
        imgCaption=""
        letter="A"
        message="ay 7aga"
      />,
    );

    const uploadedBox: TargetElement = screen.getByTestId('uploaded-box');
    const miscComponent = screen.queryByTestId('misc-box');

    expect(uploadedBox).toBeInTheDocument();
    expect(miscComponent).not.toBeInTheDocument();
  });

  it('should call setImagePollState function when we blur the TextInput', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const imagePollState = {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      imagesData: [],
      hiddenIdentity: false,
      privacy: 'friends',
    };

    const setImagePollState = jest.fn();

    const calledOnce = 1;

    render(
      <UploadingImage
        error={false}
        file={file}
        id="2"
        imagePollState={imagePollState}
        setImagePollState={setImagePollState}
        imgCaption=""
        letter="A"
        message=""
      />,
    );

    const textInput: TargetElement = screen.getByTestId('text-input');

    userEvent.type(textInput, 'some caption');
    userEvent.tab();

    expect(textInput).toHaveValue('some caption');
    expect(setImagePollState).toHaveBeenCalledTimes(calledOnce);
  });

  //   it('should call setImagePollState function when we reset the TextInput', () => {
  //     const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  //     const imagePollState = {
  //       postType: 'Image Poll',
  //       postCaption: { id: 'id_123181287', value: '' },
  //       imagesData: [],
  //       hiddenIdentity: false,
  //       privacy: 'friends',
  //     };

  //     const setImagePollState = jest.fn();

  //     const calledOnce = 1;

  //     render(
  //       <UploadingImage
  //         error={false}
  //         file={file}
  //         id="2"
  //         imagePollState={imagePollState}
  //         setImagePollState={setImagePollState}
  //         imgCaption=""
  //         letter="A"
  //         message=""
  //       />,
  //     );

  //     const textInput: TargetElement = screen.getByTestId('text-input');

  //     userEvent.type(textInput, 'some caption');

  //     const deleteIcon: TargetElement = screen.getByTestId('delete-icon');
  //     userEvent.tab();
  //     userEvent.click(deleteIcon);

  //     expect(textInput).toHaveValue('');
  //     expect(setImagePollState).toHaveBeenCalledTimes(calledOnce);
  //   });
});
