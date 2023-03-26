import GeneralButton from '@/components/Buttons/GeneralButton';
import { ReduxStateType } from '@/models';
import { previewImage } from '@/redux/slices/imageSlice';
import { sharingInformationService } from '@/services/sharing-information.service';
import { IconSx } from '@/styles';
import { getCroppedImg } from '@/utilities/get-preview-image';
import { ButtonGroup, Paper } from '@mui/material';
import { useCallback, useState, MouseEvent } from 'react';
import { BiCrop } from 'react-icons/bi';
import { MdCropFree } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@/pages/Home/components/FooterMenu/Button';
import { IoIosArrowUp } from 'react-icons/io';
import CropSection from '@/pages/Home/components/FooterMenu/CropSection';
import ZoomSection from '@/pages/Home/components/FooterMenu/ZoomSection';
import {
  sectionSelectedSx,
  StyledLateralPanel,
  StyledPanelButtonsContainer,
  StyledPreviewPanel,
  StyledPreviewPanelContainer,
  StyledToolBox,
} from '@/pages/Home/styled-components';
import { Output } from '@/components/PreviewDrawer/OutPut';
import { clearDesk } from '@/utilities/clear-desk';
import { AiFillDelete } from 'react-icons/ai';
const LateralPanel = () => {
  const dispatch = useDispatch();
  const { area } = useSelector((state: ReduxStateType) => state.settingTools);
  const { image } = useSelector((state: ReduxStateType) => state.image);
  const [selection, setSelection] = useState({
    setting: 'crop_selection',
    tool: '',
    aspect_ratio: '',
    open: true,
  });

  const handleSelection = (e: MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    setSelection((state) => ({
      ...state,
      [name]: value,
      open: true,
    }));
  };

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
    <StyledLateralPanel data-testid="lateral-panel-component">
      <StyledToolBox
        style={{
          transition: 'ease-in .25s ',
          transform: `translateY(${selection?.open ? '100%' : '0'})`,
        }}
      >
        {selection.setting === 'crop_selection' ? (
          <CropSection />
        ) : selection.setting === 'zoom_selection' ? (
          <ZoomSection />
        ) : null}
        <GeneralButton
          sx="width:100%; bottom:0; left:0; margin-top:auto;height:1.5rem; display:flex;justify-content:center;align-items:center;color:#fff;background-color:#777;border-radius:none;"
          label=""
          icon={<IoIosArrowUp />}
          action={() => setSelection((state) => ({ ...state, open: false }))}
          testId="close-btn"
        />
      </StyledToolBox>

      <StyledPanelButtonsContainer data-testid="fixed-button-container">
        <GeneralButton
          testId="tool-clean-desk"
          icon={<AiFillDelete style={IconSx} />}
          disabled={image ? false : true}
          action={() => {
            clearDesk();
          }}
        />

        <GeneralButton
          value={'crop_selection'}
          action={handleSelection}
          icon={<BiCrop style={IconSx} />}
          name={'setting'}
          disabled={image ? false : true}
        />
        <GeneralButton
          value={'zoom_selection'}
          action={handleSelection}
          icon={<MdCropFree style={IconSx} />}
          name={'setting'}
          disabled={image ? false : true}
        />
      </StyledPanelButtonsContainer>

      <StyledPreviewPanelContainer>
        <StyledPreviewPanel>
          <Output />
        </StyledPreviewPanel>
      </StyledPreviewPanelContainer>
    </StyledLateralPanel>
  );
};

export default LateralPanel;
