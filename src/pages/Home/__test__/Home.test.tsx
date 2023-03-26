import { BasicUserLogged, ReduxStateType } from '@/models';
import Home from '@/pages/Home/Home';
import { store } from '@/redux/store/store';
import {
  render,
  screen,
  fireEvent,
  renderHook,
  prettyDOM,
} from '@testing-library/react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';

import { beforeEach, describe, expect, test } from 'vitest';

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

  // test('should be render the Drag and Drop component', async () => {
  //   const uploadBtn = screen.getByTestId('form-file-upload');
  //   console.log(prettyDOM(uploadBtn));
  //   expect(store.getState().image.image).equal('');

  //   const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  //   fireEvent.drop(uploadBtn, {
  //     dataTransfer: {
  //       files: [file],
  //     },
  //   });
  //   expect;
  //   console.log(store.getState().image.image);
  //   expect(store.getState().image.image).not.equal('');
  // });
});
