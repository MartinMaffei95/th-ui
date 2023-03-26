import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSliceType } from '../../models/Redux.model';

const initState: ImageSliceType = { image: '', croppedImg: '' };

export const ImageSlice = createSlice({
  name: 'image',
  initialState: initState,
  reducers: {
    uploadImage: (state, action: PayloadAction<any>) => {
      state.image = action.payload;
    },
    previewImage: (state, action: PayloadAction<any>) => {
      state.croppedImg = action.payload;
    },
  },
});
export const { uploadImage, previewImage } = ImageSlice.actions;

export default ImageSlice.reducer;
