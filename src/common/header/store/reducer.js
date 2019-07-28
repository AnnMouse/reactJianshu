import * as actionTypes from './createActionTypes';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  //　第几页
  page: 1,
  // 共有几页
  totalPage: 1,
});

export default (state = defaultStore, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused',false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        'list':action.data,
        'totalPage':action.totalPage
      }) 
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn',true);
    case actionTypes.MOUSE_OUT:
      return state.set('mouseIn',false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page',action.page); 
    default:
      return state; 
  }
}