import type { Story } from '@storybook/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import Credits from './Credits';
import { frontEndData } from './creditsData';
import type { ICredit } from '../Credit/ICredit';

export default {
  title: 'Pages/Credits',
  component: Credits,
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const Template: Story<{ creditsData: ICredit.ICreditData[] }> = (args) => (
  <div className="flex justify-center">
    <Credits {...args} />
  </div>
);

export const credit = Template.bind({});
credit.args = {
  creditsData: frontEndData,
};
