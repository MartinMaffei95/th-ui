import GeneralButton from '@/components/Buttons/GeneralButton';
import CropSection from '@/pages/Home/components/FooterMenu/CropSection';
import ZoomSection from '@/pages/Home/components/FooterMenu/ZoomSection';
import { SectionStateType } from '@/pages/Home/components/LateralPanel/LateralPanel';
import { StyledToolBox } from '@/pages/Home/styled-components';
import { IoIosArrowUp } from 'react-icons/io';

const MobileSection = ({
  selection,
  setSelection,
}: {
  selection: SectionStateType;
  setSelection: Function;
}) => {
  return (
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
        action={() =>
          setSelection((state: SectionStateType) => ({ ...state, open: false }))
        }
        testId="close-btn"
      />
    </StyledToolBox>
  );
};

export default MobileSection;
