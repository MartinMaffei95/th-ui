import useCopyToClipboard from '@/Hooks/useCopyToClipBoard';
import { AppImage } from '@/pages/ComunityUploads/models';
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { FaLink } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { sendSnackbar } from '@/services/snackbar.manager';
import { GoLinkExternal } from 'react-icons/go';
import { BsFolderSymlink } from 'react-icons/bs';
import { useRef } from 'react';

const ImageListsComponents = ({ images }: { images: AppImage[] }) => {
  const [value, copy] = useCopyToClipboard();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();
  return (
    <ImageList
      sx={{
        width: '100vw',
        height: '100%',
        padding: '1rem',
      }}
    >
      {images?.map((img) => (
        <ImageListItem
          key={img?.id}
          style={{
            borderRadius: '5px',
          }}
        >
          <img
            src={`${img?.mediaUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${img?.mediaUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={`${img?.name} image`}
            loading="lazy"
            style={{
              borderRadius: '5px',
            }}
          />
          <ImageListItemBar
            title={img?.name}
            subtitle={img?.createdBy}
            style={{
              borderRadius: '0 0 5px 5px ',
            }}
            actionIcon={[
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${img?.name}`}
                onClick={() => {
                  sendSnackbar.info('Copy URL on clipboard');
                  copy(`${img?.mediaUrl}`);
                }}
              >
                <FaLink />
              </IconButton>,
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`Go to ${img?.name}`}
                onClick={() => {
                  navigate(`/images/${img.id}`, {
                    state: img,
                  });
                }}
              >
                <BsFolderSymlink />
              </IconButton>,

              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`External link to image`}
                onClick={() => {
                  window.open(`${img?.mediaUrl}`, '_blank');
                }}
              >
                <a target="_blank" href={img?.mediaUrl} ref={linkRef} />
                <GoLinkExternal />
              </IconButton>,
            ]}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageListsComponents;
