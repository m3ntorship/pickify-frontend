import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Slider from '.';
import type { ISlider } from './ISlider';

export default {
  title: 'atoms/slider',
  component: Slider,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical', 'circular'],
      },
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    radius: {
      control: {
        type: 'number',
      },
    },
    verticalMeterColor: {
      control: {
        type: 'radio',
        options: ['primary', 'primary-shd5', 'error'],
      },
    },
  },
};

const Template: Story<ISlider.IProps> = (args): ReactElement => (
  <Slider {...args} />
);

export const sliderStory = Template.bind({});
sliderStory.args = {
  progress: 90,
  type: 'vertical',
  height: 300,
  radius: 60,
  verticalMeterColor: 'primary',
};
