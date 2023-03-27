import { imagesFromApiAdapter } from '@/pages/ComunityUploads/adapters/images.adapter';
import { getMyImages } from '../ComunityUploads/services/obtain-my-images.service';
import { ApiImage, AppImage } from '../ComunityUploads/models/Images.model';
import { getAllImages } from '@/pages/ComunityUploads/services/obtain-all-images.service';
import { describe, expect, expectTypeOf, test, vi } from 'vitest';
import { getImageById } from '@/pages/ComunityUploads/services/obtain-image-by-id.service';
import { store } from '@/redux/store/store';
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';

describe('Testing of services of page', async () => {
  render(<SnackbarProvider />);

  // ## Services
  test('obtain-all-images - should be return a array of images', async () => {
    const loadingFx = vi.spyOn(store, 'dispatch');
    const data = await getAllImages();

    //Check if the loading is false & is executed two times

    let loading = store.getState().app.loading;
    expect(loading).toBeFalsy();
    expect(loadingFx).toBeCalledTimes(2);
    expectTypeOf(data).toEqualTypeOf<ApiImage[]>();
  });

  test('obtain-my-images - should be return a array of images', async () => {
    const loadingFx = vi.spyOn(store, 'dispatch');
    const data = await getMyImages();
    //Check if the loading is false & is executed two times

    let loading = store.getState().app.loading;
    expect(loading).toBeFalsy();
    expect(loadingFx).toBeCalledTimes(2);

    expectTypeOf(data).toEqualTypeOf<ApiImage[]>();
  });

  test('obtain-image-by-id - should be return a array of images', async () => {
    const loadingFx = vi.spyOn(store, 'dispatch');
    const data = await getImageById('641de34d266499e0e1d0dc81');

    //Check if the loading is false & is executed two times

    let loading = store.getState().app.loading;
    expect(loading).toBeFalsy();
    expect(loadingFx).toBeCalledTimes(2);

    expectTypeOf(data).toEqualTypeOf<ApiImage[]>();
  });

  // ## Adapters
  test('obtain-all-images - should be return a adapted data for the app', async () => {
    const data = await getAllImages();
    if (!data)
      expectTypeOf(imagesFromApiAdapter(data)).toEqualTypeOf<AppImage[]>();
  });

  test('obtain-my-images - should be return a adapted data for the app', async () => {
    const data = await getMyImages();
    if (!data)
      expectTypeOf(imagesFromApiAdapter(data)).toEqualTypeOf<AppImage[]>();
  });

  test('obtain-image-by-id - should be return a adapted data for the app', async () => {
    const data = await getImageById('641de34d266499e0e1d0dc81');
    if (!data)
      expectTypeOf(imagesFromApiAdapter(data)).toEqualTypeOf<AppImage[]>();
  });

  //## Errors

  test('obtain-image-by-id -Should be return a eror in the petition', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Server error'))
    );
    const data = await getImageById('641de34d266499e0e1d0dc81');
    expect(data).toBeInstanceOf(Error);
  });
  test('obtain-all-images - -Should be return a eror in the petition', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Server error'))
    );
    const data = await getAllImages();
    expect(data).toBeInstanceOf(Error);
  });
  test('obtain-my-images --Should be return a eror in the petition', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Server error'))
    );
    const data = await getMyImages();
    expect(data).toBeInstanceOf(Error);
  });
});
