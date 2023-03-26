import { useSelector } from 'react-redux';
import { CSSProperties } from 'react';
import { ReduxStateType } from '../../models';
import { OutputContainer } from '../../styles';
import { useMemo } from 'react';

export const Output = ({ croppedArea }: any) => {
  const { croppedImg } = useSelector((state: ReduxStateType) => state.image);
  const CROP_AREA_ASPECT = 3 / 2;
  const scale = 100 / croppedArea?.width;
  const transform = {
    x: `${-croppedArea?.x * scale}%`,
    y: `${-croppedArea?.y * scale}%`,
    scale,
    width: 'calc(100% + 0.5px)',
    height: 'auto',
  };

  const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  const renderImg = () => (
    <img src={croppedImg} alt="preview image" style={imageStyle} />
  );
  const memoImg = useMemo(() => renderImg(), [croppedImg]);

  return <OutputContainer>{croppedImg && memoImg}</OutputContainer>;
};
