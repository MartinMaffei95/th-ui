import { useRef, useState, useEffect } from 'react';
import { Camera } from 'react-camera-pro';

import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { uploadImage } from '../../redux/slices/imageSlice';
import CameraFooter from './compontes/CameraFooter/CameraFooter';
import PhotoTaken from './compontes/PhotoTaken/PhotoTaken';
import { StyledCameraComponent } from './styled-components';

const CameraComponent = () => {
  const camera = useRef<any>(null);
  const [image, setImage] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);

  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const takePhoto = () => {
    setImage(camera?.current?.takePhoto());
  };

  const flipCamera = () => {
    camera?.current?.switchCamera();
  };

  const savePhoto = async () => {
    if (image) {
      dispatch(uploadImage(image));
      navigate('/');
    }
  };

  const cleanImage = () => {
    setImage(null);
  };

  useEffect(() => {}, [isFrontCamera]);
  return (
    <StyledCameraComponent>
      <Camera
        facingMode={isFrontCamera ? 'user' : 'environment'}
        errorMessages={{
          noCameraAccessible:
            'No camera device accessible. Please connect your camera or try a different browser.',
          permissionDenied:
            'Permission denied. Please refresh and give camera permission.',
          switchCamera:
            'It is not possible to switch camera to different one because there is only one video device accessible.',
          canvas: 'Canvas is not supported.',
        }}
        ref={camera}
      />
      {image ? (
        <PhotoTaken
          photo={image}
          savePhoto={() => savePhoto()}
          cleanImage={() => cleanImage()}
        />
      ) : null}
      <CameraFooter takePhoto={takePhoto} flipCamera={flipCamera} />
    </StyledCameraComponent>
  );
};

export default CameraComponent;
