export const handleAvatarVariant = (
  isHidden: boolean,
  profilePic: string | undefined,
): 'anonymous' | 'filled' | 'notFilled' => {
  const anonymous = 'anonymous';
  const filled = 'filled';
  const notFilled = 'notFilled';
  if (isHidden) {
    return anonymous;
  }
  return profilePic ? filled : notFilled;
};
