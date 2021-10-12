import { handleImgWithInfoVariant } from './imgWithInfoVariant';

describe('handleImgWithInfoVariant', () => {
  it('should return filled if isHidden={false} and profilePic exists', () => {
    const userVariant = handleImgWithInfoVariant(false, 'image');
    expect(userVariant).toEqual('filled');
  });

  it('should return filled if isHidden={true} and profilePic exists', () => {
    const userVariant = handleImgWithInfoVariant(true, 'image');
    expect(userVariant).toEqual('filled');
  });

  it('should return anonymous if isHidden={true} and profilePic does not exist', () => {
    const userVariant = handleImgWithInfoVariant(true);
    expect(userVariant).toEqual('anonymous');
  });

  it('should return notFilled if isHidden={false} and profilePic does not exist', () => {
    const userVariant = handleImgWithInfoVariant(false);
    expect(userVariant).toEqual('notFilled');
  });
});
