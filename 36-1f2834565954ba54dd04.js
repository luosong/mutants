webpackJsonp([36],{3:function(e,t,n){e.exports=n(2)(155)},4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),a=r(o);t["default"]=a["default"]},5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),u=r(c),l=n(6),p=n(7),f=r(p),d=n(14),m=r(d),h=n(4),y=r(h),b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.code,r=e.component,o=e.layoutSideBySide,a=this.context.muiTheme.rawTheme.palette,i=a.canvasColor,s={root:{backgroundColor:i,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:o?"45%":null,"float":o?"right":null}},c=r?(0,l.parse)(n):{};return u["default"].createElement(y["default"],{style:s.root},u["default"].createElement(f["default"],{title:this.props.title,description:this.props.description||c.description},n),u["default"].createElement(m["default"],{style:s.exampleBlock},t))}}]),t}(c.Component);b.propTypes={children:c.PropTypes.node,code:c.PropTypes.string.isRequired,component:c.PropTypes.bool,description:c.PropTypes.string,layoutSideBySide:c.PropTypes.bool,title:c.PropTypes.string},b.defaultProps={component:!0},b.contextTypes={muiTheme:c.PropTypes.object},t["default"]=b},6:function(e,t,n){e.exports=n(2)(183)},7:function(e,t,n){e.exports=n(2)(243)},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(25),u=r(c),l=n(1),p=r(l),f=n(17),d=r(f),m=n(26),h=r(m),y='\n!function (a, b) {\n    function c() {\n        var b = f.getBoundingClientRect().width;\n        b / i > 540 && (b = 540 * i);\n        var c = b / 10;\n        f.style.fontSize = c + "px", k.rem = a.rem = c\n    }\n\n    var d, e = a.document, f = e.documentElement, g = e.querySelector(\'meta[name="viewport"]\'), h = e.querySelector(\'meta[name="flexible"]\'), i = 0, j = 0, k = b.flexible || (b.flexible = {});\n    if (g) {\n        console.warn("将根据已有的meta标签来设置缩放比例");\n        var l = g.getAttribute("content").match(/initial-scale=([d.]+)/);\n        l && (j = parseFloat(l[1]), i = parseInt(1 / j))\n    } else if (h) {\n        var m = h.getAttribute("content");\n        if (m) {\n            var n = m.match(/initial-dpr=([d.]+)/), o = m.match(/maximum-dpr=([d.]+)/);\n            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))\n        }\n    }\n    if (!i && !j) {\n        var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)), q = a.devicePixelRatio;\n        i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i\n    }\n    if (f.setAttribute("data-dpr", i), !g)if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild)f.firstElementChild.appendChild(g); else {\n        var r = e.createElement("div");\n        r.appendChild(g), e.write(r.innerHTML)\n    }\n    a.addEventListener("resize", function () {\n        clearTimeout(d), d = setTimeout(c, 300)\n    }, !1), a.addEventListener("pageshow", function (a) {\n        a.persisted && (clearTimeout(d), d = setTimeout(c, 300))\n    }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {\n        e.body.style.fontSize = 12 * i + "px"\n    }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {\n        var b = parseFloat(a) * this.rem;\n        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b\n    }, k.px2rem = function (a) {\n        var b = parseFloat(a) / this.rem;\n        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b\n    }\n}(window, window.lib || (window.lib = {}));\n',b=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={simulate:{press:!1}},i=n,a(r,i)}return i(t,e),s(t,[{key:"getStyles",value:function(){return{root:{backgroundColor:"black",width:300,height:428,zIndex:1e6},frame:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #ccc"}}}},{key:"componentDidMount",value:function(){var e=this.props.children,t=this.refs.iframe,n=t.contentWindow.document;(0,u["default"])(n.body.style,{padding:0,margin:0,overflow:"hidden"});var r=n.createElement("script");r.type="text/javascript",r.innerHTML=y,n.head.appendChild(r);var o=window.location.protocol+"//"+window.location.host,a=n.createElement("style");a.type="text/css",a.innerHTML='*,*:hover{cursor: url("'+o+'/images/cursor-mobile-move.ico"),auto}',n.head.appendChild(a);var i=n.createElement("div");n.body.appendChild(i),this.bindEvents(),d["default"].render(p["default"].createElement(h["default"],null,e),i)}},{key:"bindEvents",value:function(){var e=this,t=this.refs.iframe,n=t.contentWindow.document;n.addEventListener("mousedown",function(r){var o=n.createEvent("MouseEvent");o.initEvent("touchstart",!0,!0,t.contentWindow,1,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey),o.touches=[{pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,target:r.target}],e.state.simulate.press=!0,r.target.dispatchEvent(o)}),n.addEventListener("mousemove",function(r){if(e.state.simulate.press){var o=n.createEvent("MouseEvent");o.initEvent("touchmove",!0,!0,t.contentWindow,1,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey),o.touches=[{pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,target:r.target}],r.target.dispatchEvent(o)}}),n.addEventListener("mouseup",function(r){var o=n.createEvent("MouseEvent");o.initEvent("touchend",!0,!0,t.contentWindow,1,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey),o.touches=[{pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,target:r.target}],e.state.simulate.press=!1,r.target.dispatchEvent(o)})}},{key:"render",value:function(){var e=this.getStyles();return p["default"].createElement("div",{style:e.root},p["default"].createElement("iframe",{ref:"iframe",style:e.frame}))}}]),t}(p["default"].Component);t["default"]=b},371:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),u=r(c),l=n(3),p=r(l),f=n(552),d=r(f),m=n(5),h=(r(m),n(18)),y=(r(h),function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(p["default"],{text:d["default"]}))}}]),t}(u["default"].Component));t["default"]=y},552:function(e,t){e.exports="# chanjet-mutants\n\nMutants 是一个可以用来在工作圈上快速开发轻应用的开源框架.  `chanjet-mutants` 作为整个Mutants框架的入口, 提供以下功能:\n\n* 环境检测\n* Native能力封装\n\n\n\n## 安装\n\n``` javascript\nnpm install chanjet-mutants\n```\n\n\n\n## 使用\n\n### 引入\n\n在应用入口文件中, 引入mutants:\n\n```javascript\nimport mutants from \"chanjet-mutants\";\n```\n\n一旦引入后, 我们会自动在全局对象Window下, 创建mutants对象, 即 `window.mutants` . 后续调用可以直接使用 `mutants` 进行使用.\n\n\n\n### ready\n\n当 `mutants` 被加载后, 会进行一系列初始化的相关处理, 主要是Native能力相关, 在这些处理都完成后, 我们会通过 `mutants.ready` 来通知应用. `mutants.ready` 是一个可以接受回调函数的方法. 当初始化成功后, 我们会回调传入的方法并执行.\n\n```javascript\nimport mutants from 'chanjet-mutants';\n\nclass Application{\n  startUp(){\n    //启动应用\n\n    //此处执行应用自己的启动代码\n    ...\n  }\n}\n\n//在mutants初始化成功后, 启动应用\nmutants.ready(() => {\n  new Application().startUp();\n});\n\n```\n\n***注意: 如果你的应用代码有Native能力的调用, 那么代码一定要在ready的回调中执行, 如果你的应用代码不适用Native能力, 可以不强制放入ready中执行***\n\n\n\n### 环境检测\n\n`mutants` 提供了环境检测变量, 便于你在应用中判断当前的环境.我们目前只提供了 `os`, `browser` , `platform` 三个值:\n\n```typescript\n//mutants.env 定义描述\n\nclass mutants.env {\n\n  ...\n\n  private _os:string;\n  private _browser:string;\n  private _platform:string;\n\n  //mutants.env.os 只读\n  get os():string{\n    return this._os;\n  }\n\n  //mutants.env.browser 只读\n  get browser():string{\n    return this._browser;\n  }\n\n  //mutants.env.platform 只读\n  get platform():string{\n    return this._platform;\n  }\n\n  ...\n\n}\n```\n\n\n\n我们提供了 `mutants.env.constant` 作为环境判断的常量, 用于在代码中进行判断, 无需你在代码中写死常量.\n\n```javascript\n//mutants.env.constant 定义描述\n\nmutants.env.constant = {\n  os : {\n    mobile : \"mobile\",\n    ios : \"ios\",\n    android : \"android\",\n    computer : \"computer\"\n  },\n\n  browser : {\n    ie : 'internet_explorer',\n    chrome : 'chrome',\n    firefox : 'firefox',\n    safari : 'safari',\n    opera : 'opera',\n    unknown : 'unknown'\n  },\n\n  platform : {\n    weixin : 'weixin',\n    chanjet : 'chanjet',\n    browser : 'browser'\n  }\n};\n\n```\n\n\n\n举个栗子, 如果你需要在代码中判断当前浏览器是否为Chrome, 那么:\n\n```javascript\n//加载mutants\nimport mutants from \"chanjet-mutants\";\n\n//获取环境检测常量中的browser常量\nconst {browser} = mutants.env.constant;\n\n//判断当前浏览器是否为chrome\nif(browser.chrome == mutants.env.browser){\n  ...\n}\n```\n\n其他的判断, 请以此类推.\n\n"}});