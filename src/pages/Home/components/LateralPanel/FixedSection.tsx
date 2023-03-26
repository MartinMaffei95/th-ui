import GeneralButton from '@/components/Buttons/GeneralButton';
import { ReduxStateType } from '@/models';
import { StyledPanelButtonsContainer } from '@/pages/Home/styled-components';
import { IconSx } from '@/styles';
import { clearDesk } from '@/utilities/clear-desk';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiCrop } from 'react-icons/bi';
import { MdCropFree } from 'react-icons/md';
import { useSelector } from 'react-redux';

const FixedSection = ({ handleSelection }: { handleSelection: Function }) => {
  const { image } = useSelector((state: ReduxStateType) => state.image);

  return (
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
  );
};

export default FixedSection;
