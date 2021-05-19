import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
// import type { ReactElement, FC } from 'react';
import Image from '../../icons/image.svg';
import styles from './imageUpload.module.css';

const baseStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '18px',
  paddingBottom: '18px',
  borderWidth: 1,
  borderRadius: 15,
  borderColor: '#00A8E8',
  borderStyle: 'dashed',
  backgroundColor: '#F2F9FF',
  transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#07B255',
};

const rejectStyle = {
  borderColor: '#FF933B',
};

interface IImageUpload {
  files?: File[];
  onDrop?: (acceptedFiles: File[]) => void;
}
//  the props should be ({ files, onDrop })
const DropzoneComponent: React.FC<IImageUpload> = ({ onDrop }) => {
  // const onDrop = useCallback(acceptedFiles => {
  //   console.log(acceptedFiles);
  // }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <Image className={styles.svg} />
      <div className={styles.text}>Upload one or multiple images.</div>
    </div>
  );
};

export default DropzoneComponent;
