import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('Expect the page header to match Snapshot', () => {
    const tree = renderer.create(<PageHeader>Friends</PageHeader>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return "Friends" as the header ', () => {
    render(<PageHeader>Friends</PageHeader>);
    const text = screen.getByText('Friends');
    expect(text).toBeInTheDocument();
  });
});
