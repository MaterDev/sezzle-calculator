import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './vendors/bootstrap-4.1.3-dist 2/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
