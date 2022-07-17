import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';

import WordStore from './store/wordStore';
import App from './components/App/App';

import './styles/style.scss';

const store = {
  wordStore: new WordStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...store}>
    <App />
  </Provider>
);
