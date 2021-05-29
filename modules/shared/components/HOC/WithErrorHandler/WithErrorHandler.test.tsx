import React from 'react';
import { render, screen } from '@testing-library/react';
import WithErrorHandler from './WithErrorHandler';
import type { IDataTests } from './IDataTests';

describe('WithErrorHandler', () => {
  it('Should Render component', () => {
    const successData = {
      postTitle: 'a7la mesa 3lek!',
    };
    const mockComponent = jest.fn(function <T extends IDataTests.IDataSucccess>(
      data: T,
    ) {
      return <div>{data.postTitle}</div>;
    });
    const Component = WithErrorHandler(mockComponent);
    render(<Component data={successData} />);
    expect(mockComponent).toBeCalled();
  });
  it('Should Render the error message', () => {
    const errorData = {
      error: true,
      errorCode: 404,
      message: 'not Found',
    };
    const mockComponent = jest.fn(function <T extends IDataTests.IDataError>(
      data: T,
    ) {
      return <div>{data.errorCode}</div>;
    });
    const Component = WithErrorHandler(mockComponent);
    render(<Component data={errorData} />);
    const errorMessage = screen.getByText(errorData.message);
    expect(errorMessage).toBeInTheDocument();
  });
});
