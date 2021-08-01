import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IWithErrorHandler } from './IwithErrorHandler';

function withErrorHandler<T>(WrappedComponent: FC<T>): FC<T> {
  return (props: IWithErrorHandler.IProps & T): ReactElement => {
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
}
export default withErrorHandler;
