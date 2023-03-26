import Login from '@/pages/Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  createMemoryRouter,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { BasicUserLogged } from '@/models';

export const getLocalStorageForKey = (key: string) => {
  return JSON.parse(localStorage.getItem(`${key}`) as string);
};

describe('Login', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Login />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });
  test('should be rendered', async () => {
    await expect(screen.getAllByText('Auth0'));
  });
  test('should be render the logo', async () => {
    await expect(screen.getByAltText('logo img'));
  });
  test('should be render the logo, title & subTitle', async () => {
    await expect(screen.getByText(/Vamos a/i));
    await expect(screen.getByText(/crear/i));
    await expect(screen.getByText(/Algo fantástico/i));
  });
  test('should be render two buttons', async () => {
    let elements = screen.getAllByTestId(/(Login-)/g);
    await expect(elements.length).toBe(2);
  });

  test('enter how guest and getting the user from LocalStorage', async () => {
    let elements = screen.getAllByTestId(/(Login-)/g);
    const guestBtn = elements[1];
    // await expect(elements.length).toBe(2);
    guestBtn.click();
    const user = getLocalStorageForKey('user');
    await expect(user.type).toBe('guest');
  });

  test('before make a click in AuthLoginButton should be change isLoading=true', async () => {
    const { result } = renderHook(() => useAuth0());

    let elements = screen.getAllByTestId(/(Login-)/g);
    const auth0Btn = elements[0];
    auth0Btn.click();

    await expect(result.current.isLoading).toBeTruthy();
  });

  test('simulating loged user. Should be redirect to "/"', async () => {
    const { result } = renderHook(() => useAuth0());
    const userLogged: BasicUserLogged = {
      name: 'Tester n1',
      nickname: 'tester@gmail',
      type: 'authorized',
    };
    // first
    const userData = JSON.stringify(userLogged);
    await expect(result?.current?.isAuthenticated).not.toBeTruthy();

    // simulate the isAuthenticated is true for useEffect redirection
    result.current.isAuthenticated = true;
    localStorage.setItem('user', userData);
    await waitFor(() => expect(result.current.isAuthenticated).toEqual(true));

    // test if we see the header HomePage
    expect(await screen.findAllByRole('heading'));
  });
});
