import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { GlobalStyle } from '@/styles';

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENTID } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={VITE_AUTH0_DOMAIN}
      clientId={VITE_AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/auth/login`,
        audience: `https://${VITE_AUTH0_DOMAIN}/api/v2/`,
      }}
    >
      <App />
    </Auth0Provider>
    <GlobalStyle />
  </React.StrictMode>
);
