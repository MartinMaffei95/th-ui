import Button from '@/pages/Home/components/FooterMenu/Button';
import {
  SettingButtonSx,
  SettingContainerSx,
} from '@/pages/Home/styled-components';
import { updateSettingsData } from '@/redux/slices/settingTools.slice';
import { IconSx } from '@/styles';
import { ChangeEvent } from 'react';
import { BsAspectRatio } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const CropSection = () => {
  const dispatch = useDispatch();
  const handleSetting = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    dispatch(updateSettingsData({ name, value: Number(value) }));
  };
  return (
    <div className="section-in" style={SettingContainerSx}>
      <Button
        btn_sx={SettingButtonSx}
        value={`${2 / 1}`}
        fx={handleSetting}
        icon={<BsAspectRatio style={IconSx} />}
        label={'2:1'}
        name={'aspect_ratio'}
      />

      <Button
        btn_sx={SettingButtonSx}
        value={`${2 / 2}`}
        fx={handleSetting}
        icon={
          <BsAspectRatio
            style={{
              ...IconSx,
              ...{ transform: 'scale(.75,1)' },
            }}
          />
        }
        label={'2:2'}
        name={'aspect_ratio'}
      />
      <Button
        btn_sx={SettingButtonSx}
        value={`${3 / 4}`}
        fx={handleSetting}
        icon={
          <BsAspectRatio
            style={{
              ...IconSx,
              ...{ transform: 'rotate(90deg)' },
            }}
          />
        }
        label={'3:4'}
        name={'aspect_ratio'}
      />
    </div>
  );
};

export default CropSection;
