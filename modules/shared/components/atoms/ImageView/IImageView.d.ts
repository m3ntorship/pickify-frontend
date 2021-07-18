declare namespace IImageView {
  export interface IProps {
    imgSrc: string;
    id: string;
    imgAlt: string;
    showFullImageView?: (postId: strign) => void;
  }
}

export { IImageView };
