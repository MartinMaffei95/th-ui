import { NavigateFunction, useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useResize } from '@/Hooks/useResize';
import GeneralButton from '@/components/Buttons/GeneralButton';
import { StyledErrorContainer } from '@/pages/Errors/styled-component';

const Error500 = () => {
  const navigate: NavigateFunction = useNavigate();
  const { isPhone } = useResize();

  return (
    <StyledErrorContainer isPhone={isPhone}>
      <div className="container">
        <div className="container_info">
          <div>
            <h3>Upps...</h3>
            <span>Tenemos algunos problemas tecnicos con el servidor! </span>
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
        <img src={'/404.png'} alt="Error 500 image" />
      </div>
    </StyledErrorContainer>
  );
};

export default Error500;
