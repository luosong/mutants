webpackJsonp([16],{3:function(e,t,n){e.exports=n(2)(155)},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=o(r);t["default"]=a["default"]},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),p=n(6),c=n(7),d=o(c),h=n(13),m=o(h),f=n(4),y=o(f),v=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.code,o=e.component,r=e.layoutSideBySide,a=this.context.muiTheme.rawTheme.palette,l=a.canvasColor,i={root:{backgroundColor:l,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:r?"45%":null,"float":r?"right":null}},u=o?(0,p.parse)(n):{};return s["default"].createElement(y["default"],{style:i.root},s["default"].createElement(d["default"],{title:this.props.title,description:this.props.description||u.description},n),s["default"].createElement(m["default"],{style:i.exampleBlock},t))}}]),t}(u.Component);v.propTypes={children:u.PropTypes.node,code:u.PropTypes.string.isRequired,component:u.PropTypes.bool,description:u.PropTypes.string,layoutSideBySide:u.PropTypes.bool,title:u.PropTypes.string},v.defaultProps={component:!0},v.contextTypes={muiTheme:u.PropTypes.object},t["default"]=v},6:function(e,t,n){e.exports=n(2)(183)},7:function(e,t,n){e.exports=n(2)(243)},14:function(e,t,n){e.exports=n(2)(245)},409:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),p=n(77),c=o(p),d=n(23),h=o(d),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e,t,o){return n.setState({value:o})},n.state={value:2},n}return l(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement(c["default"],{value:this.state.value,onChange:this.handleChange},s["default"].createElement(h["default"],{value:1,label:"5 am - 12 pm",primaryText:"Morning"}),s["default"].createElement(h["default"],{value:2,label:"12 pm - 5 pm",primaryText:"Afternoon"}),s["default"].createElement(h["default"],{value:3,label:"5 pm - 9 pm",primaryText:"Evening"}),s["default"].createElement(h["default"],{value:4,label:"9 pm - 5 am",primaryText:"Night"}))}}]),t}(s["default"].Component);t["default"]=m},410:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});for(var i=(function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),u=n(1),s=o(u),p=n(77),c=o(p),d=n(23),h=o(d),m=[],f=0;f<100;f++)m.push(s["default"].createElement(h["default"],{value:f,key:f,primaryText:"Item "+f}));var y=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e,t,o){return n.setState({value:o})},n.state={value:10},n}return l(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement(c["default"],{maxHeight:300,value:this.state.value,onChange:this.handleChange},m)}}]),t}(s["default"].Component);t["default"]=y},411:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),p=n(77),c=o(p),d=n(23),h=o(d),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e,t,o){return n.setState({value:o})},n.state={value:2},n}return l(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement(c["default"],{value:this.state.value,onChange:this.handleChange,openImmediately:!0},s["default"].createElement(h["default"],{value:1,primaryText:"Never"}),s["default"].createElement(h["default"],{value:2,primaryText:"Every Night"}),s["default"].createElement(h["default"],{value:3,primaryText:"Weeknights"}),s["default"].createElement(h["default"],{value:4,primaryText:"Weekends"}),s["default"].createElement(h["default"],{value:5,primaryText:"Weekly"}))}}]),t}(s["default"].Component);t["default"]=m},412:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),p=n(77),c=o(p),d=n(23),h=o(d),m={customWidth:{width:200}},f=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e,t,o){return n.setState({value:o})},n.state={value:1},n}return l(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement(c["default"],{value:this.state.value,onChange:this.handleChange},s["default"].createElement(h["default"],{value:1,primaryText:"Never"}),s["default"].createElement(h["default"],{value:2,primaryText:"Every Night"}),s["default"].createElement(h["default"],{value:3,primaryText:"Weeknights"}),s["default"].createElement(h["default"],{value:4,primaryText:"Weekends"}),s["default"].createElement(h["default"],{value:5,primaryText:"Weekly"})),s["default"].createElement("br",null),s["default"].createElement(c["default"],{value:this.state.value,onChange:this.handleChange,style:m.customWidth,autoWidth:!1},s["default"].createElement(h["default"],{value:1,primaryText:"Custom width"}),s["default"].createElement(h["default"],{value:2,primaryText:"Every Night"}),s["default"].createElement(h["default"],{value:3,primaryText:"Weeknights"}),s["default"].createElement(h["default"],{value:4,primaryText:"Weekends"}),s["default"].createElement(h["default"],{value:5,primaryText:"Weekly"})))}}]),t}(s["default"].Component);t["default"]=f},413:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r),l=n(15),i=o(l),u=n(5),s=o(u),p=n(14),c=o(p),d=n(3),h=o(d),m=n(591),f=o(m),y=n(412),v=o(y),b=n(590),g=o(b),T=n(411),x=o(T),w=n(589),M=o(w),E=n(410),D=o(E),O=n(588),_=o(O),C=n(409),P=o(C),j=n(587),S=o(j),k=n(658),I=o(k),W={simple:"`DropDownMenu` is implemented as a controlled component, with the current selection set through the `value` property.",openImmediate:"With `openImmediately` property set, the menu will open on mount.","long":"With the `maxHeight` property set, the menu will be scrollable if the number of items causes the height to exceed this limit.",label:"With a `label` applied to each `MenuItem`, `DropDownMenu` displays a complementary description of the selected item."},R=function(){return a["default"].createElement("div",null,a["default"].createElement(i["default"],{render:function(e){return"Drop Down Menu - "+e}}),a["default"].createElement(h["default"],{text:f["default"]}),a["default"].createElement(s["default"],{title:"Simple example",description:W.simple,code:g["default"]},a["default"].createElement(v["default"],null)),a["default"].createElement(s["default"],{title:"Open Immediate example",description:W.openImmediate,code:M["default"]},a["default"].createElement(x["default"],null)),a["default"].createElement(s["default"],{title:"Long example",description:W["long"],code:_["default"]},a["default"].createElement(D["default"],null)),a["default"].createElement(s["default"],{title:"Label example",description:W.label,code:S["default"]},a["default"].createElement(P["default"],null)),a["default"].createElement(c["default"],{code:I["default"]}))};t["default"]=R},587:function(e,t){e.exports='import React from \'react\';\nimport DropDownMenu from \'chanjet-ui/lib/DropDownMenu\';\nimport MenuItem from \'chanjet-ui/lib/MenuItem\';\n\nexport default class DropDownMenuLabeledExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {value: 2};\n  }\n\n  handleChange = (event, index, value) => this.setState({value});\n\n  render() {\n    return (\n      <DropDownMenu value={this.state.value} onChange={this.handleChange}>\n        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />\n        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />\n        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />\n        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />\n      </DropDownMenu>\n    );\n  }\n}\n'},588:function(e,t){e.exports="import React from 'react';\nimport DropDownMenu from 'chanjet-ui/lib/DropDownMenu';\nimport MenuItem from 'chanjet-ui/lib/MenuItem';\n\nconst items = [];\nfor (let i = 0; i < 100; i++ ) {\n  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);\n}\n\nexport default class DropDownMenuLongMenuExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {value: 10};\n  }\n\n  handleChange = (event, index, value) => this.setState({value});\n\n  render() {\n    return (\n      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>\n        {items}\n      </DropDownMenu>\n    );\n  }\n}\n"},589:function(e,t){e.exports='import React from \'react\';\nimport DropDownMenu from \'chanjet-ui/lib/DropDownMenu\';\nimport MenuItem from \'chanjet-ui/lib/MenuItem\';\n\nexport default class DropDownMenuOpenImmediateExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {value: 2};\n  }\n\n  handleChange = (event, index, value) => this.setState({value});\n\n  render() {\n    return (\n      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>\n        <MenuItem value={1} primaryText="Never" />\n        <MenuItem value={2} primaryText="Every Night" />\n        <MenuItem value={3} primaryText="Weeknights" />\n        <MenuItem value={4} primaryText="Weekends" />\n        <MenuItem value={5} primaryText="Weekly" />\n      </DropDownMenu>\n    );\n  }\n}\n'},590:function(e,t){e.exports='import React from \'react\';\nimport DropDownMenu from \'chanjet-ui/lib/DropDownMenu\';\nimport MenuItem from \'chanjet-ui/lib/MenuItem\';\n\nconst styles = {\n  customWidth: {\n    width: 200,\n  },\n};\n\nexport default class DropDownMenuSimpleExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {value: 1};\n  }\n\n  handleChange = (event, index, value) => this.setState({value});\n\n  render() {\n    return (\n      <div>\n        <DropDownMenu value={this.state.value} onChange={this.handleChange}>\n          <MenuItem value={1} primaryText="Never" />\n          <MenuItem value={2} primaryText="Every Night" />\n          <MenuItem value={3} primaryText="Weeknights" />\n          <MenuItem value={4} primaryText="Weekends" />\n          <MenuItem value={5} primaryText="Weekly" />\n        </DropDownMenu>\n        <br />\n        <DropDownMenu\n          value={this.state.value}\n          onChange={this.handleChange}\n          style={styles.customWidth}\n          autoWidth={false}\n        >\n          <MenuItem value={1} primaryText="Custom width" />\n          <MenuItem value={2} primaryText="Every Night" />\n          <MenuItem value={3} primaryText="Weeknights" />\n          <MenuItem value={4} primaryText="Weekends" />\n          <MenuItem value={5} primaryText="Weekly" />\n        </DropDownMenu>\n      </div>\n    );\n  }\n}\n'},591:function(e,t){e.exports="## Drop Down Menu\n\nThe `DropDownMenu` component is Material-UI's implementation of the \n[Textfield dropdown](https://www.google.com/design/spec/components/menus.html#menus-usage).\n\n### Examples\n"},658:function(e,t){e.exports="import React from 'react';\nimport transitions from '../styles/transitions';\nimport DropDownArrow from '../svg-icons/navigation/arrow-drop-down';\nimport Menu from '../Menu/Menu';\nimport ClearFix from '../internal/ClearFix';\nimport Popover from '../Popover/Popover';\nimport PopoverAnimationFromTop from '../Popover/PopoverAnimationVertical';\nimport {px2rem} from '../utils/pixel'\n\nconst anchorOrigin = {\n  vertical: 'top',\n  horizontal: 'left',\n};\n\nfunction getStyles(props, context) {\n  const {disabled} = props;\n  const spacing = context.muiTheme.baseTheme.spacing;\n  const palette = context.muiTheme.baseTheme.palette;\n  const accentColor = context.muiTheme.dropDownMenu.accentColor;\n  return {\n    control: {\n      cursor: disabled ? 'not-allowed' : 'pointer',\n      height: '100%',\n      position: 'relative',\n      width: '100%',\n    },\n    icon: {\n      fill: accentColor,\n      position: 'absolute',\n      right: spacing.desktopGutterLess,\n      top: ((spacing.desktopToolbarHeight - 24) / 2),\n    },\n    label: {\n      color: disabled ? palette.disabledColor : palette.textColor,\n      lineHeight: `${px2rem(spacing.desktopToolbarHeight)}`,\n      opacity: 1,\n      position: 'relative',\n      paddingLeft: px2rem(spacing.desktopGutter),\n      paddingRight: px2rem(spacing.iconSize + spacing.desktopGutterLess + spacing.desktopGutterMini),\n      top: 0,\n    },\n    labelWhenOpen: {\n      opacity: 0,\n      top: px2rem(spacing.desktopToolbarHeight / 8),\n    },\n    root: {\n      display: 'inline-block',\n      fontSize: px2rem(spacing.desktopDropDownMenuFontSize),\n      height: px2rem(spacing.desktopSubheaderHeight),\n      fontFamily: context.muiTheme.baseTheme.fontFamily,\n      outline: 'none',\n      position: 'relative',\n      transition: transitions.easeOut(),\n    },\n    rootWhenOpen: {\n      opacity: 1,\n    },\n    underline: {\n      borderTop: `solid 0.03rem ${accentColor}`,\n      bottom: 1,\n      left: 0,\n      margin: `-0.03rem ${px2rem(spacing.desktopGutter)}`,\n      right: 0,\n      position: 'absolute',\n    },\n  };\n}\n\nclass DropDownMenu extends React.Component {\n  static muiName = 'DropDownMenu';\n\n  // The nested styles for drop-down-menu are modified by toolbar and possibly\n  // other user components, so it will give full access to its js styles rather\n  // than just the parent.\n  static propTypes = {\n    /**\n     * The width will automatically be set according to the items inside the menu.\n     * To control this width in css instead, set this prop to `false`.\n     */\n    autoWidth: React.PropTypes.bool,\n\n    /**\n     * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the\n     * prop `label` that value will be used to render the representation of that\n     * item within the field.\n     */\n    children: React.PropTypes.node,\n\n    /**\n     * The css class name of the root element.\n     */\n    className: React.PropTypes.string,\n\n    /**\n     * Disables the menu.\n     */\n    disabled: React.PropTypes.bool,\n\n    /**\n     * Overrides the styles of icon element.\n     */\n    iconStyle: React.PropTypes.object,\n\n    /**\n     * Overrides the styles of label when the `DropDownMenu` is inactive.\n     */\n    labelStyle: React.PropTypes.object,\n\n    /**\n     * The style object to use to override underlying list style.\n     */\n    listStyle: React.PropTypes.object,\n\n    /**\n     * The maximum height of the `Menu` when it is displayed.\n     */\n    maxHeight: React.PropTypes.number,\n\n    /**\n     * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.\n     */\n    menuStyle: React.PropTypes.object,\n\n    /**\n     * Callback function fired when a menu item is clicked, other than the one currently selected.\n     *\n     * @param {object} event TouchTap event targeting the menu item that was clicked.\n     * @param {number} key The index of the clicked menu item in the `children` collection.\n     * @param {any} payload The `value` prop of the clicked menu item.\n     */\n    onChange: React.PropTypes.func,\n\n    /**\n     * Set to true to have the `DropDownMenu` automatically open on mount.\n     */\n    openImmediately: React.PropTypes.bool,\n\n    /**\n     * Override the inline-styles of the root element.\n     */\n    style: React.PropTypes.object,\n\n    /**\n     * Overrides the inline-styles of the underline.\n     */\n    underlineStyle: React.PropTypes.object,\n\n    /**\n     * The value that is currently selected.\n     */\n    value: React.PropTypes.any,\n  };\n\n  static defaultProps = {\n    autoWidth: true,\n    disabled: false,\n    openImmediately: false,\n    maxHeight: 500,\n    onChange:function(){}\n  };\n\n  static contextTypes = {\n    muiTheme: React.PropTypes.object.isRequired,\n  };\n\n  state = {\n    open: false,\n  };\n\n  componentDidMount() {\n    if (this.props.autoWidth) {\n      this.setWidth();\n    }\n    if (this.props.openImmediately) {\n      // TODO: Temporary fix to make openImmediately work with popover.\n      /*eslint-disable react/no-did-mount-set-state */\n      setTimeout(() => this.setState({open: true, anchorEl: this.refs.root}));\n      setTimeout(() => this.setState({\n        open: true,\n        anchorEl: this.refs.root,\n      }), 0);\n      /*eslint-enable react/no-did-mount-set-state */\n    }\n  }\n\n  componentWillReceiveProps() {\n    if (this.props.autoWidth) {\n      this.setWidth();\n    }\n  }\n\n  /**\n   * This method is deprecated but still here because the TextField\n   * need it in order to work. TODO: That will be addressed later.\n   */\n  getInputNode() {\n    const root = this.refs.root;\n\n    root.focus = () => {\n      if (!this.props.disabled) {\n        this.setState({\n          open: !this.state.open,\n          anchorEl: this.refs.root,\n        });\n      }\n    };\n\n    return root;\n  }\n\n  setWidth() {\n    const el = this.refs.root;\n    if (!this.props.style || !this.props.style.hasOwnProperty('width')) {\n      el.style.width = 'auto';\n    }\n  }\n\n  handleTouchTapControl = (event) => {\n    event.preventDefault();\n    if (!this.props.disabled) {\n      this.setState({\n        open: !this.state.open,\n        anchorEl: this.refs.root,\n      });\n    }\n  };\n\n  handleRequestCloseMenu = () => {\n    this.setState({\n      open: false,\n      anchorEl: null,\n    });\n  };\n\n  handleItemTouchTap = (event, child, index) => {\n    this.props.onChange(event, index, child.props.value);\n\n    this.setState({\n      open: false,\n    });\n  };\n\n  render() {\n    const {\n      autoWidth,\n      children,\n      className,\n      iconStyle,\n      labelStyle,\n      listStyle,\n      maxHeight,\n      menuStyle: menuStyleProps,\n      style,\n      underlineStyle,\n      value,\n      ...other,\n    } = this.props;\n\n    const {\n      anchorEl,\n      open,\n    } = this.state;\n\n    const {prepareStyles} = this.context.muiTheme;\n    const styles = getStyles(this.props, this.context);\n\n    let displayValue = '';\n    React.Children.forEach(children, (child) => {\n      if (value === child.props.value) {\n        // This will need to be improved (in case primaryText is a node)\n        displayValue = child.props.label || child.props.primaryText;\n      }\n    });\n\n    let menuStyle;\n    if (anchorEl && !autoWidth) {\n      menuStyle = Object.assign({\n        width: anchorEl.clientWidth,\n      }, menuStyleProps);\n    } else {\n      menuStyle = menuStyleProps;\n    }\n\n    return (\n      <div\n        {...other}\n        ref=\"root\"\n        className={className}\n        style={prepareStyles(Object.assign({}, styles.root, open && styles.rootWhenOpen, style))}\n      >\n        <ClearFix style={styles.control} onTouchTap={this.handleTouchTapControl}>\n          <div\n            style={prepareStyles(Object.assign({}, styles.label, open && styles.labelWhenOpen, labelStyle))}\n          >\n            {displayValue}\n          </div>\n          <DropDownArrow style={Object.assign({}, styles.icon, iconStyle)} />\n          <div style={prepareStyles(Object.assign({}, styles.underline, underlineStyle))} />\n        </ClearFix>\n        <Popover\n          anchorOrigin={anchorOrigin}\n          anchorEl={anchorEl}\n          animation={PopoverAnimationFromTop}\n          open={open}\n          onRequestClose={this.handleRequestCloseMenu}\n        >\n          <Menu\n            maxHeight={maxHeight}\n            desktop={true}\n            value={value}\n            style={menuStyle}\n            listStyle={listStyle}\n            onItemTouchTap={this.handleItemTouchTap}\n          >\n            {children}\n          </Menu>\n        </Popover>\n      </div>\n    );\n  }\n}\n\nexport default DropDownMenu;\n"}});