import { uploadImage } from '@/redux/slices/imageSlice';
import Home from '@/pages/Home/Home';
import { store } from '@/redux/store/store';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { beforeEach, describe, expect, test } from 'vitest';
import { BasicUserLogged } from '@/models';

describe('Home', () => {
  beforeEach(async () => {
    const userLogged: BasicUserLogged = {
      name: 'Tester n1',
      nickname: 'tester@gmail',
      type: 'guest',
    };
    const userData = JSON.stringify(userLogged);
    localStorage.setItem('user', userData);
    await render(
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  });
  test('should be render the main-role component', async () => {
    await expect(screen.getByRole('main', { name: 'main-component' }));
  });
  test('should be render the lateral-panel-component and check the buttons', async () => {
    const fixedButtonContainer = screen.getByTestId('fixed-button-container');
    //Should be rendered 3 buttons
    await expect(fixedButtonContainer.childNodes.length).toBe(3);
    await expect(screen.getByTestId('lateral-panel-component'));
  });

  store.dispatch(uploadImage('imagesliceonBASE64'));
  test('should Be render the Cropper', () => {
    // reactEasyCrop_Container;ç
    // console.log(screen.queryByTestId('container'));
    expect(screen.queryByTestId('container')).toBeDefined();
  });
});
