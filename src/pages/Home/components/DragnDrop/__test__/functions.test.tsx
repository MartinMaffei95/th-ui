import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import DragDrop from '@/pages/Home/components/DragnDrop/DragDrop';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import settingToolsSlice from '@/redux/slices/settingTools.slice';
import imageSlice, { uploadImage } from '@/redux/slices/imageSlice';
import appSlice from '@/redux/slices/appSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('DragDrop Component', () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        settingTools: settingToolsSlice,
        image: imageSlice,
        app: appSlice,
      },
    });
    component = render(
      <Provider store={store}>
        <DragDrop />
      </Provider>
    );
  });

  it('should handle drag events correctly', () => {
    const formElement = component.getByTestId('form-file-upload');
    const dragEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      type: 'dragover',
    };
    fireEvent.dragOver(formElement, dragEvent);

    expect(component.getByTestId('form-file-upload').className).includes(
      'drag-active'
    );
  });

  it('should handle drop events correctly', async () => {
    const formElement = component.getByTestId('form-file-upload');
    const dropEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      dataTransfer: {
        files: [
          new File(['(⌐□_□)'], 'chucknorris.png', {
            type: 'image/png',
          }),
        ],
      },
    };
    fireEvent.drop(formElement, dropEvent);

    expect(component.getByTestId('form-file-upload').className).not.includes(
      'drag-active'
    );
    // Asegurate de que la imagen se cargó correctamente en el estado de Redux
    // await component.findByTestId('th-editor');
  });
});
