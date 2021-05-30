import React from 'react';
import { render, screen } from '@testing-library/react';
import WithErrorHandler from './WithErrorHandler';
import type { IDataTests } from './IDataTests';

describe('WithErrorHandler', () => {
  it('Should Render component', () => {
    const successData = {
      postTitle: 'a7la mesa 3lek!',
    };
    const mockComponent = jest.fn(function <
      T extends IDataTests.IDataSucccess,
    >({ data }: T) {
      return <div>{data.postTitle}</div>;
    });
    const Component = WithErrorHandler(mockComponent);
    render(<Component data={successData} />);
    expect(mockComponent).toBeCalled();
    const successdMessage = screen.getByText(successData.postTitle);
    expect(successdMessage).toBeInTheDocument();
  });
  it('Should Render the error message', () => {
    const errorData = {
      error: true,
      errorCode: 404,
      message: 'not Found',
    };
    const mockComponent = jest.fn(function <T extends IDataTests.IDataError>({
      data,
    }: T) {
      return <div>{data.errorCode}</div>;
    });
    const Component = WithErrorHandler(mockComponent);
    render(<Component data={errorData} />);
    const errorMessage = screen.getByText(errorData.message);
    expect(errorMessage).toBeInTheDocument();
  });
  it('Should Render both error message with failed components and the component itself in case of success', () => {
    const errorData = {
      error: true,
      errorCode: 404,
      message: 'not Found',
    };

    const successData = {
      postTitle: 'a7la mesa 3lek!',
    };

    const mockComponent = jest.fn(function <
      T extends IDataTests.IDataSucccess,
    >({ data }: T) {
      return <div>{data.postTitle}</div>;
    });

    const Component = WithErrorHandler(mockComponent);

    render(
      <>
        <Component data={errorData} />
        <Component data={successData} />
      </>,
    );
    const errorMessage = screen.getByText(errorData.message);
    expect(errorMessage).toBeInTheDocument();

    const successdMessage = screen.getByText(successData.postTitle);
    expect(successdMessage).toBeInTheDocument();
  });
});
