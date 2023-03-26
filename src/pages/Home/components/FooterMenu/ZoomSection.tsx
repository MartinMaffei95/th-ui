import { ChangeEvent } from 'react';

//==> Styles
import {
  SettingButtonSx,
  SettingContainerSx,
} from '@/pages/Home/styled-components';
import { IconSx } from '@/styles';

// =>> Icons
import { MdZoomOut, MdZoomIn } from 'react-icons/md';
// =>> Redux
import { updateSettingsData } from '@/redux/slices/settingTools.slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//=>> Models
import { ReduxStateType } from '@/models';

const ZoomSection = () => {
  const dispatch = useDispatch();

  const handleSetting = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    dispatch(updateSettingsData({ name, value: Number(value) }));
  };

  const { zoom } = useSelector((state: ReduxStateType) => state.settingTools);
  return (
    <div
      className="section-in"
      data-testid="zoom-area"
      style={SettingContainerSx}
    >
      <button
        name="zoom"
        aria-label="zoom-in"
        value={zoom - 0.1}
        onClick={(e: any) => {
          handleSetting(e);
        }}
        style={SettingButtonSx}
      >
        <MdZoomOut style={IconSx} />
      </button>
      <input
        aria-label="zoom-input"
        type="range"
        name="zoom"
        value={zoom}
        step={0.1}
        min={0.1}
        max={5}
        onChange={(e) => {
          handleSetting(e);
        }}
      />
      <button
        name="zoom"
        aria-label="zoom-out"
        value={zoom + 0.1}
        onClick={(e: any) => {
          handleSetting(e);
        }}
        style={SettingButtonSx}
      >
        <MdZoomIn style={IconSx} />
      </button>
    </div>
  );
};

export default ZoomSection;
