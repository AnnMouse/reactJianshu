import * as actionTypes from './createActionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
}) 

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

export const getSearchInfoList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data =res.data.data;
      dispatch(changeList(data));
    }).catch((e) => {
      console.log('获取数据除了问题！');
    })
  }
}