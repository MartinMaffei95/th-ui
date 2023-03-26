import { useEffect, useState } from 'react';
import { imagesFromApiAdapter } from './adapters/images.adapter';
import { AppImage } from './models';

//==>> mui
import { getMyImages } from './services/obtain-my-images.service';
import ImageListsComponents from '@/pages/ComunityUploads/components/ImageListsComponents';
import { StyledImagesLayout } from '@/pages/ComunityUploads/styled-components';
import Error500 from '@/pages/Errors/Error500';

const MyImages = () => {
  const [error, setError] = useState<boolean>(false);
  const [images, setImages] = useState<AppImage[]>([]);
  const getData = () => {
    getMyImages()
      .then((data) => setImages(imagesFromApiAdapter(data)))
      .catch(() => setError(true));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledImagesLayout>
      {images && !error ? (
        <ImageListsComponents images={images} />
      ) : !!images && error ? (
        <Error500 />
      ) : (
        <div>No hay datos </div>
      )}
    </StyledImagesLayout>
  );
};

export default MyImages;
