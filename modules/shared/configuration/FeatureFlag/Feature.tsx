import React from 'react';
import type { ReactElement, FC } from 'react';
import { flags } from './FeatureFlagConfig';

const Feature: FC<{ name: string }> = ({
  name,
  children,
}): ReactElement | null => {
  const featureFlag = flags.find(
    (feature: { name: string; desciption: string; active: boolean }) =>
      feature.name === name,
  );
  if (featureFlag?.active) {
    return <>{children}</>;
  }
  return null;
};

export default Feature;
