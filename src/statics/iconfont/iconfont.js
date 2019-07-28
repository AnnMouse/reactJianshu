import { createGlobalStyle } from 'styled-components';

export const IconfontGlobalStyled = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1564283243555'); /* IE9 */
    src: url('./iconfont.eot?t=1564283243555#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1564283243555') format('woff'),
    url('./iconfont.ttf?t=1564283243555') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1564283243555#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconshouji:before {
    content: "\e621";
  }

  .iconshouye1:before {
    content: "\e61e";
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconicon-checkin:before {
    content: "\e615";
  }

  .iconshouye:before {
    content: "\e602";
  }

  .iconhuanyipi:before {
    content: "\e6e1";
  }

  .iconfangdajing:before {
    content: "\e60e";
  }

  .iconshoujixiazai:before {
    content: "\e608";
  }
`;
