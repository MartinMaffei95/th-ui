import { useAuth0 } from '@auth0/auth0-react';
import GeneralButton from './GeneralButton';
import { CgLogOut } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/slices/appSlice';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { logOutBtnSx } from './style';
const LogOutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const appLogout = async () => {
    dispatch(setLoading(true));

    localStorage.removeItem('user');

    dispatch(setLoading(false));
    navigate('/auth/login');

    logout({ logoutParams: { returnTo: window?.location?.origin } });
    navigate('/auth/login');
  };

  return (
    <div>
      <GeneralButton
        label="Log Out"
        icon={<CgLogOut />}
        action={appLogout}
        sx={logOutBtnSx}
      />
    </div>
  );
};

export default LogOutButton;
