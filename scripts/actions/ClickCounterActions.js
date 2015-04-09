import ClickCounterDispatcher from '../dispatcher/ClickCounterDispatcher';
import ClickCounterConstants from '../constants/ClickCounterConstants';
import windowMessage from '../windowMessage';

let ActionTypes = ClickCounterConstants.ActionTypes;

function send(payload) {
  return function() {
    ClickCounterDispatcher.dispatch(payload);
    windowMessage(payload);
  };
}

export default {
  increment: send({type: ActionTypes.COUNTER_INCREMENT}),
  decrement: send({type: ActionTypes.COUNTER_DECREMENT})
};