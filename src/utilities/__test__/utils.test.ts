import { SubjectManager } from '@/utilities/subject-manager';
import { getCroppedImg } from '@/utilities/get-preview-image';
import { convertToBase64 } from '@/utilities/convert-to-base-64';
import { describe, expect, test, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { clearDesk } from '@/utilities/clear-desk';
import { store } from '@/redux/store/store';
import { previewImage, uploadImage } from '@/redux/slices/imageSlice';

describe('Testing utils functions', () => {
  const subject = new SubjectManager();
  test('Instancisg the subject', () => {
    expect(subject).toBeDefined();
  });

  test('no errors on subject', () => {
    subject.setSubject({ msg: 'test' });
    subject.getSubject();
    expect(subject).toBeDefined();
  });

  test('decode image to base-64', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const base64 = await convertToBase64(file);
    if (base64) expect(base64).toBeTypeOf('string');
  });

  test('obtain the preview image', async () => {
    const area = { width: 743, height: 743, x: 4, y: 0 };
    const base64string = ` data:image/jpeg;base64,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`;
    const cropped = await getCroppedImg(base64string, area);

    //Must be return a promise
    expect(cropped).toBeTypeOf('object');
  });

  test('should be clear the images on state', () => {
    store.dispatch(uploadImage('testingImg'));
    store.dispatch(previewImage('testingImg'));
    let { image, croppedImg } = store.getState().image;
    expect(image).not.toBe('');
    expect(croppedImg).not.toBe('');

    clearDesk();

    // # After use the function our state is lcear
    image = store.getState().image.image;
    croppedImg = store.getState().image.croppedImg;

    expect(image).toBe('');
    expect(croppedImg).toBe('');
  });
});
