/* eslint-disable */
import faker from 'faker';

const getRandomBetween = (max: number) => {
  return faker.datatype.number({ min: 1, max });
};

const createPostOption = (max: number) => {
  const numberOfOptions = getRandomBetween(max);
  return Array(numberOfOptions)
    .fill(1)
    .map(() => ({
      id: faker.datatype.uuid(),
      body: faker.lorem.paragraph(10),
    }));
};

const createPostOptionsGroup = (): any => {
  return [
    {
      id: faker.datatype.uuid(),
      options: createPostOption(10),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
  ];
};

const createMockedPost = () => {
  const numberOfPosts = getRandomBetween(20);

  return Array(numberOfPosts)
    .fill(1)
    .map(() => {
      return {
        created_at: faker.date.past(1).toISOString(),
        is_hidden: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        type: 'text poll',
        options_groups: {
          groups: createPostOptionsGroup(),
        },
        user: {
          profile_pic: faker.image.avatar(),
          id: faker.datatype.uuid(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },

        caption: faker.lorem.paragraph(15),
      };
    });
};

export const mockedData = {
  posts: createMockedPost(),
};
