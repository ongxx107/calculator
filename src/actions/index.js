import { SIGNED_IN, SET_LOGS } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setLogs(logs) {
  const action = {
    type: SET_LOGS,
    logs
  }
  return action;
}
