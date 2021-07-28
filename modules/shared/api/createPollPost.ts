import type { IpostCreationAPI } from '../types/postCreation/IPostCreationAPI';
import { postsApi, mediaApi } from './postsApi.api';
import type { IPostCreation } from '../components/organisms/PostCreation/types/IPostCreation';

async function initPost(
  post: IPostCreation.IPostRestData & IPostCreation.IPostStructure,
): Promise<IpostCreationAPI.IInitPostReturnedRes> {
  try {
    const { data, status } = await postsApi.createPost({
      type: post.postType,
      is_hidden: post.isHiddenIdentity,
      caption: post.postCaption.body,
      media_count: post.mediaCount,
    });

    return {
      data,
      errors: [],
      statusCode: status,
    };
  } catch (err: unknown) {
    const error = err as IpostCreationAPI.IErrorResponse;
    const errors: string[] = [];
    let statusCode = 0;

    if (error.response) {
      statusCode = error.response.data.status_code;
      switch (error.response.data.status_code) {
        case 400:
          errors.push("Couldn't create the Poll. Please, try again.");
          break;
        case 401:
          errors.push("Couldn't create the Poll. Please, login first.");
          break;
        default:
          errors.push('Something went wrong. Please, try again.');
          break;
      }
    } else {
      errors.push(
        'Something went wrong. Please, check your connection and try again.',
      );
    }
    throw Object.assign(new Error(), { data: null, errors, statusCode });
  }
}

async function createGroups(
  createdPostId: string,
  post: IPostCreation.IPostRestData & IPostCreation.IPostStructure,
): Promise<IpostCreationAPI.ICreateGroupsReturnedRes> {
  try {
    const { data, status } = await postsApi.createOptionsGroup(createdPostId, {
      groups: post.groups,
    });

    return {
      data,
      errors: [],
      statusCode: status,
    };
  } catch (err: unknown) {
    const error = err as IpostCreationAPI.IErrorResponse;
    const errors: string[] = [];
    let statusCode = 0;

    if (error.response) {
      statusCode = error.response.data.status_code;
      switch (error.response.data.status_code) {
        case 400:
          errors.push("Couldn't create the Poll. Please, try again.");
          break;
        case 401:
          errors.push("Couldn't create the Poll. Please, login first.");
          break;
        default:
          errors.push('Something went wrong. Please, try again.');
          break;
      }
    } else {
      errors.push(
        'Something went wrong. Please, check your connection and try again.',
      );
    }
    throw Object.assign(new Error(), { data: null, errors, statusCode });
  }
}

async function createMediaFile(file: {
  file: File;
  entityType: string;
  entityId: string;
}): Promise<IpostCreationAPI.ICreateMediaFileReturnedRes> {
  try {
    const { data, status } = await mediaApi.uploadFile(
      file.file,
      file.entityType,
      file.entityId,
    );
    return {
      data,
      errors: [],
      statusCode: status,
    };
  } catch (err: unknown) {
    const error = err as IpostCreationAPI.IErrorResponse;
    const errors: string[] = [];
    let statusCode = 0;

    if (error.response) {
      statusCode = error.response.data.status_code;
      switch (error.response.data.status_code) {
        case 400:
          errors.push("Couldn't create the Poll. Please, try again.");
          break;
        case 401:
          errors.push("Couldn't create the Poll. Please, login first.");

          break;
        default:
          errors.push('Something went wrong. Please, try again.');
          break;
      }
    } else {
      errors.push(
        'Something went wrong. Please, check your connection and try again.',
      );
    }
    throw Object.assign(new Error(), { data: null, errors, statusCode });
  }
}

async function uploadMedia(
  post: IPostCreation.IPostRestData & IPostCreation.IPostStructure,
  postId: string,
  createdOptionsGroup: { id: string; options: { id: string }[] }[],
): Promise<IpostCreationAPI.ICreateMediaFileReturnedRes[]> {
  const files: { file: File; entityType: string; entityId: string }[] = [];
  const getEntityId = (
    groupIndex: number,
    optionIndex: number,
    entityType: 'option_group' | 'option',
  ): string => {
    switch (entityType) {
      case 'option_group':
        return createdOptionsGroup[groupIndex].id;
      case 'option':
        return createdOptionsGroup[groupIndex].options[optionIndex].id;
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

  return Promise.all(
    files.map(
      async (file): Promise<IpostCreationAPI.ICreateMediaFileReturnedRes> =>
        createMediaFile(file),
    ),
  );
}

async function raisePostCreationFinishFlag(
  postId: string,
): Promise<IpostCreationAPI.IRaisePostCreationFinishFlagReturnedRes> {
  try {
    const { data, status } = (await postsApi.flagPostAsFinished(postId, {
      finished: true,
    })) as unknown as { data: string; status: number };
    return {
      data,
      errors: [],
      statusCode: status,
    };
  } catch (err: unknown) {
    const error = err as IpostCreationAPI.IErrorResponse;
    const errors: string[] = [];
    let statusCode = 0;

    if (error.response) {
      statusCode = error.response.data.status_code;
      switch (error.response.data.status_code) {
        case 400:
          errors.push("Couldn't create the Poll. Please, try again.");
          break;
        case 401:
          errors.push("Couldn't create the Poll. Please, login first.");

          break;
        default:
          errors.push('Something went wrong. Please, try again.');
          break;
      }
    } else {
      errors.push(
        'Something went wrong. Please, check your connection and try again.',
      );
    }
    throw Object.assign(new Error(), { data: null, errors, statusCode });
  }
}

export const createPollPost = async (
  post: IPostCreation.IPostRestData & IPostCreation.IPostStructure,
): Promise<IpostCreationAPI.ICreatePollReturnedRes> => {
  try {
    const initPostRes = await initPost(post);
    const createGroupsRes = await createGroups(initPostRes.data.id, post);
    await uploadMedia(post, initPostRes.data.id, createGroupsRes.data.groups);
    return await raisePostCreationFinishFlag(initPostRes.data.id);
  } catch (err: unknown) {
    return { data: null, ...(err as IpostCreationAPI.IReturnedErr) };
  }
};
