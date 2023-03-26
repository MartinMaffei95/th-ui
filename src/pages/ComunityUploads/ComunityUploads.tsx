import { useEffect, useState } from 'react';
import { imagesFromApiAdapter } from './adapters/images.adapter';
import { AppImage } from './models';
import { getAllImages } from './services/obtain-all-images.service';

//==>> mui
import ImageListsComponents from '@/pages/ComunityUploads/components/ImageListsComponents';
import { StyledImagesLayout } from '@/pages/ComunityUploads/styled-components';
import Error500 from '@/pages/Errors/Error500';

const ComunityUploads = () => {
  const [images, setImages] = useState<AppImage[]>([]);
  const [error, setError] = useState<boolean>(false);
  const getData = () => {
    getAllImages()
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

export default ComunityUploads;
