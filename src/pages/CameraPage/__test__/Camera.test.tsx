import { BasicUserLogged, ReduxStateType } from '@/models';
import CameraComponent from '@/pages/CameraPage/CameraComponent';
import Home from '@/pages/Home/Home';
import { store } from '@/redux/store/store';
import {
  render,
  screen,
  fireEvent,
  renderHook,
  prettyDOM,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { beforeEach, describe, expect, test } from 'vitest';

describe('Home', () => {
  beforeEach(async () => {
    await render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <CameraComponent />
        </MemoryRouter>
      </Provider>
    );
  });

  test('should be render the footer of the camera & the 3 buttons', async () => {
    const cameraFooter = screen.getByTestId('camera-footer');
    const buttons = cameraFooter.querySelectorAll('button');
    expect(buttons.length).toBe(3);
    expect(cameraFooter);

    buttons.forEach((button) => button.click());
  });
});
