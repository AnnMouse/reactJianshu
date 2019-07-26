import {
  SEARCH_FOCUS,
  SEARCH_BLUR
} from './createActionTypes';

const defaultStore = {
  focused: false
};

export default (state = defaultStore, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if(action.type === SEARCH_FOCUS){
    newState.focused = true;
    return newState;
  }

  if(action.type === SEARCH_BLUR){
    newState.focused = false;
    return newState;
  }

  return state;
}