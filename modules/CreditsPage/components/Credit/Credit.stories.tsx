import type { Story } from '@storybook/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import Credit from './Credit';
import { frontEndData } from '../Credits/creditsData';
import type { ICredit } from './ICredit';

export default {
  title: 'Pages/Credit',
  component: Credit,
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const Template: Story<{ creditData: ICredit.ICreditData }> = (args) => (
  <Credit {...args} />
);

export const credit = Template.bind({});
credit.args = {
  creditData: frontEndData[0],
};
