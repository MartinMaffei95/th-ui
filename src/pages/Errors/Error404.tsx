import { NavigateFunction, useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useResize } from '@/Hooks/useResize';
import GeneralButton from '@/components/Buttons/GeneralButton';
import { StyledErrorContainer } from '@/pages/Errors/styled-component';

const Error404 = () => {
  const navigate: NavigateFunction = useNavigate();
  const { isPhone } = useResize();

  return (
    <StyledErrorContainer isPhone={isPhone}>
      <div className="container">
        <div className="container_info">
          <div>
            <h3>Upps...</h3>
            <span>No encontramos lo que buscabas </span>
          </div>
          <GeneralButton
            icon={<MdArrowBackIosNew />}
            label="Volver"
            sx="color:white; "
            action={() => navigate('/')}
          />
        </div>
      </div>
      <div className="container">
        <img src={'/warning.png'} alt="Error 404 image" />
      </div>
    </StyledErrorContainer>
  );
};

export default Error404;
