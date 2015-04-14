import React from 'react';
import MyFrame from './components/MyFrame';
import ClickCounterWrapper from './components/ClickCounterWrapper';

window.exposed = {
  React: React,
  ClickCounterWrapper: ClickCounterWrapper
};

export default class App extends React.Component {

  render() {
    return (
      <div className="outer">
        <div className="header">
          <div className="logo">
            Company
          </div>
          <div className="topmenu">
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
          </div>
        </div>
        <div className="content">
          <div className="ourcontent">
            <h1>iFrame communication in React</h1>

            <p>iFrame1 is on the same domain it borrows a react component
            from its parent.</p>

            <p>iFrame2 is on another domain it communicates with the
            parent via message passing.</p>
            <ClickCounterWrapper /> 
          </div>
          <div className="iframes">
            <iframe id="ourframe" src="index2.html" />
            <iframe id="thirdparty" src="http://127.0.0.1:3000/index3.html" />
          </div>
        </div>
        <div className="footer">
          © footer inc
        </div>
      </div>
    );
  }
}