//Use this object for useSelector state

export type ReduxStateType = {
  settingTools: SettingsSliceType;
  image: ImageSliceType;
  app: AppSliceType;
};

export type ImageSliceType = { image: string; croppedImg: string };

export interface SettingsSliceType {
  height: number;
  width: number;
  zoom: number;
  aspect_ratio: number;
  crop: { x: number; y: number };
  area: { x: number; y: number; width: number; height: number };
}

export type AppSliceType = {
  loading: boolean;
};
