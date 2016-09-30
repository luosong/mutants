webpackJsonp([19],{

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

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Avatar = __webpack_require__(509);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Avatar2.default; /**
	                                     * Created by guopeng on 16/4/6.
	                                     */

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pixel = __webpack_require__(420);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getStyles(props, context) {
	  var backgroundColor = props.backgroundColor;
	  var color = props.color;
	  var size = props.size;
	  var src = props.src;
	  var avatar = context.muiTheme.avatar;

	  var sizePx = (0, _pixel.rem2px)(size, true);
	  var styles = {
	    root: {
	      color: color || avatar.color,
	      backgroundColor: backgroundColor || avatar.backgroundColor,
	      userSelect: 'none',
	      display: 'inline-block',
	      textAlign: 'center',
	      lineHeight: size,
	      fontSize: sizePx / 2 + (0, _pixel.px2px)(4, true),
	      borderRadius: '50%',
	      height: size,
	      width: size
	    },
	    icon: {
	      color: color || avatar.color,
	      margin: '0.0213rem'
	    }
	  };

	  var px2 = (0, _pixel.px2px)(4, true);
	  if (src && avatar.borderColor) {
	    Object.assign(styles.root, {
	      backgroundImage: 'url(' + src + ')',
	      backgroundSize: '100%',
	      backgroundOrigin: 'border-box',
	      backgroundRepeat: 'no-repeat',
	      border: 'solid 0.027rem ' + avatar.borderColor,
	      height: sizePx - px2,
	      width: sizePx - px2
	    });
	  }

	  return styles;
	}

	var Avatar = function (_React$Component) {
	  _inherits(Avatar, _React$Component);

	  function Avatar() {
	    _classCallCheck(this, Avatar);

	    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
	  }

	  _createClass(Avatar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var icon = _props.icon;
	      var src = _props.src;
	      var style = _props.style;
	      var className = _props.className;

	      var other = _objectWithoutProperties(_props, ['icon', 'src', 'style', 'className']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      if (src) {
	        return _react2.default.createElement('div', _extends({}, other, {
	          style: prepareStyles(Object.assign(styles.root, style)),
	          className: className
	        }));
	      } else {
	        return _react2.default.createElement(
	          'div',
	          _extends({}, other, {
	            style: prepareStyles(Object.assign(styles.root, style)),
	            className: className
	          }),
	          icon && _react2.default.cloneElement(icon, {
	            color: styles.icon.color,
	            style: Object.assign(styles.icon, icon.props.style)
	          }),
	          this.props.children
	        );
	      }
	    }
	  }]);

	  return Avatar;
	}(_react2.default.Component);

	Avatar.propTypes = {
	  /**
	   * The backgroundColor of the avatar. Does not apply to image avatars.
	   */
	  backgroundColor: _react2.default.PropTypes.string,

	  /**
	   * Can be used, for instance, to render a letter inside the avatar.
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * The css class name of the root `div` or `img` element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * The icon or letter's color.
	   */
	  color: _react2.default.PropTypes.string,

	  /**
	   * This is the SvgIcon or FontIcon to be used inside the avatar.
	   */
	  icon: _react2.default.PropTypes.element,

	  /**
	   * This is the size of the avatar in pixels.
	   */
	  size: _react2.default.PropTypes.string,

	  /**
	   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	   */
	  src: _react2.default.PropTypes.string,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	Avatar.defaultProps = {
	  size: '1.067rem'
	};
	Avatar.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Avatar;

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _IconButton = __webpack_require__(416);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _IconButton2.default; /**
	                                         * Created by guopeng on 16/4/6.
	                                         */

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactEventListener = __webpack_require__(438);

	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

	var _keycode = __webpack_require__(404);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _FocusRipple = __webpack_require__(405);

	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

	var _TouchRipple = __webpack_require__(412);

	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

	var _Paper = __webpack_require__(442);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _warning = __webpack_require__(351);

	var _warning2 = _interopRequireDefault(_warning);

	var _pixel = __webpack_require__(420);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;


	  return {
	    root: {
	      position: 'relative',
	      cursor: props.disabled ? 'default' : 'pointer',
	      overflow: 'visible',
	      display: 'table',
	      height: 'auto',
	      width: '100%'
	    },
	    input: {
	      position: 'absolute',
	      cursor: props.disabled ? 'default' : 'pointer',
	      pointerEvents: 'all',
	      opacity: 0,
	      width: '100%',
	      height: '100%',
	      zIndex: 2,
	      left: 0,
	      boxSizing: 'border-box',
	      padding: 0,
	      margin: 0
	    },
	    controls: {
	      display: 'flex',
	      width: '100%',
	      height: '100%'
	    },
	    label: {
	      float: 'left',
	      position: 'relative',
	      display: 'block',
	      width: 'calc(100% - 60px)',
	      lineHeight: (0, _pixel.px2rem)('48px'),
	      color: baseTheme.palette.textColor,
	      fontFamily: baseTheme.fontFamily
	    },
	    wrap: {
	      transition: _transitions2.default.easeOut(),
	      float: 'left',
	      position: 'relative',
	      display: 'block',
	      flexShrink: 0,
	      width: (0, _pixel.px2rem)((60 - baseTheme.spacing.desktopGutterLess) * 2),
	      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
	      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
	    },
	    ripple: {
	      color: props.rippleColor || baseTheme.palette.primary1Color,
	      height: '200%',
	      width: '200%',
	      top: '-' + (0, _pixel.px2rem)(24),
	      left: '-' + (0, _pixel.px2rem)(24)
	    }
	  };
	}

	var EnhancedSwitch = function (_Component) {
	  _inherits(EnhancedSwitch, _Component);

	  function EnhancedSwitch() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, EnhancedSwitch);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EnhancedSwitch.__proto__ || Object.getPrototypeOf(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isKeyboardFocused: false
	    }, _this.handleChange = function (event) {
	      _this.tabPressed = false;
	      _this.setState({
	        isKeyboardFocused: false
	      });

	      var isInputChecked = _this.refs.checkbox.checked;

	      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
	        _this.props.onParentShouldUpdate(isInputChecked);
	      }

	      if (_this.props.onSwitch) {
	        _this.props.onSwitch(event, isInputChecked);
	      }
	    }, _this.handleKeyDown = function (event) {
	      var code = (0, _keycode2.default)(event);

	      if (code === 'tab') {
	        _this.tabPressed = true;
	      }
	      if (_this.state.isKeyboardFocused && code === 'space') {
	        _this.handleChange(event);
	      }
	    }, _this.handleKeyUp = function (event) {
	      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
	        _this.handleChange(event);
	      }
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.refs.touchRipple.start(event);
	      }
	    }, _this.handleMouseUp = function () {
	      _this.refs.touchRipple.end();
	    }, _this.handleMouseLeave = function () {
	      _this.refs.touchRipple.end();
	    }, _this.handleTouchStart = function (event) {
	      _this.refs.touchRipple.start(event);
	    }, _this.handleTouchEnd = function () {
	      _this.refs.touchRipple.end();
	    }, _this.handleBlur = function (event) {
	      _this.setState({
	        isKeyboardFocused: false
	      });

	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      // setTimeout is needed becuase the focus event fires first
	      // Wait so that we can capture if this was a keyboard focus
	      // or touch focus
	      setTimeout(function () {
	        if (_this.tabPressed) {
	          _this.setState({
	            isKeyboardFocused: true
	          });
	        }
	      }, 150);

	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(EnhancedSwitch, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var inputNode = this.refs.checkbox;
	      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
	        this.props.onParentShouldUpdate(inputNode.checked);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var hasCheckedProp = nextProps.hasOwnProperty('checked');
	      var hasToggledProp = nextProps.hasOwnProperty('toggled');
	      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

	      if (hasCheckedProp || hasToggledProp || hasNewDefaultProp) {
	        var switched = nextProps.checked || nextProps.toggled || nextProps.defaultChecked || false;

	        this.setState({
	          switched: switched
	        });

	        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
	          this.props.onParentShouldUpdate(switched);
	        }
	      }
	    }
	  }, {
	    key: 'isSwitched',
	    value: function isSwitched() {
	      return this.refs.checkbox.checked;
	    }

	    // no callback here because there is no event

	  }, {
	    key: 'setSwitched',
	    value: function setSwitched(newSwitchedValue) {
	      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
	        if (this.props.onParentShouldUpdate) {
	          this.props.onParentShouldUpdate(newSwitchedValue);
	        }
	        this.refs.checkbox.checked = newSwitchedValue;
	      } else {
	        (0, _warning2.default)(false, 'Cannot call set method while checked is defined as a property.');
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.checkbox.value;
	    }

	    // Checkbox inputs only use SPACE to change their state. Using ENTER will
	    // update the ui but not the input.


	    /**
	     * Because both the ripples and the checkbox input cannot share pointer
	     * events, the checkbox input takes control of pointer events and calls
	     * ripple animations manually.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var value = _props.value;
	      var iconStyle = _props.iconStyle;
	      var inputStyle = _props.inputStyle;
	      var inputType = _props.inputType;
	      var label = _props.label;
	      var labelStyle = _props.labelStyle;
	      var labelPosition = _props.labelPosition;
	      var onSwitch = _props.onSwitch;
	      var onBlur = _props.onBlur;
	      var onFocus = _props.onFocus;
	      var onMouseUp = _props.onMouseUp;
	      var onMouseDown = _props.onMouseDown;
	      var onMouseLeave = _props.onMouseLeave;
	      var onTouchStart = _props.onTouchStart;
	      var onTouchEnd = _props.onTouchEnd;
	      var onParentShouldUpdate = _props.onParentShouldUpdate;
	      var disabled = _props.disabled;
	      var disableTouchRipple = _props.disableTouchRipple;
	      var disableFocusRipple = _props.disableFocusRipple;
	      var className = _props.className;
	      var rippleColor = _props.rippleColor;
	      var rippleStyle = _props.rippleStyle;
	      var style = _props.style;
	      var switched = _props.switched;
	      var switchElement = _props.switchElement;
	      var thumbStyle = _props.thumbStyle;
	      var trackStyle = _props.trackStyle;

	      var other = _objectWithoutProperties(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);
	      var wrapStyles = Object.assign(styles.wrap, iconStyle);
	      var mergedRippleStyle = Object.assign(styles.ripple, rippleStyle);

	      if (thumbStyle) {
	        wrapStyles.marginLeft = (0, _pixel.px2rem)(wrapStyles.marginLeft / 2);
	        wrapStyles.marginRight = (0, _pixel.px2rem)(wrapStyles.marginRight / 2);
	      }

	      var labelElement = label && _react2.default.createElement(
	        'label',
	        { style: prepareStyles(Object.assign(styles.label, labelStyle)) },
	        label
	      );

	      var showTouchRipple = !disabled && !disableTouchRipple;
	      var showFocusRipple = !disabled && !disableFocusRipple;

	      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
	        ref: 'touchRipple',
	        key: 'touchRipple',
	        style: mergedRippleStyle,
	        color: mergedRippleStyle.color,
	        muiTheme: this.context.muiTheme,
	        centerRipple: true
	      });

	      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
	        key: 'focusRipple',
	        innerStyle: mergedRippleStyle,
	        color: mergedRippleStyle.color,
	        muiTheme: this.context.muiTheme,
	        show: this.state.isKeyboardFocused
	      });

	      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

	      var inputElement = _react2.default.createElement(InputPatch, _extends({}, other, {
	        ref: 'checkbox',
	        style: prepareStyles(Object.assign(styles.input, inputStyle)),
	        showTouchRipple: showTouchRipple,
	        name: name,
	        value: value,
	        disabled: disabled,
	        onBlur: this.handleBlur,
	        onFocus: this.handleFocus,
	        onChange: this.handleChange,
	        onMouseUp: showTouchRipple && this.handleMouseUp,
	        onMouseDown: showTouchRipple && this.handleMouseDown,
	        onMouseLeave: showTouchRipple && this.handleMouseLeave,
	        onTouchStart: showTouchRipple && this.handleTouchStart,
	        onTouchEnd: showTouchRipple && this.handleTouchEnd
	      }));

	      // If toggle component (indicated by whether the style includes thumb) manually lay out
	      // elements in order to nest ripple elements
	      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
	        'div',
	        { style: prepareStyles(wrapStyles) },
	        switchElement,
	        ripples
	      ) : _react2.default.createElement(
	        'div',
	        { style: prepareStyles(wrapStyles) },
	        _react2.default.createElement('div', { style: prepareStyles(Object.assign({}, trackStyle)) }),
	        _react2.default.createElement(
	          _Paper2.default,
	          { style: thumbStyle, zDepth: 1, circle: true },
	          ' ',
	          ripples,
	          ' '
	        )
	      );

	      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
	        'div',
	        { style: styles.controls },
	        switchOrThumbElement,
	        labelElement
	      ) : _react2.default.createElement(
	        'div',
	        { style: styles.controls },
	        labelElement,
	        switchOrThumbElement
	      );

	      return _react2.default.createElement(
	        'div',
	        { ref: 'root', className: className, style: prepareStyles(Object.assign(styles.root, style)) },
	        _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyDown: this.handleKeyDown,
	          onKeyUp: this.handleKeyUp
	        }),
	        inputElement,
	        elementsInOrder
	      );
	    }
	  }]);

	  return EnhancedSwitch;
	}(_react.Component);

	/**
	 * ios 工作圈快速点击时不能触发onChange事件
	 */


	EnhancedSwitch.propTypes = {
	  checked: _react.PropTypes.bool,
	  className: _react.PropTypes.string,
	  defaultChecked: _react.PropTypes.bool,
	  disableFocusRipple: _react.PropTypes.bool,
	  disableTouchRipple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  iconStyle: _react.PropTypes.object,
	  inputStyle: _react.PropTypes.object,
	  inputType: _react.PropTypes.string.isRequired,
	  label: _react.PropTypes.node,
	  labelPosition: _react.PropTypes.oneOf(['left', 'right']),
	  labelStyle: _react.PropTypes.object,
	  name: _react.PropTypes.string,
	  onBlur: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onParentShouldUpdate: _react.PropTypes.func,
	  onSwitch: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  rippleColor: _react.PropTypes.string,
	  rippleStyle: _react.PropTypes.object,
	  style: _react.PropTypes.object,
	  switchElement: _react.PropTypes.element.isRequired,
	  switched: _react.PropTypes.bool.isRequired,
	  thumbStyle: _react.PropTypes.object,
	  trackStyle: _react.PropTypes.object,
	  value: _react.PropTypes.any
	};
	EnhancedSwitch.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	var InputPatch = function (_Component2) {
	  _inherits(InputPatch, _Component2);

	  function InputPatch(props, context) {
	    _classCallCheck(this, InputPatch);

	    var _this2 = _possibleConstructorReturn(this, (InputPatch.__proto__ || Object.getPrototypeOf(InputPatch)).call(this, props, context));

	    _this2.checked = false;

	    _this2.onTouchTap = function (event) {
	      var _this2$props = _this2.props;
	      var disabled = _this2$props.disabled;
	      var onChange = _this2$props.onChange;

	      if (!disabled) {
	        _this2.checked = !_this2.checked;
	        onChange(event);
	      }
	    };

	    if (props.hasOwnProperty('defaultChecked')) {
	      _this2.checked = props.defaultChecked;
	    }
	    return _this2;
	  }

	  _createClass(InputPatch, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var style = _props2.style;
	      var checked = _props2.checked;
	      var defaultChecked = _props2.defaultChecked;
	      var disabled = _props2.disabled;
	      var onChange = _props2.onChange;
	      var onMouseDown = _props2.onMouseDown;
	      var onMouseLeave = _props2.onMouseLeave;
	      var onMouseUp = _props2.onMouseUp;
	      var onTouchStart = _props2.onTouchStart;
	      var onTouchEnd = _props2.onTouchEnd;
	      var showTouchRipple = _props2.showTouchRipple;
	      var value = _props2.value;

	      var other = _objectWithoutProperties(_props2, ['style', 'checked', 'defaultChecked', 'disabled', 'onChange', 'onMouseDown', 'onMouseLeave', 'onMouseUp', 'onTouchStart', 'onTouchEnd', 'showTouchRipple', 'value']);

	      this.value = value;
	      return _react2.default.createElement('div', _extends({}, other, {
	        style: style,
	        disabled: disabled,
	        value: value,
	        onTouchTap: this.onTouchTap,
	        onMouseUp: showTouchRipple && onMouseUp,
	        onMouseDown: showTouchRipple && onMouseDown,
	        onMouseLeave: showTouchRipple && onMouseLeave,
	        onTouchStart: showTouchRipple && onTouchStart,
	        onTouchEnd: showTouchRipple && onTouchEnd
	      }));
	    }
	  }]);

	  return InputPatch;
	}(_react.Component);

	InputPatch.propTypes = {
	  checked: _react.PropTypes.bool,
	  defaultChecked: _react.PropTypes.bool,
	  onMouseDown: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  style: _react.PropTypes.object
	};
	exports.default = EnhancedSwitch;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _BasePage2 = __webpack_require__(387);

	var _BasePage3 = _interopRequireDefault(_BasePage2);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _inbox = __webpack_require__(537);

	var _inbox2 = _interopRequireDefault(_inbox);

	var _grade = __webpack_require__(538);

	var _grade2 = _interopRequireDefault(_grade);

	var _send = __webpack_require__(539);

	var _send2 = _interopRequireDefault(_send);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _info = __webpack_require__(540);

	var _info2 = _interopRequireDefault(_info);

	var _chatBubble = __webpack_require__(541);

	var _chatBubble2 = _interopRequireDefault(_chatBubble);

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _colors = __webpack_require__(314);

	var _folder = __webpack_require__(542);

	var _folder2 = _interopRequireDefault(_folder);

	var _assignment = __webpack_require__(543);

	var _assignment2 = _interopRequireDefault(_assignment);

	var _insertChart = __webpack_require__(544);

	var _insertChart2 = _interopRequireDefault(_insertChart);

	var _Subheader = __webpack_require__(545);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _Toggle = __webpack_require__(546);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _Checkbox = __webpack_require__(548);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _moreVert = __webpack_require__(552);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _IconButton = __webpack_require__(520);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(553);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(559);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _SimpleList = __webpack_require__(562);

	var _SimpleList2 = _interopRequireDefault(_SimpleList);

	var _ChatList = __webpack_require__(563);

	var _ChatList2 = _interopRequireDefault(_ChatList);

	var _ContactList = __webpack_require__(564);

	var _ContactList2 = _interopRequireDefault(_ContactList);

	var _FoldersList = __webpack_require__(565);

	var _FoldersList2 = _interopRequireDefault(_FoldersList);

	var _NestedList = __webpack_require__(566);

	var _NestedList2 = _interopRequireDefault(_NestedList);

	var _ToggleList = __webpack_require__(567);

	var _ToggleList2 = _interopRequireDefault(_ToggleList);

	var _IconBtnList = __webpack_require__(568);

	var _IconBtnList2 = _interopRequireDefault(_IconBtnList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ListPage = function (_BasePage) {
	    _inherits(ListPage, _BasePage);

	    function ListPage() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ListPage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call.apply(_ref, [this].concat(args))), _this), _this.title = 'List Demo', _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(ListPage, [{
	        key: 'renderContent',
	        value: function renderContent() {

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_SimpleList2.default, null),
	                _react2.default.createElement(_ChatList2.default, null),
	                _react2.default.createElement(_ContactList2.default, null),
	                _react2.default.createElement(_FoldersList2.default, null),
	                _react2.default.createElement(_NestedList2.default, null),
	                _react2.default.createElement(_ToggleList2.default, null),
	                _react2.default.createElement(_IconBtnList2.default, null)
	            );
	        }
	    }]);

	    return ListPage;
	}(_BasePage3.default);

	exports.default = ListPage;

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentInbox = function ContentInbox(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z' })
	  );
	};
	ContentInbox = (0, _pure2.default)(ContentInbox);
	ContentInbox.displayName = 'ContentInbox';
	ContentInbox.muiName = 'SvgIcon';

	exports.default = ContentInbox;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionGrade = function ActionGrade(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' })
	  );
	};
	ActionGrade = (0, _pure2.default)(ActionGrade);
	ActionGrade.displayName = 'ActionGrade';
	ActionGrade.muiName = 'SvgIcon';

	exports.default = ActionGrade;

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentSend = function ContentSend(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' })
	  );
	};
	ContentSend = (0, _pure2.default)(ContentSend);
	ContentSend.displayName = 'ContentSend';
	ContentSend.muiName = 'SvgIcon';

	exports.default = ContentSend;

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionInfo = function ActionInfo(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' })
	  );
	};
	ActionInfo = (0, _pure2.default)(ActionInfo);
	ActionInfo.displayName = 'ActionInfo';
	ActionInfo.muiName = 'SvgIcon';

	exports.default = ActionInfo;

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommunicationChatBubble = function CommunicationChatBubble(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' })
	  );
	};
	CommunicationChatBubble = (0, _pure2.default)(CommunicationChatBubble);
	CommunicationChatBubble.displayName = 'CommunicationChatBubble';
	CommunicationChatBubble.muiName = 'SvgIcon';

	exports.default = CommunicationChatBubble;

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FileFolder = function FileFolder(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z' })
	  );
	};
	FileFolder = (0, _pure2.default)(FileFolder);
	FileFolder.displayName = 'FileFolder';
	FileFolder.muiName = 'SvgIcon';

	exports.default = FileFolder;

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionAssignment = function ActionAssignment(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' })
	  );
	};
	ActionAssignment = (0, _pure2.default)(ActionAssignment);
	ActionAssignment.displayName = 'ActionAssignment';
	ActionAssignment.muiName = 'SvgIcon';

	exports.default = ActionAssignment;

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EditorInsertChart = function EditorInsertChart(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' })
	  );
	};
	EditorInsertChart = (0, _pure2.default)(EditorInsertChart);
	EditorInsertChart.displayName = 'EditorInsertChart';
	EditorInsertChart.muiName = 'SvgIcon';

	exports.default = EditorInsertChart;

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Subheader = __webpack_require__(393);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Subheader2.default;

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Toggle = __webpack_require__(547);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Toggle2.default; /**
	                                     * Created by guopeng on 16/4/6.
	                                     */

/***/ },

/***/ 547:
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

	var _Paper = __webpack_require__(442);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _EnhancedSwitch = __webpack_require__(527);

	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getStyles(props, context, state) {
	  var disabled = props.disabled;
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var toggle = _context$muiTheme.toggle;


	  var toggleSize = '0.5333rem'; //20;
	  var toggleTrackWidth = '0.96'; //36;
	  var styles = {
	    icon: {
	      width: '0.96rem', //36,
	      //padding: '4px 0px 6px 2px',
	      padding: '0.107rem 0 0.16rem 0.0533rem'
	    },
	    ripple: {
	      top: '-0.2667rem', //-10,
	      left: '-0.2667rem', //-10,
	      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
	    },
	    toggleElement: {
	      width: toggleTrackWidth + 'rem'
	    },
	    track: {
	      transition: _transitions2.default.easeOut(),
	      width: '100%',
	      height: '0.3733rem', //14,
	      borderRadius: '0.8rem', //30,
	      backgroundColor: toggle.trackOffColor
	    },
	    thumb: {
	      transition: _transitions2.default.easeOut(),
	      position: 'absolute',
	      top: '0.0267rem', //1,
	      left: 0,
	      width: toggleSize,
	      height: toggleSize,
	      lineHeight: '0.64rem', //'24px',
	      borderRadius: '50%',
	      backgroundColor: toggle.thumbOffColor
	    },
	    trackWhenSwitched: {
	      backgroundColor: toggle.trackOnColor
	    },
	    thumbWhenSwitched: {
	      backgroundColor: toggle.thumbOnColor,
	      left: '100%'
	    },
	    trackWhenDisabled: {
	      backgroundColor: toggle.trackDisabledColor
	    },
	    thumbWhenDisabled: {
	      backgroundColor: toggle.thumbDisabledColor
	    },
	    label: {
	      color: disabled ? toggle.labelDisabledColor : toggle.labelColor
	      //width: `calc(100% - ${(72 + 20)}px)`,
	    }
	  };

	  return styles;
	}

	var Toggle = function (_React$Component) {
	  _inherits(Toggle, _React$Component);

	  function Toggle() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Toggle);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = { switched: false }, _this.handleToggle = function (event, isInputChecked) {
	      if (_this.props.onToggle) _this.props.onToggle(event, isInputChecked);
	    }, _this.handleStateChange = function (newSwitched) {
	      _this.setState({ switched: newSwitched });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Toggle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var toggled = _props.toggled;
	      var defaultToggled = _props.defaultToggled;
	      var valueLink = _props.valueLink;


	      if (toggled || defaultToggled || valueLink && valueLink.value) {
	        this.setState({ switched: true });
	      }
	    }
	  }, {
	    key: 'isToggled',
	    value: function isToggled() {
	      return this.refs.enhancedSwitch.isSwitched();
	    }
	  }, {
	    key: 'setToggled',
	    value: function setToggled(newToggledValue) {
	      this.refs.enhancedSwitch.setSwitched(newToggledValue);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var onToggle = _props2.onToggle;

	      var other = _objectWithoutProperties(_props2, ['onToggle']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      var trackStyles = Object.assign({}, styles.track, this.props.trackStyle, this.state.switched && styles.trackWhenSwitched, this.props.disabled && styles.trackWhenDisabled);

	      var thumbStyles = Object.assign({}, styles.thumb, this.props.thumbStyle, this.state.switched && styles.thumbWhenSwitched, this.props.disabled && styles.thumbWhenDisabled);

	      if (this.state.switched) {
	        thumbStyles.marginLeft = '-' + thumbStyles.width;
	      }

	      var toggleElementStyles = Object.assign({}, styles.toggleElement, this.props.elementStyle);

	      var toggleElement = _react2.default.createElement(
	        'div',
	        { style: prepareStyles(Object.assign({}, toggleElementStyles)) },
	        _react2.default.createElement('div', { style: prepareStyles(Object.assign({}, trackStyles)) }),
	        _react2.default.createElement(_Paper2.default, { style: thumbStyles, circle: true, zDepth: 1 })
	      );

	      var rippleStyle = Object.assign({}, styles.ripple, this.props.rippleStyle);

	      var iconStyle = Object.assign({}, styles.icon, this.props.iconStyle);

	      var labelStyle = Object.assign({}, styles.label, this.props.labelStyle);

	      var enhancedSwitchProps = {
	        ref: 'enhancedSwitch',
	        inputType: 'checkbox',
	        switchElement: toggleElement,
	        rippleStyle: rippleStyle,
	        rippleColor: rippleStyle.color,
	        iconStyle: iconStyle,
	        trackStyle: trackStyles,
	        thumbStyle: thumbStyles,
	        labelStyle: labelStyle,
	        switched: this.state.switched,
	        onSwitch: this.handleToggle,
	        onParentShouldUpdate: this.handleStateChange,
	        defaultSwitched: this.props.defaultToggled,
	        labelPosition: this.props.labelPosition
	      };

	      if (this.props.hasOwnProperty('toggled')) enhancedSwitchProps.checked = this.props.toggled;

	      return _react2.default.createElement(_EnhancedSwitch2.default, _extends({}, other, enhancedSwitchProps));
	    }
	  }]);

	  return Toggle;
	}(_react2.default.Component);

	Toggle.propTypes = {
	  /**
	   * Determines whether the Toggle is initially turned on.
	   */
	  defaultToggled: _react2.default.PropTypes.bool,

	  /**
	   * Will disable the toggle if true.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * Overrides the inline-styles of the Toggle element.
	   */
	  elementStyle: _react2.default.PropTypes.object,

	  /**
	   * Overrides the inline-styles of the Icon element.
	   */
	  iconStyle: _react2.default.PropTypes.object,

	  /**
	   * Overrides the inline-styles of the input element.
	   */
	  inputStyle: _react2.default.PropTypes.object,

	  /**
	   * Where the label will be placed next to the toggle.
	   */
	  labelPosition: _react2.default.PropTypes.oneOf(['left', 'right']),

	  /**
	   * Overrides the inline-styles of the Toggle element label.
	   */
	  labelStyle: _react2.default.PropTypes.object,

	  /**
	   * Callback function that is fired when the toggle switch is toggled.
	   */
	  onToggle: _react2.default.PropTypes.func,

	  /**
	   * Override style of ripple.
	   */
	  rippleStyle: _react2.default.PropTypes.object,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * Override style for thumb.
	   */
	  thumbStyle: _react2.default.PropTypes.object,

	  /**
	   * Toggled if set to true.
	   */
	  toggled: _react2.default.PropTypes.bool,

	  /**
	   * Override style for track.
	   */
	  trackStyle: _react2.default.PropTypes.object,

	  /**
	   * ValueLink prop for when using controlled toggle.
	   */
	  valueLink: _react2.default.PropTypes.object
	};
	Toggle.defaultProps = {
	  defaultToggled: false,
	  disabled: false,
	  labelPosition: 'left'
	};
	Toggle.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Toggle;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Checkbox = __webpack_require__(549);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Checkbox2.default;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _EnhancedSwitch = __webpack_require__(527);

	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _checkBoxOutlineBlank = __webpack_require__(550);

	var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

	var _checkBox = __webpack_require__(551);

	var _checkBox2 = _interopRequireDefault(_checkBox);

	var _deprecatedPropType = __webpack_require__(394);

	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getStyles(props, context) {
	  var checkbox = context.muiTheme.checkbox;

	  var checkboxSize = '0.64rem'; //24;

	  return {
	    icon: {
	      height: checkboxSize,
	      width: checkboxSize
	    },
	    check: {
	      position: 'absolute',
	      opacity: 0,
	      transform: 'scale(0)',
	      transitionOrigin: '50% 50%',
	      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
	      fill: checkbox.checkedColor
	    },
	    box: {
	      position: 'absolute',
	      opacity: 1,
	      fill: checkbox.boxColor,
	      transition: _transitions2.default.easeOut('2s', null, '200ms')
	    },
	    checkWhenSwitched: {
	      opacity: 1,
	      transform: 'scale(1)',
	      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
	    },
	    boxWhenSwitched: {
	      transition: _transitions2.default.easeOut('100ms', null, '0ms'),
	      fill: checkbox.checkedColor
	    },
	    checkWhenDisabled: {
	      fill: checkbox.disabledColor
	    },
	    boxWhenDisabled: {
	      fill: props.checked ? 'transparent' : checkbox.disabledColor
	    },
	    label: {
	      lineHeight: checkboxSize,
	      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
	    }
	  };
	}

	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Checkbox);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = { switched: false }, _this.handleCheck = function (event, isInputChecked) {
	      if (_this.props.onCheck) _this.props.onCheck(event, isInputChecked);
	    }, _this.handleStateChange = function (newSwitched) {
	      _this.setState({ switched: newSwitched });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Checkbox, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var checked = _props.checked;
	      var defaultChecked = _props.defaultChecked;
	      var valueLink = _props.valueLink;


	      if (checked || defaultChecked || valueLink && valueLink.value) {
	        this.setState({ switched: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        switched: this.props.checked !== nextProps.checked ? nextProps.checked : this.state.switched
	      });
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked() {
	      return this.refs.enhancedSwitch.isSwitched();
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(newCheckedValue) {
	      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var iconStyle = _props2.iconStyle;
	      var onCheck = _props2.onCheck;
	      var checkedIcon = _props2.checkedIcon;
	      var uncheckedIcon = _props2.uncheckedIcon;
	      var unCheckedIcon = _props2.unCheckedIcon;

	      var other = _objectWithoutProperties(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon', 'unCheckedIcon']);

	      var styles = getStyles(this.props, this.context);
	      var boxStyles = Object.assign(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
	      var checkStyles = Object.assign(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

	      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
	        style: Object.assign(checkStyles, checkedIcon.props.style)
	      }) : _react2.default.createElement(_checkBox2.default, {
	        style: checkStyles
	      });

	      var unCheckedElement = unCheckedIcon || uncheckedIcon ? _react2.default.cloneElement(unCheckedIcon || uncheckedIcon, {
	        style: Object.assign(boxStyles, (unCheckedIcon || uncheckedIcon).props.style)
	      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
	        style: boxStyles
	      });

	      var checkboxElement = _react2.default.createElement(
	        'div',
	        null,
	        unCheckedElement,
	        checkedElement
	      );

	      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
	      var mergedIconStyle = Object.assign(styles.icon, iconStyle);

	      var labelStyle = Object.assign(styles.label, this.props.labelStyle);

	      var enhancedSwitchProps = {
	        ref: 'enhancedSwitch',
	        inputType: 'checkbox',
	        switched: this.state.switched,
	        switchElement: checkboxElement,
	        rippleColor: rippleColor,
	        iconStyle: mergedIconStyle,
	        onSwitch: this.handleCheck,
	        labelStyle: labelStyle,
	        onParentShouldUpdate: this.handleStateChange,
	        defaultSwitched: this.props.defaultChecked,
	        labelPosition: this.props.labelPosition
	      };

	      return _react2.default.createElement(_EnhancedSwitch2.default, _extends({}, other, enhancedSwitchProps));
	    }
	  }]);

	  return Checkbox;
	}(_react2.default.Component);

	Checkbox.propTypes = {
	  /**
	   * Checkbox is checked if true.
	   */
	  checked: _react2.default.PropTypes.bool,

	  /**
	   * The SvgIcon to use for the checked state.
	   * This is useful to create icon toggles.
	   */
	  checkedIcon: _react2.default.PropTypes.element,

	  /**
	   * The default state of our checkbox component.
	   */
	  defaultChecked: _react2.default.PropTypes.bool,

	  /**
	   * Disabled if true.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * Overrides the inline-styles of the icon element.
	   */
	  iconStyle: _react2.default.PropTypes.object,

	  /**
	   * Overrides the inline-styles of the input element.
	   */
	  inputStyle: _react2.default.PropTypes.object,

	  /**
	   * Where the label will be placed next to the checkbox.
	   */
	  labelPosition: _react2.default.PropTypes.oneOf(['left', 'right']),

	  /**
	   * Overrides the inline-styles of the Checkbox element label.
	   */
	  labelStyle: _react2.default.PropTypes.object,

	  /**
	   * Callback function that is fired when the checkbox is checked.
	   *
	   * @param {object} event `change` event targeting the underlying checkbox `input`.
	   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
	   */
	  onCheck: _react2.default.PropTypes.func,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * The SvgIcon to use for the unchecked state.
	   * This is useful to create icon toggles.
	   */
	  unCheckedIcon: (0, _deprecatedPropType2.default)(_react2.default.PropTypes.element, 'Use uncheckedIcon instead.'),

	  /**
	   * The SvgIcon to use for the unchecked state.
	   * This is useful to create icon toggles.
	   */
	  uncheckedIcon: _react2.default.PropTypes.element,

	  /**
	   * ValueLink for when using controlled checkbox.
	   */
	  valueLink: _react2.default.PropTypes.object
	};
	Checkbox.defaultProps = {
	  defaultChecked: false,
	  labelPosition: 'right',
	  disabled: false
	};
	Checkbox.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Checkbox;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
	  );
	};
	ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
	ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';

	exports.default = ToggleCheckBoxOutlineBlank;

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ToggleCheckBox = function ToggleCheckBox(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
	  );
	};
	ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
	ToggleCheckBox.displayName = 'ToggleCheckBox';

	exports.default = ToggleCheckBox;

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';

	exports.default = NavigationMoreVert;

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _IconMenu = __webpack_require__(554);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _IconMenu2.default; /**
	                                       * Created by guopeng on 16/4/6.
	                                       */

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _events = __webpack_require__(403);

	var _events2 = _interopRequireDefault(_events);

	var _propTypes = __webpack_require__(391);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Menu = __webpack_require__(555);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Popover = __webpack_require__(556);

	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMenu = function (_React$Component) {
	  _inherits(IconMenu, _React$Component);

	  function IconMenu() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, IconMenu);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconMenu.__proto__ || Object.getPrototypeOf(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      menuInitiallyKeyboardFocused: false,
	      open: false
	    }, _this.handleItemTouchTap = function (event, child) {
	      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
	        (function () {
	          var isKeyboard = _events2.default.isKeyboard(event);
	          _this.timerCloseId = setTimeout(function () {
	            _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
	          }, _this.props.touchTapCloseDelay);
	        })();
	      }

	      _this.props.onItemTouchTap(event, child);
	    }, _this.handleRequestClose = function (reason) {
	      _this.close(reason);
	    }, _this.handleEscKeyDownMenu = function (event) {
	      _this.close('escape', event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(IconMenu, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.open != null) {
	        this.setState({
	          open: nextProps.open,
	          anchorEl: this.refs.iconMenuContainer
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerCloseId);
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.state.open;
	    }
	  }, {
	    key: 'close',
	    value: function close(reason, isKeyboard) {
	      var _this2 = this;

	      if (!this.state.open) {
	        return;
	      }

	      if (this.props.open !== null) {
	        this.props.onRequestChange(false, reason);
	      }

	      this.setState({ open: false }, function () {
	        // Set focus on the icon button when the menu close
	        if (isKeyboard) {
	          var iconButton = _this2.refs.iconButton;
	          _reactDom2.default.findDOMNode(iconButton).focus();
	          iconButton.setKeyboardFocus();
	        }
	      });
	    }
	  }, {
	    key: 'open',
	    value: function open(reason, event) {
	      if (this.props.open !== null) {
	        this.props.onRequestChange(true, reason);

	        return this.setState({
	          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	          anchorEl: event.currentTarget
	        });
	      }

	      this.setState({
	        open: true,
	        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	        anchorEl: event.currentTarget
	      });

	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props;
	      var anchorOrigin = _props.anchorOrigin;
	      var className = _props.className;
	      var iconButtonElement = _props.iconButtonElement;
	      var iconStyle = _props.iconStyle;
	      var onItemTouchTap = _props.onItemTouchTap;
	      var onKeyboardFocus = _props.onKeyboardFocus;
	      var onMouseDown = _props.onMouseDown;
	      var onMouseLeave = _props.onMouseLeave;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseUp = _props.onMouseUp;
	      var onTouchTap = _props.onTouchTap;
	      var menuStyle = _props.menuStyle;
	      var style = _props.style;
	      var targetOrigin = _props.targetOrigin;
	      var useLayerForClickAway = _props.useLayerForClickAway;

	      var other = _objectWithoutProperties(_props, ['anchorOrigin', 'className', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onTouchTap', 'menuStyle', 'style', 'targetOrigin', 'useLayerForClickAway']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;
	      var _state = this.state;
	      var open = _state.open;
	      var anchorEl = _state.anchorEl;


	      var styles = {
	        root: {
	          display: 'inline-block',
	          position: 'relative'
	        },
	        menu: {
	          position: 'relative'
	        }
	      };

	      var mergedRootStyles = Object.assign(styles.root, style);
	      var mergedMenuStyles = Object.assign(styles.menu, menuStyle);

	      var iconButton = _react2.default.cloneElement(iconButtonElement, {
	        onKeyboardFocus: onKeyboardFocus,
	        iconStyle: Object.assign({}, iconStyle, iconButtonElement.props.iconStyle),
	        onTouchTap: function onTouchTap(event) {
	          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
	          if (iconButtonElement.props.onTouchTap) iconButtonElement.props.onTouchTap(event);
	        },
	        ref: 'iconButton'
	      });

	      var menu = _react2.default.createElement(
	        _Menu2.default,
	        _extends({}, other, {
	          animateOpen: true,
	          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
	          onEscKeyDown: this.handleEscKeyDownMenu,
	          onItemTouchTap: this.handleItemTouchTap,
	          style: mergedMenuStyles
	        }),
	        this.props.children
	      );

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: 'iconMenuContainer',
	          className: className,
	          onMouseDown: onMouseDown,
	          onMouseLeave: onMouseLeave,
	          onMouseEnter: onMouseEnter,
	          onMouseUp: onMouseUp,
	          onTouchTap: onTouchTap,
	          style: prepareStyles(mergedRootStyles)
	        },
	        iconButton,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: anchorOrigin,
	            targetOrigin: targetOrigin,
	            open: open,
	            anchorEl: anchorEl,
	            childContextTypes: this.constructor.childContextTypes,
	            useLayerForClickAway: useLayerForClickAway,
	            onRequestClose: this.handleRequestClose,
	            context: this.context
	          },
	          menu
	        )
	      );
	    }
	  }]);

	  return IconMenu;
	}(_react2.default.Component);

	IconMenu.muiName = 'IconMenu';
	IconMenu.propTypes = {
	  /**
	   * This is the point on the icon where the menu
	   * `targetOrigin` will attach.
	   * Options:
	   * vertical: [top, middle, bottom]
	   * horizontal: [left, center, right].
	   */
	  anchorOrigin: _propTypes2.default.origin,

	  /**
	   * Should be used to pass `MenuItem` components.
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * This is the `IconButton` to render. This button will open the menu.
	   */
	  iconButtonElement: _react2.default.PropTypes.element.isRequired,

	  /**
	   * Override the inline-styles of the underlying icon element.
	   */
	  iconStyle: _react2.default.PropTypes.object,

	  /**
	   * Override the inline-styles of the menu element.
	   */
	  menuStyle: _react2.default.PropTypes.object,

	  /**
	   * If true, the value can an be array and allow the menu to be a multi-select.
	   */
	  multiple: _react2.default.PropTypes.bool,

	  /**
	   * Callback function fired when a menu item is selected with a touch-tap.
	   *
	   * @param {object} event TouchTap event targeting the selected menu item element.
	   * @param {object} child The selected element.
	   */
	  onItemTouchTap: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
	   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
	   */
	  onKeyboardFocus: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when a mouse button is pressed down on the `IconButton` element.
	   *
	   * @param {object} event `mousedown` event targeting the `IconButton` element.
	   */
	  onMouseDown: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when the mouse enters the `IconButton` element.
	   *
	   * @param {object} event `mouseenter` event targeting the `IconButton` element.
	   */
	  onMouseEnter: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when the mouse leaves the `IconButton` element.
	   *
	   * @param {object} event `mouseleave` event targeting the `IconButton` element.
	   */
	  onMouseLeave: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when a mouse button is released on the `IconButton` element.
	   *
	   * @param {object} event `mouseup` event targeting the `IconButton` element.
	   */
	  onMouseUp: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when the `open` state of the menu is requested to be changed.
	   *
	   * @param {boolean} open If true, the menu was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
	   * for close requests.
	   */
	  onRequestChange: _react2.default.PropTypes.func,

	  /**
	   * Callback function fired when the `IconButton` element is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the `IconButton` element.
	   */
	  onTouchTap: _react2.default.PropTypes.func,

	  /**
	   * If true, the `IconMenu` is opened.
	   */
	  open: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * This is the point on the menu which will stick to the menu
	   * origin.
	   * Options:
	   * vertical: [top, middle, bottom]
	   * horizontal: [left, center, right].
	   */
	  targetOrigin: _propTypes2.default.origin,

	  /**
	   * Sets the delay in milliseconds before closing the
	   * menu when an item is clicked.
	   * If set to 0 then the auto close functionality
	   * will be disabled.
	   */
	  touchTapCloseDelay: _react2.default.PropTypes.number,

	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying elements.
	   */
	  useLayerForClickAway: _react2.default.PropTypes.bool
	};
	IconMenu.defaultProps = {
	  anchorOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  multiple: false,
	  open: null,
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseUp: function onMouseUp() {},
	  onTouchTap: function onTouchTap() {},
	  onRequestChange: function onRequestChange() {},
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  touchTapCloseDelay: 200,
	  useLayerForClickAway: false
	};
	IconMenu.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = IconMenu;

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(397);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _ClickAwayListener = __webpack_require__(456);

	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

	var _autoPrefix = __webpack_require__(406);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _keycode = __webpack_require__(404);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _propTypes = __webpack_require__(391);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _List = __webpack_require__(390);

	var _List2 = _interopRequireDefault(_List);

	var _deprecatedPropType = __webpack_require__(394);

	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);

	var _warning = __webpack_require__(351);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getStyles(props, context) {
	  var animated = props.animated;
	  var desktop = props.desktop;
	  var maxHeight = props.maxHeight;
	  var _props$openDirection = props.openDirection;
	  var openDirection = _props$openDirection === undefined ? 'bottom-left' : _props$openDirection;
	  var width = props.width;


	  var openDown = openDirection.split('-')[0] === 'bottom';
	  var openLeft = openDirection.split('-')[1] === 'left';

	  var muiTheme = context.muiTheme;


	  var styles = {
	    root: {
	      // Nested div bacause the List scales x faster than it scales y
	      transition: animated ? _transitions2.default.easeOut('250ms', 'transform') : null,
	      zIndex: muiTheme.zIndex.menu,
	      top: openDown ? 0 : null,
	      bottom: !openDown ? 0 : null,
	      left: !openLeft ? 0 : null,
	      right: openLeft ? 0 : null,
	      transform: animated ? 'scaleX(0)' : null,
	      transformOrigin: openLeft ? 'right' : 'left',
	      opacity: 0,
	      maxHeight: maxHeight,
	      overflowY: maxHeight ? 'auto' : null
	    },
	    divider: {
	      marginTop: 7,
	      marginBottom: 8
	    },
	    list: {
	      display: 'table-cell',
	      paddingBottom: desktop ? 16 : 8,
	      paddingTop: desktop ? 16 : 8,
	      userSelect: 'none',
	      width: width
	    },
	    menuItemContainer: {
	      transition: animated ? _transitions2.default.easeOut(null, 'opacity') : null,
	      opacity: 0
	    },
	    selectedMenuItem: {
	      color: muiTheme.baseTheme.palette.accent1Color
	    }
	  };

	  return styles;
	}

	var Menu = function (_Component) {
	  _inherits(Menu, _Component);

	  function Menu(props, context) {
	    _classCallCheck(this, Menu);

	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));

	    _initialiseProps.call(_this);

	    var filteredChildren = _this.getFilteredChildren(props.children);
	    var selectedIndex = _this.getSelectedIndex(props, filteredChildren);

	    _this.state = {
	      focusIndex: props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0,
	      isKeyboardFocused: props.initiallyKeyboardFocused,
	      keyWidth: props.desktop ? 64 : 56
	    };
	    return _this;
	  }

	  _createClass(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoWidth) this.setWidth();
	      if (!this.props.animated) this.animateOpen();
	      this.setScollPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var filteredChildren = this.getFilteredChildren(nextProps.children);
	      var selectedIndex = this.getSelectedIndex(nextProps, filteredChildren);

	      this.setState({
	        focusIndex: nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0,
	        keyWidth: nextProps.desktop ? 64 : 56
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoWidth) this.setWidth();
	    }
	  }, {
	    key: 'getValueLink',


	    // Do not use outside of this component, it will be removed once valueLink is deprecated
	    value: function getValueLink(props) {
	      return props.valueLink || {
	        value: props.value,
	        requestChange: props.onChange
	      };
	    }
	  }, {
	    key: 'setKeyboardFocused',
	    value: function setKeyboardFocused(keyboardFocused) {
	      this.setState({
	        isKeyboardFocused: keyboardFocused
	      });
	    }
	  }, {
	    key: 'getFilteredChildren',
	    value: function getFilteredChildren(children) {
	      var filteredChildren = [];
	      _react2.default.Children.forEach(children, function (child) {
	        if (child) {
	          filteredChildren.push(child);
	        }
	      });
	      return filteredChildren;
	    }
	  }, {
	    key: 'animateOpen',
	    value: function animateOpen() {
	      var rootStyle = _reactDom2.default.findDOMNode(this).style;
	      var scrollContainerStyle = _reactDom2.default.findDOMNode(this.refs.scrollContainer).style;
	      var menuContainers = _reactDom2.default.findDOMNode(this.refs.list).childNodes;

	      _autoPrefix2.default.set(rootStyle, 'transform', 'scaleX(1)');
	      _autoPrefix2.default.set(scrollContainerStyle, 'transform', 'scaleY(1)');
	      scrollContainerStyle.opacity = 1;

	      for (var i = 0; i < menuContainers.length; ++i) {
	        menuContainers[i].style.opacity = 1;
	      }
	    }
	  }, {
	    key: 'cloneMenuItem',
	    value: function cloneMenuItem(child, childIndex, styles, index) {
	      var _this2 = this;

	      var _props = this.props;
	      var desktop = _props.desktop;
	      var selectedMenuItemStyle = _props.selectedMenuItemStyle;


	      var selected = this.isChildSelected(child, this.props);
	      var selectedChildrenStyles = {};

	      if (selected) {
	        selectedChildrenStyles = Object.assign(styles.selectedMenuItem, selectedMenuItemStyle);
	      }

	      var mergedChildrenStyles = Object.assign({}, child.props.style, selectedChildrenStyles);

	      var isFocused = childIndex === this.state.focusIndex;
	      var focusState = 'none';
	      if (isFocused) {
	        focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	      }

	      return _react2.default.cloneElement(child, {
	        desktop: desktop,
	        focusState: focusState,
	        onTouchTap: function onTouchTap(event) {
	          _this2.handleMenuItemTouchTap(event, child, index);
	          if (child.props.onTouchTap) child.props.onTouchTap(event);
	        },
	        ref: isFocused ? 'focusedMenuItem' : null,
	        style: mergedChildrenStyles
	      });
	    }
	  }, {
	    key: 'decrementKeyboardFocusIndex',
	    value: function decrementKeyboardFocusIndex() {
	      var index = this.state.focusIndex;

	      index--;
	      if (index < 0) index = 0;

	      this.setFocusIndex(index, true);
	    }
	  }, {
	    key: 'getCascadeChildrenCount',
	    value: function getCascadeChildrenCount(filteredChildren) {
	      var _props2 = this.props;
	      var desktop = _props2.desktop;
	      var maxHeight = _props2.maxHeight;

	      var count = 1;
	      var currentHeight = desktop ? 16 : 8;
	      var menuItemHeight = desktop ? 32 : 48;

	      // MaxHeight isn't set - cascade all of the children
	      if (!maxHeight) return filteredChildren.length;

	      // Count all the children that will fit inside the max menu height
	      filteredChildren.forEach(function (child) {
	        if (currentHeight < maxHeight) {
	          var childIsADivider = child.type && child.type.muiName === 'Divider';

	          currentHeight += childIsADivider ? 16 : menuItemHeight;
	          count++;
	        }
	      });

	      return count;
	    }
	  }, {
	    key: 'getMenuItemCount',
	    value: function getMenuItemCount(filteredChildren) {
	      var menuItemCount = 0;
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        if (!childIsADivider && !childIsDisabled) menuItemCount++;
	      });
	      return menuItemCount;
	    }
	  }, {
	    key: 'getSelectedIndex',
	    value: function getSelectedIndex(props, filteredChildren) {
	      var _this3 = this;

	      var selectedIndex = -1;
	      var menuItemIndex = 0;

	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';

	        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
	        if (!childIsADivider) menuItemIndex++;
	      });

	      return selectedIndex;
	    }
	  }, {
	    key: 'handleMenuItemTouchTap',
	    value: function handleMenuItemTouchTap(event, item, index) {
	      var children = this.props.children;
	      var multiple = this.props.multiple;
	      var valueLink = this.getValueLink(this.props);
	      var menuValue = valueLink.value;
	      var itemValue = item.props.value;
	      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

	      this.setFocusIndex(focusIndex, false);

	      if (multiple) {
	        var itemIndex = menuValue.indexOf(itemValue);

	        var _menuValue = _toArray(menuValue);

	        var newMenuValue = _menuValue;

	        if (itemIndex === -1) {
	          newMenuValue.push(itemValue);
	        } else {
	          newMenuValue.splice(itemIndex, 1);
	        }

	        valueLink.requestChange(event, newMenuValue);
	      } else if (!multiple && itemValue !== menuValue) {
	        valueLink.requestChange(event, itemValue);
	      }

	      this.props.onItemTouchTap(event, item, index);
	    }
	  }, {
	    key: 'incrementKeyboardFocusIndex',
	    value: function incrementKeyboardFocusIndex(filteredChildren) {
	      var index = this.state.focusIndex;
	      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

	      index++;
	      if (index > maxIndex) index = maxIndex;

	      this.setFocusIndex(index, true);
	    }
	  }, {
	    key: 'isChildSelected',
	    value: function isChildSelected(child, props) {
	      var menuValue = this.getValueLink(props).value;
	      var childValue = child.props.value;

	      if (props.multiple) {
	        return menuValue.length && menuValue.indexOf(childValue) !== -1;
	      } else {
	        return child.props.hasOwnProperty('value') && menuValue === childValue;
	      }
	    }
	  }, {
	    key: 'setFocusIndex',
	    value: function setFocusIndex(newIndex, isKeyboardFocused) {
	      this.setState({
	        focusIndex: newIndex,
	        isKeyboardFocused: isKeyboardFocused
	      });
	    }
	  }, {
	    key: 'setScollPosition',
	    value: function setScollPosition() {
	      var desktop = this.props.desktop;
	      var focusedMenuItem = this.refs.focusedMenuItem;
	      var menuItemHeight = desktop ? 32 : 48;

	      if (focusedMenuItem) {
	        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

	        // Make the focused item be the 2nd item in the list the user sees
	        var scrollTop = selectedOffSet - menuItemHeight;
	        if (scrollTop < menuItemHeight) scrollTop = 0;

	        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth() {
	      var el = _reactDom2.default.findDOMNode(this);
	      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	      var elWidth = el.offsetWidth;
	      var keyWidth = this.state.keyWidth;
	      var minWidth = keyWidth * 1.5;
	      var keyIncrements = elWidth / keyWidth;
	      var newWidth = void 0;

	      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	      newWidth = keyIncrements * keyWidth;

	      if (newWidth < minWidth) newWidth = minWidth;

	      el.style.width = newWidth + 'px';
	      listEl.style.width = newWidth + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props3 = this.props;
	      var animated = _props3.animated;
	      var autoWidth = _props3.autoWidth;
	      var children = _props3.children;
	      var desktop = _props3.desktop;
	      var initiallyKeyboardFocused = _props3.initiallyKeyboardFocused;
	      var listStyle = _props3.listStyle;
	      var maxHeight = _props3.maxHeight;
	      var multiple = _props3.multiple;
	      var _props3$openDirection = _props3.openDirection;
	      var openDirection = _props3$openDirection === undefined ? 'bottom-left' : _props3$openDirection;
	      var selectedMenuItemStyle = _props3.selectedMenuItemStyle;
	      var style = _props3.style;
	      var value = _props3.value;
	      var valueLink = _props3.valueLink;
	      var width = _props3.width;
	      var zDepth = _props3.zDepth;

	      var other = _objectWithoutProperties(_props3, ['animated', 'autoWidth', 'children', 'desktop', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'openDirection', 'selectedMenuItemStyle', 'style', 'value', 'valueLink', 'width', 'zDepth']);

	      (0, _warning2.default)(typeof zDepth === 'undefined', 'Menu no longer supports `zDepth`. Instead, wrap it in `Paper` ' + 'or another component that provides `zDepth`.');

	      var focusIndex = this.state.focusIndex;
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      var mergedRootStyles = Object.assign(styles.root, style);
	      var mergedListStyles = Object.assign(styles.list, listStyle);

	      var openDown = openDirection.split('-')[0] === 'bottom';
	      var filteredChildren = this.getFilteredChildren(children);

	      // Cascade children opacity
	      var cumulativeDelay = openDown ? 175 : 325;
	      var cascadeChildrenCount = this.getCascadeChildrenCount(filteredChildren);
	      var cumulativeDelayIncrement = Math.ceil(150 / cascadeChildrenCount);

	      var menuItemIndex = 0;
	      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        var childrenContainerStyles = {};

	        if (animated) {
	          var transitionDelay = 0;

	          // Only cascade the visible menu items
	          if (menuItemIndex >= focusIndex - 1 && menuItemIndex <= focusIndex + cascadeChildrenCount - 1) {
	            cumulativeDelay = openDown ? cumulativeDelay + cumulativeDelayIncrement : cumulativeDelay - cumulativeDelayIncrement;
	            transitionDelay = cumulativeDelay;
	          }

	          childrenContainerStyles = Object.assign({}, styles.menuItemContainer, {
	            transitionDelay: transitionDelay + 'ms'
	          });
	        }

	        var clonedChild = childIsADivider ? _react2.default.cloneElement(child, { style: styles.divider }) : childIsDisabled ? _react2.default.cloneElement(child, { desktop: desktop }) : _this4.cloneMenuItem(child, menuItemIndex, styles, index);

	        if (!childIsADivider && !childIsDisabled) menuItemIndex++;

	        return animated ? _react2.default.createElement(
	          'div',
	          { style: prepareStyles(childrenContainerStyles) },
	          clonedChild
	        ) : clonedChild;
	      });

	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: this.handleClickAway },
	        _react2.default.createElement(
	          'div',
	          {
	            onKeyDown: this.handleKeyDown,
	            style: prepareStyles(mergedRootStyles),
	            ref: 'scrollContainer'
	          },
	          _react2.default.createElement(
	            _List2.default,
	            _extends({}, other, {
	              ref: 'list',
	              style: mergedListStyles
	            }),
	            newChildren
	          )
	        )
	      );
	    }
	  }]);

	  return Menu;
	}(_react.Component);

	Menu.propTypes = {
	  /**
	   * If true, the menu will apply transitions when it
	   * is added to the DOM. In order for transitions to
	   * work, wrap the menu inside a `ReactTransitionGroup`.
	   */
	  animated: (0, _deprecatedPropType2.default)(_react.PropTypes.bool, 'Instead, use a [Popover](/#/components/popover).'),
	  /**
	   * If true, the width of the menu will be set automatically
	   * according to the widths of its children,
	   * using proper keyline increments (64px for desktop,
	   * 56px otherwise).
	   */
	  autoWidth: _react.PropTypes.bool,
	  /**
	   * The content of the menu. This is usually used to pass `MenuItem`
	   * elements.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the menu item will render with compact desktop styles.
	   */
	  desktop: _react.PropTypes.bool,
	  /**
	   * If true, the menu will not be auto-focused.
	   */
	  disableAutoFocus: _react.PropTypes.bool,
	  /**
	   * If true, the menu will be keyboard-focused initially.
	   */
	  initiallyKeyboardFocused: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _react.PropTypes.object,
	  /**
	   * The maximum height of the menu in pixels. If specified,
	   * the menu will be scrollable if it is taller than the provided
	   * height.
	   */
	  maxHeight: _react.PropTypes.number,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _react.PropTypes.bool,
	  /**
	   * Callback function fired when a menu item with `value` not
	   * equal to the current `value` of the menu is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {any}  value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _react.PropTypes.func,
	  /**
	   * Callback function fired when the menu is focused and the *Esc* key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onEscKeyDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when a menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {object} menuItem The menu item.
	   * @param {number} index The index of the menu item.
	   */
	  onItemTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function fired when the menu is focused and a key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onKeyDown: _react.PropTypes.func,
	  /**
	   * This is the placement of the menu relative to the `IconButton`.
	   */
	  openDirection: (0, _deprecatedPropType2.default)(_propTypes2.default.corners, 'Instead, use a [Popover](/#/components/popover).'),
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   * This component also supports valueLink.
	   */
	  value: _react.PropTypes.any,
	  /**
	   * ValueLink for the menu's `value`.
	   */
	  valueLink: _react.PropTypes.object,
	  /**
	   * The width of the menu. If not specified, the menu's width
	   * will be set according to the widths of its children, using
	   * proper keyline increments (64px for desktop, 56px otherwise).
	   */
	  width: _propTypes2.default.stringOrNumber,
	  /**
	   * @ignore
	   * Menu no longer supports `zDepth`. Instead, wrap it in `Paper`
	   * or another component that provides zDepth.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	Menu.defaultProps = {
	  autoWidth: true,
	  desktop: false,
	  disableAutoFocus: false,
	  initiallyKeyboardFocused: false,
	  maxHeight: null,
	  multiple: false,
	  onChange: function onChange() {},
	  onEscKeyDown: function onEscKeyDown() {},
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyDown: function onKeyDown() {}
	};
	Menu.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;

	  this.handleClickAway = function (event) {
	    if (event.defaultPrevented) {
	      return;
	    }

	    _this5.setFocusIndex(-1, false);
	  };

	  this.handleKeyDown = function (event) {
	    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
	    switch ((0, _keycode2.default)(event)) {
	      case 'down':
	        event.preventDefault();
	        _this5.incrementKeyboardFocusIndex(filteredChildren);
	        break;
	      case 'esc':
	        _this5.props.onEscKeyDown(event);
	        break;
	      case 'tab':
	        event.preventDefault();
	        if (event.shiftKey) {
	          _this5.decrementKeyboardFocusIndex();
	        } else {
	          _this5.incrementKeyboardFocusIndex(filteredChildren);
	        }
	        break;
	      case 'up':
	        event.preventDefault();
	        _this5.decrementKeyboardFocusIndex();
	        break;
	    }
	    _this5.props.onKeyDown(event);
	  };
	};

	exports.default = Menu;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactEventListener = __webpack_require__(438);

	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

	var _RenderToLayer = __webpack_require__(441);

	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

	var _propTypes = __webpack_require__(391);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Paper = __webpack_require__(442);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _lodash = __webpack_require__(557);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _PopoverAnimationDefault = __webpack_require__(558);

	var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popover = function (_React$Component) {
	  _inherits(Popover, _React$Component);

	  function Popover(props, context) {
	    _classCallCheck(this, Popover);

	    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props, context));

	    _this.renderLayer = function () {
	      var _this$props = _this.props;
	      var animated = _this$props.animated;
	      var animation = _this$props.animation;
	      var children = _this$props.children;
	      var style = _this$props.style;

	      var other = _objectWithoutProperties(_this$props, ['animated', 'animation', 'children', 'style']);

	      var Animation = animation || _PopoverAnimationDefault2.default;
	      var styleRoot = style;

	      if (!Animation) {
	        Animation = _Paper2.default;
	        styleRoot = {
	          position: 'fixed'
	        };
	        if (!_this.state.open) {
	          return null;
	        }
	      }

	      return _react2.default.createElement(
	        Animation,
	        _extends({}, other, { style: styleRoot, open: _this.state.open && !_this.state.closing }),
	        children
	      );
	    };

	    _this.componentClickAway = function () {
	      _this.requestClose('clickAway');
	    };

	    _this.setPlacement = function (scrolling) {
	      if (!_this.state.open) {
	        return;
	      }

	      var anchorEl = _this.props.anchorEl || _this.anchorEl;

	      if (!_this.refs.layer.getLayer()) {
	        return;
	      }

	      var targetEl = _this.refs.layer.getLayer().children[0];
	      if (!targetEl) {
	        return;
	      }

	      var _this$props2 = _this.props;
	      var targetOrigin = _this$props2.targetOrigin;
	      var anchorOrigin = _this$props2.anchorOrigin;


	      var anchor = _this.getAnchorPosition(anchorEl);
	      var target = _this.getTargetPosition(targetEl);

	      var targetPosition = {
	        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	      };

	      if (scrolling && _this.props.autoCloseWhenOffScreen) {
	        _this.autoCloseWhenOffScreen(anchor);
	      }

	      if (_this.props.canAutoPosition) {
	        target = _this.getTargetPosition(targetEl); // update as height may have changed
	        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	      }

	      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	      targetEl.style.maxHeight = window.innerHeight + 'px';
	    };

	    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
	    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 100);

	    _this.state = {
	      open: props.open,
	      closing: false
	    };
	    return _this;
	  }

	  _createClass(Popover, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (nextProps.open !== this.state.open) {
	        if (nextProps.open) {
	          this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	          this.setState({
	            open: true,
	            closing: false
	          });
	        } else {
	          if (nextProps.animated) {
	            this.setState({ closing: true });
	            this.timeout = setTimeout(function () {
	              _this2.setState({
	                open: false
	              });
	            }, 500);
	          } else {
	            this.setState({
	              open: false
	            });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(reason) {
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(reason);
	      }
	    }
	  }, {
	    key: '_resizeAutoPosition',
	    value: function _resizeAutoPosition() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'getAnchorPosition',
	    value: function getAnchorPosition(el) {
	      if (!el) {
	        el = _reactDom2.default.findDOMNode(this);
	      }

	      var rect = el.getBoundingClientRect();
	      var a = {
	        top: rect.top,
	        left: rect.left,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };

	      a.right = rect.right || a.left + a.width;
	      a.bottom = rect.bottom || a.top + a.height;
	      a.middle = a.left + (a.right - a.left) / 2;
	      a.center = a.top + (a.bottom - a.top) / 2;

	      return a;
	    }
	  }, {
	    key: 'getTargetPosition',
	    value: function getTargetPosition(targetEl) {
	      return {
	        top: 0,
	        center: targetEl.offsetHeight / 2,
	        bottom: targetEl.offsetHeight,
	        left: 0,
	        middle: targetEl.offsetWidth / 2,
	        right: targetEl.offsetWidth
	      };
	    }
	  }, {
	    key: 'autoCloseWhenOffScreen',
	    value: function autoCloseWhenOffScreen(anchorPosition) {
	      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWith) {
	        this.requestClose('offScreen');
	      }
	    }
	  }, {
	    key: 'getOverlapMode',
	    value: function getOverlapMode(anchor, target, median) {
	      if ([anchor, target].indexOf(median) >= 0) return 'auto';
	      if (anchor === target) return 'inclusive';
	      return 'exclusive';
	    }
	  }, {
	    key: 'getPositions',
	    value: function getPositions(anchor, target) {
	      var a = _extends({}, anchor);
	      var t = _extends({}, target);

	      var positions = {
	        x: ['left', 'right'].filter(function (p) {
	          return p !== t.horizontal;
	        }),
	        y: ['top', 'bottom'].filter(function (p) {
	          return p !== t.vertical;
	        })
	      };

	      var overlap = {
	        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	      };

	      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

	      if (overlap.y !== 'auto') {
	        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	        if (overlap.y === 'inclusive') {
	          t.vertical = t.vertical;
	        }
	      }

	      if (overlap.x !== 'auto') {
	        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	        if (overlap.y === 'inclusive') {
	          t.horizontal = t.horizontal;
	        }
	      }

	      return {
	        positions: positions,
	        anchorPos: a
	      };
	    }
	  }, {
	    key: 'applyAutoPositionIfNeeded',
	    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	      var _getPositions = this.getPositions(anchorOrigin, targetOrigin);

	      var positions = _getPositions.positions;
	      var anchorPos = _getPositions.anchorPos;


	      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	        if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);else {
	          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	          if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
	        }
	      }
	      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	        if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);else {
	          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	          if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
	        }
	      }
	      return targetPosition;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'none' } },
	        _react2.default.createElement(_reactEventListener2.default, {
	          elementName: 'window',
	          onScroll: this.handleScroll,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(_RenderToLayer2.default, {
	          ref: 'layer',
	          open: this.state.open,
	          componentClickAway: this.componentClickAway,
	          useLayerForClickAway: this.props.useLayerForClickAway,
	          render: this.renderLayer
	        })
	      );
	    }
	  }]);

	  return Popover;
	}(_react2.default.Component);

	Popover.propTypes = {
	  /**
	   * This is the DOM element that will be used to set the position of the
	   * popover.
	   */
	  anchorEl: _react2.default.PropTypes.object,

	  /**
	   * This is the point on the anchor where the popover's
	   * `targetOrigin` will attach to.
	   * Options:
	   * vertical: [top, middle, bottom];
	   * horizontal: [left, center, right].
	   */
	  anchorOrigin: _propTypes2.default.origin,

	  /**
	   * If true, the popover will apply transitions when
	   * it is added to the DOM.
	   */
	  animated: _react2.default.PropTypes.bool,

	  /**
	   * Override the default animation component used.
	   */
	  animation: _react2.default.PropTypes.func,

	  /**
	   * If true, the popover will hide when the anchor is scrolled off the screen.
	   */
	  autoCloseWhenOffScreen: _react2.default.PropTypes.bool,

	  /**
	   * If true, the popover (potentially) ignores `targetOrigin`
	   * and `anchorOrigin` to make itself fit on screen,
	   * which is useful for mobile devices.
	   */
	  canAutoPosition: _react2.default.PropTypes.bool,

	  /**
	   * The content of the popover.
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * Callback function fired when the popover is requested to be closed.
	   *
	   * @param {string} reason The reason for the close request. Possibles values
	   * are 'clickAway' and 'offScreen'.
	   */
	  onRequestClose: _react2.default.PropTypes.func,

	  /**
	   * If true, the popover is visible.
	   */
	  open: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * This is the point on the popover which will attach to
	   * the anchor's origin.
	   * Options:
	   * vertical: [top, middle, bottom];
	   * horizontal: [left, center, right].
	   */
	  targetOrigin: _propTypes2.default.origin,

	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying
	   * elements, and trigger an `onRequestClose('clickAway')` call.
	   */
	  useLayerForClickAway: _react2.default.PropTypes.bool,

	  /**
	   * The zDepth of the popover.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	Popover.defaultProps = {
	  anchorOrigin: {
	    vertical: 'bottom',
	    horizontal: 'left'
	  },
	  animated: true,
	  autoCloseWhenOffScreen: true,
	  canAutoPosition: true,
	  onRequestClose: function onRequestClose() {},
	  open: false,
	  style: {
	    overflowY: 'auto'
	  },
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  useLayerForClickAway: true,
	  zDepth: 1
	};
	Popover.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Popover;

/***/ },

/***/ 557:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = throttle;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(391);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Paper = __webpack_require__(442);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;

	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

	  return {
	    root: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    },
	    horizontal: {
	      maxHeight: '100%',
	      overflowY: 'auto',
	      transform: open ? 'scaleX(1)' : 'scaleX(0)',
	      opacity: open ? 1 : 0,
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	    },
	    vertical: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	    }
	  };
	}

	var PopoverDefaultAnimation = function (_React$Component) {
	  _inherits(PopoverDefaultAnimation, _React$Component);

	  function PopoverDefaultAnimation() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PopoverDefaultAnimation);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoverDefaultAnimation.__proto__ || Object.getPrototypeOf(PopoverDefaultAnimation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PopoverDefaultAnimation, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); //eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: Object.assign(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.horizontal) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.vertical) },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return PopoverDefaultAnimation;
	}(_react2.default.Component);

	PopoverDefaultAnimation.propTypes = {
	  children: _react2.default.PropTypes.node,

	  /**
	   * The css class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,
	  open: _react2.default.PropTypes.bool.isRequired,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,
	  targetOrigin: _propTypes2.default.origin,
	  zDepth: _propTypes2.default.zDepth
	};
	PopoverDefaultAnimation.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverDefaultAnimation.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = PopoverDefaultAnimation;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MenuItem = __webpack_require__(560);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _MenuItem2.default; /**
	                                       * Created by guopeng on 16/4/8.
	                                       */

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(397);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _Popover = __webpack_require__(556);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _check = __webpack_require__(561);

	var _check2 = _interopRequireDefault(_check);

	var _ListItem = __webpack_require__(396);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Menu = __webpack_require__(555);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _pixel = __webpack_require__(420);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var nestedMenuStyle = {
	  position: 'relative'
	};

	function getStyles(props, context) {
	  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
	  var textColor = context.muiTheme.baseTheme.palette.textColor;
	  var leftIndent = props.desktop ? '1.707rem' : '1.92rem'; //64 : 72;
	  var sidePadding = props.desktop ? '0.64rem' : '0.427rem'; //24 : 16;

	  var styles = {
	    root: {
	      color: props.disabled ? disabledColor : textColor,
	      lineHeight: props.desktop ? '0.853rem' : '1.28rem', //'32px' : '48px',
	      fontSize: props.desktop ? '0.4rem' : '0.427rem', //15 : 16,
	      whiteSpace: 'nowrap'
	    },

	    innerDivStyle: {
	      paddingLeft: (0, _pixel.px2px)(props.leftIcon || props.insetChildren || props.checked ? leftIndent : sidePadding),
	      paddingRight: (0, _pixel.px2px)(sidePadding),
	      paddingBottom: 0,
	      paddingTop: 0,
	      display: 'flex',
	      justifyContent: 'space-between',
	      alignContent: 'space-between'
	    },

	    secondaryText: {
	      order: 2,
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: 'nowrap'
	    },

	    leftIconDesktop: {
	      margin: 0,
	      left: '0.64rem', //24,
	      top: '0.107rem' //4,
	    },

	    rightIconDesktop: {
	      margin: 0,
	      right: '0.64rem', //24,
	      top: '0.107rem', //4,
	      fill: context.muiTheme.menuItem.rightIconDesktopFill
	    }
	  };

	  return styles;
	}

	var MenuItem = function (_React$Component) {
	  _inherits(MenuItem, _React$Component);

	  function MenuItem() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MenuItem);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.cloneMenuItem = function (item) {
	      return _react2.default.cloneElement(item, {
	        onTouchTap: function onTouchTap(event) {
	          if (!item.props.menuItems) {
	            _this.handleRequestClose();
	          }

	          if (item.props.onTouchTap) {
	            item.props.onTouchTap(event);
	          }
	        },
	        onRequestClose: _this.handleRequestClose
	      });
	    }, _this.handleTouchTap = function (event) {
	      event.preventDefault();

	      _this.setState({
	        open: true,
	        anchorEl: _reactDom2.default.findDOMNode(_this)
	      });

	      if (_this.props.onTouchTap) {
	        _this.props.onTouchTap(event);
	      }
	    }, _this.handleRequestClose = function () {
	      _this.setState({
	        open: false,
	        anchorEl: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MenuItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.open && nextProps.focusState === 'none') {
	        this.handleRequestClose();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.state.open) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState() {
	      this.refs.listItem.applyFocusState(this.props.focusState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var checked = _props.checked;
	      var children = _props.children;
	      var desktop = _props.desktop;
	      var disabled = _props.disabled;
	      var focusState = _props.focusState;
	      var innerDivStyle = _props.innerDivStyle;
	      var insetChildren = _props.insetChildren;
	      var leftIcon = _props.leftIcon;
	      var menuItems = _props.menuItems;
	      var rightIcon = _props.rightIcon;
	      var secondaryText = _props.secondaryText;
	      var style = _props.style;
	      var value = _props.value;

	      var other = _objectWithoutProperties(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'value']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = Object.assign(styles.root, style);
	      var mergedInnerDivStyles = Object.assign(styles.innerDivStyle, innerDivStyle);

	      //Left Icon
	      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	      if (leftIconElement && desktop) {
	        var mergedLeftIconStyles = Object.assign(styles.leftIconDesktop, leftIconElement.props.style);
	        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	      }

	      //Right Icon
	      var rightIconElement = void 0;
	      if (rightIcon) {
	        var mergedRightIconStyles = desktop ? Object.assign(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	      }

	      //Secondary Text
	      var secondaryTextElement = void 0;
	      if (secondaryText) {
	        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? Object.assign(styles.secondaryText, secondaryText.props.style) : null;

	        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.secondaryText) },
	          secondaryText
	        );
	      }
	      var childMenuPopover = void 0;
	      if (menuItems) {
	        childMenuPopover = _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: { horizontal: 'right', vertical: 'top' },
	            anchorEl: this.state.anchorEl,
	            open: this.state.open,
	            useLayerForClickAway: false,
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	            _react2.default.Children.map(menuItems, this.cloneMenuItem)
	          )
	        );
	        other.onTouchTap = this.handleTouchTap;
	      }

	      return _react2.default.createElement(
	        _ListItem2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          innerDivStyle: mergedInnerDivStyles,
	          insetChildren: insetChildren,
	          leftIcon: leftIconElement,
	          ref: 'listItem',
	          rightIcon: rightIconElement,
	          style: mergedRootStyles
	        }),
	        children,
	        secondaryTextElement,
	        childMenuPopover
	      );
	    }
	  }]);

	  return MenuItem;
	}(_react2.default.Component);

	MenuItem.muiName = 'MenuItem';
	MenuItem.propTypes = {
	  /**
	   * If true, a left check mark will be rendered.
	   */
	  checked: _react2.default.PropTypes.bool,

	  /**
	   * Elements passed as children to the underlying `ListItem`.
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * @ignore
	   * If true, the menu item will render with compact desktop
	   * styles.
	   */
	  desktop: _react2.default.PropTypes.bool,

	  /**
	   * If true, the menu item will be disabled.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * The focus state of the menu item. This prop is used to set the focus
	   * state of the underlying `ListItem`.
	   */
	  focusState: _react2.default.PropTypes.oneOf(['none', 'focused', 'keyboard-focused']),

	  /**
	   * Override the inline-styles of the inner div.
	   */
	  innerDivStyle: _react2.default.PropTypes.object,

	  /**
	   * If true, the children will be indented.
	   * This is only needed when there is no `leftIcon`.
	   */
	  insetChildren: _react2.default.PropTypes.bool,

	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _react2.default.PropTypes.element,

	  /**
	   * `MenuItem` elements to nest within the menu item.
	   */
	  menuItems: _react2.default.PropTypes.node,

	  /**
	   * Callback function fired when the menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   */
	  onTouchTap: _react2.default.PropTypes.func,

	  /**
	   * Can be used to render primary text within the menu item.
	   */
	  primaryText: _react2.default.PropTypes.node,

	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _react2.default.PropTypes.element,

	  /**
	   * Can be used to render secondary text within the menu item.
	   */
	  secondaryText: _react2.default.PropTypes.node,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * The value of the menu item.
	   */
	  value: _react2.default.PropTypes.any,

	  /**
	   * 重写根结点 css class
	   */
	  className: _react2.default.PropTypes.string
	};
	MenuItem.defaultProps = {
	  checked: false,
	  desktop: false,
	  disabled: false,
	  focusState: 'none',
	  insetChildren: false,
	  className: 'chanjet-ui-menu-item'
	};
	MenuItem.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = MenuItem;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(422);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(430);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationCheck = function NavigationCheck(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	  );
	};
	NavigationCheck = (0, _pure2.default)(NavigationCheck);
	NavigationCheck.displayName = 'NavigationCheck';

	exports.default = NavigationCheck;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _inbox = __webpack_require__(537);

	var _inbox2 = _interopRequireDefault(_inbox);

	var _grade = __webpack_require__(538);

	var _grade2 = _interopRequireDefault(_grade);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _info = __webpack_require__(540);

	var _info2 = _interopRequireDefault(_info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SimpleList = function (_React$Component) {
	    _inherits(SimpleList, _React$Component);

	    function SimpleList() {
	        _classCallCheck(this, SimpleList);

	        return _possibleConstructorReturn(this, (SimpleList.__proto__ || Object.getPrototypeOf(SimpleList)).apply(this, arguments));
	    }

	    _createClass(SimpleList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    'List的简单使用，在左右两侧加入SVG图标'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.demo },
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Inbox', leftIcon: _react2.default.createElement(_inbox2.default, null) }),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Starred', leftIcon: _react2.default.createElement(_grade2.default, null) })
	                    ),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'All mail', rightIcon: _react2.default.createElement(_info2.default, null) }),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Trash', rightIcon: _react2.default.createElement(_info2.default, null) })
	                    )
	                )
	            );
	        }
	    }]);

	    return SimpleList;
	}(_react2.default.Component);

	exports.default = SimpleList;

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _chatBubble = __webpack_require__(541);

	var _chatBubble2 = _interopRequireDefault(_chatBubble);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ChatList = function (_React$Component) {
	    _inherits(ChatList, _React$Component);

	    function ChatList() {
	        _classCallCheck(this, ChatList);

	        return _possibleConstructorReturn(this, (ChatList.__proto__ || Object.getPrototypeOf(ChatList)).apply(this, arguments));
	    }

	    _createClass(ChatList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    '用List来做一个聊天列表'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.demo },
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Eric Hoffman',
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' }),
	                            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	                        }),
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Grace Ng',
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' }),
	                            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	                        }),
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Kerem Suer',
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' }),
	                            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return ChatList;
	}(_react2.default.Component);

	exports.default = ChatList;

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _grade = __webpack_require__(538);

	var _grade2 = _interopRequireDefault(_grade);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _colors = __webpack_require__(314);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ContactList = function (_React$Component) {
	    _inherits(ContactList, _React$Component);

	    function ContactList() {
	        _classCallCheck(this, ContactList);

	        return _possibleConstructorReturn(this, (ContactList.__proto__ || Object.getPrototypeOf(ContactList)).apply(this, arguments));
	    }

	    _createClass(ContactList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    '用List来做一个联系人列表'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.demo },
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Chelsea Otakan',
	                            leftIcon: _react2.default.createElement(_grade2.default, { color: _colors.pinkA200 }),
	                            rightAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' })
	                        }),
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Eric Hoffman',
	                            insetChildren: true,
	                            rightAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' })
	                        })
	                    ),
	                    _react2.default.createElement(_Divider2.default, { inset: true }),
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Adelle Charles',
	                            leftAvatar: _react2.default.createElement(
	                                _Avatar2.default,
	                                {
	                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
	                                    style: { left: 8 }
	                                },
	                                'A'
	                            ),
	                            rightAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' })
	                        }),
	                        _react2.default.createElement(_ListItem2.default, {
	                            primaryText: 'Adham Dannaway',
	                            insetChildren: true,
	                            rightAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' })
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return ContactList;
	}(_react2.default.Component);

	exports.default = ContactList;

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Subheader = __webpack_require__(545);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _colors = __webpack_require__(314);

	var _info = __webpack_require__(540);

	var _info2 = _interopRequireDefault(_info);

	var _folder = __webpack_require__(542);

	var _folder2 = _interopRequireDefault(_folder);

	var _assignment = __webpack_require__(543);

	var _assignment2 = _interopRequireDefault(_assignment);

	var _insertChart = __webpack_require__(544);

	var _insertChart2 = _interopRequireDefault(_insertChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var FoldersList = function (_React$Component) {
	    _inherits(FoldersList, _React$Component);

	    function FoldersList() {
	        _classCallCheck(this, FoldersList);

	        return _possibleConstructorReturn(this, (FoldersList.__proto__ || Object.getPrototypeOf(FoldersList)).apply(this, arguments));
	    }

	    _createClass(FoldersList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    '用List来做一个文件夹列表'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.demo },
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(
	                            _Subheader2.default,
	                            { inset: true },
	                            '文件夹'
	                        ),
	                        _react2.default.createElement(_ListItem2.default, {
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }),
	                            rightIcon: _react2.default.createElement(_info2.default, null),
	                            primaryText: 'Photos',
	                            secondaryText: 'Jan 9, 2016'
	                        }),
	                        _react2.default.createElement(_ListItem2.default, {
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }),
	                            rightIcon: _react2.default.createElement(_info2.default, null),
	                            primaryText: 'Recipes',
	                            secondaryText: 'Jan 17, 2016'
	                        })
	                    ),
	                    _react2.default.createElement(_Divider2.default, { inset: true }),
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(
	                            _Subheader2.default,
	                            { inset: true },
	                            '文件'
	                        ),
	                        _react2.default.createElement(_ListItem2.default, {
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_assignment2.default, null), backgroundColor: _colors.blue500 }),
	                            rightIcon: _react2.default.createElement(_info2.default, null),
	                            primaryText: 'Vacation itinerary',
	                            secondaryText: 'Jan 20, 2016'
	                        }),
	                        _react2.default.createElement(_ListItem2.default, {
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_insertChart2.default, null), backgroundColor: _colors.yellow600 }),
	                            rightIcon: _react2.default.createElement(_info2.default, null),
	                            primaryText: 'Kitchen remodel',
	                            secondaryText: 'Jan 10, 2016'
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return FoldersList;
	}(_react2.default.Component);

	exports.default = FoldersList;

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _inbox = __webpack_require__(537);

	var _inbox2 = _interopRequireDefault(_inbox);

	var _grade = __webpack_require__(538);

	var _grade2 = _interopRequireDefault(_grade);

	var _send = __webpack_require__(539);

	var _send2 = _interopRequireDefault(_send);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var NestedList = function (_React$Component) {
	    _inherits(NestedList, _React$Component);

	    function NestedList() {
	        _classCallCheck(this, NestedList);

	        return _possibleConstructorReturn(this, (NestedList.__proto__ || Object.getPrototypeOf(NestedList)).apply(this, arguments));
	    }

	    _createClass(NestedList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    'ListItem嵌套的列表'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    _List2.default,
	                    { style: styles.demo },
	                    _react2.default.createElement(_ListItem2.default, { primaryText: '发件箱', leftIcon: _react2.default.createElement(_send2.default, null) }),
	                    _react2.default.createElement(_ListItem2.default, {
	                        primaryText: '收件箱',
	                        leftIcon: _react2.default.createElement(_inbox2.default, null),
	                        initiallyOpen: true,
	                        primaryTogglesNestedList: true,
	                        nestedItems: [_react2.default.createElement(_ListItem2.default, {
	                            key: 1,
	                            primaryText: 'Chanjet',
	                            leftIcon: _react2.default.createElement(_inbox2.default, null),
	                            disabled: true,
	                            nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1, primaryText: '标记', leftIcon: _react2.default.createElement(_grade2.default, null) })]
	                        })]
	                    })
	                )
	            );
	        }
	    }]);

	    return NestedList;
	}(_react2.default.Component);

	exports.default = NestedList;

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Subheader = __webpack_require__(545);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _Toggle = __webpack_require__(546);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _Checkbox = __webpack_require__(548);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ToggleList = function (_React$Component) {
	    _inherits(ToggleList, _React$Component);

	    function ToggleList() {
	        _classCallCheck(this, ToggleList);

	        return _possibleConstructorReturn(this, (ToggleList.__proto__ || Object.getPrototypeOf(ToggleList)).apply(this, arguments));
	    }

	    _createClass(ToggleList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    '支持Checkbox和Toggle switch 的列表'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.demo },
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(
	                            _Subheader2.default,
	                            null,
	                            'Priority Interruptions'
	                        ),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Events and reminders', rightToggle: _react2.default.createElement(_Toggle2.default, null) }),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Calls', rightToggle: _react2.default.createElement(_Toggle2.default, null) }),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Messages', rightToggle: _react2.default.createElement(_Toggle2.default, null) })
	                    ),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(
	                        _List2.default,
	                        null,
	                        _react2.default.createElement(
	                            _Subheader2.default,
	                            null,
	                            'Hangout Notifications'
	                        ),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Notifications', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Sounds', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }),
	                        _react2.default.createElement(_ListItem2.default, { primaryText: 'Video sounds', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) })
	                    )
	                )
	            );
	        }
	    }]);

	    return ToggleList;
	}(_react2.default.Component);

	exports.default = ToggleList;

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Subheader = __webpack_require__(545);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _colors = __webpack_require__(314);

	var _moreVert = __webpack_require__(552);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _IconButton = __webpack_require__(520);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(553);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(559);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/21.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var IconBtnList = function (_React$Component) {
	    _inherits(IconBtnList, _React$Component);

	    function IconBtnList() {
	        _classCallCheck(this, IconBtnList);

	        return _possibleConstructorReturn(this, (IconBtnList.__proto__ || Object.getPrototypeOf(IconBtnList)).apply(this, arguments));
	    }

	    _createClass(IconBtnList, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                summary: {
	                    lineHeight: '1.0666666666666667rem',
	                    color: '#0091EA',
	                    paddingLeft: '0.26666666666666666rem'
	                },
	                demo: {
	                    margin: '0 0.5333333333333333rem'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var iconButtonElement = _react2.default.createElement(
	                _IconButton2.default,
	                {
	                    touch: true,
	                    tooltip: 'more',
	                    tooltipPosition: 'bottom-left'
	                },
	                _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
	            );

	            var rightIconMenu = _react2.default.createElement(
	                _IconMenu2.default,
	                { iconButtonElement: iconButtonElement },
	                _react2.default.createElement(
	                    _MenuItem2.default,
	                    null,
	                    'Reply'
	                ),
	                _react2.default.createElement(
	                    _MenuItem2.default,
	                    null,
	                    'Forward'
	                ),
	                _react2.default.createElement(
	                    _MenuItem2.default,
	                    null,
	                    'Delete'
	                )
	            );

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    '支持有tooltipd的IconButton的列表'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    _List2.default,
	                    { style: styles.demo },
	                    _react2.default.createElement(
	                        _Subheader2.default,
	                        null,
	                        'Today'
	                    ),
	                    _react2.default.createElement(_ListItem2.default, {
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }),
	                        rightIconButton: rightIconMenu,
	                        primaryText: 'Brendan Lim',
	                        secondaryText: _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'span',
	                                { style: { color: _colors.darkBlack } },
	                                'Brunch this weekend?'
	                            ),
	                            _react2.default.createElement('br', null),
	                            'I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'
	                        ),
	                        secondaryTextLines: 2
	                    }),
	                    _react2.default.createElement(_Divider2.default, { inset: true }),
	                    _react2.default.createElement(_ListItem2.default, {
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kolage-128.jpg' }),
	                        rightIconButton: rightIconMenu,
	                        primaryText: 'me, Scott, Jennifer',
	                        secondaryText: _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'span',
	                                { style: { color: _colors.darkBlack } },
	                                'Summer BBQ'
	                            ),
	                            _react2.default.createElement('br', null),
	                            'Wish I could come, but I\'m out of town this weekend.'
	                        ),
	                        secondaryTextLines: 2
	                    })
	                )
	            );
	        }
	    }]);

	    return IconBtnList;
	}(_react2.default.Component);

	exports.default = IconBtnList;

/***/ }

});