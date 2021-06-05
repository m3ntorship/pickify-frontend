import faker from 'faker';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

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
    }));
};

const createPostOptionsGroup = (): IPostFeed.IGroup[] => {
  const maxOptionCount = 10;
  return [
    {
      id: faker.datatype.uuid(),
      options: createPostOption(maxOptionCount),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
  ];
};

const createMockedPost = (): IPostFeed.IPost[] => {
  const maxNumberOfPosts = 20;
  const numberOfPosts = getRandomBetween(maxNumberOfPosts);
  const magicOne = 1;
  const postCaptionWordsCount = 7;
  return Array(numberOfPosts)
    .fill(magicOne)
    .map(() => {
      return {
        created_at: faker.date.past(magicOne).toISOString(),
        is_hidden: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        // type: 'text poll',
        type: faker.random.arrayElement(['text poll', 'mini_survey']),
        options_groups: {
          groups: createPostOptionsGroup(),
        },
        media: [{ url: faker.image.avatar() }],
        user: {
          profile_pic: faker.image.avatar(),
          id: faker.datatype.uuid(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        caption: faker.lorem.words(postCaptionWordsCount),
      };
    });
};

export const mockedData: { posts: IPostFeed.IPost[] } = {
  posts: createMockedPost(),
};
