import React from 'react';
import className from 'classnames';
import type { FC, ReactElement, CSSProperties } from 'react';
import type { IDivider } from './types/IDivider';
import * as EDivider from './types/EDivider';

const Divider: FC<IDivider.IProps> = ({ type, length }): ReactElement => {
  const dividerType = className('bg-grey-shd6', {
    'h-px': type === EDivider.DividerType.Horizontal,
    'w-px': type === EDivider.DividerType.Vertical,
  });

  const getDividerLength = (): CSSProperties => {
    return type === EDivider.DividerType.Horizontal
      ? { width: length }
      : { height: length };
  };
  return (
    <>
      <div className={dividerType} style={getDividerLength()} />
    </>
  );
};

export default Divider;
