import React from 'react';
import MyFrame from './components/MyFrame';
import ClickCounterWrapper from './components/ClickCounterWrapper';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <ClickCounterWrapper />
        <MyFrame url="index2.html" />
      </div>
    );
  }
}