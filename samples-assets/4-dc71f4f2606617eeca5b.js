webpackJsonp([4],{

/***/ 450:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created By WanXing 16/9/14 上午11:23
	 * Summary:
	 */

	var demoStyle = {
	    page: {
	        fontSize: '0.48rem',
	        fontFamily: 'Microsoft YaHei,"微软雅黑",sans-serif'
	    },
	    title: {
	        height: '1.8666666666666667rem',
	        lineHeight: '1.8666666666666667rem',
	        padding: '0 0.4266666666666667rem',
	        fontSize: '0.8rem',
	        borderBottom: '0.02666666666666667rem solid #efefef'
	    },
	    summary: {
	        fontSize: '0.37333333333333335rem',
	        padding: '0.4266666666666667rem'
	    },
	    summaryLabel: {
	        color: '#0091EA'
	    },
	    summaryTip: {
	        marginTop: '0.26666666666666666rem',
	        color: '#FF8A65',
	        display: 'block'
	    },
	    content: {
	        padding: '0.21333333333333335rem 0.4266666666666667rem',
	        color: '#888'
	    },
	    link: {
	        padding: '0.26666666666666666rem 0',
	        cursor: 'pointer'
	    },
	    tip: {
	        color: '#FF8A65',
	        display: 'block',
	        marginTop: '0.26666666666666666rem',
	        fontSize: '0.37333333333333335rem'
	    },
	    result: {
	        color: '#FF8A65'
	    },
	    image: {
	        height: 120,
	        margin: 10,
	        border: '0.02666666666666667rem solid #ccc'
	    }

	};

	exports.default = demoStyle;

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _RaisedButton = __webpack_require__(453);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RaisedButton2.default;

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(312);

	var _childUtils = __webpack_require__(400);

	var _EnhancedButton = __webpack_require__(399);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _Paper = __webpack_require__(442);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label && !props.icon) {
	    return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	  }
	}

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var button = _context$muiTheme.button;
	  var raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled;
	  var disabledBackgroundColor = props.disabledBackgroundColor;
	  var disabledLabelColor = props.disabledLabelColor;
	  var fullWidth = props.fullWidth;
	  var icon = props.icon;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var style = props.style;


	  var amount = primary || secondary ? 0.4 : 0.08;

	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;

	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;
	  return {
	    root: {
	      display: 'inline-block',
	      minWidth: fullWidth ? '100%' : button.minWidth,
	      transition: _transitions2.default.easeOut()
	    },
	    container: {
	      position: 'relative',
	      height: buttonHeight,
	      lineHeight: buttonHeight,
	      width: '100%',
	      padding: 0,
	      overflow: 'hidden',
	      borderRadius: 2,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      verticalAlign: 'middle',
	      opacity: 1,
	      fontSize: button.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      lineHeight: style && style.height || '' + button.height,
	      color: labelColor
	    },
	    icon: {
	      lineHeight: style && style.height || '' + button.height,
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}

	var RaisedButton = function (_React$Component) {
	  _inherits(RaisedButton, _React$Component);

	  function RaisedButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RaisedButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      //only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({ zDepth: _this.state.initialZDepth + 1 });
	      }
	      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({ zDepth: _this.state.initialZDepth });
	      if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.container.isKeyboardFocused()) _this.setState({ zDepth: _this.state.initialZDepth, hovered: false });
	      if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touch: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	      if (_this.props.onTouchStart) _this.props.onTouchStart(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ zDepth: _this.state.initialZDepth });
	      if (_this.props.onTouchEnd) _this.props.onTouchEnd(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var styles = getStyles(_this.props, _this.context);

	      if (keyboardFocused && !_this.props.disabled) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	        var amount = _this.props.primary || _this.props.secondary ? 0.4 : 0.08;
	        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(Object.assign({}, styles.label, _this.props.labelStyle).color, amount);
	      } else if (!_this.state.hovered) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth
	        });
	        _this.refs.overlay.style.backgroundColor = 'transparent';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelPosition = _props.labelPosition;
	      var labelStyle = _props.labelStyle;
	      var primary = _props.primary;
	      var rippleStyle = _props.rippleStyle;
	      var secondary = _props.secondary;

	      var other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'icon', 'label', 'labelPosition', 'labelStyle', 'primary', 'rippleStyle', 'secondary']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = Object.assign({}, styles.ripple, rippleStyle);

	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };

	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles(Object.assign(styles.label, labelStyle)) },
	        label
	      );

	      var iconCloned = icon && _react2.default.cloneElement(icon, {
	        color: styles.label.color,
	        style: styles.icon
	      });

	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };

	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: Object.assign(styles.root, this.props.style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          _extends({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: styles.container,
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles(styles.overlay)
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);

	  return RaisedButton;
	}(_react2.default.Component);

	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.propTypes = {
	  /**
	   * 重写背景颜色.
	   */
	  backgroundColor: _react2.default.PropTypes.string,

	  /**
	   * 包在button中的子组件。
	   * 如果定义了 label ， 按钮的文字显示label内容。
	   * 如果没有配置 label, 则需要传入子组件，并且会显示子组件内容。
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * css class 名称.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * 设置 true 禁用按钮.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * 重写禁用时按钮背景颜色.
	   */
	  disabledBackgroundColor: _react2.default.PropTypes.string,

	  /**
	   * 禁用时按钮文字颜色.
	   */
	  disabledLabelColor: _react2.default.PropTypes.string,

	  /**
	   * 如果是true按钮占据整个容器宽度
	   */
	  fullWidth: _react2.default.PropTypes.bool,

	  /**
	   * URL to link to when button clicked if `linkButton` is set to true.
	   */
	  href: _react2.default.PropTypes.string,

	  /**
	   * Use this property to display an icon.
	   */
	  icon: _react2.default.PropTypes.node,

	  /**
	   * The label for the button.
	   */
	  label: validateLabel,

	  /**
	   * The color of the label for the button.
	   */
	  labelColor: _react2.default.PropTypes.string,

	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),

	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react2.default.PropTypes.object,

	  /**
	   * Enables use of `href` property to provide a URL to link to if set to true.
	   */
	  linkButton: _react2.default.PropTypes.bool,

	  /**
	   * Callback function for when the mouse is pressed down inside this element.
	   */
	  onMouseDown: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when the mouse enters this element.
	   */
	  onMouseEnter: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when the mouse leaves this element.
	   */
	  onMouseLeave: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when the mouse is realeased
	   * above this element.
	   */
	  onMouseUp: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when a touchTap event ends.
	   */
	  onTouchEnd: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when a touchTap event starts.
	   */
	  onTouchStart: _react2.default.PropTypes.func,

	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline style of ripple element.
	   */
	  rippleStyle: _react2.default.PropTypes.object,

	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = RaisedButton;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Snackbar = __webpack_require__(455);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Snackbar2.default; /**
	                                       * Created by guopeng on 16/4/6.
	                                       */

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _ClickAwayListener = __webpack_require__(456);

	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

	var _FlatButton = __webpack_require__(457);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _styleResizable = __webpack_require__(458);

	var _styleResizable2 = _interopRequireDefault(_styleResizable);

	var _pixel = __webpack_require__(420);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var snackbar = _context$muiTheme.snackbar;
	  var zIndex = _context$muiTheme.zIndex;
	  var open = state.open;
	  var _baseTheme$spacing = baseTheme.spacing;
	  var desktopGutter = _baseTheme$spacing.desktopGutter;
	  var desktopSubheaderHeight = _baseTheme$spacing.desktopSubheaderHeight;


	  var isSmall = state.deviceSize === _styleResizable2.default.statics.Sizes.SMALL;

	  var styles = {
	    root: {
	      position: 'fixed',
	      left: 0,
	      display: 'flex',
	      right: 0,
	      bottom: 0,
	      zIndex: zIndex.snackbar,
	      visibility: open ? 'visible' : 'hidden',
	      transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(0, ' + (0, _pixel.px2px)(desktopSubheaderHeight) + ', 0)',
	      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
	    },
	    body: {
	      backgroundColor: snackbar.backgroundColor,
	      padding: '0 ' + (0, _pixel.px2px)(desktopGutter),
	      height: (0, _pixel.px2px)(desktopSubheaderHeight),
	      lineHeight: '' + (0, _pixel.px2px)(desktopSubheaderHeight),
	      borderRadius: isSmall ? 0 : 2,
	      maxWidth: isSmall ? 'inherit' : '9rem',
	      minWidth: isSmall ? 'inherit' : '8rem',
	      flexGrow: isSmall ? 1 : 0,
	      margin: 'auto'
	    },
	    content: {
	      fontSize: '0.373rem', //14,
	      color: snackbar.textColor,
	      opacity: open ? 1 : 0,
	      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
	    },
	    action: {
	      color: snackbar.actionColor,
	      float: 'right',
	      marginTop: '0.16rem', //6,
	      marginRight: '-0.427rem', //-16,
	      marginLeft: (0, _pixel.px2px)(desktopGutter),
	      backgroundColor: 'transparent'
	    }
	  };

	  return styles;
	}

	var Snackbar = _react2.default.createClass({
	  displayName: 'Snackbar',


	  propTypes: {
	    /**
	     * The label for the action on the snackbar.
	     */
	    action: _react2.default.PropTypes.string,

	    /**
	     * The number of milliseconds to wait before automatically dismissing.
	     * If no value is specified the snackbar will dismiss normally.
	     * If a value is provided the snackbar can still be dismissed normally.
	     * If a snackbar is dismissed before the timer expires, the timer will be cleared.
	     */
	    autoHideDuration: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the body element.
	     */
	    bodyStyle: _react2.default.PropTypes.object,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The message to be displayed.
	     *
	     * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	     * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	     * showing again)
	     */
	    message: _react2.default.PropTypes.node.isRequired,

	    /**
	     * Fired when the action button is touchtapped.
	     *
	     * @param {object} event Action button event.
	     */
	    onActionTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
	     * `autoHideDuration` timer expires.
	     *
	     * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
	     * `open` prop.
	     *
	     * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
	     * for example ignoring `clickaway`.
	     *
	     * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
	     */
	    onRequestClose: _react2.default.PropTypes.func,

	    /**
	     * Controls whether the `Snackbar` is opened or not.
	     */
	    open: _react2.default.PropTypes.bool.isRequired,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object.isRequired
	  },

	  mixins: [_styleResizable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open,
	      message: this.props.message,
	      action: this.props.action
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.state.open) {
	      this.setAutoHideTimer();
	      this.setTransitionTimer();
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;

	    if (this.state.open && nextProps.open === this.props.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
	      this.setState({
	        open: false
	      });

	      clearTimeout(this.timerOneAtTheTimeId);
	      this.timerOneAtTheTimeId = setTimeout(function () {
	        _this.setState({
	          message: nextProps.message,
	          action: nextProps.action,
	          open: true
	        });
	      }, 400);
	    } else {
	      var open = nextProps.open;

	      this.setState({
	        open: open !== null ? open : this.state.open,
	        message: nextProps.message,
	        action: nextProps.action
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (prevState.open !== this.state.open) {
	      if (this.state.open) {
	        this.setAutoHideTimer();
	        this.setTransitionTimer();
	      } else {
	        clearTimeout(this.timerAutoHideId);
	      }
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timerAutoHideId);
	    clearTimeout(this.timerTransitionId);
	    clearTimeout(this.timerOneAtTheTimeId);
	  },
	  componentClickAway: function componentClickAway() {
	    if (this.timerTransitionId) return; // If transitioning, don't close snackbar

	    if (this.props.open !== null && this.props.onRequestClose) {
	      this.props.onRequestClose('clickaway');
	    } else {
	      this.setState({ open: false });
	    }
	  },


	  // Timer that controls delay before snackbar auto hides
	  setAutoHideTimer: function setAutoHideTimer() {
	    var _this2 = this;

	    var autoHideDuration = this.props.autoHideDuration;

	    if (autoHideDuration > 0) {
	      clearTimeout(this.timerAutoHideId);
	      this.timerAutoHideId = setTimeout(function () {
	        if (_this2.props.open !== null && _this2.props.onRequestClose) {
	          _this2.props.onRequestClose('timeout');
	        } else {
	          _this2.setState({ open: false });
	        }
	      }, autoHideDuration);
	    }
	  },


	  // Timer that controls delay before click-away events are captured (based on when animation completes)
	  setTransitionTimer: function setTransitionTimer() {
	    var _this3 = this;

	    this.timerTransitionId = setTimeout(function () {
	      _this3.timerTransitionId = undefined;
	    }, 400);
	  },
	  render: function render() {
	    var _props = this.props;
	    var onActionTouchTap = _props.onActionTouchTap;
	    var style = _props.style;
	    var bodyStyle = _props.bodyStyle;

	    var others = _objectWithoutProperties(_props, ['onActionTouchTap', 'style', 'bodyStyle']);

	    var _state = this.state;
	    var action = _state.action;
	    var message = _state.message;
	    var open = _state.open;
	    var prepareStyles = this.context.muiTheme.prepareStyles;

	    var styles = getStyles(this.props, this.context, this.state);

	    var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
	      style: styles.action,
	      label: action,
	      onTouchTap: onActionTouchTap
	    });

	    return _react2.default.createElement(
	      _ClickAwayListener2.default,
	      { onClickAway: open && this.componentClickAway },
	      _react2.default.createElement(
	        'div',
	        _extends({}, others, { style: prepareStyles(Object.assign(styles.root, style)) }),
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(Object.assign(styles.body, bodyStyle)) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.content) },
	            _react2.default.createElement(
	              'span',
	              null,
	              message
	            ),
	            actionButton
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = Snackbar;

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _events = __webpack_require__(403);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};

	var clickAwayEvents = ['mousedown', 'touchstart'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};

	var ClickAwayListener = function (_React$Component) {
	  _inherits(ClickAwayListener, _React$Component);

	  function ClickAwayListener() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ClickAwayListener);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClickAwayListener.__proto__ || Object.getPrototypeOf(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      var el = _reactDom2.default.findDOMNode(_this);

	      if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	        _this.props.onClickAway(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return ClickAwayListener;
	}(_react2.default.Component);

	ClickAwayListener.propTypes = {
	  children: _react2.default.PropTypes.node,
	  onClickAway: _react2.default.PropTypes.any
	};
	exports.default = ClickAwayListener;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _FlatButton = __webpack_require__(445);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FlatButton2.default;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(403);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sizes = {
	  SMALL: 1,
	  MEDIUM: 2,
	  LARGE: 3
	};

	exports.default = {

	  statics: {
	    Sizes: Sizes
	  },

	  getInitialState: function getInitialState() {
	    return {
	      deviceSize: Sizes.SMALL
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._updateDeviceSize();
	    if (!this.manuallyBindResize) this._bindResize();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unbindResize();
	  },
	  isDeviceSize: function isDeviceSize(desiredSize) {
	    return this.state.deviceSize >= desiredSize;
	  },
	  _updateDeviceSize: function _updateDeviceSize() {
	    var width = window.innerWidth;

	    if (width >= 992) {
	      this.setState({ deviceSize: Sizes.LARGE });
	    } else if (width >= 768) {
	      this.setState({ deviceSize: Sizes.MEDIUM });
	    } else {
	      // width < 768
	      this.setState({ deviceSize: Sizes.SMALL });
	    }
	  },
	  _bindResize: function _bindResize() {
	    _events2.default.on(window, 'resize', this._updateDeviceSize);
	  },
	  _unbindResize: function _unbindResize() {
	    _events2.default.off(window, 'resize', this._updateDeviceSize);
	  }
	};

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _BasePage2 = __webpack_require__(387);

	var _BasePage3 = _interopRequireDefault(_BasePage2);

	var _Button = __webpack_require__(452);

	var _Button2 = _interopRequireDefault(_Button);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Snackbar = __webpack_require__(454);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _style = __webpack_require__(450);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var PluginPreviewPage = function (_BasePage) {
	    _inherits(PluginPreviewPage, _BasePage);

	    function PluginPreviewPage() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, PluginPreviewPage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PluginPreviewPage.__proto__ || Object.getPrototypeOf(PluginPreviewPage)).call.apply(_ref, [this].concat(args))), _this), _this._requestId = 'PreviewInDemo', _this.state = {
	            noticeShow: false
	        }, _this.images = [], _this.onClick = function () {

	            var options = {
	                imgList: ['http://10.1.145.141:8080/assets/images/demo/1.jpg', 'http://10.1.145.141:8080/assets/images/demo/2.jpg', 'http://10.1.145.141:8080/assets/images/demo/3.jpg', 'http://10.1.145.141:8080/assets/images/demo/4.jpg', 'http://10.1.145.141:8080/assets/images/demo/5.jpg', 'http://10.1.145.141:8080/assets/images/demo/6.jpg', 'http://10.1.145.141:8080/assets/images/demo/7.jpg'],
	                firstIndex: 0,
	                canDelete: true
	            };

	            mutants.plugin.preview.previewImg(options, _this.previewCallback, _this._requestId);
	        }, _this.previewCallback = function (rs) {
	            var resultCode = rs.resultCode;
	            var message = rs.message;


	            if (resultCode == 0) {
	                _this.setState({
	                    noticeShow: true,
	                    message: "预览成功"
	                });
	            } else {
	                _this.setState({
	                    noticeShow: true,
	                    message: message
	                });
	            }
	        }, _this.snackbarRequestClose = function () {
	            _this.setState({
	                noticeShow: false
	            });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(PluginPreviewPage, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this._initMockData();
	        }

	        //初始化模拟数据

	    }, {
	        key: "_initMockData",
	        value: function _initMockData() {
	            var mockData = {
	                PreviewPlugin: {
	                    status: 'success'
	                }
	            };

	            mutants.plugin.setMockData(mockData);
	        }

	        //点击预览


	        //预览回调


	        //底部提示框关闭

	    }, {
	        key: "renderContent",
	        value: function renderContent() {
	            var platform = mutants.env.constant.platform;

	            var inGZQ = mutants.env.platform == platform.chanjet;

	            var imageItems = this.images.map(function (img) {
	                return _react2.default.createElement("img", { src: img, style: _style2.default.image });
	            });

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.title },
	                    "图片预览"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.summary },
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryLabel },
	                        "点击下方按钮可以预览图片, 我们已经预置好了7张美丽的大图."
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryTip },
	                        "demo中设置了允许在预览时删除图片, 回调函数中会返回被删除的图片"
	                    ),
	                    !inGZQ && _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryTip },
	                        "demo没有运行在工作圈中, 将使用模拟数据."
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.content },
	                    _react2.default.createElement(_Button2.default, { label: "点击预览", primary: true, onClick: this.onClick }),
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.link },
	                        "删除的图片:",
	                        this.images.length,
	                        "张"
	                    ),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        imageItems
	                    )
	                ),
	                _react2.default.createElement(_Snackbar2.default, {
	                    open: this.state.noticeShow,
	                    message: this.state.message,
	                    autoHideDuration: 2000,
	                    onRequestClose: this.snackbarRequestClose
	                })
	            );
	        }
	    }]);

	    return PluginPreviewPage;
	}(_BasePage3.default);

	exports.default = PluginPreviewPage;

/***/ }

});