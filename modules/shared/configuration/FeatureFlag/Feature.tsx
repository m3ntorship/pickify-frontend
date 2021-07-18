import React from 'react';
import type { ReactElement, FC } from 'react';
import { flags } from './FeatureFlagConfig';

const Feature: FC<{ name: string }> = ({
  name,
  children,
}): ReactElement | null => {
  if (flags[name].active) {
    return <>{children}</>;
  }
  return null;
};

export default Feature;
