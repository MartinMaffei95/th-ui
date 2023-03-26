import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import CloseButton from '@/components/Buttons/CloseButton';

describe('Generic components Tests', () => {
  it('CloseButton. Should be execute the action prop', () => {
    const actionTest = vi.fn();
    render(
      <CloseButton
        action={() => {
          actionTest();
        }}
      />
    );

    const closeBtn = screen.getByTestId('generic-close-btn');
    fireEvent.click(closeBtn);
    expect(actionTest).toBeCalled();
  });
});
