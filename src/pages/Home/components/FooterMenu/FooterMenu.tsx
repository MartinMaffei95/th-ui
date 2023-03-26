import { useState, MouseEvent } from 'react';
// =>= Icons
import { AiFillCloseCircle } from 'react-icons/ai';
// =>> Styles
import { FooterContainerSx, sectionSelectedSx } from '../../styled-components';
import { ButtonSx, CloseButtonSx, IconSx } from '../../../../styles';
// ==> Components
import FixedButtons from '@/pages/Home/components/FooterMenu/FixedButtons';
import CropSection from '@/pages/Home/components/FooterMenu/CropSection';
import ZoomSection from '@/pages/Home/components/FooterMenu/ZoomSection';
import CloseButton from '@/components/Buttons/CloseButton';
import { useResize } from '@/Hooks/useResize';

const FooterMenu = () => {
  const { isPhone } = useResize();
  const [selection, setSelection] = useState({
    setting: '',
    tool: '',
    aspect_ratio: '',
    open: false,
  });

  const handleSelection = (e: MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    setSelection((state) => ({
      ...state,
      [name]: value,
      open: true,
    }));
  };

  return (
    <div
      data-testid="bottom-panel-component"
      id="FOOT"
      style={FooterContainerSx}
    >
      <div
        style={{
          transition: 'ease-in .25s ',
          transform: `translateY(${selection?.open ? '0' : '100%'})`,
          ...sectionSelectedSx,
        }}
      >
        <CloseButton
          color="#fff"
          action={() => setSelection((state) => ({ ...state, open: false }))}
        />
        {selection.setting === 'crop_selection' ? (
          <CropSection />
        ) : selection.setting === 'zoom_selection' ? (
          <ZoomSection />
        ) : null}
      </div>
      <FixedButtons handleSelection={handleSelection} />
    </div>
  );
};

export default FooterMenu;
