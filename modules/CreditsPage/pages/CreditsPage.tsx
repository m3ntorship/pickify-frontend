import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import TabGroup from '@modules/shared/components/molecules/TabGroup/TabGroup';
import { CreditsTabGroupData } from '@modules/shared/components/molecules/TabGroup/data';
import Credits from '../components/Credits/Credits';
import {
  backEndData,
  frontEndData,
  mentorsData,
} from '../components/Credits/creditsData';
import type { ICredit } from '../components/Credit/ICredit';

const CreditsPage: FC = (): ReactElement => {
  const [currentTeamState, setCurrentTeamState] = useState<{
    currentSelectedTab: string;
    currentTeam: ICredit.ICreditData[];
  }>({
    currentSelectedTab: 'Front-end',
    currentTeam: frontEndData,
  });

  useEffect(() => {
    switch (currentTeamState.currentSelectedTab) {
      case 'Front-end':
        setCurrentTeamState({ ...currentTeamState, currentTeam: frontEndData });
        break;
      case 'Back-end':
        setCurrentTeamState({ ...currentTeamState, currentTeam: backEndData });
        break;
      case 'Mentors':
        setCurrentTeamState({ ...currentTeamState, currentTeam: mentorsData });
        break;
      default:
        setCurrentTeamState({ ...currentTeamState, currentTeam: [] });
    }
  }, [currentTeamState.currentSelectedTab]);

  const changeCurrentSelectedTab = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCurrentTeamState({
      ...currentTeamState,
      currentSelectedTab: e.currentTarget.value,
    });
  };

  return (
    <section className="flex items-center flex-col">
      <h2 className="text-base md:text-lg font-normal text-dark text-center mb-6">
        Shoutout to the following persons who helped create this platform
      </h2>
      <div className="flex justify-center mb-8">
        <TabGroup
          onlyLabel
          checkedValue={currentTeamState.currentSelectedTab}
          changeValHandler={changeCurrentSelectedTab}
          tabsData={CreditsTabGroupData()}
        />
      </div>
      <div className="mb-8">
        <Credits creditsData={currentTeamState.currentTeam} />
      </div>
    </section>
  );
};

export default CreditsPage;
