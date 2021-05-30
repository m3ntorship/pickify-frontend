import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IWithErrorHandler } from './IwithErrorHandler';

function withErrorHandler<T>(WrappedComponent: FC<T>): FC<T> {
  const Result: FC<IWithErrorHandler.IProps & T> = (props): ReactElement => {
    const { data } = props;
    if (data?.error) {
      return <div>{data.message}</div>;
    }
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
  return Result;
}
export default withErrorHandler;
