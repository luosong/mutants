webpackJsonp([33],{3:function(e,t,n){e.exports=n(2)(155)},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=o(r);t["default"]=a["default"]},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),u=n(6),p=n(7),f=o(p),d=n(13),m=o(d),h=n(4),y=o(h),b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.code,o=e.component,r=e.layoutSideBySide,a=this.context.muiTheme.rawTheme.palette,i=a.canvasColor,c={root:{backgroundColor:i,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:r?"45%":null,"float":r?"right":null}},s=o?(0,u.parse)(n):{};return l["default"].createElement(y["default"],{style:c.root},l["default"].createElement(f["default"],{title:this.props.title,description:this.props.description||s.description},n),l["default"].createElement(m["default"],{style:c.exampleBlock},t))}}]),t}(s.Component);b.propTypes={children:s.PropTypes.node,code:s.PropTypes.string.isRequired,component:s.PropTypes.bool,description:s.PropTypes.string,layoutSideBySide:s.PropTypes.bool,title:s.PropTypes.string},b.defaultProps={component:!0},b.contextTypes={muiTheme:s.PropTypes.object},t["default"]=b},6:function(e,t,n){e.exports=n(2)(183)},7:function(e,t,n){e.exports=n(2)(243)},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(24),l=o(s),u=n(1),p=o(u),f=n(16),d=o(f),m=n(25),h=o(m),y='\n!function (a, b) {\n    function c() {\n        var b = f.getBoundingClientRect().width;\n        b / i > 540 && (b = 540 * i);\n        var c = b / 10;\n        f.style.fontSize = c + "px", k.rem = a.rem = c\n    }\n\n    var d, e = a.document, f = e.documentElement, g = e.querySelector(\'meta[name="viewport"]\'), h = e.querySelector(\'meta[name="flexible"]\'), i = 0, j = 0, k = b.flexible || (b.flexible = {});\n    if (g) {\n        console.warn("将根据已有的meta标签来设置缩放比例");\n        var l = g.getAttribute("content").match(/initial-scale=([d.]+)/);\n        l && (j = parseFloat(l[1]), i = parseInt(1 / j))\n    } else if (h) {\n        var m = h.getAttribute("content");\n        if (m) {\n            var n = m.match(/initial-dpr=([d.]+)/), o = m.match(/maximum-dpr=([d.]+)/);\n            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))\n        }\n    }\n    if (!i && !j) {\n        var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)), q = a.devicePixelRatio;\n        i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i\n    }\n    if (f.setAttribute("data-dpr", i), !g)if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild)f.firstElementChild.appendChild(g); else {\n        var r = e.createElement("div");\n        r.appendChild(g), e.write(r.innerHTML)\n    }\n    a.addEventListener("resize", function () {\n        clearTimeout(d), d = setTimeout(c, 300)\n    }, !1), a.addEventListener("pageshow", function (a) {\n        a.persisted && (clearTimeout(d), d = setTimeout(c, 300))\n    }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {\n        e.body.style.fontSize = 12 * i + "px"\n    }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {\n        var b = parseFloat(a) * this.rem;\n        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b\n    }, k.px2rem = function (a) {\n        var b = parseFloat(a) / this.rem;\n        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b\n    }\n}(window, window.lib || (window.lib = {}));\n',b=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={simulate:{press:!1}},i=n,a(o,i)}return i(t,e),c(t,[{key:"getStyles",value:function(){return{root:{backgroundColor:"black",width:300,height:428,zIndex:1e6},frame:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #ccc"}}}},{key:"componentDidMount",value:function(){var e=this.props.children,t=this.refs.iframe,n=t.contentWindow.document;(0,l["default"])(n.body.style,{padding:0,margin:0,overflow:"hidden"});var o=n.createElement("script");o.type="text/javascript",o.innerHTML=y,n.head.appendChild(o);var r=window.location.protocol+"//"+window.location.host,a=n.createElement("style");a.type="text/css",a.innerHTML='*,*:hover{cursor: url("'+r+'/images/cursor-mobile-move.ico"),auto}',n.head.appendChild(a);var i=n.createElement("div");n.body.appendChild(i),this.bindEvents(),d["default"].render(p["default"].createElement(h["default"],null,e),i)}},{key:"bindEvents",value:function(){var e=this,t=this.refs.iframe,n=t.contentWindow.document;n.addEventListener("mousedown",function(o){var r=n.createEvent("MouseEvent");r.initEvent("touchstart",!0,!0,t.contentWindow,1,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey),r.touches=[{pageX:o.pageX,pageY:o.pageY,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,target:o.target}],e.state.simulate.press=!0,o.target.dispatchEvent(r)}),n.addEventListener("mousemove",function(o){if(e.state.simulate.press){var r=n.createEvent("MouseEvent");r.initEvent("touchmove",!0,!0,t.contentWindow,1,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey),r.touches=[{pageX:o.pageX,pageY:o.pageY,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,target:o.target}],o.target.dispatchEvent(r)}}),n.addEventListener("mouseup",function(o){var r=n.createEvent("MouseEvent");r.initEvent("touchend",!0,!0,t.contentWindow,1,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey),r.touches=[{pageX:o.pageX,pageY:o.pageY,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,target:o.target}],e.state.simulate.press=!1,o.target.dispatchEvent(r)})}},{key:"render",value:function(){var e=this.getStyles();return p["default"].createElement("div",{style:e.root},p["default"].createElement("iframe",{ref:"iframe",style:e.frame}))}}]),t}(p["default"].Component);t["default"]=b},371:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),u=n(3),p=o(u),f=n(548),d=o(f),m=n(5),h=(o(m),n(17)),y=(o(h),function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(p["default"],{text:d["default"]}),"hello")}}]),t}(l["default"].Component));t["default"]=y},548:function(e,t){e.exports="# 读取相册API `chanjet-plgin-choose-photo`\n\n在mutants框架中, 提供从相册中选择照片的功能 , 目前支持chanjet平台, 后期增加微信.\n\n**不能脱离mutants框架单独使用.**\n\n\n\n## 获取实例\n\n```javascript\n//通过mutants来获取插件实例\nconst plugin = mutants.plugin.choosePhoto;\n```\n\n\n\n\n\n## API\n\n\n\n1. #### choosePhoto 选择照片\n\n   **参数**\n\n   - options `Object` 设置选项\n     - maxCount `number` 最大选图数量 , 默认值: 9\n     - quality `number` 图片质量 , 0 : 高(默认) , 1 : 中 , 2 : 低\n   - callback `function` 执行完成后回调\n   - requestId `string` 应用自己定义的id , 用于在restore时判断使用\n\n   ​\n\n\n## 用法\n\n```javascript\n//获取插件实例\nconst plugin = mutants.plugin.choosePhoto;\n\n//定义调用参数\nconst options = {\n  maxCount : 9,\n  quality : 0\n};\n\n\n//定义requestId \n//requestId用于在restore时帮助应用判断调用插件的业务或者逻辑.从而根据结果进行后续操作\nconst requestId = 'choosePhotoAtDemoPage';\n\n\n//定义回调\nconst callback = (rs) => {\n  /*\n   *  rs = {\n   *\t\tresultCode : number,\t//0:ok , 1:failed , 2:canceled\n   *\t\tmessage : string,\t\n   *\t\trequestId : string,\n   *\t\tbody : {\n   *\t\t\tdata : Array<string> //所选择图片的地址数组\n   *\t\t}\n   *  }\n   */\n\n  //调用成功\n  if(rs.resultCode == 0){\n\t//插入应用自己的代码\n    console.log(rs.body);\n\n  //调用失败\n  }else if(rs.resultCode == 1){\n  \t//插入应用自己的代码\n    console.log(rs.message);\n\n  //用户取消\n  }else{\n  \t//插入应用自己的代码\n  }\n}\n\n\n\n/**\n * 参数说明\n * @param options\n *      @property options.maxCount 最大选图数量, 默认9张\n *      @property options.quality 0:高质量(默认) , 1:中等质量 , 2:低质量\n * @param callback 执行完成后回调\n * @param requestId 应用自己分配的值,用于在restore时判断数据来源进行后续操作.\n *\n */\nplugin.choosePhoto(options , callback , requestId);\n```\n\n\n\n\n\n## mock数据\n\n在浏览器环境中,可以通过mock数据来模拟返回结果 , 可以使用 `mutants.plugin.setMockData` 来设置mock数据.\n\n具体参考如下:\n\n\n\n### 模拟成功\n\n```javascript\nconst mockData = {\n  //mock数据中,键名为插件的类名\n  ChoosePhotoPlugin : {\n    status : 'success',\n    //data为数组,其中包含了选择照片返回的照片地址,可自行mock\n    data : ['http://www.example.com/1.png']\n  }\n}\n\n//设置mock数据\nmutants.plugin.setMockData(mockData);\n```\n\n\n\n### 模拟失败\n\n```javascript\nconst mockData = {\n  //mock数据中,键名为插件的类名\n  ChoosePhotoPlugin : {\n    status : 'failed',\n    message : 'choose photo has been failed'\n  }\n}\n\n//设置mock数据\nmutants.plugin.setMockData(mockData);\n```\n\n\n\n### 模拟取消\n\n```javascript\nconst mockData = {\n  //mock数据中,键名为插件的类名\n  ChoosePhotoPlugin : {\n    status : 'cancel'\n  }\n}\n\n//设置mock数据\nmutants.plugin.setMockData(mockData);\n```\n\n\n\n\n\n\n\n"}});