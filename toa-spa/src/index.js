import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataProvider from './redux/store';

// Render the App component inside our root div in the HTML.
ReactDOM.render(
  // Wrap the App component with the DataProvider and React's StrictMode utility.
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root') // The root div in your HTML where the App will be mounted.
);