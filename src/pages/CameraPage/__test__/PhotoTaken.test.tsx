import { BasicUserLogged, ReduxStateType } from '@/models';
import CameraComponent from '@/pages/CameraPage/CameraComponent';
import PhotoTaken from '@/pages/CameraPage/compontes/PhotoTaken/PhotoTaken';
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

import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('Photo Taken', () => {
  const savePhoto = vi.fn();
  const cleanImage = vi.fn();
  beforeEach(async () => {
    await render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <PhotoTaken
            savePhoto={savePhoto}
            cleanImage={cleanImage}
            photo={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCALQAcUDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGR'
            }
          />
        </MemoryRouter>
      </Provider>
    );
  });

  test('Should be render the buttons', () => {
    expect(screen.getByText(/Borrar/i));
    expect(screen.getByText(/Guardar/i));
  });

  test('On click savePhoto should be called the function', () => {
    fireEvent.click(screen.getByText(/Guardar/i));
    expect(savePhoto).toBeCalled();
  });

  test('On click savePhoto should be called the function', () => {
    fireEvent.click(screen.getByText(/Borrar/i));
    expect(cleanImage).toBeCalled();
  });
});
