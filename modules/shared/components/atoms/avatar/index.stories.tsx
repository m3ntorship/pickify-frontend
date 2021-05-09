import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Avatar from '.';
import type { IAvatar } from './IAvatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'notFilled', 'anonymous'],
      },
    },
  },
};

const Template: Story<IAvatar.IProps> = (args): ReactElement => (
  <Avatar
    {...args}
    imgSrc="https://s3-alpha-sig.figma.com/img/bca2/a158/41e1bfef4cf69aa4eaf61bcf92bdc41e?Expires=1621209600&Signature=YEEiN7XFdi8RPjMX6BBbVIMre5UOeCxFNqA9tIZT7C1iezPCgkXKWC0j0Flv6X7Hah7vfO8YHBTguK5zs38NsJAJWW4K6jfk2hKQWh7jq7JHSpTxahtGITbHNvyOdgzeMrF9~GGmOczrFAHwcoqA-wZ52Izy8fQQGBAsnBIrmxlcPcmhy~I~INvB9F21Z~HC7bp32DkKJk40F-n5TYH-AFbscuog9ZNQBZZ9svdgs9DwPHuWdnxMLzcySPmvyuhHxhxcxGT8nzY3~rQ~AUJG3Q2U2fdNVjId7SmLk9vy4P9pg7daWQThiMSBWh~zgLkdK9Jry~jEaJezulZNeqtcCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
  />
);
export const AvatarStory = Template.bind({});
AvatarStory.args = {
  size: 'large',
  variant: 'filled',
};
