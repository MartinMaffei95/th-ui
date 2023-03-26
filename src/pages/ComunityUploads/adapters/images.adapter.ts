import { ApiImage, AppImage } from '../models';

export const imagesFromApiAdapter = (images: ApiImage[]): AppImage[] => {
  let allImages: AppImage[] = [];

  images.map((img) =>
    allImages.push({
      id: img._id,
      createdAt: img.createdAt,
      mediaUrl: img.media,
      name: img.name,
      private: img.private,
      updatedAt: img.updatedAt,
      createdBy: img.uploaded_by,
    })
  );

  return allImages;
};
