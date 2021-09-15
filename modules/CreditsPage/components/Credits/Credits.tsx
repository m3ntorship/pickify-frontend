import React from 'react';
import type { FC, ReactElement } from 'react';
import Credit from '../Credit/Credit';
import type { ICredit } from '../Credit/ICredit';

const Credits: FC<{ creditsData: ICredit.ICreditData[] }> = ({
  creditsData,
}): ReactElement => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {creditsData.map((credit) => (
      <Credit key={credit.devId} creditData={credit} />
    ))}
  </div>
);

export default Credits;
