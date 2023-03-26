import { useCallback } from 'react';

// =>= Icons
import { MdCropFree, MdPreview } from 'react-icons/md';
import { BiCrop } from 'react-icons/bi';
import { AiFillFileAdd } from 'react-icons/ai';

// =>> Components
import Button from './Button';

// =>> Styles
import { FooterSx } from '../../styled-components';
import { IconSx } from '../../../../styles';
// =>> Utils
import { newFile } from '@/utilities/add-file';
import { sharingInformationService } from '@/services/sharing-information.service';
import { getCroppedImg } from '@/utilities/get-preview-image';

// =>> Redux
import { useDispatch } from 'react-redux';
import { previewImage } from '@/redux/slices/imageSlice';
import { useSelector } from 'react-redux';

//=> Models
import { ReduxStateType } from '@/models';

type FixedButtonsType = {
  handleSelection: Function;
};
const FixedButtons = ({ handleSelection }: FixedButtonsType) => {
  const dispatch = useDispatch();
  const { area } = useSelector((state: ReduxStateType) => state.settingTools);
  const { image } = useSelector((state: ReduxStateType) => state.image);

  const showCroppedImage = useCallback(async () => {
    try {
      sharingInformationService.setSubject({ preview: true });
      const croppedImage = await getCroppedImg(image, area);
      dispatch(previewImage(croppedImage));
    } catch (e) {
      console.error(e);
    }
  }, [image, area]);

  return (
    <div style={FooterSx} data-testid="buttons-container">
      <Button
        value={'new_file'}
        fx={newFile}
        icon={<AiFillFileAdd style={IconSx} />}
        name={'add_file'}
      />
      <Button
        value={'crop_selection'}
        fx={handleSelection}
        icon={<BiCrop style={IconSx} />}
        name={'setting'}
        disabled={image ? false : true}
      />
      <Button
        value={'zoom_selection'}
        fx={handleSelection}
        icon={<MdCropFree style={IconSx} />}
        name={'setting'}
        disabled={image ? false : true}
      />
      <Button
        value={'preview'}
        fx={() => showCroppedImage()}
        icon={<MdPreview style={IconSx} />}
        name={'preview'}
        disabled={image ? false : true}
      />
    </div>
  );
};

export default FixedButtons;
