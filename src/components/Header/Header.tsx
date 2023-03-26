import { useState } from 'react';
import { Drawer } from '@mui/material';
import LeftMenu from './LeftMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import { TopMenu } from './Header.style';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <TopMenu data-testid="head" role="heading">
      <button onClick={() => setOpen(true)}>
        <AiOutlineMenu />
      </button>
      <Link to="/" style={{ height: '100%' }}>
        <img
          test-id="logo"
          src={'/logo.svg'}
          alt={`logo img`}
          style={{ borderRadius: '50%', height: '100%', width: '100%' }}
        />
      </Link>

      <Drawer
        test-id="drawer-test"
        anchor={'left'}
        open={open}
        onClick={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <LeftMenu />
      </Drawer>
    </TopMenu>
  );
};

export default Header;
