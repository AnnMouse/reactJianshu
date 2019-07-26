## 实战,简书
- 采用第三方库管理css样式,styled-components
- reset.css 不同浏览器中对body的默认样式不同,因此使用reset.css减少不一致性．styled-components 4.x版本　用createGlobalStyle替换原来的injectGlobal方法．
- react-transition-group　增加动画效果，enter,enter-active,exit,exit-active
- immutable.js  可生成immutable对象，即不可改变的对象．防止reducer修改原state出错．
1. 引入fromJS，将defaultstate转化成immutable对象．
2. 调用immutable对象的某个属性值时，不能直接用xx.xx,而应该用xx.get('xx')
2. immutable对象中的set方法，会根据传入的值以及原来的值生成新的对象.

### 以上信息来自:www.dell-lee.com