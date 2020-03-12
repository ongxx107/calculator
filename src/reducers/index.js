import { combineReducers } from 'redux';
import user from './reducer_user';
import logs from './reducer_logs';

export default combineReducers({
  user,
  logs
});
