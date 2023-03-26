import FixedButtons from '@/pages/Home/components/FooterMenu/FixedButtons';
import FooterMenu from '@/pages/Home/components/FooterMenu/FooterMenu';
import LateralPanel, {
  SectionStateType,
} from '@/pages/Home/components/LateralPanel/LateralPanel';
import MobileSection from '@/pages/Home/components/LateralPanel/MobileSection';
import AppProvider from '@/redux/AppProvider';
import { uploadImage } from '@/redux/slices/imageSlice';
import { store } from '@/redux/store/store';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

describe('The footer component', () => {
  render(
    <AppProvider>
      <FooterMenu />
    </AppProvider>
  );

  test('Should be render the footer', () => {
    expect(screen.getByTestId('bottom-panel-component')).toBeDefined();
  });
  store.dispatch(uploadImage(''));

  store.dispatch(uploadImage('aaaaa'));

  test('Should be execute the function beacuse the image exist', async () => {
    const handleSelection = vi.fn();
    render(
      <AppProvider>
        <FixedButtons handleSelection={handleSelection} />
      </AppProvider>
    );

    const cropBtn = await screen.getByTestId('crop_button');
    const zoomBtn = await screen.getByTestId('zoom_button');
    fireEvent.click(cropBtn);
    fireEvent.click(zoomBtn);

    expect(handleSelection).toBeCalled();
  });

  test('should be render the lateral-panel-component and check the buttons', async () => {
    cleanup();
    const handleSelection = vi.fn();
    render(
      <AppProvider>
        <FixedButtons handleSelection={handleSelection} />
      </AppProvider>
    );
    const fixedButtonContainer = screen.getByTestId('buttons-container');
    //Should be rendered 3 buttons
    await expect(fixedButtonContainer.childNodes.length).toBe(4);
  });

  test('should be render the crop area in mobileSection & close btn', () => {
    let selection: SectionStateType = {
      setting: 'crop_selection',
      tool: '',
      aspect_ratio: '',
      open: true,
    };
    const mockSetSelection = vi.fn(
      (value: string) => (selection.setting = value)
    );
    render(
      <AppProvider>
        <MobileSection selection={selection} setSelection={mockSetSelection} />
      </AppProvider>
    );
    expect(screen.getAllByTestId('crop-area')).toBeDefined();
    expect(screen.getAllByTestId('close-btn')).toBeDefined();
    const closeBtn = screen.getByTestId('close-btn');
    fireEvent.click(closeBtn);
    expect(mockSetSelection).toBeCalled();
  });

  test('should be render the zoom area in mobileSection & close btn', () => {
    let selection = {
      setting: 'zoom_selection',
      tool: '',
      aspect_ratio: '',
      open: true,
    };
    const mockSetSelection = vi.fn(
      (value: string) => (selection.setting = value)
    );
    render(
      <AppProvider>
        <MobileSection selection={selection} setSelection={mockSetSelection} />
      </AppProvider>
    );
    expect(screen.getAllByTestId('close-btn')).toBeDefined();
    const closeBtn = screen.getByTestId('close-btn');
    fireEvent.click(closeBtn);
    expect(mockSetSelection).toBeCalled();
  });
});
