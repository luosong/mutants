webpackJsonp([40],{58:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(127),c=o(d),p=n(2),h=(o(p),n(129)),u=o(h);n(130);var g={root:{marginTop:20,marginBottom:20,padding:"0 10px"}},b=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"componentWillMount",value:function(){u["default"].setOptions({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(e,t){return hljs.highlight(t,e).value}})}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.text;return s("div",{style:(0,c["default"])({},g.root,t),className:"markdown-body",dangerouslySetInnerHTML:{__html:(0,u["default"])(n)}})}}]),t}(p.Component);b.defaultProps={text:""},t["default"]=b},84:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},85:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=u[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));u[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],l=r[3],d={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(d):t.push(n[i]={id:i,parts:[d]})}return t}function i(e,t){var n=f(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function d(e,t){var n,o,r;if(t.singleton){var i=k++;n=m||(m=s(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=h.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=p.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=A(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var u={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=g(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,k=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=u[s.id];l.refs--,i.push(l)}if(e){var d=r(e);o(d,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var A=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},128:function(e,t,n){t=e.exports=n(84)(),t.push([e.id,'@font-face{font-family:octicons-anchor;src:url(data:font/woff;charset=utf-8;base64,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) format(\'woff\')}.markdown-body{-webkit-text-size-adjust:100%;text-size-adjust:100%;color:#333;font-family:Roboto,sans-serif;font-size:16px;line-height:1.6;word-wrap:break-word}.markdown-body a{background-color:transparent}.markdown-body a:active,.markdown-body a:hover{outline:0}.markdown-body strong{font-weight:700}.markdown-body img{border:0}.markdown-body hr{box-sizing:content-box;height:0}.markdown-body pre{overflow:auto}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:monospace,monospace;font-size:1em}.markdown-body input{color:inherit;font:inherit;margin:0}.markdown-body html input[disabled]{cursor:default}.markdown-body input{line-height:normal}.markdown-body input[type=checkbox]{box-sizing:border-box;padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0}.markdown-body td,.markdown-body th{padding:0}.markdown-body *{box-sizing:border-box}.markdown-body input{font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif}.markdown-body a{color:#4078c0;text-decoration:none}.markdown-body a:active,.markdown-body a:hover{text-decoration:underline}.markdown-body hr{height:0;margin:15px 0;overflow:hidden;background:transparent;border:0;border-bottom:1px solid #ddd}.markdown-body hr:after,.markdown-body hr:before{display:table;content:""}.markdown-body hr:after{clear:both}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-family:Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,sans-serif;margin-top:15px;margin-bottom:15px;line-height:1.1}.markdown-body blockquote{margin:0}.markdown-body ol,.markdown-body ul{padding:0;margin-top:0;margin-bottom:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font:12px Consolas,Liberation Mono,Menlo,Courier,monospace}.markdown-body .select::-ms-expand{opacity:0}.markdown-body .octicon{font:normal normal normal 16px/1 octicons-anchor;display:inline-block;text-decoration:none;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-body .octicon-link:before{content:\'\\F05C\'}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .anchor{display:inline-block;padding-right:2px;margin-left:-18px}.markdown-body .anchor:focus{outline:none}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:1em;margin-bottom:16px;font-weight:400;line-height:1.4;color:#000}.markdown-body h4,.markdown-body h5,.markdown-body h6{color:#444}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#000;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1{padding-bottom:.3em;font-size:2em;line-height:1.25;border-bottom:1px solid #eee;margin:.67em 0}.markdown-body h1 .anchor{line-height:1}.markdown-body h2{padding-bottom:.3em;font-size:1.5em;line-height:1.334;border-bottom:1px solid #eee}.markdown-body h2 .anchor{line-height:1}.markdown-body h3{font-size:1.25em;line-height:1.4}.markdown-body h3 .anchor{line-height:1.2}.markdown-body h4{font-size:1em;line-height:1.5}.markdown-body h4 .anchor{line-height:1.2}.markdown-body h5{font-size:1em;line-height:1.715}.markdown-body h5 .anchor{line-height:.875}.markdown-body h6{font-size:.75em;color:#777}.markdown-body h6 .anchor{line-height:1.1}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body hr{height:4px;padding:0;margin:16px 0;background-color:#e7e7e7;border:0 none}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table th{font-weight:500}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #ddd}.markdown-body table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-body table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body img{max-width:100%;box-sizing:content-box;background-color:#fff}.markdown-body code{padding:0;padding-top:.2em;padding-bottom:.2em;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.markdown-body code:after,.markdown-body code:before{letter-spacing:-.2em;content:"\\A0"}.markdown-body pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body pre{word-wrap:normal}.markdown-body pre code{display:inline;max-width:none;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body pre code:after,.markdown-body pre code:before{content:normal}.markdown-body kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-bottom-color:#bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body .pl-c{color:#969896}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#0086b3}.markdown-body .pl-e,.markdown-body .pl-en{color:#795da3}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#333}.markdown-body .pl-ent{color:#63a35c}.markdown-body .pl-k{color:#a71d5d}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#183691}.markdown-body .pl-v{color:#ed6a43}.markdown-body .pl-id{color:#b52a1d}.markdown-body .pl-ii{background-color:#b52a1d;color:#f8f8f8}.markdown-body .pl-sr .pl-cce{color:#63a35c;font-weight:700}.markdown-body .pl-ml{color:#693a17}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{color:#1d3e81;font-weight:700}.markdown-body .pl-mq{color:teal}.markdown-body .pl-mi{color:#333;font-style:italic}.markdown-body .pl-mb{color:#333;font-weight:700}.markdown-body .pl-md{background-color:#ffecec;color:#bd2c00}.markdown-body .pl-mi1{background-color:#eaffea;color:#55a532}.markdown-body .pl-mdr{color:#795da3;font-weight:700}.markdown-body .pl-mo{color:#1d3e81}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px Consolas,Liberation Mono,Menlo,Courier,monospace;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-bottom-color:#bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body:after,.markdown-body:before{display:table;content:""}.markdown-body:after{clear:both}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{margin:0 .35em .25em -1.6em;vertical-align:middle}.markdown-body :checked+.radio-label{z-index:1;position:relative;border-color:#4078c0}.markdown-body .alertText{color:red}.markdown-body .alertText,.markdown-body .titleDardred{font-family:Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,sans-serif}.markdown-body .titleDardred{padding:2px 10px;color:darkred;background:#f6f6f6;border-radius:5px}.markdown-body .careText{font-family:Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,sans-serif;color:#006ddd}',""])},129:function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=p.normal,this.options.gfm&&(this.options.tables?this.rules=p.tables:this.rules=p.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=h.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=h.breaks:this.rules=h.gfm:this.options.pedantic&&(this.rules=h.pedantic)}function o(e){this.options=e||{}}function r(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function s(e,t){return e=e.source,t=t||"",function n(o,r){return o?(r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(o,r),n):new RegExp(e,t)}}function l(){}function d(e){for(var t,n,o=1;o<arguments.length;o++){t=arguments[o];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,o){if(o||"function"==typeof n){o||(o=n,n=null),n=d({},c.defaults,n||{});var a,s,l=n.highlight,p=0;try{a=t.lex(e,n)}catch(h){return o(h)}s=a.length;var u=function(e){if(e)return n.highlight=l,o(e);var t;try{t=r.parse(a,n)}catch(i){e=i}return n.highlight=l,e?o(e):o(null,t)};if(!l||l.length<3)return u();if(delete n.highlight,!s)return u();for(;p<a.length;p++)!function(e){return"code"!==e.type?--s||u():l(e.text,e.lang,function(t,n){return t?u(t):null==n||n===e.text?--s||u():(e.text=n,e.escaped=!0,void(--s||u()))})}(a[p])}else try{return n&&(n=d({},c.defaults,n)),r.parse(t.lex(e,n),n)}catch(h){if(h.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occured:</p><pre>"+i(h.message+"",!0)+"</pre>";throw h}}var p={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};p.bullet=/(?:[*+-]|\d+\.)/,p.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,p.item=s(p.item,"gm")(/bull/g,p.bullet)(),p.list=s(p.list)(/bull/g,p.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+p.def.source+")")(),p.blockquote=s(p.blockquote)("def",p.def)(),p._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",p.html=s(p.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,p._tag)(),p.paragraph=s(p.paragraph)("hr",p.hr)("heading",p.heading)("lheading",p.lheading)("blockquote",p.blockquote)("tag","<"+p._tag)("def",p.def)(),p.normal=d({},p),p.gfm=d({},p.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),p.gfm.paragraph=s(p.paragraph)("(?!","(?!"+p.gfm.fences.source.replace("\\1","\\2")+"|"+p.list.source.replace("\\1","\\3")+"|")(),p.tables=d({},p.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=p,t.lex=function(e,n){var o=new t(n);return o.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var o,r,i,a,s,l,d,c,h,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},c=0;c<l.align.length;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(c=0;c<l.cells.length;c++)l.cells[c]=l.cells[c].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),a=i[2],this.tokens.push({type:"list_start",ordered:a.length>1}),i=i[0].match(this.rules.item),o=!1,h=i.length,c=0;c<h;c++)l=i[c],d=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(d-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+d+"}","gm"),"")),this.options.smartLists&&c!==h-1&&(s=p.bullet.exec(i[c+1])[0],a===s||a.length>1&&s.length>1||(e=i.slice(c+1).join("\n")+e,c=h-1)),r=o||/\n\n(?!\s*$)/.test(l),c!==h-1&&(o="\n"===l.charAt(l.length-1),r||(r=o)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(l,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<l.align.length;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(c=0;c<l.cells.length;c++)l.cells[c]=l.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,h._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,h.link=s(h.link)("inside",h._inside)("href",h._href)(),h.reflink=s(h.reflink)("inside",h._inside)(),h.normal=d({},h),h.pedantic=d({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),h.gfm=d({},h.normal,{escape:s(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:s(h.text)("]|","~]|")("|","|https?://|")()}),h.breaks=d({},h.gfm,{br:s(h.br)("{2,}","*")(),text:s(h.gfm.text)("{2,}","*")()}),n.rules=h,n.output=function(e,t,o){var r=new n(t,o);return r.output(e)},n.prototype.output=function(e){for(var t,n,o,r,a="";e;)if(r=this.rules.escape.exec(e))e=e.substring(r[0].length),a+=r[1];else if(r=this.rules.autolink.exec(e))e=e.substring(r[0].length),"@"===r[2]?(n=":"===r[1].charAt(6)?this.mangle(r[1].substring(7)):this.mangle(r[1]),o=this.mangle("mailto:")+n):(n=i(r[1]),o=n),a+=this.renderer.link(o,null,n);else if(this.inLink||!(r=this.rules.url.exec(e))){if(r=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(r[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(r[0])&&(this.inLink=!1),e=e.substring(r[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):i(r[0]):r[0];else if(r=this.rules.link.exec(e))e=e.substring(r[0].length),this.inLink=!0,a+=this.outputLink(r,{href:r[2],title:r[3]}),this.inLink=!1;else if((r=this.rules.reflink.exec(e))||(r=this.rules.nolink.exec(e))){if(e=e.substring(r[0].length),t=(r[2]||r[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){a+=r[0].charAt(0),e=r[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(r,t),this.inLink=!1}else if(r=this.rules.strong.exec(e))e=e.substring(r[0].length),a+=this.renderer.strong(this.output(r[2]||r[1]));else if(r=this.rules.em.exec(e))e=e.substring(r[0].length),a+=this.renderer.em(this.output(r[2]||r[1]));else if(r=this.rules.code.exec(e))e=e.substring(r[0].length),a+=this.renderer.codespan(i(r[2],!0));else if(r=this.rules.br.exec(e))e=e.substring(r[0].length),a+=this.renderer.br();else if(r=this.rules.del.exec(e))e=e.substring(r[0].length),a+=this.renderer.del(this.output(r[1]));else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),a+=this.renderer.text(i(this.smartypants(r[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(r[0].length),n=i(r[1]),o=n,a+=this.renderer.link(o,null,n);return a},n.prototype.outputLink=function(e,t){var n=i(t.href),o=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,o,this.output(e[1])):this.renderer.image(n,o,i(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",o=e.length,r=0;r<o;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){if(this.options.highlight){var o=this.options.highlight(e,t);null!=o&&o!==e&&(n=!0,e=o)}if(!t)return"<pre><code>"+(n?e:i(e,!0))+"\n</code></pre>";var r=this.options.langPrefix+i(t,!0);return'<pre class="'+r+'"><code class="'+r+'">'+(n?e:i(e,!0))+"\n</code></pre>\n"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td",o=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return o+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(this.options.sanitize){try{var o=decodeURIComponent(a(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(r){return""}if(0===o.indexOf("javascript:")||0===o.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},o.prototype.image=function(e,t,n){var o='<img src="'+e+'" alt="'+n+'"';return t&&(o+=' title="'+t+'"'),o+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},r.parse=function(e,t,n){var o=new r(t,n);return o.parse(e)},r.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,o,r,i="",a="";for(n="",e=0;e<this.token.header.length;e++)o={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});a+=this.renderer.tablerow(n)}return this.renderer.table(i,a);case"blockquote_start":for(var a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":for(var a="",s=this.token.ordered;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,s);case"list_item_start":for(var a="";"list_item_end"!==this.next().type;)a+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(a);
case"loose_item_start":for(var a="";"list_item_end"!==this.next().type;)a+=this.tok();return this.renderer.listitem(a);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},l.exec=l,c.options=c.setOptions=function(e){return d(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new o,xhtml:!1},c.Parser=r,c.parser=r.parse,c.Renderer=o,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,function(){return this}())},130:function(e,t,n){var o=n(128);"string"==typeof o&&(o=[[e.id,o,""]]);n(85)(o,{});o.locals&&(e.exports=o.locals)},573:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(2),c=o(d),p=n(281),h=(o(p),n(58)),u=o(h),g=n(898),b=o(g),f=s("div",{},void 0,s(u["default"],{text:b["default"]})),m=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return f}}]),t}(c["default"].Component);t["default"]=m},898:function(e,t){e.exports="# Page\n\n\n\nPage 是一个特定的类，代表 NavigationController 导航控制的一个功能模块，在 App 中呈现为应用的每个页面，Navigation Controller 实际上就是管理所有 Page 的队列，确定哪一个 Page 需要显示，哪些 Page 需要隐藏，哪些 Page 需要销毁等等，事实上 NavigationController 和 Page 是密不可分的，两者都无法单独分开使用。\n<div style=\"text-align:center;\"><img src=\"images/navigator/navigator-page.jpg\" /></div><br/>\nPage 在不同的环境中有不同的呈现:\n- #### 在工作圈中\n\n  Page 不包含 Navigate Bar，整个 Page 的显示范围为工作圈 Navigate Bar 以下的空白范围\n\n- #### 在微信、钉钉等手机应用中\n\n  Page 不包含 Navigate Bar，整个 Page 的显示范围为应用中的可用范围\n\n- #### 在手机浏览器中\n\n  Page 不包含 Navigate Bar，整个 Page 的显示范围为浏览器内容显示区域范围\n\n- #### 在PC端浏览器中\n\n  Page包含一个便于开发调试使用的 Navigate Bar，整个 Page 的显示范围为浏览器内容显示区域范围 \n\n<br/><br/>\n## 项目中引用\n\n如果安装的是 chanjet-navigator 的 npm 包：\n```javascript\nimport {Page} from 'chanjet-navigator';\n```\n\n如果安装的是 chanjet-ui 的 npm 包：\n```javascript\nimport Page from 'chanjet-ui/lib/Page';\n```\n\n<br/><br/>\n## Page 的使用\n\n在项目中引用好 Page 类后，我们可以开始写一个我们应用中的 Page 了:\n\n```javascript\nimport {Page} from 'chanjet-navigator';\n\nexport default class PageIndex extends Page{\n\n    title = '页面标题';\n    \n    className = 'pageClass';\n    \n    navBar = {\n        right: {\n        },\n        onBackClick: this.onBackClick.bind(this),\n        onCloseClick: this.onCloseClick.bind(this)\n    }\n\n\trenderContent(){\n        ...  \n\t}\n\n    onBackClick(){\n    }\n\t\t  \n}\n```\n\n- 首先我们要定义一个页面类，并且继承自 chanjet-navigator 的 Page 类，这点很重要，因为 NavigationController 会对管理的 Page 对象做检测，只有继承自 Page 的才认为是一个合法的 Page。 \n- 其次可以定义一个 title ,用于显示当前页面的标题。对应到不同环境中是这样:\n\n  - 工作圈中,作为工作圈的 Navigate Bar 上的标题\n  - 手机应用中,作为应用顶栏上的标题\n  - 手机浏览器中,作为浏览器页面的标题\n  - PC端浏览器中,作为开发模式的 Dev Navigate Bar 的标题\n\n- 再次可以定义一个 className ,作为当前页面容器的一个 css 样式名。\n\n- 还可以定义一个 navBar, 但仅在工作圈和PC端浏览器开发调试模式中有效, <a class=\"careText\" href=\"#/docs/navigator/NavigateBar\">具体使用参照 NavigateBar 部分</a>。\n\n- 最后 Page 在渲染的时候会调用 renderContent 来执行 Page 渲染, 使用 render 是没有效果的。\n\n\n\n<br/><br/>\n## Page 的继承\n\n应用开发者可以自己包装一个应用的 App BasePage 类，让应用的页面继承自这个 App BasePage 类，这样可以满足对一些应用页面公共的部分进行包装\n\nApp BasePage\n\n```javascript\nimport {Page} from 'chanjet-navigator';\n\nexport default class BasePage extends Page{\n\t...  \n}\n```\n\nApp Page\n\n```javascript\nimport BasePage from 'app/common/BasePage';\n\nexport default class indexPage extends BasePage{\n\t...  \n}\n```\n\n\n\n\n<br/><br/>\n## Page 的包装\n\n开发应用时也许会用到 Redux ，由于 Redux 会用 connect 将 Page 包装起来，实际上 NavigationController 获取到的是一个Redux 的对象，这样在检测一个应用 Page 是否继承自 chanjet-navigator Page 类时会失败，为此我们针对这种被包装过的 Page 时，我们会检测是否包含 WrappedComponent 属性。如果有，我们会通过 Page.WrappedComponent 拿到真正继承自 chanjet-navigator Page 类的 Page，这样 NavigationController 的合法检测就可以通过了。\n\n目前仅限于对 WrappedComponent 属性的支持，其他方式或第三方库对 Page 的包装如果也实现了 WrappedComponent属性获取真正的 Page ，同样使用起来是没有问题的。如果还其他的包装方式，我们会视使用的普遍程度来进行调整或增加。\n\n\n\n<br/><br/>\n## Page 的生命周期\n\nPage 是一个标准的 React Component, 除了 render 被 renderContent 替代之外, 其他所有的 React Component 的生命周期方法都可以正常使用。\n\n另外作为 chanjet-navigator 的部件, Page 还具有 chanjet-navigator 赋予的其他生命周期方法,包括: \n\n- #### page.active\n\n  当前页面被激活，作为应用的当前显示页\n\n- #### page.unActive\n\n  当前页面转为未激活状态\n\n- #### page.pageBackReceiveResult\n\n  当后一个页面P执行 popAndReturn 后，会将当前页面激活，并调起当前页面的 pageBackReceiveResult 来接收页面P要返回的结果。 \n  <table>\n  ​\t<tr>\n  ​\t\t<td>参数名</td>\n  ​\t\t<td>类型</td>\n  ​\t\t<td>说明</td>\n  ​\t</tr>\n  ​\t<tr>\n  ​\t\t<td>action</td>\n  ​\t\t<td>String</td>\n  ​\t\t<td>后一个页面返回的行为, ok 为确定, cancel 为取消</td>\n  ​\t</tr>\n  ​\t<tr>\n  ​\t\t<td>result</td>\n  ​\t\t<td>JSON Object</td>\n  ​\t\t<td>后一个页面返回的结果数据</td>\n  ​\t</tr>\n  ​\t<tr>\n  ​\t\t<td>pageCode</td>\n  ​\t\t<td>string</td>\n  ​\t\t<td>在 push 页面时,给页面设置的一个标识,当使用 popAndReturn 回来之后可以依据这个标识来判定返回的行为。避免同一个页面的两个不同行为 push 同一个后续页面时,造成返回时无法识别是哪一个行为触发的。</td>\n  ​\t</tr>\n  </table>\n  <br/>\n\n- #### page.saveInstanceState (仅限在工作圈中)\n\n  保存当前页面的状态数据，该生命周期仅和 Android 系统的手机有关。相关内容请查看 Navigator 的 <a class=\"careText\" href=\"#/docs/navigator/NavigationRestore\">Restore</a> 模式。\n\n- #### page.restoreInstanceState (仅限在工作圈中)\n\n  与 saveInstanceState 成套使用，用于应用恢复状态时，页面的 restoreInstanceState 生命周期方法被调用起来接收之前 saveInstanceState 保存的数据，用于重置状态。\n  \n- #### page.postNavbarMixin\n  \n  在每次渲染页面时先调用，用来在 Page 渲染之前修改 navBar 配置提供时机。\n\n<br/><br/>\n## Page 的懒加载（按需异步加载）\n\n我们在使用ES6开发时，在引用别的类都是采用import方式引入，这是一种同步加载方式，这代表在整个APP开始运行时，所有的 javascript 模块都已经被加载进来，所有的 javascript 代码都会被编译打包到一个完整的 js 文件中，这样往往会造成最后发布的 js 文件过于庞大，浏览器需要更多的加载时间，应用的启动速度也受此影响，一旦网络环境不够好时，带给用户的体验就很糟糕，这时我们往往都是采用按需加载的懒加载方式，希望某些模块只在我需要使用的时候才进行加载，那么在Navigator中如何进行懒加载页面呢？\n\n其实我们只要将 NavigationController 接收的 pages 参数稍加改造就可以实现，方案如下：\n\n```javascript\nconst pages = {\n  '/index':{\n        getComponent(cb) {\n            require.ensure([], (require) => {\n                cb(require('./IndexPage').default);\n            }, 'indexPage');\n        }\n  }\n}\n```\n\n通过这样改造之后，webpack打包就会将 IndexPage 和所涉及的模块都单独打包成一个独立的 js 文件，文件名为 require.ensure 方法的最后一个参数( 示例中会打包出一个 indexPage.js )，在应用 push 页面时再开始加载对应的页面 js 文件。\n\n\n<br/><br/><br/>"}});