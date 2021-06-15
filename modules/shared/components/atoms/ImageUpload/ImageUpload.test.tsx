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
      className="container-for-image-upload"
      htmlFor="image"
    >
      <span>
        <svg
          className="svg-media-icon"
          data-file-name="SvgImage"
        />
      </span>
      <p
        className="text-for-image-upload"
      >
        Upload one or multiple images
      </p>
      <input
        accept="images/*"
        className="inputfile-for-type-image"
        data-testid="image-upload"
        id="image"
        multiple={true}
        onChange={[Function]}
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
