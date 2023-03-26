import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import DragDrop from '@/pages/Home/components/DragnDrop/DragDrop';
import AppProvider from '@/redux/AppProvider';
import { FiNavigation } from 'react-icons/fi';
import { StyledFormFileUpload } from '@/pages/Home/styled-components';
import FormDragDrop from '@/pages/Home/components/DragnDrop/FormDragDrop';

describe('Drag and Drop', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <DragDrop />
      </AppProvider>
    );
  });
  afterEach(cleanup);

  it('The button "upload file" must be exists', () => {
    const buttonUfile = screen.getByText(/Upload a file/i);
    expect(buttonUfile).toBeDefined();
  });
  it('handling buttons', () => {
    cleanup();
    const handleDrag = vi.fn();
    const handleDrop = vi.fn();
    const handleFile = vi.fn();
    let st = false;
    const dragActive = vi.fn(() => !st);

    render(
      <FormDragDrop
        handleDrag={handleDrag}
        handleDrop={handleDrop}
        handleFile={handleFile}
        dragActive={dragActive()}
      ></FormDragDrop>
    );
    const formDandD = screen.getByTestId('form-file-upload');
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    fireEvent.dragEnter(formDandD, {
      dataTransfer: {
        files: [file],
      },
    });
    expect(handleDrag).toBeCalledTimes(1);

    fireEvent.drop(formDandD, {
      dataTransfer: {
        files: [file],
      },
    });

    expect(handleDrop).toBeCalledTimes(1);
  });
});
