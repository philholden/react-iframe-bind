import ClickCounterConstants from '../constants/ClickCounterConstants';
import {Dispatcher} from 'flux';
import assign from 'object-assign';

let PayloadSources = ClickCounterConstants.PayloadSources;
let ClickCounterDispatcher = assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

export default ClickCounterDispatcher;