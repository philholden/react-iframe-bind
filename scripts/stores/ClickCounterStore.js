import ClickCounterDispatcher from '../dispatcher/ClickCounterDispatcher';
import ClickCounterConstants from '../constants/ClickCounterConstants';
import {EventEmitter} from 'events';

let ActionTypes = ClickCounterConstants.ActionTypes;
let CHANGE_EVENT = 'change';
let _value = 0;

function _decrement() {
  console.log('dec');
  _value--;
}

function _increment() {
  console.log('inc');
  _value++;
}


class ClickCounterStore extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  getValue() {
    return _value;
  }
}

let instance = new ClickCounterStore();

instance.dispatchToken = ClickCounterDispatcher.register(function(payload) {

  switch(payload.type) {

    case ActionTypes.COUNTER_DECREMENT:
      _decrement();
      instance.emitChange();
      break;
    case ActionTypes.COUNTER_INCREMENT:
      _increment();
      instance.emitChange();
      break;

    default:
      // do nothing
  }

});

export default instance;