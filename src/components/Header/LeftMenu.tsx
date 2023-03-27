import ListToRender from '@/components/Header/ListToRender';
import useOptions from '@/Hooks/useOptions';
import { UserHeaderSx } from '@/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography, Divider } from '@mui/material';
import LogOutButton from '../Buttons/LogOutButton';
import { LogoutBtnContainer } from './Header.style';

const LeftMenu = () => {
  const { fileOptions, imagesOptions, upFileOptions } = useOptions();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Box sx={UserHeaderSx}>
        {user?.picture ? (
          <img
            src={user?.picture || '/logo.svg'}
            alt={`${user?.nickname} profile image`}
            style={{ borderRadius: '50%', height: '100%' }}
          />
        ) : (
          <img
            src={'/logo.svg'}
            alt={`${user?.nickname} profile image`}
            style={{ borderRadius: '50%', height: '100%' }}
          />
        )}

        <Typography>{isAuthenticated ? user?.name : 'Invitado'}</Typography>
      </Box>
      <Divider />

      <ListToRender
        listLabelName="Cargar imagen"
        itemsToRender={upFileOptions}
      />
      <Divider />

      <ListToRender
        listLabelName="Guarda tu trabajo"
        itemsToRender={fileOptions}
      />

      <Divider />
      <ListToRender
        listLabelName="Ver imagenes"
        itemsToRender={imagesOptions}
      />

      <Divider />
      <LogoutBtnContainer>
        <LogOutButton />
      </LogoutBtnContainer>
    </>
  );
};

export default LeftMenu;
