'use strict';

import Css from '../style/main.scss';
import React from 'react';
import App from './App';
import windowMessage from './windowMessage';

let a = 200;

React.render(<App />, document.getElementById('root'));
window.windowMessage = windowMessage;

