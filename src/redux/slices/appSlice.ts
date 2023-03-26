import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceType } from '../../models/Redux.model';

const initState: AppSliceType = { loading: false };

export const AppSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {
    setLoading: (state: any, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const { setLoading } = AppSlice.actions;

export default AppSlice.reducer;
