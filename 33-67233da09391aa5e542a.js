webpackJsonp([33],{3:function(n,e,t){n.exports=t(2)(155)},4:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(e,"__esModule",{value:!0});var i=t(8),r=o(i);e["default"]=r["default"]},5:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),s=t(1),l=o(s),u=t(6),p=t(7),d=o(p),f=t(14),m=o(f),y=t(4),g=o(y),h=function(n){function e(){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,n),c(e,[{key:"render",value:function(){var n=this.props,e=n.children,t=n.code,o=n.component,i=n.layoutSideBySide,r=this.context.muiTheme.rawTheme.palette,a=r.canvasColor,c={root:{backgroundColor:a,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:i?"45%":null,"float":i?"right":null}},s=o?(0,u.parse)(t):{};return l["default"].createElement(g["default"],{style:c.root},l["default"].createElement(d["default"],{title:this.props.title,description:this.props.description||s.description},t),l["default"].createElement(m["default"],{style:c.exampleBlock},e))}}]),e}(s.Component);h.propTypes={children:s.PropTypes.node,code:s.PropTypes.string.isRequired,component:s.PropTypes.bool,description:s.PropTypes.string,layoutSideBySide:s.PropTypes.bool,title:s.PropTypes.string},h.defaultProps={component:!0},h.contextTypes={muiTheme:s.PropTypes.object},e["default"]=h},6:function(n,e,t){n.exports=t(2)(183)},7:function(n,e,t){n.exports=t(2)(243)},18:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),s=t(25),l=o(s),u=t(1),p=o(u),d=t(17),f=o(d),m=t(26),y=o(m),g='\n!function (a, b) {\n    function c() {\n        var b = f.getBoundingClientRect().width;\n        b / i > 540 && (b = 540 * i);\n        var c = b / 10;\n        f.style.fontSize = c + "px", k.rem = a.rem = c\n    }\n\n    var d, e = a.document, f = e.documentElement, g = e.querySelector(\'meta[name="viewport"]\'), h = e.querySelector(\'meta[name="flexible"]\'), i = 0, j = 0, k = b.flexible || (b.flexible = {});\n    if (g) {\n        console.warn("将根据已有的meta标签来设置缩放比例");\n        var l = g.getAttribute("content").match(/initial-scale=([d.]+)/);\n        l && (j = parseFloat(l[1]), i = parseInt(1 / j))\n    } else if (h) {\n        var m = h.getAttribute("content");\n        if (m) {\n            var n = m.match(/initial-dpr=([d.]+)/), o = m.match(/maximum-dpr=([d.]+)/);\n            n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))\n        }\n    }\n    if (!i && !j) {\n        var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)), q = a.devicePixelRatio;\n        i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i\n    }\n    if (f.setAttribute("data-dpr", i), !g)if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild)f.firstElementChild.appendChild(g); else {\n        var r = e.createElement("div");\n        r.appendChild(g), e.write(r.innerHTML)\n    }\n    a.addEventListener("resize", function () {\n        clearTimeout(d), d = setTimeout(c, 300)\n    }, !1), a.addEventListener("pageshow", function (a) {\n        a.persisted && (clearTimeout(d), d = setTimeout(c, 300))\n    }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {\n        e.body.style.fontSize = 12 * i + "px"\n    }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {\n        var b = parseFloat(a) * this.rem;\n        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b\n    }, k.px2rem = function (a) {\n        var b = parseFloat(a) / this.rem;\n        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b\n    }\n}(window, window.lib || (window.lib = {}));\n',h=function(n){function e(){var n,t,o,a;i(this,e);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return t=o=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(s))),o.state={simulate:{press:!1}},a=t,r(o,a)}return a(e,n),c(e,[{key:"getStyles",value:function(){return{root:{backgroundColor:"black",width:300,height:428,zIndex:1e6},frame:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #ccc"}}}},{key:"componentDidMount",value:function(){var n=this.props.children,e=this.refs.iframe,t=e.contentWindow.document;(0,l["default"])(t.body.style,{padding:0,margin:0,overflow:"hidden"});var o=t.createElement("script");o.type="text/javascript",o.innerHTML=g,t.head.appendChild(o);var i=window.location.protocol+"//"+window.location.host,r=t.createElement("style");r.type="text/css",r.innerHTML='*,*:hover{cursor: url("'+i+'/images/cursor-mobile-move.ico"),auto}',t.head.appendChild(r);var a=t.createElement("div");t.body.appendChild(a),this.bindEvents(),f["default"].render(p["default"].createElement(y["default"],null,n),a)}},{key:"bindEvents",value:function(){var n=this,e=this.refs.iframe,t=e.contentWindow.document;t.addEventListener("mousedown",function(o){var i=t.createEvent("MouseEvent");i.initEvent("touchstart",!0,!0,e.contentWindow,1,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey),i.touches=[{pageX:o.pageX,pageY:o.pageY,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,target:o.target}],n.state.simulate.press=!0,o.target.dispatchEvent(i)}),t.addEventListener("mousemove",function(o){if(n.state.simulate.press){var i=t.createEvent("MouseEvent");i.initEvent("touchmove",!0,!0,e.contentWindow,1,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey),i.touches=[{pageX:o.pageX,pageY:o.pageY,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,target:o.target}],o.target.dispatchEvent(i)}}),t.addEventListener("mouseup",function(o){var i=t.createEvent("MouseEvent");i.initEvent("touchend",!0,!0,e.contentWindow,1,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey),i.touches=[{pageX:o.pageX,pageY:o.pageY,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,target:o.target}],n.state.simulate.press=!1,o.target.dispatchEvent(i)})}},{key:"render",value:function(){var n=this.getStyles();return p["default"].createElement("div",{style:n.root},p["default"].createElement("iframe",{ref:"iframe",style:n.frame}))}}]),e}(p["default"].Component);e["default"]=h},374:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),s=t(1),l=o(s),u=t(3),p=o(u),d=t(557),f=o(d),m=t(5),y=(o(m),t(18)),g=(o(y),function(n){function e(){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,n),c(e,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(p["default"],{text:f["default"]}),"hello")}}]),e}(l["default"].Component));e["default"]=g},557:function(n,e){n.exports="# 定位API  `chanjet-plugin-geo`\n\n在mutants框架中, 提供定位相关的api , 目前支持chanjet平台.\n\n**不能脱离mutants框架单独使用.**\n\n\n\n## 获取实例\n\n```javascript\n//通过mutants来获取插件实例\nconst plugin = mutants.plugin.geo;\n```\n\n\n\n\n\n## API\n\n1. #### getLocation 获取当前位置\n\n   ##### 返回值\n\n   ```javascript\n   const result ={\n     //调用结果, 0: 成功, 1:失败\n     resultCode : 0,\n     //调用失败时返回错误信息\n     message : '',\n     body : {\n       data : {\n         //城市名称\n         city: '北京市',\n         //纬度\n         latitude: 40.067609,\n         //经度\n         longitude: 116.236081,\n         //位置信息\n         location: '北京市海淀区西北旺镇永腾南路用友软件园',\n         //定位时间\n         locationTimestamp: 1474857446543\n       }\n     }\n\n   }\n   ```\n   ​\n\n2. #### displayNearby 根据位置显示周边并选择\n\n   ##### 参数\n\n   - options `Object` 设置选项\n     - longitude `string` 经度\n     - latitude `string` 纬度\n     - location `string` 位置信息\n     - city `string` 当前城市\n     - radius `number` 周边半径 , 默认值 500 (米) , 最小值100\n   - callback `function` 执行完成后回调\n\n   ***注意: 查看周边可以再次选择周边的其他位置, 如果用户选择了周边的位置, 在回调中会返回选择的位置信息, 数据格式和 `getLocation` 一致***\n\n   ##### 返回值\n\n   ```javascript\n   const result ={\n     //调用结果, 0: 成功, 1:失败\n     resultCode : 0,\n     //调用失败时返回错误信息\n     message : '',\n     body : {\n       data : {\n         //城市名称\n         city: '北京市',\n         //纬度\n         latitude: 40.067609,\n         //经度\n         longitude: 116.236081,\n         //位置信息\n         location: '北京市海淀区西北旺镇永腾南路用友软件园',\n         //定位时间\n         locationTimestamp: 1474857446543\n       }\n     }\n\n   }\n   ```\n\n   ​\n\n3. #### showLocation 在地图上显示位置\n\n   ##### 参数\n\n   - options `Object` 设置选项\n     - title `string` 地图界面显示的标题\n     - longitude `string` 经度\n     - latitude `string` 纬度\n     - location `string` 位置信息\n     - city `string` 当前城市\n\n   **返回值**\n\n   无\n\n   ​\n\n\n## 用法\n\n#### 获取当前位置\n\n```javascript\n//获取插件实例\nconst plugin = mutants.plugin.geo;\n\n/************** 获取当前位置 **************/\nplugin.getLocation( (rs) => {\n   console.log(rs);\n });\n```\n\n\n\n#### 根据位置显示周边并选择\n\n```javascript\n//获取插件实例\nconst plugin = mutants.plugin.geo;\n\n/************** 查看附近 **************/\nconst displayOptions = {\n  longitude: 40.06759,\n  latitude: 116.23624,\n  location: '北京市海淀区西北旺镇永腾南路用友软件园',\n  city: '北京市'\n\n};\n\n//调用查看附近\nplugin.displayNearby( displayOptions , (rs) => {\n  console.log(rs);\n});\n```\n\n\n\n#### 在地图上显示位置\n\n```javascript\n//获取插件实例\nconst plugin = mutants.plugin.geo;\n\n/************** 在地图上查看位置 **************/\nconst showLocationOptions = {\n  title: '地理位置',\n  longitude: 40.06759,\n  latitude: 116.23624,\n  location: '北京市海淀区西北旺镇永腾南路用友软件园',\n  city: '北京市'\n\n};\n\n\n//在地图上查看位置\nplugin.showLocation(showLocationOptions);\n```\n\n\n\n## mock数据\n\n在浏览器环境中,可以通过mock数据来模拟返回结果 , 可以使用 `mutants.plugin.setMockData` 来设置mock数据.\n\n具体参考如下:\n\n\n\n### 模拟成功\n\n```javascript\nconst mockData = {\n  //mock数据中,键名为插件的类名\n  GeoPlugin : {\n    //获取当前位置mock数据\n    getLocation : {\n      status : 'success',\n      data : {\n        accuracy: 29,\n        city: \"北京市\",\n        latitude: 40.067496,\n        location: \"北京市海淀区永腾南路靠近用友软件园中区8D\",\n        locationTimestamp: 1461722019140,\n        longitude: 116.236093\n      }\n    },\n\n    //查看附近选择mock数据\n    displayNearby : {\n      status : 'success',\n      data : {\n        accuracy: 0,\n        city: \"北京市\",\n        latitude: 40.066948,\n        location: \"北京久瑞医疗科技有限公司\",\n        locationTimestamp: 1461722134777,\n        longitude: 116.235596\n      }\n    }\n\n  }\n}\n\n//设置mock数据\nmutants.plugin.setMockData(mockData);\n```\n\n\n\n### 模拟失败\n\n```javascript\nconst mockData = {\n  //mock数据中,键名为插件的类名\n  GeoPlugin : {\n    getLocation : {\n      status : 'failed',\n      message : '网络异常,请稍后再试'\n    },\n    displayNearby : {\n      status : 'failed',\n      message : '网络异常,请稍后再试'\n    }\n  }\n\n}\n\n//设置mock数据\nmutants.plugin.setMockData(mockData);\n```\n\n\n\n"}});