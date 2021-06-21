import { postsApi } from '@modules/shared/api/postsApi.api';
import type { ITextPollCreation } from '@modules/shared/components/organisms/TextPollCreation/types/ITextPollCreation';

export const createPollPost = async (
  post: ITextPollCreation.IState,
): Promise<void> => {
  const {
    data: { id: postId },
  } = await postsApi.createPost({
    is_hidden: post.hiddenIdentity,
    type: post.postType,
    caption: post.postCaption.value,
  });

  const optionResponse = await postsApi.createOptionsGroup(postId, {
    groups: post.groups,
  });
  console.log(optionResponse);

  const flagResponse = await postsApi.flagPostAsFinished(postId, {
    finished: true,
  });
  console.log(flagResponse);
};
