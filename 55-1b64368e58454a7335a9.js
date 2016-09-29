webpackJsonp([55],{3:function(n,t,e){n.exports=e(2)(155)},353:function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),l=e(1),u=r(l),s=e(16),h=(r(s),e(3)),f=r(h),p=e(537),d=r(p),b=function(n){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,n),c(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(f["default"],{text:d["default"]}))}}]),t}(u["default"].Component);t["default"]=b},537:function(n,t){n.exports='# 应用开发\n\n工作圈应用开发首先是基于工作圈的应用环境来进行开发，工作圈来调度应用的启动、关闭和切换，提供用户鉴权、插件等能力，所以整个应用的开发相比传统web应用开发多了一些环节，通过对应用的开发过程梳理，我们整理了一套应用开发的步骤流程，我们建议按这个步骤来开发：\n\n- 建立项目\n- 应用功能开发\n- 浏览器开发调试\n- 设备与浏览器联调\n- 应用打包成 .zip\n- 设备加载应用包调试\n- 应用测试和正式发布\n\n下面是对每个步骤详细说明。\n\n<br/>\n\n### # 建立项目\n\n首先我们要建立一个可以运行的项目框架，然后在这个框架上开展应用业务的开发。我们提供了一个运行在 `node` 环境的项目生成器 `chanjet-gzq-h5`，通过这个项目生成器开发者可以马上生成一个应用的基础框架，这个框架包含一个DEMO应用的代码、ES6的编译、代码的压缩整合、热更新、WebService的配置等，这些文件结构和代码能够通过 `npm start` 立即运行起来，在浏览器中输入 `http://localhost:8080` DEMO应用界面就展现出来了，一个DEMO应用就成功的构建好了。\n\n具体使用过程请参看：<a href="docs.html#/quickstart">开始使用</a>\n\n<br/>\n\n### # 应用功能开发\n\n应用功能的开发就比较简单了，开发者只需要专注应用功能的实现，这里我们提供了各种功能模块，便于开发者能够较快速的完成开发。\n\n目前我们提供以下模块\n\n- #### chanjet-mutants \n\n  这是一个基础模块，用于环境判断。<a href="docs.html#/mutants/start">文档查看>></a>\n\n\n- #### chanjet-plugins \n\n  native 能力插件集合，这里包含拍照、选图、位置、上传等各种插件。<a href="docs.html#/mutants/native">文档查看>></a>\n\n- #### chanjet-navigator\n\n  一套应用页面流转的导航机制，用于应用页面跳转、切换、导航栏的控制等。<a href="docs.html#/navigator/navigationcontroller">文档查看>></a>\n\n- #### chanjet-sdk\n\n  这个模块仅适用虚拟机应用，提供了一套鉴权、数据请求的方案。<a href="docs.html#/mutants/start">文档查看>></a>\n\n- #### chanjet-ui\n\n  提供一套丰富的、可配置主题的UI组件库。<a href="docs.html#/ui/get-started/installation">文档查看>></a>\n\n- #### chanjet-scroller\n\n  一个滚动容器组件，模拟还原原生应用的弹性滚动处理。<a href="docs.html#/scroller">文档查看>></a>\n\n- #### chanjet-virtual-list\n\n  虚拟列表组件，提供高效的列表显示，适用于大量数据的列表渲染和交互处理。<a href="docs.html#/virtual-list">文档查看>></a>\n\n相关模块的具体使用，请参看 <a href="docs.html#/docs">文档</a> 部分。\n\n<br/>\n\n### # 浏览器开发调试\n\n有了可以运行的DEMO应用，用浏览器打开 `http://localhost:8080/ `，我们就可以边开发边调试了，我们建议使用chrome浏览器来进行开发调试，因为chrome提供了很好的开发调试工具，而且可以安装React的调试插件。\n\n我们同时在DEMO运行环境上配置了ES6代码编译、代码压缩和Sources Code、热更新等，使得我们的调试更加方便，开发者只要完成保存代码的动作，webpack就会马上自动编译处理，浏览器会立即呈现修改之后的应用。\n\n<br/>\n\n### # 移动设备与浏览器联调\n\n在完成应用主体的开发或者需要调试插件功能时，我们就可以开启设备与浏览器的连接调试了。\n\n在执行 npm start 后，我们不光可以通过 `http://localhost:8080/` 来访问，还可以通过开发者的IP地址来访问，webservice 会获取到开发者的本机IP，比如 IP 地址为： 192.168.0.1 ，我们就可以通过 `http://192.168.0.1:8080` 来访问。\n\n了解了上面，我们就可以用移动设备打开开发调试版的工作圈，点击应用图标，在开启的弹出窗口输入对应的地址就可以直接在移动设备中运行应用了，由于系统的不同实际访问的地址也不同，例如：\n\n- ios 设备访问：`http://192.168.0.1:8080/ios.html`\n- android 设备访问：`http://192.168.0.1:8080/android.html`\n\n设备上可以看到应用界面了，可是如何调试呢？这就需要我们将移动设备通过连接线连接开发者的电脑，然后开启浏览器的调试开发工具进行调试。\n\n具体请参看：<a href="docs.html#/column/MobileDebug">如何连接移动设备调试</a>。\n\n<br/>\n\n### # 应用打包成 .zip\n\n应用开发完成后，我们需要提供一个 zip 包文件给工作圈，工作圈加载这个 zip 后才能在工作圈中运行应用。我们在生成项目的时候已经配置好对应的命令，开发者只要执行 `npm package` ，就会按照 IOS 和 Android 两种不同的环境生成对应的 zip 包文件。\n\n<br/>\n\n### # 设备加载应用包调试\n\n将项目压缩成 zip 包之后，开发者可以使用工作圈提供的应用开发版本的工作圈来进行加载 zip 包调试。在工作圈中点击应用图标后，在弹出窗口中输入可访问的 zip 包地址，点击确定后，工作圈首先会下载这个 zip 包，下载完成后进行解压缩，然后找到解压根目录下的 index.html 运行，这样开发者的应用就在工作圈里运行起来了。\n\n<br/>\n\n### # 应用测试和正式发布\n\n通过上面的步骤，应用测试人员可以批量使用不同移动设备对应用进行功能测试，兼容性测试等测试环节，经过严格测试后应用就可以正式发布了。开发者按照工作圈提供的正式上线发布流程完成后续工作后，应用就正式发布了！\n\n<br/>\n\n#### 以上就是一套完整的应用开发流程，开发者们，准备好了吗，让我们马上开始做应用吧！！\n\n<br/>\n\n<br/>\n\n'}});