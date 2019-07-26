import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  handleInputFocus = () => {
    this.setState({
      focused: true
    })
  }

  handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }

  render() {
    const { focused } = this.state;
    return (
      <HeaderWrapper>
        {/* href=/ 表示点击回到首页*/}
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
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
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span 
              className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe60e;
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
}

export default Header;