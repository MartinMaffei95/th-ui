//=> Components
import {
  StyledLateralPanel,
  StyledPreviewPanel,
  StyledPreviewPanelContainer,
} from '@/pages/Home/styled-components';
import { Output } from '@/components/PreviewDrawer/OutPut';
// => Fx & Hooks
import { useState, MouseEvent } from 'react';
import MobileSection from '@/pages/Home/components/LateralPanel/MobileSection';
import FixedSection from '@/pages/Home/components/LateralPanel/FixedSection';

export type SectionStateType = {
  setting: string;
  tool: string;
  aspect_ratio: string;
  open: boolean;
};

const LateralPanel = () => {
  const [selection, setSelection] = useState<SectionStateType>({
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

  return (
    <StyledLateralPanel data-testid="lateral-panel-component">
      <MobileSection selection={selection} setSelection={setSelection} />
      <FixedSection handleSelection={handleSelection} />
      <StyledPreviewPanelContainer>
        <StyledPreviewPanel>
          <Output />
        </StyledPreviewPanel>
      </StyledPreviewPanelContainer>
    </StyledLateralPanel>
  );
};

export default LateralPanel;
