webpackJsonp([13],{3:function(e,t,n){e.exports=n(2)(155)},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(8),r=o(l);t["default"]=r["default"]},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),u=o(s),c=n(6),p=n(7),d=o(p),f=n(13),h=o(f),b=n(4),y=o(b),m=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.code,o=e.component,l=e.layoutSideBySide,r=this.context.muiTheme.rawTheme.palette,a=r.canvasColor,i={root:{backgroundColor:a,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:l?"45%":null,"float":l?"right":null}},s=o?(0,c.parse)(n):{};return u["default"].createElement(y["default"],{style:i.root},u["default"].createElement(d["default"],{title:this.props.title,description:this.props.description||s.description},n),u["default"].createElement(h["default"],{style:i.exampleBlock},t))}}]),t}(s.Component);m.propTypes={children:s.PropTypes.node,code:s.PropTypes.string.isRequired,component:s.PropTypes.bool,description:s.PropTypes.string,layoutSideBySide:s.PropTypes.bool,title:s.PropTypes.string},m.defaultProps={component:!0},m.contextTypes={muiTheme:s.PropTypes.object},t["default"]=m},6:function(e,t,n){e.exports=n(2)(183)},7:function(e,t,n){e.exports=n(2)(243)},14:function(e,t,n){e.exports=n(2)(245)},19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n){if(!e.children&&!e.label&&!e.icon)return new Error("Required prop label or children or icon was not specified in "+n+".")}function u(e,t,n){var o=t.muiTheme,l=o.baseTheme,r=o.button,a=o.raisedButton,i=e.disabled,s=e.disabledBackgroundColor,u=e.disabledLabelColor,c=e.fullWidth,p=e.icon,d=e.label,f=e.labelPosition,h=e.primary,m=e.secondary,g=e.style,v=h||m?.4:.08,T=a.color,P=a.textColor;return i?(T=s||a.disabledColor,P=u||a.disabledTextColor):h?(T=a.primaryColor,P=a.primaryTextColor):m?(T=a.secondaryColor,P=a.secondaryTextColor):(e.backgroundColor&&(T=e.backgroundColor),e.labelColor&&(P=e.labelColor)),{root:{display:"inline-block",minWidth:c?"100%":r.minWidth,height:r.height,transition:b["default"].easeOut()},container:{position:"relative",height:"100%",width:"100%",padding:0,overflow:"hidden",borderRadius:2,transition:b["default"].easeOut(),backgroundColor:T,textAlign:"center"},label:{position:"relative",verticalAlign:"middle",opacity:1,fontSize:r.fontSize,letterSpacing:0,textTransform:a.textTransform||r.textTransform||"uppercase",fontWeight:a.fontWeight,margin:0,userSelect:"none",paddingLeft:p&&"before"!==f?8:l.spacing.desktopGutterLess,paddingRight:p&&"before"===f?8:l.spacing.desktopGutterLess,lineHeight:g&&g.height||""+r.height,color:P},icon:{lineHeight:g&&g.height||""+r.height,verticalAlign:"middle",marginLeft:d&&"before"!==f?12:0,marginRight:d&&"before"===f?12:0},overlay:{backgroundColor:n.hovered&&!i&&(0,y.fade)(P,v),transition:b["default"].easeOut(),top:0},ripple:{color:P,opacity:h||m?.16:.1}}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),f=o(d),h=n(12),b=o(h),y=n(36),m=n(52),g=n(46),v=o(g),T=n(8),P=o(T),C=function(e){function t(){var e,n,o,l;r(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={hovered:!1,touched:!1,initialZDepth:0,zDepth:0},o.handleMouseDown=function(e){0===e.button&&o.setState({zDepth:o.state.initialZDepth+1}),o.props.onMouseDown&&o.props.onMouseDown(e)},o.handleMouseUp=function(e){o.setState({zDepth:o.state.initialZDepth}),o.props.onMouseUp&&o.props.onMouseUp(e)},o.handleMouseLeave=function(e){o.refs.container.isKeyboardFocused()||o.setState({zDepth:o.state.initialZDepth,hovered:!1}),o.props.onMouseLeave&&o.props.onMouseLeave(e)},o.handleMouseEnter=function(e){o.refs.container.isKeyboardFocused()||o.state.touch||o.setState({hovered:!0}),o.props.onMouseEnter&&o.props.onMouseEnter(e)},o.handleTouchStart=function(e){o.setState({touch:!0,zDepth:o.state.initialZDepth+1}),o.props.onTouchStart&&o.props.onTouchStart(e)},o.handleTouchEnd=function(e){o.setState({zDepth:o.state.initialZDepth}),o.props.onTouchEnd&&o.props.onTouchEnd(e)},o.handleKeyboardFocus=function(e,t){var n=u(o.props,o.context);if(t&&!o.props.disabled){o.setState({zDepth:o.state.initialZDepth+1});var l=o.props.primary||o.props.secondary?.4:.08;o.refs.overlay.style.backgroundColor=(0,y.fade)(Object.assign({},n.label,o.props.labelStyle).color,l)}else o.state.hovered||(o.setState({zDepth:o.state.initialZDepth}),o.refs.overlay.style.backgroundColor="transparent")},l=n,a(o,l)}return i(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props.disabled?0:1;this.setState({zDepth:e,initialZDepth:e})}},{key:"componentWillReceiveProps",value:function(e){var t=e.disabled?0:1;this.setState({zDepth:t,initialZDepth:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.disabled,r=e.icon,a=e.label,i=e.labelPosition,s=e.labelStyle,p=(e.primary,e.rippleStyle),d=(e.secondary,l(e,["children","className","disabled","icon","label","labelPosition","labelStyle","primary","rippleStyle","secondary"])),h=this.context.muiTheme.prepareStyles,b=u(this.props,this.context,this.state),y=Object.assign({},b.ripple,p),g=o?{}:{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onKeyboardFocus:this.handleKeyboardFocus},T=a&&f["default"].createElement("span",{style:h(Object.assign(b.label,s))},a),C=r&&f["default"].cloneElement(r,{color:b.label.color,style:b.icon}),E="before"===i?{labelElement:T,iconCloned:C,children:t}:{children:t,iconCloned:C,labelElement:T},S=(0,m.createChildFragment)(E);return f["default"].createElement(P["default"],{className:n,style:Object.assign(b.root,this.props.style),zDepth:this.state.zDepth},f["default"].createElement(v["default"],c({},d,g,{ref:"container",disabled:o,style:b.container,focusRippleColor:y.color,touchRippleColor:y.color,focusRippleOpacity:y.opacity,touchRippleOpacity:y.opacity}),f["default"].createElement("div",{ref:"overlay",style:h(b.overlay)},S)))}}]),t}(f["default"].Component);C.muiName="RaisedButton",C.propTypes={backgroundColor:f["default"].PropTypes.string,children:f["default"].PropTypes.node,className:f["default"].PropTypes.string,disabled:f["default"].PropTypes.bool,disabledBackgroundColor:f["default"].PropTypes.string,disabledLabelColor:f["default"].PropTypes.string,fullWidth:f["default"].PropTypes.bool,href:f["default"].PropTypes.string,icon:f["default"].PropTypes.node,label:s,labelColor:f["default"].PropTypes.string,labelPosition:f["default"].PropTypes.oneOf(["before","after"]),labelStyle:f["default"].PropTypes.object,linkButton:f["default"].PropTypes.bool,onMouseDown:f["default"].PropTypes.func,onMouseEnter:f["default"].PropTypes.func,onMouseLeave:f["default"].PropTypes.func,onMouseUp:f["default"].PropTypes.func,onTouchEnd:f["default"].PropTypes.func,onTouchStart:f["default"].PropTypes.func,primary:f["default"].PropTypes.bool,rippleStyle:f["default"].PropTypes.object,secondary:f["default"].PropTypes.bool,style:f["default"].PropTypes.object},C.defaultProps={disabled:!1,labelPosition:"after",fullWidth:!1,primary:!1,secondary:!1},C.contextTypes={muiTheme:f["default"].PropTypes.object.isRequired},t["default"]=C},33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(42),r=o(l);t["default"]=r["default"]},42:function(e,t,n){e.exports=n(2)(248)},81:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=o(l),a=n(10),i=o(a),s=n(9),u=o(s),c=function(e){return r["default"].createElement(u["default"],e,r["default"].createElement("path",{d:"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"}))};c=(0,i["default"])(c),c.displayName="ActionAndroid",c.muiName="SvgIcon",t["default"]=c},454:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=o(l),a=n(19),i=o(a),s=n(81),u=o(s),c=n(33),p=o(c),d={button:{margin:12},exampleImageInput:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",opacity:0}},f=function(){return r["default"].createElement("div",null,r["default"].createElement(i["default"],{label:"Choose an Image",labelPosition:"before",style:d.button},r["default"].createElement("input",{type:"file",style:d.exampleImageInput})),r["default"].createElement(i["default"],{label:"Label before",labelPosition:"before",primary:!0,icon:r["default"].createElement(u["default"],null),style:d.button}),r["default"].createElement(i["default"],{href:"https://github.com/",label:"Github Link",secondary:!0,style:d.button,icon:r["default"].createElement(p["default"],{className:"muidocs-icon-custom-github"})}))};t["default"]=f},455:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=o(l),a=n(19),i=o(a),s=n(30),u=n(81),c=o(u),p=n(33),d=o(p),f={margin:12},h=function(){return r["default"].createElement("div",null,r["default"].createElement(i["default"],{icon:r["default"].createElement(c["default"],null),style:f}),r["default"].createElement(i["default"],{backgroundColor:"#a4c639",icon:r["default"].createElement(c["default"],{color:s.fullWhite}),style:f}),r["default"].createElement(i["default"],{href:"https://github.com/",secondary:!0,icon:r["default"].createElement(d["default"],{className:"muidocs-icon-custom-github"}),style:f}))};t["default"]=h},456:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=o(l),a=n(19),i=o(a),s={margin:12},u=function(){return r["default"].createElement("div",null,r["default"].createElement(i["default"],{label:"Default",style:s}),r["default"].createElement(i["default"],{label:"Primary",primary:!0,style:s}),r["default"].createElement(i["default"],{label:"Secondary",secondary:!0,style:s}),r["default"].createElement(i["default"],{label:"Disabled",disabled:!0,style:s}))};t["default"]=u},457:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),r=o(l),a=n(15),i=o(a),s=n(5),u=o(s),c=n(14),p=o(c),d=n(3),f=o(d),h=n(636),b=o(h),y=n(635),m=o(y),g=n(456),v=o(g),T=n(633),P=o(T),C=n(454),E=o(C),S=n(634),M=o(S),x=n(455),R=o(x),D=n(670),k=o(D),B={simple:"分别使用 `默认颜色`， `primary`, `secondary` 和 `disabled` props 的按钮.",complex:"第一个按钮使用一个 `input` 作为子组件, 第二个按钮展示在文字后面放置一个[SVG Icon](#/docs/ui/components/svg-icon) 。 最后一个按钮展示在文字前面放置一个 [Font Icon](#/docs/ui/components/font-icon).",icon:"只包含图标的按钮. 第一个按钮使用了一个 [SVG Icon](#/docs/ui/components/svg-icon), 并且是默认颜色. 第二个按钮展示如何改变 背景颜色. 最后一个按钮使用了一个 [Font Icon](#/docs/ui/components/font-icon)."},O=function(){return r["default"].createElement("div",null,r["default"].createElement(i["default"],{render:function(e){return"按钮 - "+e}}),r["default"].createElement(f["default"],{text:b["default"]}),r["default"].createElement(u["default"],{title:"简单使用",description:B.simple,code:m["default"]},r["default"].createElement(v["default"],null)),r["default"].createElement(u["default"],{title:"复杂使用",description:B.complex,code:P["default"]},r["default"].createElement(E["default"],null)),r["default"].createElement(u["default"],{title:"图标",description:B.icon,code:M["default"]},r["default"].createElement(R["default"],null)),r["default"].createElement(p["default"],{code:k["default"]}))};t["default"]=O},633:function(e,t){e.exports='import React from \'react\';\nimport Button from \'chanjet-ui/lib/Button\';\nimport ActionAndroid from \'chanjet-ui/lib/svg-icons/action/android\';\nimport FontIcon from \'chanjet-ui/lib/FontIcon\';\n\nconst styles = {\n    button           : {\n        margin: 12,\n    },\n    exampleImageInput: {\n        cursor  : \'pointer\',\n        position: \'absolute\',\n        top     : 0,\n        bottom  : 0,\n        right   : 0,\n        left    : 0,\n        width   : \'100%\',\n        opacity : 0,\n    },\n};\n\nconst ButtonExampleComplex = () => (\n    <div>\n        <Button\n            label="Choose an Image"\n            labelPosition="before"\n            style={styles.button}\n        >\n            <input type="file" style={styles.exampleImageInput}/>\n        </Button>\n        <Button\n            label="Label before"\n            labelPosition="before"\n            primary={true}\n            icon={<ActionAndroid />}\n            style={styles.button}\n        />\n        <Button\n            href="https://github.com/"\n            label="Github Link"\n            secondary={true}\n            style={styles.button}\n            icon={<FontIcon className="muidocs-icon-custom-github" />}\n        />\n    </div>\n);\n\nexport default ButtonExampleComplex;\n'},634:function(e,t){e.exports="import React from 'react';\nimport Button from 'chanjet-ui/lib/Button';\nimport {fullWhite} from 'chanjet-ui/lib/styles/colors';\nimport ActionAndroid from 'chanjet-ui/lib/svg-icons/action/android';\nimport FontIcon from 'chanjet-ui/lib/FontIcon';\n\nconst style = {\n    margin: 12,\n};\n\nconst ButtonExampleIcon = () => (\n    <div>\n        <Button\n            icon={<ActionAndroid />}\n            style={style}\n        />\n        <Button\n            backgroundColor=\"#a4c639\"\n            icon={<ActionAndroid color={fullWhite} />}\n            style={style}\n        />\n        <Button\n            href=\"https://github.com/\"\n            secondary={true}\n            icon={<FontIcon className=\"muidocs-icon-custom-github\" />}\n            style={style}\n        />\n    </div>\n);\n\nexport default ButtonExampleIcon;\n"},635:function(e,t){e.exports='import React from \'react\';\nimport Button from \'chanjet-ui/lib/Button\';\n\nconst style = {\n  margin: 12,\n};\n\nconst RaisedButtonExampleSimple = () => (\n  <div>\n    <Button label="Default" style={style} />\n    <Button label="Primary" primary={true} style={style} />\n    <Button label="Secondary" secondary={true} style={style} />\n    <Button label="Disabled" disabled={true} style={style} />\n  </div>\n);\n\nexport default RaisedButtonExampleSimple;\n'},636:function(e,t){e.exports="## 按钮\n\n### 示例\n"},670:function(e,t){e.exports="import React from 'react';\nimport transitions from '../styles/transitions';\nimport {fade} from '../utils/colorManipulator';\nimport {createChildFragment} from '../utils/childUtils';\nimport EnhancedButton from '../internal/EnhancedButton';\nimport Paper from '../Paper';\n\nfunction validateLabel(props, propName, componentName) {\n  if (!props.children && !props.label && !props.icon) {\n    return new Error(`Required prop label or children or icon was not specified in ${componentName}.`);\n  }\n}\n\nfunction getStyles(props, context, state) {\n  const {\n      baseTheme,\n      button,\n      raisedButton,\n  } = context.muiTheme;\n\n  const {\n      disabled,\n      disabledBackgroundColor,\n      disabledLabelColor,\n      fullWidth,\n      icon,\n      label,\n      labelPosition,\n      primary,\n      secondary,\n      style,\n  } = props;\n\n  const amount = (primary || secondary) ? 0.4 : 0.08;\n\n  let backgroundColor = raisedButton.color;\n  let labelColor = raisedButton.textColor;\n\n  if (disabled) {\n    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;\n    labelColor = disabledLabelColor || raisedButton.disabledTextColor;\n  } else if (primary) {\n    backgroundColor = raisedButton.primaryColor;\n    labelColor = raisedButton.primaryTextColor;\n  } else if (secondary) {\n    backgroundColor = raisedButton.secondaryColor;\n    labelColor = raisedButton.secondaryTextColor;\n  } else {\n    if (props.backgroundColor) {\n      backgroundColor = props.backgroundColor;\n    }\n    if (props.labelColor) {\n      labelColor = props.labelColor;\n    }\n  }\n\n  return {\n    root: {\n      display: 'inline-block',\n      minWidth: fullWidth ? '100%' : button.minWidth,\n      height: button.height,\n      transition: transitions.easeOut(),\n    },\n    container: {\n      position: 'relative',\n      height: '100%',\n      width: '100%',\n      padding: 0,\n      overflow: 'hidden',\n      borderRadius: 2,\n      transition: transitions.easeOut(),\n      backgroundColor: backgroundColor,\n      // That's the default value for a button but not a link\n      textAlign: 'center',\n    },\n    label: {\n      position: 'relative',\n      verticalAlign: 'middle',\n      opacity: 1,\n      fontSize: button.fontSize,\n      letterSpacing: 0,\n      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',\n      fontWeight: raisedButton.fontWeight,\n      margin: 0,\n      userSelect: 'none',\n      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,\n      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,\n      lineHeight: style && style.height || `${button.height}`,\n      color: labelColor,\n    },\n    icon: {\n      lineHeight: style && style.height || `${button.height}`,\n      verticalAlign: 'middle',\n      marginLeft: label && labelPosition !== 'before' ? 12 : 0,\n      marginRight: label && labelPosition === 'before' ? 12 : 0,\n    },\n    overlay: {\n      backgroundColor: state.hovered && !disabled && fade(labelColor, amount),\n      transition: transitions.easeOut(),\n      top: 0,\n    },\n    ripple: {\n      color: labelColor,\n      opacity: !(primary || secondary) ? 0.1 : 0.16,\n    },\n  };\n}\n\nclass RaisedButton extends React.Component {\n  static muiName = 'RaisedButton';\n\n  static propTypes = {\n    /**\n     * 重写背景颜色.\n     */\n    backgroundColor: React.PropTypes.string,\n\n    /**\n     * 包在button中的子组件。\n     * 如果定义了 label ， 按钮的文字显示label内容。\n     * 如果没有配置 label, 则需要传入子组件，并且会显示子组件内容。\n     */\n    children: React.PropTypes.node,\n\n    /**\n     * css class 名称.\n     */\n    className: React.PropTypes.string,\n\n    /**\n     * 设置 true 禁用按钮.\n     */\n    disabled: React.PropTypes.bool,\n\n    /**\n     * 重写禁用时按钮背景颜色.\n     */\n    disabledBackgroundColor: React.PropTypes.string,\n\n    /**\n     * 禁用时按钮文字颜色.\n     */\n    disabledLabelColor: React.PropTypes.string,\n\n    /**\n     * 如果是true按钮占据整个容器宽度\n     */\n    fullWidth: React.PropTypes.bool,\n\n    /**\n     * URL to link to when button clicked if `linkButton` is set to true.\n     */\n    href: React.PropTypes.string,\n\n    /**\n     * Use this property to display an icon.\n     */\n    icon: React.PropTypes.node,\n\n    /**\n     * The label for the button.\n     */\n    label: validateLabel,\n\n    /**\n     * The color of the label for the button.\n     */\n    labelColor: React.PropTypes.string,\n\n    /**\n     * Place label before or after the passed children.\n     */\n    labelPosition: React.PropTypes.oneOf([\n      'before',\n      'after',\n    ]),\n\n    /**\n     * Override the inline-styles of the button's label element.\n     */\n    labelStyle: React.PropTypes.object,\n\n    /**\n     * Enables use of `href` property to provide a URL to link to if set to true.\n     */\n    linkButton: React.PropTypes.bool,\n\n    /**\n     * Callback function for when the mouse is pressed down inside this element.\n     */\n    onMouseDown: React.PropTypes.func,\n\n    /**\n     * Callback function for when the mouse enters this element.\n     */\n    onMouseEnter: React.PropTypes.func,\n\n    /**\n     * Callback function for when the mouse leaves this element.\n     */\n    onMouseLeave: React.PropTypes.func,\n\n    /**\n     * Callback function for when the mouse is realeased\n     * above this element.\n     */\n    onMouseUp: React.PropTypes.func,\n\n    /**\n     * Callback function for when a touchTap event ends.\n     */\n    onTouchEnd: React.PropTypes.func,\n\n    /**\n     * Callback function for when a touchTap event starts.\n     */\n    onTouchStart: React.PropTypes.func,\n\n    /**\n     * If true, colors button according to\n     * primaryTextColor from the Theme.\n     */\n    primary: React.PropTypes.bool,\n\n    /**\n     * Override the inline style of ripple element.\n     */\n    rippleStyle: React.PropTypes.object,\n\n    /**\n     * If true, colors button according to secondaryTextColor from the theme.\n     * The primary prop has precendent if set to true.\n     */\n    secondary: React.PropTypes.bool,\n\n    /**\n     * Override the inline-styles of the root element.\n     */\n    style: React.PropTypes.object,\n  };\n\n  static defaultProps = {\n    disabled: false,\n    labelPosition: 'after',\n    fullWidth: false,\n    primary: false,\n    secondary: false,\n  };\n\n  static contextTypes = {\n    muiTheme: React.PropTypes.object.isRequired,\n  };\n\n  state = {\n    hovered: false,\n    touched: false,\n    initialZDepth: 0,\n    zDepth: 0,\n  };\n\n  componentWillMount() {\n    const zDepth = this.props.disabled ? 0 : 1;\n    this.setState({\n      zDepth: zDepth,\n      initialZDepth: zDepth,\n    });\n  }\n\n  componentWillReceiveProps(nextProps) {\n    const zDepth = nextProps.disabled ? 0 : 1;\n    this.setState({\n      zDepth: zDepth,\n      initialZDepth: zDepth,\n    });\n  }\n\n  handleMouseDown = (event) => {\n    //only listen to left clicks\n    if (event.button === 0) {\n      this.setState({zDepth: this.state.initialZDepth + 1});\n    }\n    if (this.props.onMouseDown) this.props.onMouseDown(event);\n  };\n\n  handleMouseUp = (event) => {\n    this.setState({zDepth: this.state.initialZDepth});\n    if (this.props.onMouseUp) this.props.onMouseUp(event);\n  };\n\n  handleMouseLeave = (event) => {\n    if (!this.refs.container.isKeyboardFocused()) this.setState({zDepth: this.state.initialZDepth, hovered: false});\n    if (this.props.onMouseLeave) this.props.onMouseLeave(event);\n  };\n\n  handleMouseEnter = (event) => {\n    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {\n      this.setState({hovered: true});\n    }\n    if (this.props.onMouseEnter) this.props.onMouseEnter(event);\n  };\n\n  handleTouchStart = (event) => {\n    this.setState({\n      touch: true,\n      zDepth: this.state.initialZDepth + 1,\n    });\n    if (this.props.onTouchStart) this.props.onTouchStart(event);\n  };\n\n  handleTouchEnd = (event) => {\n    this.setState({zDepth: this.state.initialZDepth});\n    if (this.props.onTouchEnd) this.props.onTouchEnd(event);\n  };\n\n  handleKeyboardFocus = (event, keyboardFocused) => {\n    const styles = getStyles(this.props, this.context);\n\n    if (keyboardFocused && !this.props.disabled) {\n      this.setState({\n        zDepth: this.state.initialZDepth + 1,\n      });\n      const amount = (this.props.primary || this.props.secondary) ? 0.4 : 0.08;\n      this.refs.overlay.style.backgroundColor =\n          fade(Object.assign({}, styles.label, this.props.labelStyle).color, amount);\n    } else if (!this.state.hovered) {\n      this.setState({\n        zDepth: this.state.initialZDepth,\n      });\n      this.refs.overlay.style.backgroundColor = 'transparent';\n    }\n  };\n\n  render() {\n    const {\n        children,\n        className,\n        disabled,\n        icon,\n        label,\n        labelPosition,\n        labelStyle,\n        primary, // eslint-disable-line no-unused-vars\n        rippleStyle,\n        secondary, // eslint-disable-line no-unused-vars\n        ...other,\n    } = this.props;\n\n    const {prepareStyles} = this.context.muiTheme;\n    const styles = getStyles(this.props, this.context, this.state);\n    const mergedRippleStyles = Object.assign({}, styles.ripple, rippleStyle);\n\n    const buttonEventHandlers = disabled ? {} : {\n      onMouseDown: this.handleMouseDown,\n      onMouseUp: this.handleMouseUp,\n      onMouseLeave: this.handleMouseLeave,\n      onMouseEnter: this.handleMouseEnter,\n      onTouchStart: this.handleTouchStart,\n      onTouchEnd: this.handleTouchEnd,\n      onKeyboardFocus: this.handleKeyboardFocus,\n    };\n\n    const labelElement = label && (\n            <span style={prepareStyles(Object.assign(styles.label, labelStyle))}>\n        {label}\n      </span>\n        );\n\n    const iconCloned = icon && React.cloneElement(icon, {\n          color: styles.label.color,\n          style: styles.icon,\n        });\n\n    // Place label before or after children.\n    const childrenFragment = labelPosition === 'before' ?\n    {\n      labelElement,\n      iconCloned,\n      children,\n    } : {\n      children,\n      iconCloned,\n      labelElement,\n    };\n\n    const enhancedButtonChildren = createChildFragment(childrenFragment);\n\n    return (\n        <Paper\n            className={className}\n            style={Object.assign(styles.root, this.props.style)}\n            zDepth={this.state.zDepth}\n        >\n          <EnhancedButton\n              {...other}\n              {...buttonEventHandlers}\n              ref=\"container\"\n              disabled={disabled}\n              style={styles.container}\n              focusRippleColor={mergedRippleStyles.color}\n              touchRippleColor={mergedRippleStyles.color}\n              focusRippleOpacity={mergedRippleStyles.opacity}\n              touchRippleOpacity={mergedRippleStyles.opacity}\n          >\n            <div\n                ref=\"overlay\"\n                style={prepareStyles(styles.overlay)}\n            >\n              {enhancedButtonChildren}\n            </div>\n          </EnhancedButton>\n        </Paper>\n    );\n  }\n}\n\nexport default RaisedButton;\n"}});