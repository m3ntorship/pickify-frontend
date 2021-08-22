export const handleImgWithInfoVariant = (
  isHidden: boolean,
  profilePic?: string,
): 'anonymous' | 'filled' | 'notFilled' => {
  const anonymous = 'anonymous';
  const filled = 'filled';
  const notFilled = 'notFilled';
  if (isHidden) {
    if (profilePic !== undefined) return filled;

    return anonymous;
  }

  if (profilePic !== undefined) return filled;

  return notFilled;
};
