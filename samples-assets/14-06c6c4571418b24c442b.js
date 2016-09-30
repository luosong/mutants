webpackJsonp([14],{

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

/***/ 513:
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

	var _Button = __webpack_require__(452);

	var _Button2 = _interopRequireDefault(_Button);

	var _Alert = __webpack_require__(514);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var AlertPage = function (_BasePage) {
	    _inherits(AlertPage, _BasePage);

	    function AlertPage(props, context) {
	        _classCallCheck(this, AlertPage);

	        var _this = _possibleConstructorReturn(this, (AlertPage.__proto__ || Object.getPrototypeOf(AlertPage)).call(this, props, context));

	        _this.title = 'AlertDemo';

	        _this.state = {
	            alertOpen: false,
	            confirmOpen: false,
	            customizeOpen: false
	        };
	        return _this;
	    }

	    _createClass(AlertPage, [{
	        key: '_onClick',
	        value: function _onClick(tag, e) {
	            console.log(tag + ': ' + new Date().getTime());
	            this.setState({
	                alertOpen: false,
	                confirmOpen: false,
	                customizeOpen: false
	            });
	        }
	    }, {
	        key: 'handleOpen',
	        value: function handleOpen(type) {
	            switch (type) {
	                case 'alert':
	                    this.setState({ alertOpen: true });
	                    break;
	                case 'confirm':
	                    this.setState({ confirmOpen: true });
	                    break;
	                case 'customize':
	                    this.setState({ customizeOpen: true });
	                    break;
	            }
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {

	            return {
	                root: {
	                    padding: '0.5333333333333333rem',
	                    fontSize: '0.37333333333333335rem'
	                },
	                summary: {
	                    color: '#0091EA',
	                    padding: '0.4266666666666667rem'
	                }
	            };
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {

	            var styles = this.getStyles();
	            var _state = this.state;
	            var alertOpen = _state.alertOpen;
	            var confirmOpen = _state.confirmOpen;
	            var customizeOpen = _state.customizeOpen;

	            return _react2.default.createElement(
	                'div',
	                { style: styles.root },
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.summary },
	                    '下面提供了三种不同场景下的显示方式。'
	                ),
	                _react2.default.createElement(
	                    _List2.default,
	                    null,
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: 'Alert', onTouchTap: this.handleOpen.bind(this, 'alert') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: 'Confirm', onTouchTap: this.handleOpen.bind(this, 'confirm') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: 'Customize', onTouchTap: this.handleOpen.bind(this, 'customize') }),
	                    _react2.default.createElement(_Divider2.default, null)
	                ),
	                _react2.default.createElement(_Alert2.default, { open: alertOpen, msg: '我是一个alert提示框' }),
	                _react2.default.createElement(_Alert2.default, { open: confirmOpen,
	                    msg: '我是一个confirm提示框, 您确定要关闭吗?',
	                    positiveButton: { label: '确定', onClick: this._onClick.bind(this, '确定') },
	                    negativeButton: { label: '取消', onClick: this._onClick.bind(this, '取消') }
	                }),
	                _react2.default.createElement(_Alert2.default, { open: customizeOpen,
	                    msg: '我是三个按钮提示框',
	                    positiveButton: { label: '确定', onClick: this._onClick.bind(this, '确定') },
	                    negativeButton: { label: '取消', onClick: this._onClick.bind(this, '取消') },
	                    otherButton: { label: '自定义', onClick: this._onClick.bind(this, '自定义') }
	                })
	            );
	        }
	    }]);

	    return AlertPage;
	}(_BasePage3.default);

	exports.default = AlertPage;

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(437);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(445);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * created by chanapp-cli
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	function getStyle(props, context, state) {
	    var _context$muiTheme = context.muiTheme;
	    var alert = _context$muiTheme.alert;
	    var baseTheme = _context$muiTheme.baseTheme;


	    var styles = {
	        root: {},
	        negativeButton: alert.negativeButton,
	        otherButton: alert.otherButton,
	        positiveButton: alert.positiveButton,

	        buttonLabel: alert.buttonLabel,

	        content: {
	            textAlign: 'center'
	        }
	    };

	    return styles;
	}

	var Alert = function (_Component) {
	    _inherits(Alert, _Component);

	    function Alert(props, context) {
	        _classCallCheck(this, Alert);

	        var _this2 = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props, context));

	        _this2.platform = window.mutants.env.platform;

	        _this2.handleClose = function () {
	            if (_this2.platform === 'browser') {
	                _this2.setState({ open: false });
	            }

	            _this2.props.onRequestClose();
	        };

	        _this2.state = {
	            open: props.open
	        };
	        return _this2;
	    }

	    _createClass(Alert, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ open: nextProps.open });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props = this.props;
	            var style = _props.style;
	            var _props$msg = _props.msg;
	            var msg = _props$msg === undefined ? '' : _props$msg;
	            var _props$positiveButton = _props.positiveButton;
	            var positiveButton = _props$positiveButton === undefined ? { label: '知道了', onClick: function onClick() {} } : _props$positiveButton;
	            var _props$negativeButton = _props.negativeButton;
	            var negativeButton = _props$negativeButton === undefined ? null : _props$negativeButton;
	            var _props$otherButton = _props.otherButton;
	            var otherButton = _props$otherButton === undefined ? null : _props$otherButton;
	            var _props$modal = _props.modal;
	            var modal = _props$modal === undefined ? false : _props$modal;
	            var prepareStyles = this.context.muiTheme.prepareStyles;

	            var styles = getStyle(this.props, this.context, this.state);
	            var platform = this.platform;

	            var data = this.organizeData(styles, msg, positiveButton, negativeButton, otherButton);

	            if (platform === 'chanjet') {
	                if (this.state.open == true) {
	                    data.touchOutsideCancel = modal ? false : true;
	                    this.noticeNative(data);
	                }
	                return _react2.default.createElement('div', null);
	            }

	            var actions = data.buttons.map(function (item) {
	                var bgColor = item.backgroundColor;
	                var labelColor = item.titleColor;
	                var rootStyle = bgColor ? { backgroundColor: bgColor } : {};
	                var labelStyle = labelColor ? { color: labelColor } : {};
	                return _react2.default.createElement(_FlatButton2.default, {
	                    label: item.title,
	                    primary: true,
	                    style: Object.assign({}, styles.root, rootStyle),
	                    labelStyle: Object.assign({}, styles.buttonLabel, labelStyle),
	                    onTouchTap: _this3[item.onClick]
	                });
	            });

	            return _react2.default.createElement(
	                'div',
	                { style: prepareStyles(Object.assign(styles.root, style)) },
	                platform === 'browser' && _react2.default.createElement(
	                    _Dialog2.default,
	                    { open: this.state.open,
	                        actions: actions,
	                        modal: modal,
	                        contentStyle: styles.content,
	                        onRequestClose: this.handleClose },
	                    msg
	                )
	            );
	        }
	    }, {
	        key: 'noticeNative',
	        value: function noticeNative(data) {
	            var _this = this;

	            var now = new Date().getTime();

	            cordova.exec(function (idx) {
	                if (idx === -1) {
	                    _this.handleClose();
	                } else {
	                    _this[data.buttons[idx].onClick]();
	                }
	            }, function (error) {}, 'Dialog', 'show', [data]);
	        }
	    }, {
	        key: 'organizeData',
	        value: function organizeData(styles, msg, positiveButton, negativeButton, otherButton) {
	            var _this4 = this;

	            var opts = {
	                message: msg,
	                buttons: []
	            };

	            var btns = opts.buttons;

	            if (negativeButton) {
	                this.onNegativeClick = function () {
	                    var _onClick = negativeButton.onClick;
	                    if (_onClick) {
	                        _onClick();
	                    }
	                    _this4.handleClose();
	                };
	                btns.push(Object.assign({
	                    title: negativeButton.label,
	                    onClick: 'onNegativeClick'
	                }, styles.negativeButton));
	            }

	            if (otherButton) {
	                this.onCustomClick = function () {
	                    var _onClick = otherButton.onClick;
	                    if (_onClick) {
	                        _onClick();
	                    }
	                    _this4.handleClose();
	                };
	                btns.push(Object.assign({
	                    title: otherButton.label,
	                    onClick: 'onCustomClick'
	                }, styles.otherButton));
	            }

	            this.onPositiveClick = function () {
	                var _onClick = positiveButton.onClick;
	                if (_onClick) {
	                    _onClick();
	                }
	                _this4.handleClose();
	            };
	            btns.push(Object.assign({
	                title: positiveButton.label,
	                onClick: 'onPositiveClick'
	            }, styles.positiveButton));

	            return opts;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }]);

	    return Alert;
	}(_react.Component);

	Alert.propTypes = {
	    /**
	     * 重写根结点的 inline-style .
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * 弹出框提示内容， 只接收文本
	     */
	    msg: _react2.default.PropTypes.string,

	    /**
	     * 打开、关闭状态
	     */
	    open: _react2.default.PropTypes.bool,

	    /**
	     * 取消按钮， 位于最左侧
	     * 有两个属性：
	     * label: 按钮名称， onClick: 点击事件
	     */
	    negativeButton: _react2.default.PropTypes.shape({
	        label: _react2.default.PropTypes.string,
	        onClick: _react2.default.PropTypes.func
	    }),

	    /**
	     * 自定义按钮，位于中间位置
	     * 有两个属性：
	     * label: 按钮名称， onClick: 点击事件
	     */
	    otherButton: _react2.default.PropTypes.shape({
	        label: _react2.default.PropTypes.string,
	        onClick: _react2.default.PropTypes.func
	    }),

	    /**
	     * 确定按钮，位于最右侧
	     * 有两个属性：
	     * label: 按钮名称， onClick: 点击事件
	     */
	    positiveButton: _react2.default.PropTypes.shape({
	        label: _react2.default.PropTypes.string,
	        onClick: _react2.default.PropTypes.func
	    })
	};
	Alert.defaultProps = {
	    positiveButton: { label: '知道了', onClick: function onClick() {} },
	    otherButton: null,
	    negativeButton: null
	};
	Alert.contextTypes = {
	    muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Alert;

/***/ }

});