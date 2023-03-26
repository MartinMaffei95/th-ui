import { imagesFromApiAdapter } from '@/pages/ComunityUploads/adapters/images.adapter';
import ImageViewer from '@/pages/ComunityUploads/components/ImageViewer';
import { AppImage } from '@/pages/ComunityUploads/models';
import { getImageById } from '@/pages/ComunityUploads/services/obtain-image-by-id.service';
import { StyledImagesLayout } from '@/pages/ComunityUploads/styled-components';
import Error500 from '@/pages/Errors/Error500';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserImage = () => {
  const [error, setError] = useState<boolean>(false);
  const [image, setImage] = useState<AppImage>();
  let { thid } = useParams();
  useEffect(() => {
    if (thid) {
      getImageById(thid)
        .then((data) => setImage(imagesFromApiAdapter(data)[0]))
        .catch(() => setError(true));
    }
  }, []);

  return (
    <StyledImagesLayout>
      {image && !error ? (
        <ImageViewer image={image} />
      ) : !!image && error ? (
        <Error500 />
      ) : (
        <div>No hay datos </div>
      )}
    </StyledImagesLayout>
  );
};

export default UserImage;
