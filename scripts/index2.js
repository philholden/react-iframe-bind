'use strict';

import Css from '../style/frame1.scss';
import React from 'react';

let ClickCounterWrapper = parent.exposed.ClickCounterWrapper;
console.log(ClickCounterWrapper);

React.render(<ClickCounterWrapper />, document.getElementById('root'));

