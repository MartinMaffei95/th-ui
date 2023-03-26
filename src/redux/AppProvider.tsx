import { Provider } from 'react-redux';
import { store } from './store/store';

export type AppProviderType = {
  children: JSX.Element | JSX.Element[];
};

const AppProvider = ({ children }: AppProviderType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
