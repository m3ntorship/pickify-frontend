export const handleAvatarVariant = (
  isHidden: boolean,
  profile_pic: string | undefined,
): 'anonymous' | 'filled' | 'notFilled' => {
  const anonymous = 'anonymous';
  const filled = 'filled';
  const notFilled = 'notFilled';
  if (isHidden) {
    return anonymous;
  }
  return profile_pic ? filled : notFilled;
};
