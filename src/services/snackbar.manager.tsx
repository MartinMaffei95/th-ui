import GeneralButton from '@/components/Buttons/GeneralButton';
import { IconSx } from '@/styles';
import { VariantType, enqueueSnackbar, closeSnackbar } from 'notistack';
import { MdClose } from 'react-icons/md';

export const sendSnackbar = {
  toast(msg: string, variant: VariantType = 'default') {
    enqueueSnackbar(msg, {
      variant: variant,
      action: (id) => (
        <GeneralButton
          sx="color:white;"
          center
          icon={<MdClose style={IconSx} />}
          action={() => closeSnackbar(id)}
        />
      ),
    });
  },
  success(msg: string) {
    this.toast(msg, 'success');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
  info(msg: string) {
    this.toast(msg, 'info');
  },
  warning(msg: string) {
    this.toast(msg, 'warning');
  },
};
