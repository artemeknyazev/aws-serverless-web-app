import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';

ReactDOM.render(
  <Router basename={'/development'}>
    <App />
  </Router>,
  document.getElementById('root')
);
