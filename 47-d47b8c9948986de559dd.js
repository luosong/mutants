webpackJsonp([47],{3:function(n,e,t){n.exports=t(2)(155)},362:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(1),c=o(a),l=t(15),u=o(l),p=t(3),i=o(p),r=t(539),s=o(r),f=function(){return c["default"].createElement("div",null,c["default"].createElement(u["default"],{render:function(n){return"Installation - "+n}}),c["default"].createElement(i["default"],{text:s["default"]}))};e["default"]=f},539:function(n,e){n.exports="## 安装\n\nChanjet-UI 是一个可用的 [npm package](https://www.npmjs.org/package/chanjet-ui).\n\n```js\n    npm install chanjet-ui\n```\n\n### react-tap-event-plugin\n\n我们的组件使用 [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)\n去监听 touch / tap / click事件.\n这个依赖只是暂时的, 在官方正式的React版本发布之前,请确保在你app的起始位置引入这个插件。\n\n```js\nimport injectTapEventPlugin from 'react-tap-event-plugin';\n\n// Needed for onTouchTap\n// Check this repo:\n// https://github.com/zilverline/react-tap-event-plugin\ninjectTapEventPlugin();\n```\n\n`react-tap-event-plugin` 为React 组件提供 `onTouchTap()` 事件.\n### Roboto Font\n\nMaterial 设计使用 [Roboto](http://www.google.com/fonts/specimen/Roboto)字体.\n所以确保你的项目中已引入了它.\n这里有一些 [介绍](http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500).\n"}});