import ClickCounterDispatcher from '../dispatcher/ClickCounterDispatcher';
import ClickCounterConstants from '../constants/ClickCounterConstants';

let ActionTypes = ClickCounterConstants.ActionTypes;

export default {
  increment: function() {
    ClickCounterDispatcher.dispatch({
      type: ActionTypes.COUNTER_INCREMENT
    });
  },

  decrement: function() {
    ClickCounterDispatcher.dispatch({
      type: ActionTypes.COUNTER_DECREMENT
    });
  }
};