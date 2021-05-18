declare namespace ISlider {
  export interface IProps {
    type: 'circular' | 'horizontal' | 'vertical';
    progress: number;
    height?: number;
    verticalMeterColor?: 'error' | 'primary-shd5' | 'primary';
    radius?: number;
  }
}

export { ISlider };
