import { createGlobalStyle } from 'styled-components';

export const IconfontGlobalStyled = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1564134189890'); /* IE9 */
  src: url('./iconfont.eot?t=1564134189890#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1564134189890') format('woff'),
  url('./iconfont.ttf?t=1564134189890') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1564134189890#iconfont') format('svg'); /* iOS 4.1- */
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
  
  .iconfangdajing:before {
    content: "\e60e";
  }
  
  .iconshoujixiazai:before {
    content: "\e608";
  }
`;
