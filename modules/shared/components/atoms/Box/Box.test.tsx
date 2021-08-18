import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Box from './Box';

describe('Friend Suggestion Component', () => {
  it('Should render Header, Body and Footer with Divider grey background', () => {
    const tree = renderer
      .create(
        <Box isGreyColor>
          <div>
            <Box.Header withDevider>
              <p>Dummy Header</p>
            </Box.Header>
            <Box.Body>
              <p>Dummy Body</p>
            </Box.Body>
            <Box.Footer withDevider>
              <p>Dummy Footer</p>
            </Box.Footer>
          </div>
        </Box>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render Header, Body and Footer with Divider white background', () => {
    const tree = renderer
      .create(
        <Box isWhiteColor>
          <div>
            <Box.Header withDevider>
              <p>Dummy Header</p>
            </Box.Header>
            <Box.Body>
              <p>Dummy Body</p>
            </Box.Body>
            <Box.Footer withDevider>
              <p>Dummy Footer</p>
            </Box.Footer>
          </div>
        </Box>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render Header, Body and Footer', () => {
    const tree = renderer
      .create(
        <Box isWhiteColor>
          <div>
            <Box.Header>
              <p>Dummy Header</p>
            </Box.Header>
            <Box.Body>
              <p>Dummy Body</p>
            </Box.Body>
            <Box.Footer>
              <p>Dummy Footer</p>
            </Box.Footer>
          </div>
        </Box>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render Header', () => {
    const tree = renderer
      .create(
        <Box isWhiteColor>
          <Box.Header>
            <p>Dummy Header</p>
          </Box.Header>
        </Box>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render Body', () => {
    const tree = renderer
      .create(
        <Box isWhiteColor>
          <Box.Body>
            <p>Dummy Body</p>
          </Box.Body>
        </Box>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render Footer', () => {
    const tree = renderer
      .create(
        <Box isWhiteColor>
          <Box.Footer>
            <p>Dummy Footer</p>
          </Box.Footer>
        </Box>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
