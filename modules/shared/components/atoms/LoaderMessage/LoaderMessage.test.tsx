import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import LoaderMessage from './LoaderMessage';

describe('Loader Message', () => {
  it('Expect the loader message to toMatchSnapshot', () => {
    const tree = renderer
      .create(<LoaderMessage>Coming Soon</LoaderMessage>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return "Coming soon" as the the loader message ', () => {
    render(<LoaderMessage>Coming Soon</LoaderMessage>);
    const text = screen.getByText('Coming Soon');
    expect(text).toBeInTheDocument();
  });
});
