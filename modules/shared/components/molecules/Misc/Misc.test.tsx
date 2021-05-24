import React from 'react';
import { render, screen } from '@testing-library/react';
import Misc from './Misc';
import * as EMisc from './types/EMisc';

describe('Misc', () => {
  it('should render Error Misc', () => {
    render(
      <Misc
        type={EMisc.MiscType.Error}
        msg="Image couldn’t be uploaded!"
        subMsg="Max size is 2 MB"
      />,
    );
    const msg = screen.getByRole('heading');
    const subMsg = screen.getByText('Max size is 2 MB');
    expect(msg.textContent).toEqual('Image couldn’t be uploaded!');
    expect(subMsg).toBeInTheDocument();
  });
  it('should render success Misc', () => {
    render(
      <Misc
        type={EMisc.MiscType.Success}
        msg="Congratulations!"
        subMsg="Subtext"
      />,
    );
    const msg = screen.getByRole('heading');
    const subMsg = screen.getByText('Subtext');
    expect(msg.textContent).toEqual('Congratulations!');
    expect(subMsg).toBeInTheDocument();
  });
});
