import React from 'react';
import MyFrame from './components/MyFrame';
import ClickCounterWrapper from './components/ClickCounterWrapper';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <ClickCounterWrapper />
        <div className="frames">
          <MyFrame url="index2.html" />
          <MyFrame url="index2.html" />
        </div>
      </div>
    );
  }
}