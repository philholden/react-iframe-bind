import React from 'react';
import ClickCounter from './ClickCounter';
import ClickCounterStore from '../stores/ClickCounterStore';
import ClickCounterActions from '../actions/ClickCounterActions';

export default class ClickCounterWrapper extends React.Component {

  componentWillMount(){
    ClickCounterStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount(){
    console.log(this._onChange);
    ClickCounterStore.addChangeListener(this._onChange.bind(this));
  }

  _onChange(){
    this.forceUpdate();
  }


  render() {
    return (
      <ClickCounter
        value={ClickCounterStore.getValue()}
        onDec={ClickCounterActions.decrement}
        onInc={ClickCounterActions.increment}
      />
    );
  }
}