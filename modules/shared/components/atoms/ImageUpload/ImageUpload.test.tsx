import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import * as React from 'react';
import ImageUpload from '.';

describe('example of a test suite', () => {
  it('example of single test', () => {
    expect(true).toBe(true);
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<ImageUpload />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <label
      htmlFor="image"
    >
      <span>
        <svg
          data-file-name="SvgImage"
        />
      </span>
      <p>
         Upload one or multiple images 
      </p>
      <input
        accept="images/*"
        data-testid="image-upload"
        id="image"
        multiple={true}
        name="filename"
        type="file"
      />
    </label>
  `);
});

test('render input', () => {
  render(<ImageUpload />);

  const inputEl = screen.getByTestId('image-upload');
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute('type', 'file');
});
