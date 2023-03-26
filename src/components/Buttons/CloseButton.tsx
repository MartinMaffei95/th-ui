import { StyleType } from '@/models';
import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { ButtonSx, CloseButtonSx, IconSx } from '../../styles';
type ButtonProps = {
  action?: Function;
  icon?: JSX.Element;
  iconPosition?: 'start' | 'end';
  sx?: StyleType;
  fullWidth?: boolean;
  color?: string;
};
const CloseButton = ({ action = () => {}, color = '#000' }: ButtonProps) => {
  const Closebutton = styled('button')({
    ...ButtonSx,
    ...CloseButtonSx,
  });
  return (
    <Closebutton onClick={() => action()}>
      <AiFillCloseCircle style={{ ...IconSx, ...{ color: color } }} />
    </Closebutton>
  );
};

export default CloseButton;
