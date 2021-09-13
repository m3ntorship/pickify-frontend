import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import TabGroup from '@modules/shared/components/molecules/TabGroup/TabGroup';
import { CreditsTabGroupData } from '@modules/shared/components/molecules/TabGroup/data';
import Credits from '../components/Credits/Credits';
import {
  backEndData,
  frontEndData,
  mentorsData,
} from '../components/Credits/creditsData';

const CreditsPage: FC = (): ReactElement => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState('Front-end');

  const changeCurrentSelectedTab = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCurrentSelectedTab(e.currentTarget.value);
  };

  let creditsData = [];

  if (currentSelectedTab === 'Front-end') {
    creditsData = frontEndData;
  } else if (currentSelectedTab === 'Back-end') {
    creditsData = backEndData;
  } else {
    creditsData = mentorsData;
  }

  return (
    <section className="flex items-center flex-col">
      <h2 className="text-base md:text-lg font-normal text-dark text-center mb-6">
        Shoutout to the following persons who helped create this platform
      </h2>
      <div className="flex justify-center mb-8">
        <TabGroup
          onlyLabel
          checkedValue={currentSelectedTab}
          changeValHandler={changeCurrentSelectedTab}
          tabsData={CreditsTabGroupData()}
        />
      </div>
      <div className="mb-8">
        <Credits creditsData={creditsData} />
      </div>
    </section>
  );
};

export default CreditsPage;
