import { StyleType } from '@/models';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
type ButtonProps = {
  label?: string;
  action?: Function;
  icon?: JSX.Element;
  iconPosition?: 'start' | 'end';
  sx?: StyleType;
  fullWidth?: boolean;
  testId?: string;
  name?: string;
  value?: string;
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  center?: boolean;
};

const GeneralButton = ({
  label = '',
  action = () => {},
  icon,
  iconPosition = 'start',
  sx,
  fullWidth = false,
  testId = '',
  value = '',
  disabled = false,
  name = '',
  variant = 'text',
  center = false,
}: ButtonProps) => {
  const StyledButton = styled(Button)`
    ${sx ? sx : ''}
    ${center
      ? `
    span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      span {
        margin: auto;

        svg {
          margin: auto;
        }
      }
    }
    `
      : ``}
  `;

  return (
    <StyledButton
      data-testid={testId}
      size={'large'}
      fullWidth={fullWidth}
      startIcon={
        iconPosition === 'start' &&
        icon && <span style={{ opacity: disabled ? '.5' : '1' }}>{icon}</span>
      }
      endIcon={
        iconPosition === 'end' &&
        icon && <span style={{ opacity: disabled ? '.5' : '1' }}>{icon}</span>
      }
      onClick={(e) => action(e)}
      value={value}
      name={name}
      disabled={disabled}
      variant={variant}
    >
      {label && label}
    </StyledButton>
  );
};

export default GeneralButton;
