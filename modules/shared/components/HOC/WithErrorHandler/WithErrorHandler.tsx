import React from 'react';
import type { ReactElement } from 'react';

interface IProps {
  data: {
    error: boolean;
    message: string;
    errorCode: number;
  };
}
const WithErrorHandler = <P extends IProps>(
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
