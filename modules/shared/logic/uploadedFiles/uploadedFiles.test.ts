import { validateUploadedImages } from './uploadedFiles';

describe('ImageUpload', () => {
  it('should upload the choosen files successfully', () => {
    const firstFile = 0;
    const secondFile = 1;

    const files = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];

    const validatedImages = validateUploadedImages(files);

    const uploadedImages = [
      {
        imgId: 'id_151515115',
        file: files[firstFile],
        error: false,
        imgCaption: '',
        message: '',
      },
      {
        imgId: 'id_151515115',
        file: files[secondFile],
        error: false,
        imgCaption: '',
        message: '',
      },
    ];

    // assertions
    expect(validatedImages[firstFile].file).toEqual(
      uploadedImages[firstFile].file,
    );
    expect(validatedImages[firstFile].error).toEqual(
      uploadedImages[firstFile].error,
    );
    expect(validatedImages[secondFile].file).toEqual(
      uploadedImages[secondFile].file,
    );
    expect(validatedImages[secondFile].error).toEqual(
      uploadedImages[secondFile].error,
    );
  });

  it('should upload the choosen files with file type error at first file', () => {
    const firstFile = 0;

    const files = [
      new File(['hello'], 'index-one.js', { type: 'js' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];

    const validatedImages = validateUploadedImages(files);

    const uploadedImages = [
      {
        imgId: 'id_151515115',
        file: files[firstFile],
        error: true,
        imgCaption: '',
        message: 'invalid file type, must be an image!!',
      },
    ];

    // assertions
    expect(validatedImages[firstFile].error).toEqual(
      uploadedImages[firstFile].error,
    );

    expect(validatedImages[firstFile].message).toEqual(
      uploadedImages[firstFile].message,
    );
  });
});
