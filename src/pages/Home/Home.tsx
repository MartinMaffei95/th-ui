import { useResize } from '@/Hooks/useResize';
import LateralPanel from '@/pages/Home/components/LateralPanel/LateralPanel';
import { StyledDesk } from '@/pages/Home/styled-components';
import { redirectTo } from '@/services/redirect-to';
import FooterMenu from './components/FooterMenu/FooterMenu';
import ThumbnailEditor from './components/ThumbnailEditor';
const Home = () => {
  const { isPhone } = useResize();

  return (
    <>
      {isPhone ? (
        <StyledDesk aria-label="main-component" isPhone={isPhone}>
          <ThumbnailEditor />
          <FooterMenu />
        </StyledDesk>
      ) : (
        <StyledDesk aria-label="main-component" isPhone={isPhone}>
          <ThumbnailEditor />
          <LateralPanel />
        </StyledDesk>
      )}
    </>
  );
};

export default Home;
