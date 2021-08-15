import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Layer from './Layer';
import type { ILayer } from './ILayer';

export default {
  title: 'Atoms/Layer',
  component: Layer,
} as Meta;

const Template: Story<ILayer.IProps> = (args) => (
  <div>
    <div className="mb-12">
      <h1>With Header</h1>
      <Layer {...args}>
        <>
          <Layer.Header withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Layer.Header>
          <Layer.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </Layer.Body>
        </>
      </Layer>
    </div>
    <div className="mb-12">
      <h1>With Footer</h1>
      <Layer {...args}>
        <>
          <Layer.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </Layer.Body>
          <Layer.Footer withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Layer.Footer>
        </>
      </Layer>
    </div>
    <div className="mb-12">
      <h1>With Header & Footer</h1>
      <Layer {...args}>
        <>
          <Layer.Header withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Layer.Header>
          <Layer.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </Layer.Body>
          <Layer.Footer withDevider>
            <>
              <div>left</div>
              <div>right</div>
            </>
          </Layer.Footer>
        </>
      </Layer>
    </div>
  </div>
);

export const layer = Template.bind({});
layer.args = {
  isGreyColor: true,
  isWhiteColor: false,
  classes: '',
};
