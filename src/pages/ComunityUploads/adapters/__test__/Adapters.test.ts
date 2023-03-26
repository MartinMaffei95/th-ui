import { imagesFromApiAdapter } from '@/pages/ComunityUploads/adapters/images.adapter';
import { AppImage, ApiImage } from '@/pages/ComunityUploads/models';
import { describe, test, expectTypeOf } from 'vitest';

const appImageMock: ApiImage[] = [
  {
    _id: '641de34d266499e0e1d0dc81',
    createdAt: '2023-03-24T17:52:13.422Z',
    media:
      'https://thumbnail-api-images.s3.us-east-2.amazonaws.com/1679680332055-thumbnail.jpeg',
    name: 'Martin Maffei',
    private: false,
    updatedAt: '2023-03-24T17:52:13.422Z',
    uploaded_by: 'martinmaffei95@gmail.com',
  },
];
describe('Test adapters of comunity page', () => {
  test('should be return a AppImage Type', () => {
    const data = imagesFromApiAdapter(appImageMock);

    expectTypeOf(data).toEqualTypeOf<AppImage[]>();
  });
});
