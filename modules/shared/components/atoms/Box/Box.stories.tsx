import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Box from './Box';
import type { IBox } from './IBox';

export default {
  title: 'Atoms/Box',
  component: Box,
} as Meta;

const Template: Story<IBox.IProps> = (args) => (
  <div>
    <div className="mb-12">
      <h1>With Header</h1>
      <Box {...args}>
        <>
          <Box.Header withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Box.Header>
          <Box.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </Box.Body>
        </>
      </Box>
    </div>
    <div className="mb-12">
      <h1>With Footer</h1>
      <Box {...args}>
        <>
          <Box.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </Box.Body>
          <Box.Footer withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Box.Footer>
        </>
      </Box>
    </div>
    <div className="mb-12">
      <h1>With Header & Footer</h1>
      <Box {...args}>
        <>
          <Box.Header withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Box.Header>
          <Box.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </Box.Body>
          <Box.Footer withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Box.Footer>
        </>
      </Box>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isGreyColor: true,
  isWhiteColor: false,
  classes: '',
};
