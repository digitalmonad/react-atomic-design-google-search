import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { globalStyles } from './styles/global.styles';

ReactDOM.render(
  <React.StrictMode>
    {globalStyles}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
