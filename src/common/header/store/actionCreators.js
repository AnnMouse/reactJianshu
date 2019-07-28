import * as actionTypes from './createActionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 3)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
}) 

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseOut = () => ({
  type: actionTypes.MOUSE_OUT
});
 
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
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