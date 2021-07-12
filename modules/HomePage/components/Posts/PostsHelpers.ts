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
          ({ vote_count, id, body, ...option }) => {
            const optionMedia = option.media.map(({ url }) => {
              return { url: `${apiUrls.mediaAPI}${url}` };
            });
            return { id, body, vote_count, media: optionMedia };
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

export const transformAuthorizedPosts = (
  posts: IPostFeed.IPost[],
): IPostFeed.IPost[] => {
  const loggedInUser = localStorage.getItem('user');
  const authorizedPosts: IPostFeed.IPost[] = posts.map(
    ({ options_groups, ...post }): IPostFeed.IPost => {
      if (post.user.id === loggedInUser) {
        return { ...post, options_groups };
      }
      const groups = options_groups.groups.map(({ options, ...group }) => {
        const newOptions = options.map(({ id, body, media }) => {
          return { id, body, media };
        });
        return { ...group, options: newOptions };
      });
      return { ...post, options_groups: { groups } };
    },
  );
  return authorizedPosts;
};

export const updateVotedPost = (
  posts: IPostFeed.IPost[],
  resData: IVotesApi.IVotesData[],
  groupId: string,
): IPostFeed.IPost[] => {
  const votes: Record<string, number> = {
    id_41651616515616: 0,
  };

  resData.map((option: IVotesApi.IVotesData) => {
    votes[option.optionId] = option.voteCount;
    return option;
  });

  const updatedVotedPosts: IPostFeed.IPost[] = posts.map(
    ({ options_groups, ...post }) => {
      const groups = options_groups.groups.map((group) => {
        if (group.id === groupId) {
          const newVotedGroups = group.options.map((option) => ({
            ...option,
            vote_count: votes[option.id],
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
