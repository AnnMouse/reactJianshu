import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position:relative;
`

export const Logo = styled.a.attrs({
  href:'/'
})`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  padding-right: 70px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0px 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: rgb(150, 150, 150);
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width: 240px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left:20px;
  padding: 0px 30px 0 20px;
  box-sizing: border-box;
  background: rgb(238, 238, 238);
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width:280px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width:240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right
  line-height:38px;
  border-radius:19px;
  margin-top: 9px;
  margin-right:20px;
  padding: 0 20px;
  font-size: 14px;
  border:1px solid rgb(234, 111, 90);
  &.reg{
    color: rgb(234, 111, 90);
  }
  &.writting{
    color: #fff;
    background: rgb(234, 111, 90);
  }
`
    