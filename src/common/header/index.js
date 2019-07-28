import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';

class Header extends Component{
  render() {
    const { 
      focused, 
      handleInputBlur, 
      handleInputFocus, 
      list, 
      page, totalPage,
      handleMouseOut,
      handleMouseEnter,
      handleChangePage,
      mouseIn } = this.props;
    const showList = [];
    const jsList = list.toJS();
    if(jsList.length){
      for(let i=(page-1) *3 ;i < page *3;i++){
        if(jsList[i]){showList.push(jsList[i]);}
      }
    }
    return (
      <HeaderWrapper>
        {/* href=/ 表示点击回到首页*/}
        <Logo />
        <Nav>
          <NavItem className='left active'>
            <span className="iconfont">&#xe61e;</span>
            首页</NavItem>
          <NavItem className='left'>
            <span className="iconfont">&#xe608;</span>
            下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'></NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch 
                className={focused ? 'focused': ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span 
              className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe60e;
            </span>
            { !focused && !mouseIn ? null :      
              <SearchInfo 
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseOut}
              >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch 
                    onClick = {() => handleChangePage(page,totalPage,this.spinIcon)}
                  >
                    <i
                      className='iconfont spin'
                      ref = {(icon) => this.spinIcon = icon }
                    >&#xe6e1;</i>
                    换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  { 
                    showList && showList.map((item) => 
                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                  )}
                </SearchInfoList>          
              </SearchInfo>
            } 
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className="iconfont">&#xe615;</span>
            写文章
          </Button>
          <Button className='reg'>注册</Button>          
        </Addition>
      </HeaderWrapper>
    )
  }
}
//　表示组件和store做连接接时，store如何映射到props
const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused:state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}
// 表示组件和store做连接时，组件要改变store的内容，要定义dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchInfoList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseOut() {
      dispatch(actionCreators.mouseOut());
    },
    handleChangePage(page, totalPage,spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      console.log(originAngle);
      spinIcon.style.transform = 'rotate('+ (originAngle + 360)+'deg)';
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1));
      }else{
        dispatch(actionCreators.changePage(1));
      }      
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);