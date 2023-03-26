import { OptType, ReduxStateType } from '@/models';
import {
  AiOutlineDownload,
  AiOutlineCloudUpload,
  AiFillFileAdd,
} from 'react-icons/ai';
import { BiImages } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { sharingInformationService } from '@/services/sharing-information.service';
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const useOptions = () => {
  const { image } = useSelector((state: ReduxStateType) => state.image);
  const navigate: NavigateFunction = useNavigate();

  const navigateTo = (to: string) => {
    navigate(`${to}`);
  };

  const upFileOptions: OptType[] = [
    {
      id: 30,
      name: 'Nueva imagen',
      icon: <AiFillFileAdd />,
      disabled: false,
      action: () => {
        try {
          sharingInformationService.setSubject({
            modal_open: true,
            modal: 'newFile',
          });
        } catch (e) {
          console.error(e);
        }
      },
    },
  ];

  const fileOptions: OptType[] = [
    {
      id: 1,
      name: 'Local',
      icon: <AiOutlineDownload />,
      disabled: !!image ? false : true,
      action: () => {
        try {
          sharingInformationService.setSubject({
            modal_open: true,
            modal: 'downloadFile',
          });
        } catch (e) {
          console.error(e);
        }
      },
    },
    {
      id: 2,
      name: 'En la nube',
      icon: <AiOutlineCloudUpload />,
      disabled: !!image ? false : true,
      action: () => {
        try {
          sharingInformationService.setSubject({
            modal_open: true,
            modal: 'uploadFile',
          });
        } catch (e) {
          console.error(e);
        }
      },
    },
  ];

  const imagesOptions: OptType[] = [
    {
      id: 20,
      name: 'My images',
      icon: <BiImages />,
      disabled: false,
      action: () => {
        navigateTo('/images');
      },
    },
    {
      id: 21,
      name: 'Imagenes públicas',
      icon: <FiUsers />,
      disabled: false,
      action: () => {
        navigateTo('/comunity');
      },
    },
  ];

  return {
    upFileOptions,
    fileOptions,
    imagesOptions,
  };
};

export default useOptions;
