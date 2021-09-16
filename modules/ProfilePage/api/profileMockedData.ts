import faker from 'faker';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';

const getRandomBetween = (min: number, max: number): number => {
  return faker.datatype.number({ min, max });
};

const createPostOption = (max: number): IPostFeed.IOptions[] => {
  const optionBodyWordsNumber = 4;
  const numberOfOptions = getRandomBetween(2, max);
  return Array(numberOfOptions)
    .fill(1)
    .map(() => ({
      id: faker.datatype.uuid(),
      body: faker.lorem.words(optionBodyWordsNumber),
      media: [{ url: faker.image.imageUrl() }],
      vote_count: getRandomBetween(0, 100),
      voted: false,
    }));
};

const createPostOptionsGroups = (max: number): IPostFeed.IGroup[] => {
  const numberOfGroups = getRandomBetween(1, max);
  const maxOptionCount = getRandomBetween(2, 4);
  return Array(numberOfGroups)
    .fill(1)
    .map(() => ({
      id: faker.datatype.uuid(),
      options: createPostOption(maxOptionCount),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      media: [],
    }));
};

const createMockedPosts = (): IPostFeed.IPost[] => {
  const maxNumberOfPosts = 20;
  const numberOfPosts = getRandomBetween(1, maxNumberOfPosts);
  const postCaptionWordsCount = 7;
  const postOptionsGroupsCount = getRandomBetween(1, 4);
  return Array(numberOfPosts)
    .fill(1)
    .map(() => {
      return {
        created_at: faker.date.past(1).toISOString(),
        is_hidden: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        type: faker.random.arrayElement([
          EPostType.ImagePoll,
          EPostType.MiniSurvey,
          EPostType.TextPoll,
        ]),
        options_groups: {
          groups: createPostOptionsGroups(postOptionsGroupsCount),
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
