import styled from 'styled-components';
import Header from '../components/Header/Header';
import ModalComponent from '../components/Modal/ModalComponent';
import { PreviewDrawer } from '../components/PreviewDrawer/PreviewDrawer';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { pathname } = useLocation();
  const Layout = styled(Box)`
    max-height: 100%;
    min-height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    padding-top: 10vh;
    background: rgb(74, 72, 72);
    background: linear-gradient(
      180deg,
      rgba(74, 72, 72, 1) 30%,
      rgba(247, 69, 252, 1) 100%
    );
  `;
  return (
    <Layout>
      <Header />
      <ModalComponent />
      <PreviewDrawer />

      {children}
    </Layout>
  );
};

export default Layout;
