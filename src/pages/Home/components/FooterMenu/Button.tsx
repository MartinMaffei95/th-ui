import { ButtonSx } from '../../../../styles';

type ButtonType = {
  icon?: JSX.Element | JSX.Element[];
  label?: string;
  name: string;
  value: string;
  fx: Function;
  btn_sx?: object;
  disabled?: boolean;
};

const Button = ({
  value,
  fx,
  icon,
  name,
  label,
  btn_sx = {},
  disabled = false,
}: ButtonType) => {
  return (
    <button
      style={{
        ...ButtonSx,
        ...btn_sx,
      }}
      type={'button'}
      name={name}
      value={value}
      onClick={(e) => fx(e)}
      disabled={disabled}
    >
      {icon && <span style={{ opacity: disabled ? '.5' : '1' }}>{icon}</span>}
      {label && label}
    </button>
  );
};

export default Button;
