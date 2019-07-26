import React from 'react';
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
  SearchWrapper
} from './style';

const Header = (props) => {
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
            in={props.focused}
            classNames="slide"
          >
            <NavSearch 
              className={props.focused ? 'focused': ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span 
            className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe60e;
          </span>
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

//　表示组件和store做连接接时，store如何映射到props
const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused:state.getIn(['header', 'focused'])
  }
}
// 表示组件和store做连接时，组件要改变store的内容，要定义dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);