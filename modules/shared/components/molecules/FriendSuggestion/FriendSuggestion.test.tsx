import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FriendSuggestion from './FriendSuggestion';

describe('Friend Suggestion Component', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(
        <FriendSuggestion
          profilePic="https://s3-alpha-sig.figma.com/img/443e/6ac0/0864920f73a1963a9015537cae3da88e?Expires=1629676800&Signature=bQGAkd8egMt437a3uVrvuWZhbojvQXv1gT356NyqCL8OGFlYDlZp-~UtHMvqUq8thdWR~v5wsIuxy8l8l8OZIrGZ6tC1U~Fo90xUy529JxeFQuHGzR26XK4fK8ut~MLo6oVyUMYh7cQH0eU4el8nTBt4mWPLigGbpIIt95qVD9wnUaIpG7qyNkBKLtaQXDLuI4pGkQ9urDZBaq9tYVt~uD576PPH~R4v4NF~XHXyeBKNo14KC3DO5zATf~AZystGgqxSZ-XZbru8eJgPaOswzaVy8kk-JHlTzpqU4ABd-M8hC1leUK8OahLfFdDqipZzw00faOJ4iof8pIxjD4PoEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          username="Ahmed Adel"
          mutualFriends={5}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
