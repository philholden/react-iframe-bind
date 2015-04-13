'use strict';

import Css from '../style/frame1.scss';
import React from 'react';
import ClickCounterWrapper from './components/ClickCounterWrapper';

console.log(ClickCounterWrapper);

React.render(<ClickCounterWrapper />, document.getElementById('root'));

