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
