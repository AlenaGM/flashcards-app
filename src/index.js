import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import ConfirmContextProvider from './context/ConfirmContext';
import ConfirmDialog from './components/confirmDialog/ConfirmDialog';

import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmContextProvider>
      <App />
      <ConfirmDialog/>
    </ConfirmContextProvider>
  </React.StrictMode>
);


