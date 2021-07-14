import type { IVotesApi } from '@modules/HomePage/api/votesApi/IvotesApi';
import { apiUrls } from '@modules/shared/configuration/ConfigPostCreation/config';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

export const transformPostsMedia = (
  posts: IPostFeed.IPost[],
): IPostFeed.IPost[] => {
  const transformedMedia: IPostFeed.IPost[] = posts.map(
    ({ options_groups, ...post }) => {
      const groups = options_groups.groups.map(({ options, ...group }) => {
        const newOptions = options.map(
          ({ vote_count, voted, id, body, ...option }) => {
            const optionMedia = option.media.map(({ url }) => {
              return { url: `${apiUrls.mediaAPI}${url}` };
            });
            return { id, body, vote_count, voted, media: optionMedia };
          },
        );
        const groupMedia = group.media.map(({ url }) => {
          return { url: `${apiUrls.mediaAPI}${url}` };
        });
        return { ...group, media: groupMedia, options: newOptions };
      });
      const postMedia = post.media.map(({ url }) => {
        return { url: `${apiUrls.mediaAPI}${url}` };
      });
      return { ...post, media: postMedia, options_groups: { groups } };
    },
  );
  return transformedMedia;
};

export const updateVotedPost = (
  posts: IPostFeed.IPost[],
  resData: IVotesApi.IVotesData[],
  groupId: string,
): IPostFeed.IPost[] => {
  const votes: Record<string, { voteCount: number; voted: boolean }> = {
    id_41651616515616: { voteCount: 0, voted: false },
  };

  resData.map((option: IVotesApi.IVotesData) => {
    votes[option.optionId] = {
      voteCount: option.voteCount,
      voted: option.voted,
    };
    return option;
  });

  const updatedVotedPosts: IPostFeed.IPost[] = posts.map(
    ({ options_groups, ...post }) => {
      const groups = options_groups.groups.map((group) => {
        if (group.id === groupId) {
          const newVotedGroups = group.options.map((option) => ({
            ...option,
            vote_count: votes[option.id].voteCount,
            voted: votes[option.id].voted,
          }));
          return { ...group, options: newVotedGroups };
        }
        return group;
      });
      return { ...post, options_groups: { groups } };
    },
  );

  return updatedVotedPosts;
};
