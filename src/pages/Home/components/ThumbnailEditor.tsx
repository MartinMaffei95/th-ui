import { useState, useCallback, CSSProperties } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxStateType } from '../../../models/Redux.model';
import { previewImage } from '../../../redux/slices/imageSlice';
import { updateSettingsData } from '../../../redux/slices/settingTools.slice';
import { getCroppedImg } from '../../../utilities/get-preview-image';
import DragDrop from './DragnDrop/DragDrop';
import { ThumbnailEditorContainer } from '../styled-components/ThumbnailEditor.style';
import { useResize } from '@/Hooks/useResize';

const ThumbnailEditor = () => {
  const dispatch = useDispatch();
  const { isPhone } = useResize();

  const b64img = useSelector((state: ReduxStateType) => state.image.image);
  const { area, zoom, aspect_ratio } = useSelector(
    (state: ReduxStateType) => state.settingTools
  );

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });

  const onCropComplete = useCallback(
    async (croppedArea: Area, croppedAreaPixels: Area) => {
      if (!b64img) return;
      console.log(b64img, croppedAreaPixels);
      const croppedImage = await getCroppedImg(b64img, croppedAreaPixels);
      dispatch(previewImage(croppedImage));
      dispatch(updateSettingsData({ name: 'area', value: croppedAreaPixels }));
    },
    [b64img]
  );

  return (
    <ThumbnailEditorContainer isPhone={isPhone}>
      {/* CROPPER */}
      {b64img ? (
        <Cropper
          image={b64img}
          crop={crop}
          zoom={zoom}
          aspect={aspect_ratio}
          cropShape="rect" //"rect" | "round"
          showGrid={true}
          restrictPosition={false}
          onCropChange={(c) => {
            setCrop(c);
          }}
          onCropComplete={onCropComplete}
          onZoomChange={(zoom: number) =>
            dispatch(updateSettingsData({ name: 'zoom', value: zoom }))
          }
          onCropAreaChange={onCropComplete}
          zoomSpeed={0.2}
          onInteractionStart={() => {}}
        />
      ) : (
        <DragDrop />
      )}
    </ThumbnailEditorContainer>
  );
};

export default ThumbnailEditor;
