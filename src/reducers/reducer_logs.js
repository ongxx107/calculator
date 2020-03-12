import { SET_LOGS } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_LOGS:
      // extract the logs from action in store Provider
      const { logs } = action;
      return logs;
    default:
      return state;
  }
}
