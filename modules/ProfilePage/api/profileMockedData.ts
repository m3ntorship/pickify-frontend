import faker from 'faker';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';

const getRandomBetween = (max: number): number => {
  return faker.datatype.number({ min: 1, max });
};

const createPostOption = (max: number): IPostFeed.IOptions[] => {
  const magicOne = 1;
  const optionBodyWordsNumber = 4;
  const numberOfOptions = getRandomBetween(max);
  return Array(numberOfOptions)
    .fill(magicOne)
    .map(() => ({
      id: faker.datatype.uuid(),
      body: faker.lorem.words(optionBodyWordsNumber),
      media: [{ url: faker.image.imageUrl() }],
      vote_count: getRandomBetween(100),
      voted: false,
    }));
};

const createPostOptionsGroups = (max: number): IPostFeed.IGroup[] => {
  const numberOfOptions = getRandomBetween(max);
  const maxOptionCount = getRandomBetween(4);
  const magicOne = 1;
  return Array(numberOfOptions)
    .fill(magicOne)
    .map(() => ({
      id: faker.datatype.uuid(),
      options: createPostOption(maxOptionCount),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      media: [{ url: faker.image.image() }],
    }));
};

const createMockedPosts = (): IPostFeed.IPost[] => {
  const maxNumberOfPosts = 20;
  const numberOfPosts = getRandomBetween(maxNumberOfPosts);
  const magicOne = 1;
  const postCaptionWordsCount = 7;
  const postPostOptionsGroupsCount = getRandomBetween(4);
  return Array(numberOfPosts)
    .fill(magicOne)
    .map(() => {
      return {
        created_at: faker.date.past(magicOne).toISOString(),
        is_hidden: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        type: faker.random.arrayElement([
          EPostType.ImagePoll,
          EPostType.MiniSurvey,
          EPostType.TextPoll,
        ]),
        options_groups: {
          groups: createPostOptionsGroups(postPostOptionsGroupsCount),
        },
        media: [{ url: faker.image.image() }],
        user: {
          profile_pic: faker.image.avatar(),
          id: faker.datatype.uuid(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        caption: faker.lorem.words(postCaptionWordsCount),
      };
    });
};

const createMockedUser = (): IPostFeed.IUser => {
  return {
    profile_pic: faker.image.avatar(),
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  };
};

const userPosts: IPostFeed.IPost[] = createMockedPosts();

export const mockedData: {
  data: { posts: IPostFeed.IPost[]; postsCount: number; user: IPostFeed.IUser };
} = {
  data: {
    postsCount: userPosts.length,
    posts: userPosts,
    user: createMockedUser(),
  },
};
