webpackJsonp([43],{3:function(n,t,e){n.exports=e(2)(155)},382:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),c=e(1),l=a(c),u=e(16),b=(a(u),e(3)),h=a(b),d=e(565),p=a(d),f=function(n){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),s(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(h["default"],{text:p["default"]}))}}]),t}(l["default"].Component);t["default"]=f},565:function(n,t){n.exports="# NavigateBar\n\n作为工作圈 H5 框架的一部分，Page 与工作圈有着紧密的联系，与工作圈 Navigate Bar 的交互是一个核心功能，具体的功能体现在 navBar 的配置上，另外还有一个 config 用来配置工作圈 Navigate Bar 的样式。下面具体介绍这两部分。\n\n<br/>\n### 左侧按钮的配置\n\n左侧包含两个按钮: 返回按钮和关闭按钮，其中关闭按钮出现规则是：当点击了一次返回按钮后则在每个页面都出现，提供两个钩子方法：onBackClick 和 onCloseClick，在 Navigate Bar 左侧返回和关闭按钮的点击时进行拦截，将控制权交给应用来处理。\n\n- #### 返回按钮\n\n  ```javascript\n    navBar = {\n      onBackClick: this.onBackClick.bind(this)\n    }\n  ```\n\n- #### 关闭按钮\n\n  ```javascript\n    navBar = {\n      onCloseClick: this.onCloseClick.bind(this)\n    }\n  ```\n\n<br/>\n### 右侧的配置\n\n右侧区域支持三种使用方式：隐藏模式、单按钮模式、菜单模式。\n\n- #### 隐藏模式\n\n  隐藏模式就是右侧不显示任何东西，呈空置状态。\n  ```javascript\n  navBar = {\n    right: {\n      hide: true\n    }\n  }\n  ```\n\n- #### 单按钮模式\n\n  单按钮不支持文本，只支持图形按钮，支持的类型包含：add， back，edit，share，del，openLink。点击执行的回调在 item 里定义 onClick 。disable 用来设置当前按钮是否可用，不设置默认为可用。\n\n  ```javascript\n  navBar = {\n    right: {\n      type: 'button',\n      item:{\n        icon: 'add',\n        onClick: this.onAdd.bind(this),\n        disabled: true\n      }\n    }\n  }\n  ```\n\n- #### 菜单模式\n\n  下拉菜单只支持文本，作为菜单项的 label 显示，点击执行的回调在 item 里定义 onClick 。菜单项没有 disable 设置。\n\n  ```javascript\n  navBar = {\n    right: {\n      type: 'menu',\n      item:[\n        {\n          text:'新增',\n          onClick: this.onAdd.bind(this)\n        },\n        {\n          text:'编辑',\n          onClick: this.onEdit.bind(this)\n        }\n      ]\n    }\n  }\n  ```\n\n<br/>\n### 样式的配置\n\nNavigateBar 的样式不是固定的，是可以根据应用进行调整的，默认的样式是保存在 chanjet-navigator 的 config 文件中，可配置的项包括一下5个：\n\n- backgroundColor：导航栏的背景颜色\n- color：导航栏的字体颜色\n- highlightColor：按钮激活时字体颜色\n- disabledColor：按钮禁用时的字体颜色\n- titleText：缺省的导航栏标题\n\nconfig 提供了一个 setConfig 方法，在应用初始化的时候修改 config 配置项可以让应用的每个页面都使用新的配置，比如：\n\n```javascript\nimport {setConfig, config} from 'chanjet-ui/lib/config';\n\n...\n\nsetConfig({\n  theme: {\n    page: {\n      navbar: {\n        backgroundColor: '#FFFFFF',\n        color: 'blue'\n      }\n    }\n  }\n});\n\n...\n```\n\n每个应用页面也可以设置自己的 NavigateBar 样式，在每个页面 navBar 添加配置：\n\n```javascript\nnavBar = {\n  backgroundColor: '#FFFFFF',\n  color: '#000000',\n  highlightColor: 'blue',\n  disabledColor: 'gray'\n}\n```\n\n\n\n\n\n<br/>\n### 提供的 API 方法\n\n- #### postNavbarMixin\n\n  用来在 Page 渲染之前修改 navBar 配置提供时机\n\n  ```javascript\n  export default class PageIndex extends Page{\n    \n    ...\n    postNavbarMixin(navbarOpt){\n    \t// 修改navbar配置，然后返回navbar配置\n    \treturn navbarOpt\t  \n    }\n    ...\n    \n  }\n  ```\n\n- #### close\n\n  关闭整个轻应用\n\n  ```javascript\n  this.close();\n  ```\n\n- #### page.navbarInstance 的方法\n\n  - #### setTitle\n\n    设置导航栏标题\n\n    ```javascript\n    this.navbarInstance.setTitle('新的标题');\n    ```\n\n  - #### setRightButton\n\n    设置右侧按钮\n\n    ```javascript\n    this.navbarInstance.setRightButton({\n      icon:'add',\n      onClick: this.onPublish.bind(this),\n      disabled: true\n    });\n    ```\n\n  - #### setRightMenu\n\n    设置右侧菜单\n\n    ```javascript\n    this.navbarInstance.setRightMenu([\n      {\n        text:'发布',\n        onClick: this.onPublish.bind(this),\n        disabled: true\n      },\n      {\n        text:'删除',\n        onClick: this.onRemove.bind(this)\n        disabled: false\n      }\n    ]);\n    ```\n\n  - #### showRight\n\n    显示右侧\n\n    ```javascript\n    this.navbarInstance.showRight();\n    ```\n\n  - #### hideRight\n\n    隐藏右侧\n\n    ```javascript\n    this.navbarInstance.hideRight();\n    ```\n\n\n\n\n<br/><br/> "}});