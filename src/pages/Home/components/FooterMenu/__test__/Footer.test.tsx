import FixedButtons from '@/pages/Home/components/FooterMenu/FixedButtons';
import FooterMenu from '@/pages/Home/components/FooterMenu/FooterMenu';
import AppProvider from '@/redux/AppProvider';
import { cleanup, render, screen } from '@testing-library/react';
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
});
