import { Drawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReduxStateType } from '../../models/Redux.model';
import { sharingInformationService } from '../../services/sharing-information.service';
import CloseButton from '../Buttons/CloseButton';
import { Output } from './OutPut';

export const PreviewDrawer = () => {
  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data: any) => {
      data.preview && setOpen(data.preview);
    });
  });
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Drawer anchor={'top'} open={open} onClose={() => setOpen(false)}>
        <CloseButton action={() => setOpen(false)} />
        <Output />
      </Drawer>
    </div>
  );
};
