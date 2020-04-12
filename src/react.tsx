import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';

ReactDOM.render(
  // <React.StrictMode> https://stackoverflow.com/questions/60818662/constructor-and-render-methods-run-twice-in-react-component
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

