import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/components/root/root';
import configureStore from 'data/store';
import registerServiceWorker from 'registerServiceWorker';


ReactDOM.render(
  <Root store={configureStore()}/>,
  document.getElementById('root')
);

registerServiceWorker();
