import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/components/app/app';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
