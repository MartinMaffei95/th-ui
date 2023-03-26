import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Error500 from '@/pages/Errors/Error500';
import { MemoryRouter } from 'react-router-dom';
import Error404 from '@/pages/Errors/Error404';
import * as router from 'react-router';
describe('Testing Error pages', () => {
  const navigate = vi.fn();
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  render(
    <MemoryRouter initialEntries={['/']}>
      <Error500 />
    </MemoryRouter>
  );
  test('Error 500 should be render warning image and back button', () => {
    expect(screen.getByText(/Volver/i)).toBeDefined();
    fireEvent.click(screen.getByText(/Volver/i));
    expect(navigate).toBeCalled();
    expect(screen.getByAltText(/Error 500 image/i)).toBeDefined();
  });

  test('Error 404 should be render warning image and back button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Error404 />
      </MemoryRouter>
    );
    expect(screen.getByText(/Volver/i)).toBeDefined();
    fireEvent.click(screen.getByText(/Volver/i));
    expect(navigate).toBeCalled();
    expect(screen.getByAltText(/Error 404 image/i)).toBeDefined();
  });
});
