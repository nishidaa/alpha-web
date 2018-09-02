import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Top from './components/Top';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Top/>, document.getElementById('root'));
registerServiceWorker();
