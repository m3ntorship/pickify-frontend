import { handleUserInfoVariant } from './userInfoVariant';

describe('handleUserInfoVariant', () => {
  it('should return filled if isHidden={false} and profilePic exists', () => {
    const userVariant = handleUserInfoVariant(false, 'image');
    expect(userVariant).toEqual('filled');
  });

  it('should return filled if isHidden={true} and profilePic exists', () => {
    const userVariant = handleUserInfoVariant(true, 'image');
    expect(userVariant).toEqual('filled');
  });

  it('should return anonymous if isHidden={true} and profilePic does not exist', () => {
    const userVariant = handleUserInfoVariant(true);
    expect(userVariant).toEqual('anonymous');
  });

  it('should return notFilled if isHidden={false} and profilePic does not exist', () => {
    const userVariant = handleUserInfoVariant(false);
    expect(userVariant).toEqual('notFilled');
  });
});
