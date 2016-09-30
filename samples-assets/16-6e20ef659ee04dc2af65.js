webpackJsonp([16],{

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

/***/ 523:
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

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _FontIcon = __webpack_require__(518);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _List = __webpack_require__(389);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _colors = __webpack_require__(314);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var AvatarPage = function (_BasePage) {
	    _inherits(AvatarPage, _BasePage);

	    function AvatarPage() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, AvatarPage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AvatarPage.__proto__ || Object.getPrototypeOf(AvatarPage)).call.apply(_ref, [this].concat(args))), _this), _this.title = 'Avatar Demo', _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(AvatarPage, [{
	        key: 'renderContent',
	        value: function renderContent() {

	            var style = { margin: 5 };

	            return _react2.default.createElement(
	                _List2.default,
	                null,
	                _react2.default.createElement(
	                    _ListItem2.default,
	                    {
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: '/assets/images/uxceo-128.jpg' })
	                    },
	                    'Image Avatar'
	                ),
	                _react2.default.createElement(
	                    _ListItem2.default,
	                    {
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, {
	                            src: '/assets/images/uxceo-128.jpg',
	                            size: '1rem',
	                            style: '1rem'
	                        })
	                    },
	                    'Image Avatar with custom size'
	                ),
	                _react2.default.createElement(
	                    _ListItem2.default,
	                    {
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-communication-voicemail' }) })
	                    },
	                    'FontIcon Avatar'
	                ),
	                _react2.default.createElement(
	                    _ListItem2.default,
	                    {
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, {
	                            icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-communication-voicemail' }),
	                            color: _colors.blue300,
	                            backgroundColor: _colors.indigo900,
	                            size: '1rem',
	                            style: style
	                        })
	                    },
	                    'FontIcon Avatar with custom colors and size'
	                ),
	                _react2.default.createElement(
	                    _ListItem2.default,
	                    {
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(
	                            _Avatar2.default,
	                            null,
	                            'A'
	                        )
	                    },
	                    'Letter Avatar'
	                ),
	                _react2.default.createElement(
	                    _ListItem2.default,
	                    {
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(
	                            _Avatar2.default,
	                            {
	                                color: _colors.deepOrange300,
	                                backgroundColor: _colors.purple500,
	                                style: style
	                            },
	                            'A'
	                        )
	                    },
	                    'Letter Avatar with custom colors and size'
	                )
	            );
	        }
	    }]);

	    return AvatarPage;
	}(_BasePage3.default);

	exports.default = AvatarPage;

/***/ }

});