import '~/polyfills';
import '~/development';
import React from 'react';
import ReactDOM from 'react-dom';

import '~/global.css';
import App from '~/App';

ReactDOM.render(<App />, document.getElementById('app'));