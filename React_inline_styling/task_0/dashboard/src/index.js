import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';

const rootId = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootId
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept('./App/App', () => {
    const NextApp = require('./App/App').default;
    ReactDOM.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>,
      rootId
    );
  });
}