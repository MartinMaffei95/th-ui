import { Backdrop, CircularProgress, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { ReduxStateType } from '../../models/Redux.model';

export default function Loader() {
  const { loading } = useSelector((state: ReduxStateType) => state.app);

  const LoaderContainer = styled('div')``;

  return (
    <LoaderContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </LoaderContainer>
  );
}
