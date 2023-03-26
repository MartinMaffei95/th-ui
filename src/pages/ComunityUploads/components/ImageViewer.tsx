import GeneralButton from '@/components/Buttons/GeneralButton';
import useCopyToClipboard from '@/Hooks/useCopyToClipBoard';
import { AppImage } from '@/pages/ComunityUploads/models';
import {
  DataDisplayer,
  ImageContiner,
} from '@/pages/ComunityUploads/styled-components';
import { sendSnackbar } from '@/services/snackbar.manager';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
const ImageViewer = ({ image }: { image: AppImage }) => {
  const navigate = useNavigate();
  const [value, copy] = useCopyToClipboard();

  return (
    <>
      <DataDisplayer>
        <GeneralButton
          icon={
            <BsFillArrowLeftCircleFill
              style={{ color: 'rgba(255, 255, 255, 1)' }}
            />
          }
          action={() => navigate(-1)}
        />

        <div className="data">
          <p>{image?.name}</p>
          <p>{image?.createdBy}</p>
          <p>{image?.createdAt}</p>

          <div className="buttons">
            <GeneralButton
              icon={<FaLink style={{ color: 'rgba(255, 255, 255, 0.54)' }} />}
              action={() => {
                sendSnackbar.info('Copy URL on clipboard');
                copy(`${image?.mediaUrl}`);
              }}
            />
            <a target="_blank" href={image?.mediaUrl} />
            <GeneralButton
              aria-label={`External link to image`}
              icon={
                <GoLinkExternal
                  style={{ color: 'rgba(255, 255, 255, 0.54)' }}
                />
              }
              action={() => {
                window.open(`${image?.mediaUrl}`, '_blank');
              }}
            />
          </div>
        </div>
      </DataDisplayer>

      <ImageContiner data-testid="imageContainer">
        <div className="image">
          <img src={image?.mediaUrl} alt={`${image?.createdBy} image`} />
        </div>
      </ImageContiner>
    </>
  );
};

export default ImageViewer;
