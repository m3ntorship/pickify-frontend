import type { AxiosError } from 'axios';
import type { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import type { IGetPosts } from './IGetPosts';
import { postsApi, uploadOneMedia } from './postsApi.api';
import type { IPostCreation } from '../components/organisms/PostCreation/types/IPostCreation';

export const createPollPost = async (
  post: IPostCreation.IPostRestData & IPostCreation.IPostStructure,
): Promise<IGetPosts.IErrorData> => {
  const notFound = 404;

  try {
    const {
      data: { id: postId },
    } = await postsApi.createPost({
      type: post.postType as unknown as PostCreationRequestTypeEnum,
      is_hidden: post.isHiddenIdentity,
      caption: post.postCaption.body,
      media_count: post.mediaCount,
    });

    const createdOptionsGroup = (await postsApi.createOptionsGroup(postId, {
      groups: post.groups,
    })) as unknown as {
      data: { groups: { id: string; options: { id: string }[] }[] };
    };

    const files: { file: File; entityType: string; entityId: string }[] = [];
    const getEntityId = (
      groupIndex: number,
      optionIndex: number,
      entityType: 'option_group' | 'option',
    ): string => {
      switch (entityType) {
        case 'option_group':
          return createdOptionsGroup.data.groups[groupIndex].id;
        case 'option':
          return createdOptionsGroup.data.groups[groupIndex].options[
            optionIndex
          ].id;
        default:
          return '';
      }
    };
    if (post.media[0]) {
      files.push({
        file: post.media[0].file,
        entityType: 'post',
        entityId: postId,
      });
    }
    post.groups.forEach((group, groupIndex) => {
      if (group.media[0]) {
        files.push({
          file: group.media[0].file,
          entityType: 'option_group',
          entityId: getEntityId(groupIndex, 0, 'option_group'),
        });
      }
    });
    post.groups.forEach((group, groupIndex) => {
      group.options.forEach((option, optionIndex) => {
        if (option.media[0]) {
          files.push({
            file: option.media[0].file,
            entityType: 'option',
            entityId: getEntityId(groupIndex, optionIndex, 'option'),
          });
        }
      });
    });

    files.forEach((file) => {
      uploadOneMedia(file.file, file.entityType, file.entityId);
    });

    await postsApi.flagPostAsFinished(postId, {
      finished: true,
    });
    return {
      error: false,
      message: 'post created successfully',
      errorCode: 201,
    } as IGetPosts.IErrorData;
  } catch (error: unknown) {
    const { message } = error as AxiosError<{ message: string }>;
    return {
      error: true,
      message,
      errorCode: notFound,
    } as IGetPosts.IErrorData;
  }
};
