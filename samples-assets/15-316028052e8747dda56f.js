webpackJsonp([15],{

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

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.commonProps = exports.Scroller = exports.WrapperForSimulate = exports.WrapperForNative = undefined;

	var _WrapperForNative = __webpack_require__(495);

	var _WrapperForNative2 = _interopRequireDefault(_WrapperForNative);

	var _WrapperForSimulate = __webpack_require__(504);

	var _WrapperForSimulate2 = _interopRequireDefault(_WrapperForSimulate);

	var _Scroller = __webpack_require__(505);

	var _Scroller2 = _interopRequireDefault(_Scroller);

	var _props = __webpack_require__(496);

	var commonProps = _interopRequireWildcard(_props);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by TonyJiang on 16/5/9.
	 */

	exports.WrapperForNative = _WrapperForNative2.default;
	exports.WrapperForSimulate = _WrapperForSimulate2.default;
	exports.Scroller = _Scroller2.default;
	exports.commonProps = commonProps;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _props2 = __webpack_require__(496);

	var _constant = __webpack_require__(498);

	var _Refresher = __webpack_require__(499);

	var _Refresher2 = _interopRequireDefault(_Refresher);

	var _ScrollerBase = __webpack_require__(502);

	var _ScrollerBase2 = _interopRequireDefault(_ScrollerBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/5/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	//工具


	//子组件


	var WrapperForNative = function (_React$Component) {
	    _inherits(WrapperForNative, _React$Component);

	    function WrapperForNative() {
	        var _ref, _reach;

	        var _temp, _this, _ret;

	        _classCallCheck(this, WrapperForNative);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapperForNative.__proto__ || Object.getPrototypeOf(WrapperForNative)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            reach: (_reach = {}, _defineProperty(_reach, _constant.SIDE.TOP, false), _defineProperty(_reach, _constant.SIDE.BOTTOM, false), _reach),

	            enableRefresh: false,
	            enableLoadMore: false,

	            //在_initDynamicState中定义
	            status: undefined,
	            isReach: undefined,
	            springConstant: undefined
	        }, _this._stateInShadow = {
	            status: undefined
	        }, _this._eventHandler = {
	            dragStart: function dragStart(event) {
	                var pageY = event.touches[0].pageY;

	                _this.state.deltaY = pageY;
	                if (_this.state.isReach) {
	                    _this.state.startDeltaY = pageY;
	                }
	            },

	            /**
	             * 安卓:
	             *  使用touchmove来计算移动距离
	             */
	            dragMoveAndroid: function dragMoveAndroid(event) {

	                if (!this.state.isReach || this.state.status == _constant.STATUS.DOING) {
	                    return;
	                }

	                var pageY = event.touches[0].pageY;

	                this.state.deltaY = pageY;

	                /**
	                 * reachTopFirstRunner:
	                 *      当屏幕滚动速度过快时, 两次touchmove事件之间的y轴高度差值较大,
	                 *      会导致当reachTop触发后,下一个touchmove的y轴产生跳屏的现象,
	                 *      所以当reachTop触发后的第一个touchmove事件才真正被认为是startDeltaY,
	                 *      从而解决跳屏问题;
	                 */
	                if (this.state.reachFirstRunner) {
	                    this.state.reachFirstRunner = false;
	                    this.state.startDeltaY = pageY;
	                }

	                var deltaY = (pageY - this.state.startDeltaY) / this.state.springConstant;

	                this.state.direction = deltaY > 0 ? _constant.DIRECTION.DOWN : _constant.DIRECTION.UP;

	                // console.log('deltaY' , deltaY);
	                //如果没有到顶并且下拉了, 说明此时内容中又滚动条, 所以不进行移动
	                if (!this.state.reach[_constant.SIDE.TOP] && deltaY > 0 || !this.state.reach[_constant.SIDE.BOTTOM] && deltaY < 0) {
	                    return;
	                }

	                event.preventDefault();
	                event.stopPropagation();

	                this._scrollTo(0, deltaY);

	                if (Math.abs(deltaY) > this.props.distanceToRefresh) {
	                    if (this.state.status != _constant.STATUS.TRIGGER) {
	                        this.state.status = _constant.STATUS.TRIGGER;
	                    }
	                } else {
	                    if (this.state.status != _constant.STATUS.INITIAL) {
	                        this.state.status = _constant.STATUS.INITIAL;
	                    }
	                }
	            },


	            /**
	             * IOS:
	             *  使用系统原生scroll事件来计算移动距离(设置内容的height超过100%来保证任何时候都有滚动条)
	             */
	            dragMoveIOS: function dragMoveIOS() {
	                // console.log(this.state.scrollData);
	                var _state$scrollData = this.state.scrollData;
	                var scrollTop = _state$scrollData.scrollTop;
	                var offsetHeight = _state$scrollData.offsetHeight;
	                var scrollHeight = _state$scrollData.scrollHeight;


	                if (!this.state.isReach || this.state.status == _constant.STATUS.DOING) {
	                    return;
	                }

	                var deltaY = undefined;
	                //当已经到达内容顶部并继续往下拖拽时
	                if (scrollTop < 0) {
	                    deltaY = scrollTop / this.state.springConstant;
	                    this.state.direction = _constant.DIRECTION.DOWN;

	                    //当已经到达内容底部并继续往上拖拽时
	                } else if (scrollTop + offsetHeight > scrollHeight) {
	                    deltaY = (scrollTop + offsetHeight - scrollHeight) / this.state.springConstant;
	                    this.state.direction = _constant.DIRECTION.UP;
	                }

	                if (Math.abs(deltaY) > this.props.distanceToRefresh) {
	                    if (this.state.status != _constant.STATUS.TRIGGER) {
	                        this.state.status = _constant.STATUS.TRIGGER;
	                    }
	                } else {
	                    if (this.state.status != _constant.STATUS.INITIAL) {
	                        this.state.status = _constant.STATUS.INITIAL;
	                    }
	                }
	            },


	            dragEnd: function dragEnd() {
	                var _triggerLine, _handler;

	                if (_this.state.status == _constant.STATUS.DOING) {
	                    return;
	                }

	                var _this$props = _this.props;
	                var distanceToRefresh = _this$props.distanceToRefresh;
	                var refreshHandler = _this$props.refreshHandler;
	                var moreHandler = _this$props.moreHandler;
	                var loadingMinTime = _this$props.loadingMinTime;


	                var triggerLine = (_triggerLine = {}, _defineProperty(_triggerLine, _constant.DIRECTION.DOWN, distanceToRefresh), _defineProperty(_triggerLine, _constant.DIRECTION.UP, 0 - distanceToRefresh), _triggerLine);

	                var handler = (_handler = {}, _defineProperty(_handler, _constant.DIRECTION.DOWN, refreshHandler), _defineProperty(_handler, _constant.DIRECTION.UP, moreHandler), _handler);

	                var targetDeltaY = 0;

	                if (_this.state.status == _constant.STATUS.TRIGGER) {
	                    (function () {

	                        var actionHandler = undefined;
	                        var canDo = _this.state.direction == _constant.DIRECTION.DOWN ? _this.state.enableRefresh : _this.state.enableLoadMore;

	                        if (canDo) {
	                            targetDeltaY = triggerLine[_this.state.direction];
	                            actionHandler = handler[_this.state.direction];

	                            _this.state.status = _constant.STATUS.DOING;
	                            setTimeout(function () {
	                                actionHandler(_this._completeAnimation.bind(_this));
	                            }, loadingMinTime);
	                        }
	                    })();
	                } else {
	                    //ios下,弹性滚动自动还原
	                    // console.log('不刷新,还原');
	                }

	                _this._scrollTo(0, targetDeltaY, 400);
	            },

	            scroll: function scroll(event) {
	                // console.log('scrollHandler');
	                _this.state.scrollData = event;
	                if (_this.props.scrollHandler) {
	                    _this.props.scrollHandler(event);
	                }
	            },

	            //滚动达到边缘的处理事件
	            reach: function reach(type) {
	                _this.state.reach[type] = true;
	                _this.state.reachFirstRunner = true;

	                _this.state.startDeltaY = _this.state.deltaY;
	            },

	            //滚动离开边缘的处理事件
	            leave: function leave(type) {
	                _this.state.reach[type] = false;
	                //如果是安卓,移动速度过快时,需要在leave时重置位置
	                if (_this.state.status != _constant.STATUS.DOING) {
	                    _this._scrollTo(0, 0);
	                }
	            }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(WrapperForNative, [{
	        key: 'componentWillMount',


	        //根据props中事件监听, 判断是否启用refresh和loadMore
	        value: function componentWillMount() {
	            this._checkEnable(this.props);
	        }

	        //根据props中事件监听, 判断是否启用refresh和loadMore

	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            this._checkEnable(newProps);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._initDynamicState();
	            this._initEvent();
	        }
	    }, {
	        key: '_checkEnable',
	        value: function _checkEnable(props) {
	            this.state.enableRefresh = props.hasOwnProperty('refreshHandler') && typeof props.refreshHandler == 'function';
	            this.state.enableLoadMore = props.hasOwnProperty('moreHandler') && typeof props.moreHandler == 'function';
	        }
	    }, {
	        key: '_getStyles',
	        value: function _getStyles() {
	            var _props = this.props;
	            var displayWidth = _props.displayWidth;
	            var displayHeight = _props.displayHeight;
	            var style = _props.style;
	            var refreshColor = _props.refreshColor;
	            var moreColor = _props.moreColor;


	            var styles = {

	                root: Object.assign({
	                    position: 'relative',
	                    width: displayWidth,
	                    height: displayHeight,
	                    overflowY: 'hidden'
	                }, style || {}),

	                refresh: {
	                    color: refreshColor
	                },

	                more: {
	                    color: moreColor
	                },

	                scrollerWrapper: {
	                    position: 'absolute',
	                    top: 0,
	                    left: 0,
	                    right: 0,
	                    bottom: 0,
	                    zIndex: 2,
	                    overflow: 'hidden'
	                },

	                contentWrapper: {
	                    minHeight: mutants.env.os == mutants.env.constant.os.ios ? '100.2%' : '100%',
	                    background: '#fff'
	                }

	            };

	            return styles;
	        }

	        /**
	         * 定义动态state
	         * 为了解决组件状态发生改变时,不想触发自己的render,但是想要改变子组件的状态.
	         * 通过PropertySetter来调用子组件改变对应状态的方法.
	         */

	    }, {
	        key: '_initDynamicState',
	        value: function _initDynamicState() {
	            var _this2 = this;

	            //定义state.status
	            Object.defineProperty(this.state, 'status', {
	                get: function get() {
	                    return _this2._stateInShadow.status;
	                },
	                set: function set(value) {
	                    if (_this2._stateInShadow.status != value) {
	                        _this2._stateInShadow.status = value;

	                        //根据拖拽方向判断当前更新的状态
	                        var refresher = _this2.state.direction == _constant.DIRECTION.DOWN ? _this2.refs.header : _this2.refs.bottom;
	                        var enable = _this2.state.direction == _constant.DIRECTION.DOWN ? _this2.state.enableRefresh : _this2.state.enableLoadMore;

	                        if (enable) {
	                            //更新子组件的状态
	                            refresher.updateStatus(_this2._stateInShadow.status);
	                        }
	                    }
	                }
	            });

	            //定义isReach
	            Object.defineProperty(this.state, 'isReach', {
	                get: function get() {
	                    return _this2.state.reach[_constant.SIDE.TOP] || _this2.state.reach[_constant.SIDE.BOTTOM];
	                }
	            });

	            //定义弹性
	            Object.defineProperty(this.state, 'springConstant', {
	                value: mutants.env.os == mutants.env.constant.os.ios ? 1 : this.props.resistance
	            });
	        }

	        //事件处理

	    }, {
	        key: 'scrollTo',


	        //提供对外滚动方法
	        value: function scrollTo(deltaY) {
	            var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            this.refs.scroller.scrollTo(deltaY, duration);
	        }
	    }, {
	        key: '_scrollTo',
	        value: function _scrollTo() {
	            var deltaX = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var deltaY = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var duration = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	            var dom = this.refs.scrollerWrapper;

	            //设置时间
	            dom.style['-webkit-transition-duration'] = dom.style['transition-duration'] = duration + 'ms';
	            //设置位移
	            dom.style['-webkit-transform'] = dom.style['transform'] = 'translate3d(' + deltaX + 'px,' + deltaY + 'px, 0px)';
	        }
	    }, {
	        key: '_completeAnimation',
	        value: function _completeAnimation() {
	            //还原refresh状态
	            if (this.state.status == _constant.STATUS.DOING) {
	                this.state.status = _constant.STATUS.INITIAL;
	                this._scrollTo(0, 0, 400);
	            }
	        }

	        //绑定事件

	    }, {
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _mutants = mutants;
	            var env = _mutants.env;
	            //根据当前的环境判断处理方式

	            var dragMoveHandler = env.os == env.constant.os.ios ? this._eventHandler.dragMoveIOS : this._eventHandler.dragMoveAndroid;

	            this.refs.domNode.addEventListener('touchstart', this._eventHandler.dragStart, true);
	            this.refs.domNode.addEventListener('touchmove', dragMoveHandler.bind(this), true);
	            this.refs.domNode.addEventListener('touchend', this._eventHandler.dragEnd, true);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var styles = this._getStyles();

	            var refreshLoading = _react2.default.createElement(_Refresher2.default, {
	                ref: 'header',
	                style: { position: 'absolute', top: 0 },
	                enable: this.state.enableRefresh,
	                loadingMinTime: this.props.loadingMinTime,
	                type: this.props.loadingStyle,
	                distanceToRefresh: this.props.distanceToRefresh,
	                statusLabel: this.props.refreshStatusLabel,
	                direction: _constant.DIRECTION.DOWN,
	                color: styles.refresh.color,
	                status: this.state.status
	            });

	            var content = _react2.default.createElement(
	                'div',
	                { ref: 'scrollerWrapper', style: styles.scrollerWrapper },
	                _react2.default.createElement(
	                    _ScrollerBase2.default,
	                    {
	                        ref: 'scroller',
	                        onScroll: this._eventHandler.scroll,
	                        onReachTop: this._eventHandler.reach.bind(this, _constant.SIDE.TOP),
	                        onLeaveTop: this._eventHandler.leave.bind(this, _constant.SIDE.TOP),
	                        onReachBottom: this._eventHandler.reach.bind(this, _constant.SIDE.BOTTOM),
	                        onLeaveBottom: this._eventHandler.leave.bind(this, _constant.SIDE.BOTTOM)
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.contentWrapper },
	                        this.props.children
	                    )
	                )
	            );

	            var moreLoading = _react2.default.createElement(_Refresher2.default, {
	                ref: 'bottom',
	                style: { position: 'absolute', bottom: 0 },
	                enable: this.state.enableLoadMore,
	                loadingMinTime: this.props.loadingMinTime,
	                type: this.props.loadingStyle,
	                distanceToRefresh: this.props.distanceToRefresh,
	                statusLabel: this.props.moreStatusLabel,
	                direction: _constant.DIRECTION.UP,
	                color: styles.more.color,
	                status: this.state.moreStatus
	            });

	            return _react2.default.createElement(
	                'div',
	                { ref: 'domNode', style: styles.root },
	                refreshLoading,
	                content,
	                moreLoading
	            );
	        }
	    }]);

	    return WrapperForNative;
	}(_react2.default.Component);

	WrapperForNative.propTypes = _props2.propTypes;
	WrapperForNative.defaultProps = _props2.defaultProps;
	exports.default = WrapperForNative;

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.defaultProps = exports.propTypes = undefined;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _pixel = __webpack_require__(497);

	var _constant = __webpack_require__(498);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	    //是否启用顶部下拉刷新 , 默认值: true
	    // enableRefresh: React.PropTypes.bool,
	    //是否启动底部上拉加载 , 默认值: true
	    // enableLoadMore: React.PropTypes.bool,
	    //处于loading状态后延迟多长时间真正触发事件 , 默认值: 0
	    loadingMinTime: _react2.default.PropTypes.number,
	    //顶部和底部触发刷新时, 显示文字还是图标, 默认图标
	    loadingStyle: _react2.default.PropTypes.oneOf([_constant.TYPE.ICON, _constant.TYPE.LABEL]),

	    displayWidth: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	    displayHeight: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),

	    //refresh提示的颜色 , icon 或者 文字的颜色
	    refreshColor: _react2.default.PropTypes.string,
	    //refresh提示的颜色 , icon 或者 文字的颜色
	    moreColor: _react2.default.PropTypes.string,

	    className: _react2.default.PropTypes.string,

	    //弹性系数 , 默认值: 2.5
	    resistance: _react2.default.PropTypes.number,
	    //触发刷新的距离 , 默认值: 45
	    distanceToRefresh: _react2.default.PropTypes.number,
	    //是否强制使用模拟版
	    useSimulate: _react2.default.PropTypes.bool,

	    //触发刷新的回调函数
	    refreshHandler: _react2.default.PropTypes.func,
	    //触发加载更多的回调函数
	    moreHandler: _react2.default.PropTypes.func,
	    //触发滚动事件
	    scrollHandler: _react2.default.PropTypes.func,

	    //刷新状态对应的文字
	    refreshStatusLabel: _react2.default.PropTypes.object,
	    //加载更多状态对应的文字
	    moreStatusLabel: _react2.default.PropTypes.object,

	    //内容区的背景色设置
	    contentBackgroundColor: _react2.default.PropTypes.string,

	    //内容区后边在LoadMore和PullRefresh时能看到的背景
	    totalBackgroundColor: _react2.default.PropTypes.string

	}; /**
	    * Created by TonyJiang on 16/5/30.
	    */


	var defaultProps = {
	    enableRefresh: true,
	    enableLoadMore: true,
	    loadingMinTime: 0,
	    loadingStyle: _constant.TYPE.ICON,

	    displayWidth: '100%',
	    displayHeight: '100%',

	    refreshColor: 'black',
	    moreColor: 'black',

	    className: '',

	    resistance: 2.5,
	    distanceToRefresh: (0, _pixel.px2px)(45 * 2, true),
	    useSimulate: false,

	    refreshStatusLabel: {
	        'init': '下拉刷新',
	        'trigger': '松开刷新',
	        'loading': '正在刷新...',
	        'done': '完成'
	    },
	    moreStatusLabel: {
	        'init': '上拉加载',
	        'trigger': '松开加载',
	        'loading': '正在加载...',
	        'done': '完成'
	    },

	    contentBackgroundColor: '#FFFFFF',
	    rootBackgroundColor: '#F5F5F5'
	};

	exports.propTypes = propTypes;
	exports.defaultProps = defaultProps;

/***/ },

/***/ 497:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.px2rem = px2rem;
	exports.rem2px = rem2px;
	exports.px2px = px2px;
	/**
	 * Created by guopeng on 16/4/8.
	 */

	var rem = window.rem || 75;
	var dpr = window.dpr || 1;

	function px2rem(d, isNum) {
	    var val = parseFloat(d) / 75;
	    if (isNum) {
	        return val;
	    } else {
	        val += 'rem';
	    }
	    return val;
	}

	function rem2px(d, isNum) {
	    var val = parseFloat(d) * rem;
	    if (isNum) {
	        return val;
	    } else {
	        val += 'px';
	    }

	    return val;
	}

	/**
	 * 按照1rem=75的值转化成当前设备下的px
	 * @param d
	 * @param isNum
	 * @returns {number}
	 */
	function px2px(d, isNum) {
	    //var val = (parseFloat(d)/2) * dpr * rem/75;
	    var val = parseFloat(d) / 75 * rem;
	    if (isNum) {
	        return val;
	    } else {
	        val += 'px';
	    }
	    return val;
	}

/***/ },

/***/ 498:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by TonyJiang on 16/4/7.
	 */
	var TYPE = {
	    ICON: 'icon',
	    LABEL: 'label'
	};

	var STATUS = {
	    INITIAL: 'INITIAL',
	    TRIGGER: 'TRIGGER',
	    DOING: 'DOING',
	    DONE: 'DONE'
	};

	var REFRESH_STATUS_LABEL = {
	    INITIAL: '下拉刷新',
	    TRIGGER: '松开即可刷新',
	    DOING: '正在刷新...',
	    DONE: '完成'
	};

	var MORE_STATUS_LABEL = {
	    INITIAL: '上拉加载',
	    DOING: '正在加载...',
	    TRIGGER: '松开加载更多',
	    DONE: '完成'
	};

	var DIRECTION = {
	    UP: 'up',
	    DOWN: 'down'
	};

	var SIDE = {
	    TOP: 'top',
	    BOTTOM: 'bottom'
	};

	exports.TYPE = TYPE;
	exports.STATUS = STATUS;
	exports.REFRESH_STATUS_LABEL = REFRESH_STATUS_LABEL;
	exports.MORE_STATUS_LABEL = MORE_STATUS_LABEL;
	exports.DIRECTION = DIRECTION;
	exports.SIDE = SIDE;

/***/ },

/***/ 499:
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

	var _inlineStylePrefixer = __webpack_require__(318);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	var _LoadingIcon = __webpack_require__(500);

	var _LoadingIcon2 = _interopRequireDefault(_LoadingIcon);

	var _ArrowIcon = __webpack_require__(501);

	var _ArrowIcon2 = _interopRequireDefault(_ArrowIcon);

	var _pixel = __webpack_require__(497);

	var _constant = __webpack_require__(498);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * Created by TonyJiang on 16/3/30.
	                                                                                                                                                                                                                   */


	// import SVGNavigationArrowDownward from '../../svg-icons/navigation/arrow-downward';
	// import RefreshIndicator from '../../RefreshIndicator';

	function getStyles(props, state) {
	    var _iconWrapper;

	    var prefixer = new _inlineStylePrefixer2.default();

	    var beforeRotateStyle = props.direction == _constant.DIRECTION.UP ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
	    var afterRotateStyle = props.direction == _constant.DIRECTION.UP ? 'rotateZ(0deg)' : 'rotateZ(180deg)';

	    var styles = {
	        root: Object.assign({
	            display: props.enable ? 'block' : 'none',
	            position: 'relative',
	            left: 0,
	            width: '100%',
	            height: '1.2rem', //40px,
	            // lineHeight: '1.2rem' , //40px
	            color: props.color,
	            textAlign: 'center'
	        }, props.style || {}),

	        iconWrapper: (_iconWrapper = {
	            display: 'flex'
	        }, _defineProperty(_iconWrapper, 'display', '-webkit-flex'), _defineProperty(_iconWrapper, 'justifyContent', 'center'), _defineProperty(_iconWrapper, 'WebkitJustifyContent', 'center'), _defineProperty(_iconWrapper, 'paddingTop', (0, _pixel.px2rem)(10)), _defineProperty(_iconWrapper, 'paddingBottom', (0, _pixel.px2rem)(10)), _iconWrapper),

	        arrowIcon: {
	            width: '0.8rem', //30px,
	            height: '0.8rem', //30,
	            color: props.color,
	            display: state.status === _constant.STATUS.DOING ? 'none' : '',
	            transformOrigin: 'center',
	            transitionDuration: '400ms',
	            WebkitTransitionDuration: '400ms',
	            // transitionDuration : '0ms',
	            // WebkitTransitionDuration : '0ms',
	            transform: state.status == _constant.STATUS.TRIGGER ? afterRotateStyle : beforeRotateStyle,
	            WebkitTransform: state.status == _constant.STATUS.TRIGGER ? afterRotateStyle : beforeRotateStyle
	        },

	        loadingIcon: {
	            width: '0.8rem', //30px,
	            height: '0.8rem', //30,
	            color: props.color,
	            display: state.status === _constant.STATUS.DOING ? '' : 'none'

	        }

	    };

	    var prefixStyles = prefixer.prefix(styles);

	    return prefixStyles;
	}

	var Refresher = function (_React$Component) {
	    _inherits(Refresher, _React$Component);

	    function Refresher() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Refresher);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Refresher.__proto__ || Object.getPrototypeOf(Refresher)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            status: _constant.STATUS.INITIAL,
	            show: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Refresher, [{
	        key: 'shouldComponentUpdate',


	        //目前refresher所有操作都不通过props或者state进行控制,避免VirtualList刷新时频繁导致Refresher render
	        value: function shouldComponentUpdate() {
	            return false;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {

	            this._initDomRefs();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _reactDom2.default.findDOMNode(this.refs.loadingIcon).style['-webkit-animation'] = 'chanjet_wrapper_circle 1s infinite linear';
	            // this.refs.loadingIcon.style['-webkit-animation'] = 'chanjet_wrapper_circle 1s infinite linear';
	        }
	    }, {
	        key: 'updateStatus',
	        value: function updateStatus(status) {

	            var beforeRotateStyle = this.props.direction == _constant.DIRECTION.UP ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
	            var afterRotateStyle = this.props.direction == _constant.DIRECTION.UP ? 'rotateZ(0deg)' : 'rotateZ(180deg)';
	            var loadingIcon = _reactDom2.default.findDOMNode(this.refs.loadingIcon);
	            var arrowIcon = _reactDom2.default.findDOMNode(this.refs.arrowIcon);

	            this.state.status = status;

	            switch (status) {
	                case _constant.STATUS.INITIAL:

	                    arrowIcon.style['transform'] = arrowIcon.style['-webkit-transform'] = beforeRotateStyle;
	                    loadingIcon.style.display = 'none';
	                    arrowIcon.style.display = 'block';

	                    break;

	                case _constant.STATUS.TRIGGER:

	                    arrowIcon.style['transform'] = arrowIcon.style['-webkit-transform'] = afterRotateStyle;
	                    loadingIcon.style.display = 'none';
	                    arrowIcon.style.display = 'block';

	                    break;

	                case _constant.STATUS.DOING:

	                    loadingIcon.style.display = 'block';
	                    arrowIcon.style.display = 'none';

	                    break;

	            }

	            // this.setState({status : status});
	        }
	    }, {
	        key: '_initDomRefs',
	        value: function _initDomRefs() {
	            this.domRefs = {
	                arrowIcon: _reactDom2.default.findDOMNode(this.refs.arrowIcon)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = getStyles(this.props, this.state);

	            // const icon = (
	            //     <div style={styles.iconWrapper}>
	            //         <RefreshIndicator
	            //             ref="loadingIcon"
	            //             status="loading"
	            //             size={px2rem(60)}
	            //             loadingColor={styles.loadingIcon.color}
	            //             style={styles.loadingIcon}
	            //         />
	            //         <SVGNavigationArrowDownward
	            //             ref="arrowIcon"
	            //             color={styles.arrowIcon.color}
	            //             style={styles.arrowIcon}
	            //         />
	            //     </div>
	            //
	            // );

	            var animation = _react2.default.createElement(
	                'style',
	                null,
	                '\n                @-webkit-keyframes chanjet_wrapper_circle{\n                    0%{ -webkit-transform:rotate(0deg); }\n                    100%{ -webkit-transform:rotate(360deg); }\n                }\n            '
	            );

	            var icon = _react2.default.createElement(
	                'div',
	                { style: styles.iconWrapper },
	                animation,
	                _react2.default.createElement(_LoadingIcon2.default, {
	                    ref: 'loadingIcon',
	                    loadingColor: styles.loadingIcon.color,
	                    style: styles.loadingIcon
	                }),
	                _react2.default.createElement(_ArrowIcon2.default, {
	                    ref: 'arrowIcon',
	                    color: styles.arrowIcon.color,
	                    style: styles.arrowIcon
	                })
	            );

	            var label = _react2.default.createElement(
	                'label',
	                { ref: 'refreshLabel' },
	                this.props.statusLabel[this.state.status]
	            );

	            var content = this.props.type == _constant.TYPE.ICON ? icon : label;

	            return _react2.default.createElement(
	                'div',
	                { ref: 'refresh', style: styles.root },
	                content
	            );
	        }
	    }]);

	    return Refresher;
	}(_react2.default.Component);

	Refresher.TYPE = _constant.TYPE;
	Refresher.STATUS = _constant.STATUS;
	Refresher.STATUS_LABEL = _constant.REFRESH_STATUS_LABEL;
	Refresher.propTypes = {
	    enable: _react2.default.PropTypes.bool,
	    type: _react2.default.PropTypes.oneOf([_constant.TYPE.ICON, _constant.TYPE.LABEL]),
	    statusLabel: _react2.default.PropTypes.object,
	    distanceToRefresh: _react2.default.PropTypes.number,
	    direction: _react2.default.PropTypes.oneOf([_constant.DIRECTION.DOWN, _constant.DIRECTION.UP]),
	    status: _react2.default.PropTypes.oneOf([_constant.STATUS.INITIAL, _constant.STATUS.TRIGGER, _constant.STATUS.DOING, _constant.STATUS.DONE]),
	    color: _react2.default.PropTypes.string,

	    requestData: _react2.default.PropTypes.func,
	    watcher: _react2.default.PropTypes.func

	};
	Refresher.defaultProps = {
	    enable: true,
	    type: _constant.TYPE.ICON,
	    statusLabel: _constant.REFRESH_STATUS_LABEL,
	    distanceToRefresh: (0, _pixel.px2px)(45 * 2, true),
	    direction: _constant.DIRECTION.DOWN,
	    status: _constant.STATUS.INITIAL,
	    color: "black",

	    requestData: function requestData() {},
	    watcher: function watcher() {}
	};
	exports.default = Refresher;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoadingIcon = function (_React$Component) {
	    _inherits(LoadingIcon, _React$Component);

	    function LoadingIcon() {
	        _classCallCheck(this, LoadingIcon);

	        return _possibleConstructorReturn(this, (LoadingIcon.__proto__ || Object.getPrototypeOf(LoadingIcon)).apply(this, arguments));
	    }

	    _createClass(LoadingIcon, [{
	        key: "render",
	        value: function render() {
	            var style = this.props.style;


	            return _react2.default.createElement(
	                "svg",
	                { width: style.width, height: style.height, style: style, viewBox: "0 0 36 32" },
	                _react2.default.createElement(
	                    "g",
	                    { transform: "scale(0.03125, 0.03125)" },
	                    _react2.default.createElement("path", {
	                        d: "M1024 512c0-249.6-198.4-448-448-448C480 64 390.4 96 313.6 147.2 281.6 172.8 281.6 217.6 307.2 243.2l0 0c25.6 25.6 57.6 25.6 83.2 6.4C441.6 211.2 505.6 192 576 192c179.2 0 320 140.8 320 320l-128 0 192 192 192-192L1024 512zM128 512c0 249.6 198.4 448 448 448 96 0 185.6-32 262.4-83.2 32-25.6 32-70.4 6.4-96l0 0c-25.6-25.6-57.6-25.6-83.2-6.4C710.4 812.8 646.4 832 576 832c-179.2 0-320-140.8-320-320l128 0L192 320l-192 192L128 512z",
	                        fill: "#737383" })
	                )
	            );
	        }
	    }]);

	    return LoadingIcon;
	}(_react2.default.Component);

	LoadingIcon.propTypes = {
	    style: _react2.default.PropTypes.object
	};
	exports.default = LoadingIcon;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArrowIcon = function (_React$Component) {
	    _inherits(ArrowIcon, _React$Component);

	    function ArrowIcon() {
	        _classCallCheck(this, ArrowIcon);

	        return _possibleConstructorReturn(this, (ArrowIcon.__proto__ || Object.getPrototypeOf(ArrowIcon)).apply(this, arguments));
	    }

	    _createClass(ArrowIcon, [{
	        key: "render",
	        value: function render() {
	            var style = this.props.style;


	            return _react2.default.createElement(
	                "svg",
	                { width: style.width, height: style.height, style: style, viewBox: "0 0 32 32" },
	                _react2.default.createElement(
	                    "g",
	                    { transform: "scale(0.03125, 0.03125)" },
	                    _react2.default.createElement("path", {
	                        fill: "#737383",
	                        d: "M276.446 502.863l223.53 211.271 223.514-211.271 127.807 120.737-351.321 332.007-351.371-332.007zM422.4 751.358v-614.397h153.601v614.397h-153.601z"
	                    })
	                )
	            );
	        }
	    }]);

	    return ArrowIcon;
	}(_react2.default.Component);

	ArrowIcon.propTypes = {
	    style: _react2.default.PropTypes.object
	};
	exports.default = ArrowIcon;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _ScrollBar = __webpack_require__(503);

	var _ScrollBar2 = _interopRequireDefault(_ScrollBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ScrollerBase
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 提供在移动端支持滚动的容器,支持手势惯性和弹性,利用CSS3实现.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 支持IOS和Android
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/5/7.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	//贝塞尔曲线
	var cubic = {

	    //超出边界减速
	    quadratic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

	    //回弹曲线
	    outCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',

	    //惯性曲线
	    outCubic: 'cubic-bezier(0.165, 0.84, 0.44, 1)',

	    //常规曲线
	    circular: 'cubic-bezier(0.1, 0.57, 0.1, 1)'
	};

	var ScrollerBase = function (_React$Component) {
	    _inherits(ScrollerBase, _React$Component);

	    function ScrollerBase(props, context) {
	        _classCallCheck(this, ScrollerBase);

	        var _this = _possibleConstructorReturn(this, (ScrollerBase.__proto__ || Object.getPrototypeOf(ScrollerBase)).call(this, props, context));

	        _this._state = {
	            reachTop: false,
	            reachBottom: false,
	            deltaY: 0,
	            startDeltaY: 0,

	            lastScrollHeight: 0,
	            lastClientHeight: 0

	        };
	        _this._checkTimer = 0;
	        _this._method = {
	            updateScrollBar: function updateScrollBar() {
	                if (!_this._hasScrollBar) {
	                    return;
	                }
	                var _this$refs$domNode = _this.refs.domNode;
	                var scrollTop = _this$refs$domNode.scrollTop;
	                var offsetHeight = _this$refs$domNode.offsetHeight;
	                var scrollHeight = _this$refs$domNode.scrollHeight;
	                var scrollBar = _this.refs.scrollBar;


	                scrollBar.show();
	                scrollBar.scrollTo({ deltaY: scrollTop, contentHeight: scrollHeight, clientHeight: offsetHeight });

	                if (!_this._state.touching) {
	                    clearTimeout(_this._hideScrollbarUI);
	                    _this._hideScrollbarUI = setTimeout(function () {
	                        scrollBar.hide();
	                    }, 500);
	                }
	            },

	            startCheckContentHeightUpdated: function startCheckContentHeightUpdated() {
	                _this._checkTimer = setInterval(function () {
	                    _this._method.checkContentHeightUpdated();
	                }, 16.7);
	            },

	            stopCheckContentHeightUpdated: function stopCheckContentHeightUpdated() {
	                clearInterval(_this._checkTimer);
	            },

	            //检测内容高度是否发生变化, 然后重新判断reach
	            checkContentHeightUpdated: function checkContentHeightUpdated() {
	                var _this$_state = _this._state;
	                var lastScrollHeight = _this$_state.lastScrollHeight;
	                var lastClientHeight = _this$_state.lastClientHeight;
	                var _this$refs$domNode2 = _this.refs.domNode;
	                var scrollHeight = _this$refs$domNode2.scrollHeight;
	                var clientHeight = _this$refs$domNode2.clientHeight;

	                //如果视窗大小和内容高度没有发生变化, 直接返回

	                if (scrollHeight == lastScrollHeight && clientHeight == lastClientHeight) {
	                    return;
	                }

	                _this._eventHandler.scroll(true);

	                _this._state.lastScrollHeight = scrollHeight;
	                _this._state.lastClientHeight = clientHeight;
	            }

	        };
	        _this._eventHandler = {
	            touchStart: function touchStart(e) {
	                _this._state.touching = true;
	                if (_this._hasScrollBar) {
	                    _this.refs.scrollBar.show();
	                }
	            },

	            touchEnd: function touchEnd() {
	                _this._state.touching = false;
	                if (_this._hasScrollBar) {
	                    _this.refs.scrollBar.hide();
	                }
	            },

	            scroll: function scroll() {
	                var isCheck = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	                var _this$refs$domNode3 = _this.refs.domNode;
	                var scrollTop = _this$refs$domNode3.scrollTop;
	                var offsetHeight = _this$refs$domNode3.offsetHeight;
	                var scrollHeight = _this$refs$domNode3.scrollHeight;

	                //更新scrollbar位置

	                _this._method.updateScrollBar();

	                var topLine = scrollTop;
	                var bottomLine = scrollTop + offsetHeight;

	                //检测是否需要派发 onReachTop 事件
	                //本来应该是==0 但是由于ios有弹性,持续上拉会变成负数,所以兼容ios
	                if (topLine <= 0) {
	                    if (!_this._state.reachTop) {
	                        _this._state.reachTop = true;
	                        _this._eventHandler.reachTop();
	                    }
	                } else {
	                    if (_this._state.reachTop) {
	                        _this._state.reachTop = false;
	                        _this._eventHandler.leaveTop();
	                    }
	                }

	                //检测是否需要派发 onReachBottom 事件
	                //本来应该是==scrollHeight 但是由于ios有弹性,持续下拉会持续增加,所以兼容ios
	                //scrollHeight - 2 是因为在浏览器中, rem转px时, 会有小数问题, 所以导致scrollHeight比scrollTop+contentHeight大1~2, 设置2保险;
	                if (bottomLine >= scrollHeight - 2) {

	                    if (!_this._state.reachBottom) {
	                        _this._state.reachBottom = true;
	                        _this._eventHandler.reachBottom();
	                    }
	                } else {

	                    if (_this._state.reachBottom) {
	                        _this._state.reachBottom = false;
	                        _this._eventHandler.leaveBottom();
	                    }
	                }

	                //派发 onScroll 事件
	                if (!isCheck) {
	                    _this.props.onScroll({
	                        scrollTop: scrollTop, offsetHeight: offsetHeight, scrollHeight: scrollHeight
	                    });
	                }
	            },

	            reachTop: function reachTop() {
	                _this.props.onReachTop();
	            },

	            leaveTop: function leaveTop() {
	                _this.props.onLeaveTop();
	            },

	            reachBottom: function reachBottom() {
	                _this.props.onReachBottom();
	            },

	            leaveBottom: function leaveBottom() {
	                _this.props.onLeaveBottom();
	            }
	        };
	        return _this;
	    }

	    _createClass(ScrollerBase, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._randomClassName = 'scroller_' + new Date().getTime();
	            this._hasScrollBar = mutants.env.os != mutants.env.constant.os.ios;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            //渲染完毕后,处理一次当前scroll的状态, setTimeout保证不会因为父类没有完成DidMount
	            setTimeout(function () {
	                _this2._eventHandler.scroll();
	            }, 1);

	            this._method.startCheckContentHeightUpdated();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._method.stopCheckContentHeightUpdated();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var _refs$domNode = this.refs.domNode;
	            var scrollTop = _refs$domNode.scrollTop;
	            var offsetHeight = _refs$domNode.offsetHeight;
	            var scrollHeight = _refs$domNode.scrollHeight;


	            if (this._state.reachTop && scrollTop != 0) {
	                this._state.reachTop = false;
	                this._eventHandler.leaveTop();
	            } else if (!this._state.reachTop && scrollTop == 0) {
	                this._state.reachTop = true;
	                this._eventHandler.reachTop();
	            }

	            if (this._state.reachBottom && scrollTop + offsetHeight < scrollHeight) {
	                this._state.reachBottom = false;
	                this._eventHandler.leaveBottom();
	            } else if (!this._state.reachBottom && scrollTop + offsetHeight == scrollHeight) {
	                this._state.reachBottom = true;
	                this._eventHandler.reachBottom();
	            }

	            if (this._hasScrollBar) {
	                this._method.updateScrollBar();
	            }

	            //派发 onScroll 事件
	            this.props.onScroll({
	                scrollTop: scrollTop, offsetHeight: offsetHeight, scrollHeight: scrollHeight
	            });
	        }
	    }, {
	        key: 'scrollTo',
	        value: function scrollTo(deltaY) {
	            var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            this.refs.domNode.scrollTop = deltaY;
	        }
	    }, {
	        key: '_getStyles',
	        value: function _getStyles() {

	            var styles = {
	                height: '100%',
	                width: '100%'
	            };

	            var touchOverrideStyles = {
	                WebkitOverflowScrolling: 'touch',
	                overflowY: 'scroll'
	            };

	            if (mutants.env.os != mutants.env.constant.os.ios) {
	                touchOverrideStyles.WebkitScrollbar = '';
	            }

	            return Object.assign(styles, this.props.style, touchOverrideStyles);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var styles = this._getStyles();

	            var scrollBarStyles = '\n            .' + this._randomClassName + '::-webkit-scrollbar{\n                display:none;\n            }\n        ';

	            //根据环境判断是否需要自己实现滚动条效果, 安卓4.0中, webkit-overflow-scrolling:touch 没有显示滚动条
	            var scrollBar = undefined;
	            if (!this._hasScrollBar) {
	                scrollBar = '';
	            } else {
	                scrollBar = _react2.default.createElement(_ScrollBar2.default, {
	                    ref: 'scrollBar'
	                });
	            }

	            return _react2.default.createElement(
	                'div',
	                {
	                    ref: 'domNode',
	                    style: styles,
	                    onScroll: function onScroll() {
	                        return _this3._eventHandler.scroll();
	                    },
	                    onTouchStart: this._eventHandler.touchStart,
	                    onTouchEnd: this._eventHandler.touchEnd,
	                    className: this._randomClassName
	                },
	                this.props.children,
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    scrollBarStyles
	                ),
	                scrollBar
	            );
	        }
	    }]);

	    return ScrollerBase;
	}(_react2.default.Component);

	ScrollerBase.propTypes = {
	    onScroll: _react2.default.PropTypes.func
	};
	ScrollerBase.defaultProps = {
	    onScroll: function onScroll() {},
	    onReachTop: function onReachTop() {},
	    onLeaveTop: function onLeaveTop() {},
	    onReachBottom: function onReachBottom() {},
	    onLeaveBottom: function onLeaveBottom() {}

	};
	exports.default = ScrollerBase;

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 模拟滚动条, 解决在部分安卓上DIV不显示滚动条的问题
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/4/3.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	function getStyles(props, state) {

	    var toggleTime = state.show ? 250 : 500;

	    return {
	        root: {
	            //spacing
	            position: 'absolute',
	            right: 1,
	            // top:state.outerDeltaY,
	            top: 0,
	            bottom: 0,
	            width: '0.05rem', //2px
	            opacity: state.show ? 1 : 0,
	            zIndex: 3,

	            borderRadius: '0.05rem', //2px
	            pointerEvents: 'none',
	            transitionProperty: 'opacity',
	            transitionDuration: toggleTime + 'ms'
	        },

	        content: {
	            position: 'absolute',
	            top: 0,
	            width: '100%',
	            height: state.height,
	            borderRadius: 2,
	            backgroundColor: 'grey',
	            transitionDuration: '0ms',
	            transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
	            transform: 'translate3d(0px , ' + state.top + 'px , 0px)',
	            //兼容 老版本 ios <8.3 , safari动画兼容性问题. 使用webkit前缀
	            WebkitTransform: 'translate3d(0px , ' + state.top + 'px , 0px)'
	        }
	    };
	}

	var ScrollBar = function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);

	    function ScrollBar() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ScrollBar);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
	            show: false
	        }, _this.state = {
	            deltaY: 0,
	            top: 0,
	            height: '0%',
	            show: false,
	            press: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(ScrollBar, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            //组件被销毁时, 清除掉hide的timeout
	            clearTimeout(this._hideTimer);
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            this.setState({ show: true, press: true });
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this._hide(50);
	        }
	    }, {
	        key: 'scrollTo',
	        value: function scrollTo(scrollData) {
	            this._deltaYChange(scrollData);
	        }
	    }, {
	        key: '_deltaYChange',
	        value: function _deltaYChange(newData) {
	            var deltaY = newData.deltaY;
	            var contentHeight = newData.contentHeight;
	            var clientHeight = newData.clientHeight;


	            var height = Math.abs(Math.max(Math.min(clientHeight / contentHeight, 1) * clientHeight, 40));

	            //当前y轴百分比
	            var percent = deltaY / (contentHeight - clientHeight);
	            //调整当前视窗追加高度 , 随着高度增加 , y轴适当向下调整 , 直到100%时 , y轴基准位置变成窗口底部
	            percent = (deltaY + percent * clientHeight) / contentHeight;

	            var top = Math.abs(percent * (clientHeight - height));

	            this._updateScrollBar(0, top, height);
	        }
	    }, {
	        key: '_updateScrollBar',
	        value: function _updateScrollBar(deltaY, top, height) {
	            var ease = arguments.length <= 3 || arguments[3] === undefined ? 'cubic-bezier(0.165, 0.84, 0.44, 1)' : arguments[3];
	            var duration = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];


	            this.refs.content.style.height = height + 'px';
	            this.refs.content.style['transition-duration'] = this.refs.content.style['-webkit-transition-duration'] = duration + 'ms';
	            this.refs.content.style['transition-timing-function'] = this.refs.content.style['-webkit-transition-timing-function'] = ease;
	            this.refs.content.style.transform = this.refs.content.style['-webkit-transform'] = 'translate3d(0px ,' + top + 'px , 0px)';
	        }
	    }, {
	        key: '_hide',
	        value: function _hide(duration) {
	            var _this2 = this;

	            // console.log('scrollbar hide in',duration , 'ms');
	            clearTimeout(this._hideTimer);
	            this._hideTimer = setTimeout(function () {
	                // console.log('延迟隐藏, 触发');
	                _this2.setState({ show: false });
	            }, duration);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = getStyles(this.props, this.state);

	            return _react2.default.createElement(
	                'div',
	                { style: styles.root },
	                _react2.default.createElement('div', { ref: 'content', style: styles.content })
	            );
	        }
	    }]);

	    return ScrollBar;
	}(_react2.default.Component);

	ScrollBar.propTypes = {
	    show: _react2.default.PropTypes.bool
	};
	exports.default = ScrollBar;

/***/ },

/***/ 504:
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

	var _constant = __webpack_require__(498);

	var _props = __webpack_require__(496);

	var _Refresher = __webpack_require__(499);

	var _Refresher2 = _interopRequireDefault(_Refresher);

	var _ScrollBar = __webpack_require__(503);

	var _ScrollBar2 = _interopRequireDefault(_ScrollBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * Created by TonyJiang on 16/3/29.
	                                                                                                                                                                                                                   */


	function getStyles(props, context) {
	    var displayWidth = props.displayWidth;
	    var displayHeight = props.displayHeight;
	    var refreshColor = props.refreshColor;
	    var moreColor = props.moreColor;
	    var contentBackgroundColor = props.contentBackgroundColor;
	    var rootBackgroundColor = props.rootBackgroundColor;


	    var rootStyle = _defineProperty({
	        position: 'relative',
	        width: displayWidth,
	        height: displayHeight,
	        background: '#f5f5f5',
	        overflow: 'hidden'
	    }, 'background', rootBackgroundColor);

	    return {

	        root: Object.assign({}, rootStyle, props.style || {}),

	        refresh: {
	            color: refreshColor
	        },

	        more: {
	            color: moreColor
	        },

	        content: {
	            position: 'absolute',
	            top: 0,
	            width: '100%',
	            minHeight: '100%',
	            zIndex: 2,
	            background: contentBackgroundColor,
	            overflowX: 'hidden',
	            overflowY: 'auto',
	            transitionDuration: '0ms',
	            transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
	            transform: 'translate3d(0px , ' + props.deltaY + 'px , 0px)'
	        }

	    };
	}

	var cubic = {

	    //超出边界减速
	    quadratic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

	    //回弹曲线
	    outCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',

	    //惯性曲线
	    outCubic: 'cubic-bezier(0.165, 0.84, 0.44, 1)',

	    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',

	    easeFastOutBack: 'cubic-bezier(0.625, 0.3, 0.95, 0.245)',

	    //常规曲线
	    circular: 'cubic-bezier(0.1, 0.57, 0.1, 1)'
	};

	var tools = {
	    translateMatrixRE: /matrix(3d)?\((.+?)\)/,
	    parseTranslateMatrix: function parseTranslateMatrix(translateString, position) {
	        if (!translateString) {
	            return { x: 0, y: 0, z: 0 };
	        }
	        var matrix = translateString.match(this.translateMatrixRE);
	        var is3D = matrix && matrix[1];
	        if (matrix) {
	            matrix = matrix[2].split(",");
	            if (is3D === "3d") matrix = matrix.slice(12, 15);else {
	                matrix.push(0);
	                matrix = matrix.slice(4, 7);
	            }
	        } else {
	            matrix = [0, 0, 0];
	        }
	        var result = {
	            x: parseFloat(matrix[0]),
	            y: parseFloat(matrix[1]),
	            z: parseFloat(matrix[2])
	        };
	        if (position && result.hasOwnProperty(position)) {
	            return result[position];
	        }
	        return result;
	    }
	};

	/**
	 *  列表组件
	 *  实现以下功能:
	 *      1.顶部下拉刷新
	 *      2.尾部下拉加载更多
	 *      3.支持手势惯性效果
	 *      4.支持回弹效果
	 *
	 *  @extends React.Component
	 */

	var WrapperForSimulate = function (_React$Component) {
	    _inherits(WrapperForSimulate, _React$Component);

	    //计算速度


	    //dom指针


	    /**
	     *@member props {JSONObject} 接受设置参数
	     *@memberOf LoadMoreList.prototype
	     */
	    function WrapperForSimulate(props, context) {
	        var _enable, _reach;

	        _classCallCheck(this, WrapperForSimulate);

	        var _this = _possibleConstructorReturn(this, (WrapperForSimulate.__proto__ || Object.getPrototypeOf(WrapperForSimulate)).call(this, props, context));

	        _this.state = {

	            enable: (_enable = {}, _defineProperty(_enable, _constant.SIDE.TOP, false), _defineProperty(_enable, _constant.SIDE.BOTTOM, false), _enable),

	            reach: (_reach = {}, _defineProperty(_reach, _constant.SIDE.TOP, false), _defineProperty(_reach, _constant.SIDE.BOTTOM, false), _reach),

	            status: undefined,
	            refreshSide: null
	        };
	        _this._stateInShadow = {
	            status: undefined
	        };
	        _this._state = {};
	        _this._deltaY = 0;
	        _this._lastDeltaY = 0;
	        _this._reachSideDeltaY = 0;
	        _this.domRefs = {};
	        _this._checkOutOfRangeTimer = 0;
	        _this._velocityTimer = 0;
	        _this._durationEventTrigger = 0;
	        _this._method = {

	            //在手指移动时, 进行滚动
	            animateFrame: function animateFrame() {
	                if (!_this._state.press) {
	                    window.cancelAnimationFrame(_this._requestAnimationId);
	                    return;
	                }

	                if (_this._deltaY != _this._state.lastAnimateDeltaY) {
	                    _this._method.scrollTo(0, _this._deltaY);
	                    _this._state.lastAnimateDeltaY = _this._deltaY;
	                }

	                _this._requestAnimationId = window.requestAnimationFrame(_this._method.animateFrame.bind(_this));
	            },

	            //计算速度
	            computeVelocity: function computeVelocity() {

	                //当用户快速移动并停止一段时间后,松手依旧会触发惯性,是因为没有计算松手时间, 在这里重新更新时间戳, 保证速度计算正确
	                //防止在timer间隙的时候计算速度, 导致没有获取到当前时间
	                if (_this._state.timestamp == _this._state.lastTime) {
	                    _this._state.timestamp = Date.now();
	                }

	                //滑动时间
	                var deltaTime = _this._state.timestamp - _this._state.lastTime;
	                _this._state.lastTime = _this._state.timestamp;
	                //滑动距离
	                var deltaY = _this._state.pageY - _this._state.lastPageY;
	                _this._state.lastPageY = _this._state.pageY;

	                if (deltaTime == 0 && deltaY == 0) {
	                    _this._state.velocity = 0;
	                } else {
	                    //保证最小时间为10ms
	                    deltaTime = Math.max(10, deltaTime);
	                    //根据路程求出阻尼系数
	                    var speedResistance = Math.min(Math.abs(deltaY / 180), 1);
	                    //速度
	                    _this._state.velocity = deltaY / deltaTime * speedResistance;
	                }
	            },

	            //计算惯性移动
	            doInertial: function doInertial(speed) {

	                //0.005以内的惯性,忽略不计,小步长移动速度大概在0.005上下, 更贴近ios效果
	                if (!speed || speed < 0.002 && speed > -0.002) {
	                    return false;
	                }

	                var _speed = 0;

	                var _maxSpeed = 2.0;

	                //设置最大速度为0.8 , 避免出现速度过快导致闪屏的问题
	                if (speed > 0) {
	                    _speed = Math.min(speed, _maxSpeed);
	                } else {
	                    _speed = Math.max(speed, -_maxSpeed);
	                }

	                var speedResistance = Math.min(Math.abs(_speed / 4), 1);

	                var time = 1800 + 1000 * speedResistance;
	                var a = -_speed / time;

	                var distance = _speed * time + a * time * time / 2;

	                _this.state.inertialDistance = distance;

	                distance += _this._deltaY;

	                var _this$_method$outOfSc = _this._method.outOfScreen(distance, time);

	                var deltaY = _this$_method$outOfSc.deltaY;
	                var ease = _this$_method$outOfSc.ease;
	                var duration = _this$_method$outOfSc.duration;


	                _this._method.scrollTo(0, deltaY, duration, true, ease);

	                return true;
	            },

	            //判断当前的滚动目标位置是否超出显示范围
	            outOfScreen: function outOfScreen(deltaY) {
	                var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];


	                var clientHeight = _this.domRefs.domNode.clientHeight;
	                var contentHeight = _this.domRefs.list.clientHeight;

	                var topLine = _this.state.direction == _constant.DIRECTION.DOWN && _this.state.status == _constant.STATUS.DOING ? _this.props.distanceToRefresh : 0;

	                //如果内容超过视图,maxheight为差值,如果内容小于视图,那直接就应该有阻尼
	                var bottomLine = contentHeight > clientHeight ? contentHeight - clientHeight : 0;

	                var _deltaY = void 0,
	                    _duration = void 0,
	                    _ease = void 0;

	                if (deltaY >= topLine) {
	                    _deltaY = topLine;
	                    // _duration = duration * (this._deltaY - _deltaY) / (this._deltaY - deltaY);
	                    _duration = 600;
	                    _ease = cubic.outCubic; //cubic.easeOutBack;
	                } else if (deltaY <= -bottomLine) {
	                    _deltaY = -bottomLine;
	                    _duration = 600;
	                    // _duration = duration * (this._deltaY - _deltaY) / (this._deltaY - deltaY);
	                    _ease = cubic.outCubic; //cubic.easeOutBack;
	                } else {
	                    _deltaY = deltaY;
	                    _duration = duration;
	                    _ease = cubic.outCubic;
	                }

	                return { deltaY: _deltaY, duration: Math.abs(_duration), ease: _ease };
	            },

	            //移动到指定位置
	            scrollTo: function scrollTo() {
	                var deltaX = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	                var deltaY = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	                var duration = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	                var isInertial = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	                var ease = arguments.length <= 4 || arguments[4] === undefined ? cubic.outCubic : arguments[4];

	                var _this$_method$getTrig = _this._method.getTriggerLine();

	                var clientHeight = _this$_method$getTrig.clientHeight;
	                var contentHeight = _this$_method$getTrig.contentHeight;
	                var topLine = _this$_method$getTrig.topLine;
	                var bottomLine = _this$_method$getTrig.bottomLine;


	                if (deltaY > topLine || deltaY < bottomLine) {
	                    ease = cubic.quadratic;
	                }

	                var dom = _this.domRefs.list;

	                var cssText = ['-webkit-transition-timing-function:', ease, ';', 'transition-timing-function:', ease, ';', '-webkit-transition-duration:', duration, 'ms;', 'transition-duration:', duration, 'ms;', '-webkit-transform:', 'translate3d(' + deltaX + 'px,' + deltaY + 'px, 0px);', 'transform:', 'translate3d(' + deltaX + 'px,' + deltaY + 'px, 0px);'].join('');

	                dom.style.cssText = dom.style.cssText + cssText;

	                _this._method.stopInertialTimer();

	                if (isInertial) {
	                    //在惯性移动中,模拟移动事件
	                    _this._method.startInertialTimer(duration);
	                }

	                _this._method.updateScrollBar();

	                if (!isInertial) {
	                    _this._eventHandler.scroll({
	                        scrollTop: parseInt(-deltaY),
	                        offsetHeight: clientHeight,
	                        scrollHeight: contentHeight,
	                        press: _this._state.press
	                    });
	                }
	            },

	            //移动模拟滚动条位置
	            updateScrollBar: function updateScrollBar(y) {

	                var clientHeight = _this.domRefs.domNode.clientHeight;
	                var contentHeight = _this.domRefs.list.clientHeight;

	                var scrollBar = _this.refs.scrollBar;


	                var deltaY = y ? y : _this._deltaY;

	                if (deltaY > 0) {
	                    return;
	                }

	                scrollBar.show();
	                scrollBar.scrollTo({ deltaY: deltaY, contentHeight: contentHeight, clientHeight: clientHeight });

	                if (!_this._state.press) {
	                    clearTimeout(_this._hideScrollbarUI);
	                    _this._hideScrollbarUI = setTimeout(function () {
	                        scrollBar.hide();
	                    }, 500);
	                }
	            },

	            //在惯性移动过程中, 按60帧的速率, 模拟滚动事件
	            startInertialTimer: function startInertialTimer(duration) {

	                var clientHeight = _this.domRefs.domNode.clientHeight;
	                var contentHeight = _this.domRefs.list.clientHeight;

	                if (_this._durationEventTrigger) {
	                    clearInterval(_this._durationEventTrigger);
	                    _this._durationEventTrigger = 0;
	                }

	                //按照40帧的速度进行时间模拟(实际不会达到40帧)
	                _this._durationEventTrigger = setInterval(function () {
	                    var matrix = tools.parseTranslateMatrix(window.getComputedStyle(_this.domRefs.list).webkitTransform);

	                    //toFixed是为了防止出现 -1.57565e-7 这样的数字
	                    _this._deltaY = parseFloat(matrix.y.toFixed(2));

	                    _this._eventHandler.scroll({
	                        scrollTop: parseInt(-_this._deltaY),
	                        offsetHeight: clientHeight,
	                        scrollHeight: contentHeight,
	                        press: _this._state.press
	                    });

	                    _this._method.updateScrollBar();
	                }, 25);

	                //独立使用一个timeout , 保证duration之后 , 肯定会被clear;
	                _this._clearDurationEventTriggerTimeout = setTimeout(function () {
	                    // console.log('clear interval');
	                    clearInterval(_this._durationEventTrigger);
	                }, duration);
	            },

	            //停止模拟惯性事件
	            stopInertialTimer: function stopInertialTimer() {
	                if (_this._durationEventTrigger) {
	                    clearInterval(_this._durationEventTrigger);
	                    _this._durationEventTrigger = 0;
	                }
	                if (_this._clearDurationEventTriggerTimeout) {
	                    clearTimeout(_this._clearDurationEventTriggerTimeout);
	                    _this._clearDurationEventTriggerTimeout = 0;
	                }
	            },

	            //计算触发刷新的位置
	            getTriggerLine: function getTriggerLine() {
	                var clientHeight = _this.domRefs.domNode.clientHeight;
	                var contentHeight = _this.domRefs.list.clientHeight;

	                //定义顶部位置 , 顶部触发位置 , 底部位置 ,底部触发位置
	                var topLine = _this.state.status == _constant.STATUS.DOING && _this.state.direction == _constant.DIRECTION.DOWN ? _this.props.distanceToRefresh : 0;
	                var topTriggerLine = _this.props.distanceToRefresh;
	                var bottomLine = contentHeight >= clientHeight ? -(contentHeight - clientHeight) : 0;
	                var bottomTriggerLine = bottomLine - _this.props.distanceToRefresh;

	                return { clientHeight: clientHeight, contentHeight: contentHeight, topLine: topLine, topTriggerLine: topTriggerLine, bottomLine: bottomLine, bottomTriggerLine: bottomTriggerLine };
	            },

	            //检测是否需要 刷新/加载更多 的操作
	            checkLoadWhenDragEnd: function checkLoadWhenDragEnd() {
	                var _line, _triggerLine, _handler, _direction;

	                if (!_this.state.isReach) {
	                    return;
	                }

	                var _this$props = _this.props;
	                var distanceToRefresh = _this$props.distanceToRefresh;
	                var refreshHandler = _this$props.refreshHandler;
	                var moreHandler = _this$props.moreHandler;
	                var loadingMinTime = _this$props.loadingMinTime;
	                var refreshSide = _this.state.refreshSide;

	                var clientHeight = _this.domRefs.domNode.clientHeight;
	                var contentHeight = _this.domRefs.list.clientHeight;

	                var topLine = 0;
	                var topTriggerLine = _this.props.distanceToRefresh;
	                var bottomLine = contentHeight >= clientHeight ? -(contentHeight - clientHeight) : 0;
	                var bottomTriggerLine = bottomLine - distanceToRefresh;

	                //边线
	                var line = (_line = {}, _defineProperty(_line, _constant.SIDE.TOP, topLine), _defineProperty(_line, _constant.SIDE.BOTTOM, bottomLine), _line);

	                //触发线
	                var triggerLine = (_triggerLine = {}, _defineProperty(_triggerLine, _constant.SIDE.TOP, topTriggerLine), _defineProperty(_triggerLine, _constant.SIDE.BOTTOM, bottomTriggerLine), _triggerLine);

	                //回调函数
	                var handler = (_handler = {}, _defineProperty(_handler, _constant.SIDE.TOP, refreshHandler), _defineProperty(_handler, _constant.SIDE.BOTTOM, moreHandler), _handler);

	                //拖拽方向
	                var direction = (_direction = {}, _defineProperty(_direction, _constant.SIDE.TOP, _constant.DIRECTION.DOWN), _defineProperty(_direction, _constant.SIDE.BOTTOM, _constant.DIRECTION.UP), _direction);

	                var targetDeltaY = 0;

	                //当前状态处于触发状态
	                if (_this.state.status == _constant.STATUS.TRIGGER) {
	                    (function () {

	                        var actionHandler = undefined;
	                        //判断是否可以进行对应的刷新操作
	                        var canDo = refreshSide && _this.state.reach[refreshSide] && _this.state.enable[refreshSide] && _this.state.direction == direction[refreshSide];

	                        if (canDo) {

	                            targetDeltaY = triggerLine[refreshSide];
	                            actionHandler = handler[refreshSide];

	                            _this.state.status = _constant.STATUS.DOING;

	                            setTimeout(function () {
	                                actionHandler(_this.completeAnimation.bind(_this));
	                            }, loadingMinTime);
	                        } else {

	                            targetDeltaY = line[refreshSide];
	                        }

	                        //如果在加载中, 则不做任何处理, 否则可能影响当前正在进行的动画
	                    })();
	                } else if (_this.state.status == _constant.STATUS.DOING) {

	                    return;
	                    // targetDeltaY = triggerLine[this.state.refreshSide];

	                    //到达边界, 但是又不够触发距离, 则应该弹回对应的顶部
	                } else {

	                    targetDeltaY = line[refreshSide];
	                }

	                _this._deltaY = targetDeltaY;
	                _this._method.scrollTo(0, targetDeltaY, 400);
	            },

	            //检测事件是否触发在当前组件上, 由于dragStart绑定在body上, 所以需要检测事件范围
	            checkEventInThis: function checkEventInThis(target) {
	                var _target = target;
	                while (_target) {
	                    if (_target == _this.domRefs.domNode) {
	                        return true;
	                    } else {
	                        _target = _target.parentNode;
	                    }
	                }
	                return false;
	            },

	            startCheckOutOfRangeTimer: function startCheckOutOfRangeTimer() {
	                _this._checkOutOfRangeTimer = setInterval(function () {

	                    _this._method.checkOutOfRange();
	                }, 16.7);
	            },

	            stopCheckOutOfRangeTimer: function stopCheckOutOfRangeTimer() {
	                clearInterval(_this._checkOutOfRangeTimer);
	            },

	            //检测
	            checkOutOfRange: function checkOutOfRange() {

	                //如果用户正在交互, 不做任何处理
	                if (_this._state.press) {
	                    return;
	                }

	                var clientHeight = _this.domRefs.domNode.clientHeight;
	                var contentHeight = _this.domRefs.list.clientHeight;

	                if (contentHeight < clientHeight) {
	                    return;
	                }

	                var computeScrollTop = contentHeight - clientHeight;

	                //如果内容底部不够到达边界, 则需要往上滚动调整到边界处;
	                if (computeScrollTop < Math.abs(_this._deltaY) && _this.state.status != _constant.STATUS.DOING) {
	                    _this._deltaY = -computeScrollTop;
	                    //如果当前是处于边界状态, 需要将_reachSideDeltaY同时更新, 保证后续的回弹位置正确
	                    if (_this.state.reach[_constant.SIDE.TOP] || _this.state.reach[_constant.SIDE.BOTTOM]) {
	                        _this._reachSideDeltaY = -computeScrollTop;
	                    }
	                    _this._method.scrollTo(0, _this._deltaY);
	                }
	            }

	        };
	        _this._eventHandler = {
	            //手指按下
	            dragStart: function dragStart(event) {

	                //判断事件在当前组件上
	                if (!_this._method.checkEventInThis(event.target)) {
	                    return;
	                }

	                //停止惯性 , 并在当前位置停住
	                _this._method.stopInertialTimer();

	                var _window$getComputedSt = window.getComputedStyle(_this.domRefs.list);

	                var transform = _window$getComputedSt.transform;
	                var webkitTransform = _window$getComputedSt.webkitTransform;

	                var matrix = tools.parseTranslateMatrix(transform || webkitTransform);
	                _this._deltaY = matrix.y;
	                _this._method.scrollTo(matrix.x, matrix.y, 0);

	                //手指按下时, 记录当前的初始位置,时间等数据.
	                var pageY = event.touches[0].pageY;


	                _this._lastDeltaY = _this._deltaY;
	                _this._startPageY = pageY;

	                _this._state.press = true;
	                _this._state.timestamp = Date.now();
	                _this._state.lastTime = _this._state.timestamp;
	                _this._state.velocity = 0;
	                _this._state.pageY = pageY;
	                _this._state.lastPageY = pageY;

	                _this._velocityTimer = setInterval(_this._method.computeVelocity.bind(_this), 10);

	                _this._requestAnimationId = window.requestAnimationFrame(_this._method.animateFrame.bind(_this));

	                _this.refs.scrollBar.show();
	            },

	            //手指移动
	            dragMove: function dragMove(e) {
	                e.preventDefault();

	                var pageY = e.touches[0].pageY;

	                var now = Date.now();

	                var _this$_method$getTrig2 = _this._method.getTriggerLine();

	                var topLine = _this$_method$getTrig2.topLine;
	                var bottomLine = _this$_method$getTrig2.bottomLine;
	                var topTriggerLine = _this$_method$getTrig2.topTriggerLine;
	                var bottomTriggerLine = _this$_method$getTrig2.bottomTriggerLine;


	                _this._deltaY = _this._lastDeltaY + (pageY - _this._startPageY);

	                _this.state.direction = pageY > _this._startPageY ? _constant.DIRECTION.DOWN : _constant.DIRECTION.UP;

	                //代码移至滚动事件处理中
	                // this.state.reach[SIDE.TOP] = this._deltaY >= topLine;
	                // this.state.reach[SIDE.BOTTOM] = this._deltaY <= bottomLine;

	                //到达边界后, 移动应该有阻尼效果
	                if (_this.state.reach[_constant.SIDE.TOP] || _this.state.reach[_constant.SIDE.BOTTOM]) {
	                    _this._deltaY = _this._reachSideDeltaY + (_this._deltaY - _this._reachSideDeltaY) / _this.props.resistance;
	                }

	                _this._state.pageY = pageY;
	                _this._state.timestamp = now;

	                if (_this.state.status == _constant.STATUS.DOING) {
	                    return;
	                }

	                var triggerTop = _this.state.reach[_constant.SIDE.TOP] && _this._deltaY > topTriggerLine;
	                var triggerBottom = _this.state.reach[_constant.SIDE.BOTTOM] && _this._deltaY < bottomTriggerLine;

	                // console.log('move triggerTop' , triggerTop , 'triggerBottom' , triggerBottom);

	                //顶部到达触发线并且启用
	                if (triggerTop && _this.state.enable[_constant.SIDE.TOP]) {
	                    _this.state.refreshSide = _constant.SIDE.TOP;

	                    if (_this.state.status != _constant.STATUS.TRIGGER) {
	                        _this.state.status = _constant.STATUS.TRIGGER;
	                    }

	                    //底部到达触发线并且启用
	                } else if (triggerBottom && _this.state.enable[_constant.SIDE.BOTTOM]) {
	                    _this.state.refreshSide = _constant.SIDE.BOTTOM;

	                    if (_this.state.status != _constant.STATUS.TRIGGER) {
	                        _this.state.status = _constant.STATUS.TRIGGER;
	                    }
	                } else {
	                    // console.log('change to initial');
	                    if (_this.state.status != _constant.STATUS.INITIAL) {
	                        _this.state.status = _constant.STATUS.INITIAL;
	                    }
	                }
	            },

	            //手指抬起
	            dragEnd: function dragEnd() {

	                _this._state.press = false;

	                window.cancelAnimationFrame(_this._requestAnimationId);
	                clearInterval(_this._velocityTimer);

	                //防止高频率小步长移动时, timer来不及计算速度就被停止;
	                if (_this._state.velocity == 0) {
	                    _this._method.computeVelocity();
	                }

	                //如果不做惯性,则抛出一次scrollTo事件
	                if (!_this._method.doInertial(_this._state.velocity)) {
	                    //抬起后再次出发scroll
	                    _this._method.scrollTo(0, _this._deltaY);
	                }

	                //检测是否需要 刷新/加载更多 的操作
	                _this._method.checkLoadWhenDragEnd();

	                //清空速度
	                _this._state.velocity = 0;

	                _this.refs.scrollBar.hide();
	            },

	            scroll: function scroll(event) {
	                var scrollTop = event.scrollTop;
	                var offsetHeight = event.offsetHeight;
	                var scrollHeight = event.scrollHeight;

	                var _this$_method$getTrig3 = _this._method.getTriggerLine();

	                var topLine = _this$_method$getTrig3.topLine;
	                var bottomLine = _this$_method$getTrig3.bottomLine;
	                var topTriggerLine = _this$_method$getTrig3.topTriggerLine;
	                var bottomTriggerLine = _this$_method$getTrig3.bottomTriggerLine;


	                if (scrollTop <= topLine) {
	                    if (!_this.state.reach[_constant.SIDE.TOP]) {
	                        _this.state.reach[_constant.SIDE.TOP] = true;
	                        _this._eventHandler.reachTop();
	                    }
	                } else if (scrollTop + offsetHeight >= scrollHeight) {
	                    if (!_this.state.reach[_constant.SIDE.BOTTOM]) {
	                        _this.state.reach[_constant.SIDE.BOTTOM] = true;
	                        _this._eventHandler.reachBottom();
	                    }
	                } else {
	                    if (_this.state.reach[_constant.SIDE.TOP]) {
	                        _this.state.reach[_constant.SIDE.TOP] = false;
	                        _this._eventHandler.leaveTop();
	                    }

	                    if (_this.state.reach[_constant.SIDE.BOTTOM]) {
	                        _this.state.reach[_constant.SIDE.BOTTOM] = false;
	                        _this._eventHandler.leaveBottom();
	                    }
	                }

	                if (_this.props.scrollHandler) {
	                    _this.props.scrollHandler(event);
	                }
	            },

	            reachTop: function reachTop() {
	                _this._reachSideDeltaY = _this._deltaY;
	                _this.state.refreshSide = _constant.SIDE.TOP;
	                _this.domRefs.headerRefresh.style.display = _this.state.enable[_constant.SIDE.TOP] ? 'block' : 'none';
	            },

	            leaveTop: function leaveTop() {
	                _this._reachSideDeltaY = 0;
	                _this.state.refreshSide = null;
	                _this.domRefs.headerRefresh.style.display = 'none';
	            },

	            reachBottom: function reachBottom() {
	                _this._reachSideDeltaY = _this._deltaY;
	                _this.state.refreshSide = _constant.SIDE.BOTTOM;
	                _this.domRefs.footerRefresh.style.display = _this.state.enable[_constant.SIDE.BOTTOM] ? 'block' : 'none';
	            },

	            leaveBottom: function leaveBottom() {
	                _this._reachSideDeltaY = 0;
	                _this.state.refreshSide = null;
	                _this.domRefs.footerRefresh.style.display = 'none';
	            }

	        };


	        _this._bindFunction();

	        return _this;
	    }

	    //根据props中事件监听, 判断是否启用refresh和loadMore

	    //模拟惯性滚动


	    //timer

	    //检测当前窗口内容是否显示够一屏, 不够需要往回滚动


	    //Y轴相关


	    _createClass(WrapperForSimulate, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._checkEnable(this.props);
	        }

	        //根据props中事件监听, 判断是否启用refresh和loadMore

	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            this._checkEnable(newProps);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {

	            this._initDomRefs();
	            this._bindEvents();
	            this._initDynamicState();
	            this._method.startCheckOutOfRangeTimer();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._unbindEvents();
	            this._method.stopCheckOutOfRangeTimer();
	        }

	        //重新渲染后,判断内容是否不够填满一屏,如果不够需要向上滚动

	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var _this2 = this;

	            //等待dom真正重新渲染完成
	            window.requestAnimationFrame(function () {

	                var clientHeight = _this2.domRefs.domNode.clientHeight;
	                var contentHeight = _this2.domRefs.list.clientHeight;

	                if (contentHeight < clientHeight) {
	                    return;
	                }

	                var computeScrollTop = contentHeight - clientHeight;

	                if (computeScrollTop < Math.abs(_this2._deltaY) && _this2.state.status != _constant.STATUS.DOING) {
	                    _this2._deltaY = -computeScrollTop;
	                    _this2._method.scrollTo(0, _this2._deltaY);
	                }
	            });
	        }
	    }, {
	        key: '_bindFunction',
	        value: function _bindFunction() {
	            this._eventHandler.dragStart = this._eventHandler.dragStart.bind(this);
	            this._eventHandler.dragMove = this._eventHandler.dragMove.bind(this);
	            this._eventHandler.dragEnd = this._eventHandler.dragEnd.bind(this);
	        }
	    }, {
	        key: '_checkEnable',
	        value: function _checkEnable(props) {
	            this.state.enable[_constant.SIDE.TOP] = props.hasOwnProperty('refreshHandler') && typeof props.refreshHandler == 'function';
	            this.state.enable[_constant.SIDE.BOTTOM] = props.hasOwnProperty('moreHandler') && typeof props.moreHandler == 'function';
	        }

	        //通过dom绑定touchstart来解决material-ui阻止touchstart的问题

	    }, {
	        key: '_bindEvents',
	        value: function _bindEvents() {
	            this.domRefs.document.body.addEventListener('touchstart', this._eventHandler.dragStart);
	        }

	        //在组件即将被销毁的时候, 解绑body的事件

	    }, {
	        key: '_unbindEvents',
	        value: function _unbindEvents() {
	            this.domRefs.document.body.removeEventListener('touchstart', this._eventHandler.dragStart);
	        }

	        /**
	         * 定义动态state
	         * 为了解决组件状态发生改变时,不想触发自己的render,但是想要改变子组件的状态.
	         * 通过PropertySetter来调用子组件改变对应状态的方法.
	         */

	    }, {
	        key: '_initDynamicState',
	        value: function _initDynamicState() {
	            var _this3 = this;

	            //定义state.status
	            Object.defineProperty(this.state, 'status', {
	                get: function get() {
	                    return _this3._stateInShadow.status;
	                },
	                set: function set(value) {
	                    if (_this3._stateInShadow.status != value) {
	                        _this3._stateInShadow.status = value;

	                        //根据拖拽方向判断当前更新的状态
	                        var refresher = _this3.state.direction == _constant.DIRECTION.DOWN ? _this3.refs.header : _this3.refs.footer;
	                        var enable = _this3.state.direction == _constant.DIRECTION.DOWN ? _this3.state.enable[_constant.SIDE.TOP] : _this3.state.enable[_constant.SIDE.BOTTOM];

	                        if (enable) {
	                            //更新子组件的状态
	                            refresher.updateStatus(_this3._stateInShadow.status);
	                        }
	                    }
	                }
	            });

	            //定义isReach
	            Object.defineProperty(this.state, 'isReach', {
	                get: function get() {
	                    return _this3.state.reach[_constant.SIDE.TOP] || _this3.state.reach[_constant.SIDE.BOTTOM];
	                }
	            });

	            //定义弹性
	            Object.defineProperty(this.state, 'springConstant', {
	                value: mutants.env.os == mutants.env.constant.os.ios ? 1 : this.props.resistance
	            });
	        }

	        //当外部加载数据完成,调用这个方法重置动画状态

	    }, {
	        key: 'completeAnimation',
	        value: function completeAnimation() {

	            if (this.state.status == _constant.STATUS.DOING) {
	                this.state.status = _constant.STATUS.INITIAL;
	                //如果完成的时候, 顶部还贴边, 则进行回弹, 如果在过程中进行了滚动, refreshSide为null, 不做任何处理
	                if (this.state.refreshSide == _constant.SIDE.TOP) {
	                    this._method.scrollTo(0, 0, 400);
	                }
	            }
	        }

	        //提供对外滚动方法

	    }, {
	        key: 'scrollTo',
	        value: function scrollTo(deltaY) {
	            var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            this._deltaY = deltaY;
	            this._method.scrollTo(0, deltaY, duration);
	        }

	        //内部方法


	        //事件处理

	    }, {
	        key: '_initDomRefs',


	        //初始化dom指针
	        value: function _initDomRefs() {

	            this.domRefs.domNode = _reactDom2.default.findDOMNode(this);
	            this.domRefs.list = _reactDom2.default.findDOMNode(this.refs.list);
	            this.domRefs.headerRefresh = _reactDom2.default.findDOMNode(this.refs.header);
	            this.domRefs.footerRefresh = _reactDom2.default.findDOMNode(this.refs.footer);

	            //寻找document对象, 不通过window.document是因为有可能组件被渲染到其他iframe中
	            //当script和dom不再同一个window对象下时, 会导致touchstart监听失败
	            var node = this.domRefs.domNode.parentNode;

	            while (node && node.constructor.toString().indexOf('HTMLDocument') == -1) {
	                node = node.parentNode;
	            }

	            if (node) {
	                this.domRefs.document = node;
	            } else {
	                this.domRefs.document = document;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var styles = getStyles(this.props, this.context);

	            //头部PullRefresh图标
	            var refreshLoading = _react2.default.createElement(_Refresher2.default, {
	                ref: 'header',
	                style: { position: 'absolute', top: 0 },
	                enable: this.state.enable[_constant.SIDE.TOP],
	                type: this.props.loadingStyle,
	                distanceToRefresh: this.props.distanceToRefresh,
	                statusLabel: this.props.refreshStatusLabel,
	                color: styles.refresh.color,
	                direction: _constant.DIRECTION.DOWN,
	                status: this.state.status

	            });

	            //内容区
	            var content = _react2.default.createElement(
	                'div',
	                {
	                    ref: 'list',
	                    style: styles.content
	                },
	                this.props.children
	            );

	            //底部LoadMore图标
	            var moreLoading = _react2.default.createElement(_Refresher2.default, {
	                ref: 'footer',
	                style: { position: 'absolute', bottom: 0 },
	                enable: this.state.enable[_constant.SIDE.BOTTOM],
	                type: this.props.loadingStyle,
	                distanceToRefresh: this.props.distanceToRefresh,
	                statusLabel: this.props.moreStatusLabel,
	                color: styles.more.color,
	                direction: _constant.DIRECTION.UP,
	                status: this.state.status

	            });

	            return _react2.default.createElement(
	                'div',
	                { style: styles.root,
	                    className: this.props.className

	                    //onTouchStart={this._eventHandler.dragStart}
	                    , onTouchMove: this._eventHandler.dragMove,
	                    onTouchEnd: this._eventHandler.dragEnd

	                },
	                refreshLoading,
	                content,
	                moreLoading,
	                _react2.default.createElement(_ScrollBar2.default, {
	                    ref: 'scrollBar'
	                })
	            );
	        }
	    }]);

	    return WrapperForSimulate;
	}(_react2.default.Component);

	WrapperForSimulate.propTypes = _props.propTypes;
	WrapperForSimulate.defaultProps = _props.defaultProps;
	exports.default = WrapperForSimulate;

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _props2 = __webpack_require__(496);

	var _WrapperForNative = __webpack_require__(506);

	var _WrapperForNative2 = _interopRequireDefault(_WrapperForNative);

	var _WrapperForSimulate = __webpack_require__(507);

	var _WrapperForSimulate2 = _interopRequireDefault(_WrapperForSimulate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/5/30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Scroller = function (_React$Component) {
	    _inherits(Scroller, _React$Component);

	    function Scroller() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Scroller);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scroller.__proto__ || Object.getPrototypeOf(Scroller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Scroller, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {

	            if (mutants.env.os == mutants.env.constant.os.ios) {
	                this.state.wrapper = _WrapperForSimulate2.default;
	            } else {
	                this.state.wrapper = _WrapperForNative2.default;
	            }
	        }

	        //提供对外滚动方法

	    }, {
	        key: 'scrollTo',
	        value: function scrollTo(deltaY) {
	            var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            this.refs.scroller.scrollTo(deltaY, duration);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;

	            var props = _objectWithoutProperties(_props, ['children']);

	            return _react2.default.createElement(
	                this.state.wrapper,
	                _extends({
	                    ref: 'scroller'
	                }, props),
	                children
	            );
	        }
	    }]);

	    return Scroller;
	}(_react2.default.Component);

	Scroller.propTypes = _props2.propTypes;
	Scroller.defaultProps = _props2.defaultProps;
	;

	exports.default = Scroller;

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _WrapperForNative = __webpack_require__(495);

	var _WrapperForNative2 = _interopRequireDefault(_WrapperForNative);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _WrapperForNative2.default; /**
	                                               * Created by TonyJiang on 16/5/30.
	                                               */

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _WrapperForSimulate = __webpack_require__(504);

	var _WrapperForSimulate2 = _interopRequireDefault(_WrapperForSimulate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _WrapperForSimulate2.default; /**
	                                                 * Created by TonyJiang on 16/3/29.
	                                                 */

/***/ },

/***/ 515:
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

	var _FloatButtons = __webpack_require__(516);

	var _FloatButtons2 = _interopRequireDefault(_FloatButtons);

	var _IconButtons = __webpack_require__(519);

	var _IconButtons2 = _interopRequireDefault(_IconButtons);

	var _Buttons = __webpack_require__(522);

	var _Buttons2 = _interopRequireDefault(_Buttons);

	var _chanjetScroller = __webpack_require__(494);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ButtonsPage = function (_BasePage) {
	    _inherits(ButtonsPage, _BasePage);

	    function ButtonsPage() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ButtonsPage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonsPage.__proto__ || Object.getPrototypeOf(ButtonsPage)).call.apply(_ref, [this].concat(args))), _this), _this.title = 'ButtonsDemo', _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(ButtonsPage, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                root: {
	                    height: '100%'
	                }
	            };
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {

	            var styles = this.getStyles();

	            return _react2.default.createElement(
	                'div',
	                { style: styles.root },
	                _react2.default.createElement(
	                    _chanjetScroller.Scroller,
	                    null,
	                    _react2.default.createElement(_Buttons2.default, null),
	                    _react2.default.createElement(_FloatButtons2.default, null),
	                    _react2.default.createElement(_IconButtons2.default, null)
	                )
	            );
	        }
	    }]);

	    return ButtonsPage;
	}(_BasePage3.default);

	exports.default = ButtonsPage;

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _android = __webpack_require__(517);

	var _android2 = _interopRequireDefault(_android);

	var _FlatButton = __webpack_require__(444);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _FontIcon = __webpack_require__(518);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var FloatButtons = function (_React$Component) {
	    _inherits(FloatButtons, _React$Component);

	    function FloatButtons() {
	        _classCallCheck(this, FloatButtons);

	        return _possibleConstructorReturn(this, (FloatButtons.__proto__ || Object.getPrototypeOf(FloatButtons)).apply(this, arguments));
	    }

	    _createClass(FloatButtons, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                title: {
	                    fontSize: '0.5333333333333333rem',
	                    textIndent: '20px',
	                    marginTop: '2.1333333333333333rem'
	                },
	                summary: {
	                    fontSize: '0.37333333333333335rem',
	                    textIndent: '20px',
	                    lineHeight: '0.5333333333333333rem',
	                    marginTop: '0.8rem'
	                },
	                btn: {
	                    margin: 12
	                },
	                exampleImageInput: {
	                    cursor: 'pointer',
	                    position: 'absolute',
	                    top: 0,
	                    bottom: 0,
	                    right: 0,
	                    left: 0,
	                    width: '100%',
	                    opacity: 0

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
	                    'p',
	                    { style: styles.title },
	                    'Flat Button'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '简单使用'
	                    ),
	                    _react2.default.createElement(_FlatButton2.default, { label: 'Default' }),
	                    _react2.default.createElement(_FlatButton2.default, { label: 'Primary', primary: true }),
	                    _react2.default.createElement(_FlatButton2.default, { label: 'Secondary', secondary: true }),
	                    _react2.default.createElement(_FlatButton2.default, { label: 'Disabled', disabled: true })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '只有图标的按钮'
	                    ),
	                    _react2.default.createElement(_FlatButton2.default, {
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    }),
	                    _react2.default.createElement(_FlatButton2.default, {
	                        backgroundColor: '#a4c639',
	                        hoverColor: '#8AA62F',
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    }),
	                    _react2.default.createElement(_FlatButton2.default, {
	                        href: 'https://github.com/',
	                        secondary: true,
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '组合使用的按钮'
	                    ),
	                    _react2.default.createElement(
	                        _FlatButton2.default,
	                        { label: 'Choose an Image', labelPosition: 'before', style: styles.btn },
	                        _react2.default.createElement('input', { type: 'file', style: styles.exampleImageInput })
	                    ),
	                    _react2.default.createElement(_FlatButton2.default, {
	                        label: 'Label before',
	                        labelPosition: 'before',
	                        primary: true,
	                        style: styles.btn,
	                        icon: _react2.default.createElement(_android2.default, null)
	                    }),
	                    _react2.default.createElement(_FlatButton2.default, {
	                        href: 'https://github.com/',
	                        label: 'GitHub Link',
	                        secondary: true,
	                        style: styles.btn,
	                        icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' })
	                    })
	                )
	            );
	        }
	    }]);

	    return FloatButtons;
	}(_react2.default.Component);

	exports.default = FloatButtons;

/***/ },

/***/ 517:
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

	var ActionAndroid = function ActionAndroid(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z' })
	  );
	};
	ActionAndroid = (0, _pure2.default)(ActionAndroid);
	ActionAndroid.displayName = 'ActionAndroid';
	ActionAndroid.muiName = 'SvgIcon';

	exports.default = ActionAndroid;

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FontIcon = __webpack_require__(418);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FontIcon2.default; /**
	                                       * Created by guopeng on 16/4/8.
	                                       */

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _IconButton = __webpack_require__(520);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _FontIcon = __webpack_require__(518);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _home = __webpack_require__(521);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var IconButtons = function (_React$Component) {
	    _inherits(IconButtons, _React$Component);

	    function IconButtons() {
	        _classCallCheck(this, IconButtons);

	        return _possibleConstructorReturn(this, (IconButtons.__proto__ || Object.getPrototypeOf(IconButtons)).apply(this, arguments));
	    }

	    _createClass(IconButtons, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                title: {
	                    fontSize: '0.5333333333333333rem',
	                    textIndent: '20px',
	                    marginTop: '2.1333333333333333rem'
	                },
	                summary: {
	                    fontSize: '0.37333333333333335rem',
	                    textIndent: '20px',
	                    lineHeight: '0.5333333333333333rem',
	                    marginTop: '0.8rem'
	                },
	                smallIcon: {
	                    width: 36,
	                    height: 36
	                },
	                mediumIcon: {
	                    width: 48,
	                    height: 48
	                },
	                largeIcon: {
	                    width: 60,
	                    height: 60
	                },
	                small: {
	                    width: 72,
	                    height: 72,
	                    padding: 16
	                },
	                medium: {
	                    width: 96,
	                    height: 96,
	                    padding: 24
	                },
	                large: {
	                    width: 120,
	                    height: 120,
	                    padding: 30
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
	                    'p',
	                    { style: styles.title },
	                    'Icon Button'
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '简单使用'
	                    ),
	                    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github' }),
	                    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', disabled: true })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '组合使用的按钮'
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'Font Icon' },
	                        _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-action-home' })
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        {
	                            iconClassName: 'material-icons',
	                            tooltip: 'Ligature'
	                        },
	                        'home'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '大小不同的按钮'
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        {
	                            iconStyle: styles.smallIcon,
	                            style: styles.small
	                        },
	                        _react2.default.createElement(_home2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        {
	                            iconStyle: styles.mediumIcon,
	                            style: styles.medium
	                        },
	                        _react2.default.createElement(_home2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        {
	                            iconStyle: styles.largeIcon,
	                            style: styles.large
	                        },
	                        _react2.default.createElement(_home2.default, null)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '点击显示tip的按钮'
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'bottom-right', touch: true, tooltipPosition: 'bottom-right', iconClassName: 'muidocs-icon-custom-github' },
	                        ' '
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'bottom-center', touch: true, tooltipPosition: 'bottom-center', iconClassName: 'muidocs-icon-custom-github' },
	                        ' '
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'bottom-left', touch: true, tooltipPosition: 'bottom-left', iconClassName: 'muidocs-icon-custom-github' },
	                        ' '
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'top-right', touch: true, tooltipPosition: 'top-right', iconClassName: 'muidocs-icon-custom-github' },
	                        ' '
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'top-center', touch: true, tooltipPosition: 'top-center', iconClassName: 'muidocs-icon-custom-github' },
	                        ' '
	                    ),
	                    _react2.default.createElement(
	                        _IconButton2.default,
	                        { tooltip: 'top-left', touch: true, tooltipPosition: 'top-left', iconClassName: 'muidocs-icon-custom-github' },
	                        ' '
	                    )
	                )
	            );
	        }
	    }]);

	    return IconButtons;
	}(_react2.default.Component);

	exports.default = IconButtons;

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

/***/ 521:
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

	var ActionHome = function ActionHome(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
	  );
	};
	ActionHome = (0, _pure2.default)(ActionHome);
	ActionHome.displayName = 'ActionHome';
	ActionHome.muiName = 'SvgIcon';

	exports.default = ActionHome;

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(452);

	var _Button2 = _interopRequireDefault(_Button);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _android = __webpack_require__(517);

	var _android2 = _interopRequireDefault(_android);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Buttons = function (_React$Component) {
	    _inherits(Buttons, _React$Component);

	    function Buttons() {
	        _classCallCheck(this, Buttons);

	        return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
	    }

	    _createClass(Buttons, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                title: {
	                    fontSize: '0.5333333333333333rem',
	                    textIndent: '20px'
	                },
	                summary: {
	                    fontSize: '0.37333333333333335rem',
	                    textIndent: '20px',
	                    lineHeight: '0.5333333333333333rem',
	                    marginTop: '0.8rem'
	                },
	                btn: {
	                    margin: 12
	                },
	                exampleImageInput: {
	                    cursor: 'pointer',
	                    position: 'absolute',
	                    top: 0,
	                    bottom: 0,
	                    right: 0,
	                    left: 0,
	                    width: '100%',
	                    opacity: 0

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
	                    'p',
	                    { style: styles.title },
	                    'Button '
	                ),
	                _react2.default.createElement(_Divider2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '简单使用'
	                    ),
	                    _react2.default.createElement(_Button2.default, { label: 'Default', style: styles.btn }),
	                    _react2.default.createElement(_Button2.default, { label: 'Primary', primary: true }),
	                    _react2.default.createElement(_Button2.default, { label: 'Secondary', secondary: true, style: styles.btn }),
	                    _react2.default.createElement(_Button2.default, { label: 'Disabled', disabled: true, style: styles.btn })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '只有图标的按钮'
	                    ),
	                    _react2.default.createElement(_Button2.default, {
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    }),
	                    _react2.default.createElement(_Button2.default, {
	                        backgroundColor: '#a4c639',
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    }),
	                    _react2.default.createElement(_Button2.default, {
	                        href: 'https://github.com/',
	                        secondary: true,
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.summary },
	                        '组合使用的按钮'
	                    ),
	                    _react2.default.createElement(
	                        _Button2.default,
	                        {
	                            label: 'Choose an Image',
	                            labelPosition: 'before',
	                            style: styles.btn
	                        },
	                        _react2.default.createElement('input', { type: 'file', style: styles.exampleImageInput })
	                    ),
	                    _react2.default.createElement(_Button2.default, {
	                        label: 'Label before',
	                        labelPosition: 'before',
	                        primary: true,
	                        icon: _react2.default.createElement(_android2.default, null),
	                        style: styles.btn
	                    }),
	                    _react2.default.createElement(_Button2.default, {
	                        href: 'https://github.com/',
	                        label: 'Github Link',
	                        secondary: true,
	                        style: styles.btn
	                    })
	                )
	            );
	        }
	    }]);

	    return Buttons;
	}(_react2.default.Component);

	exports.default = Buttons;

/***/ }

});