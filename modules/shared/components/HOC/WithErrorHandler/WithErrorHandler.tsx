import React from 'react';
import type { ReactElement } from 'react';
import type { IWithErrorHandler } from './IwithErrorHandler';

const WithErrorHandler = <P extends IWithErrorHandler.IProps>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const Result: React.FC<P> = (props): ReactElement => {
    const { data } = props;
    if (data.error) {
      return <div>{data.message}</div>;
    }
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
  return Result;
};
export default WithErrorHandler;
