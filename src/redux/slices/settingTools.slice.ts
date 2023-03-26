import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsSliceType } from '../../models/Redux.model';
import { Draft } from '@reduxjs/toolkit';

type Typ = {
  name: string;
  value: number | { x: number; y: number; width: number; height: number };
};

const initState: SettingsSliceType = {
  height: 120,
  width: 120,
  zoom: 1,
  aspect_ratio: 1,
  crop: { x: 0, y: 0 },
  area: { x: 0, y: 0, width: 50, height: 50 },
};

export const SettingToolsSlice = createSlice({
  name: 'settingTools',
  initialState: initState,
  reducers: {
    updateSettingsData: (state, action: PayloadAction<Typ>) => {
      if (!action?.payload?.name) return;
      return {
        ...state,
        [action?.payload?.name]: action.payload.value,
      };
    },
  },
});
export const { updateSettingsData } = SettingToolsSlice.actions;

export default SettingToolsSlice.reducer;
