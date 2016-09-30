webpackJsonp([18],{

/***/ 533:
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

	var _Drawer = __webpack_require__(534);

	var _Drawer2 = _interopRequireDefault(_Drawer);

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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liudd on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var DrawerPage = function (_BasePage) {
	    _inherits(DrawerPage, _BasePage);

	    function DrawerPage(props) {
	        _classCallCheck(this, DrawerPage);

	        var _this = _possibleConstructorReturn(this, (DrawerPage.__proto__ || Object.getPrototypeOf(DrawerPage)).call(this, props));

	        _this.title = 'Drawer Demo';

	        _this.state = {
	            openLeft: false,
	            openLeftAuto: false,
	            openRight: false
	        };
	        return _this;
	    }

	    _createClass(DrawerPage, [{
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
	        key: 'handleToggle',
	        value: function handleToggle(type) {
	            switch (type) {
	                case 'left':
	                    this.setState({ openLeft: !this.state.openLeft });
	                    break;
	                case 'leftAuto':
	                    this.setState({ openLeftAuto: !this.state.openLeftAuto });
	                    break;
	                case 'right':
	                    this.setState({ openRight: !this.state.openRight });
	                    break;
	            }
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose() {
	            this.setState({ openLeftAuto: false });
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {
	            var _this2 = this;

	            var _state = this.state;
	            var openLeft = _state.openLeft;
	            var openLeftAuto = _state.openLeftAuto;
	            var openRight = _state.openRight;

	            var styles = this.getStyles();
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
	                    _react2.default.createElement(_ListItem2.default, { primaryText: '左侧弹出(再次点击收起)', onTouchTap: this.handleToggle.bind(this, 'left') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: '左侧弹出，自动收起', onTouchTap: this.handleToggle.bind(this, 'leftAuto') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: '右侧弹出(再次点击收起)', onTouchTap: this.handleToggle.bind(this, 'right') }),
	                    _react2.default.createElement(_Divider2.default, null)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        _Drawer2.default,
	                        { open: openLeft },
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            null,
	                            'Menu Item '
	                        ),
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            null,
	                            'Menu Item 1'
	                        ),
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            null,
	                            'Menu Item 2'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _Drawer2.default,
	                        {
	                            docked: false,
	                            width: 200,
	                            open: openLeftAuto,
	                            onRequestChange: function onRequestChange(open) {
	                                return _this2.setState({ openLeftAuto: open });
	                            }
	                        },
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            { onTouchTap: this.handleClose.bind(this) },
	                            'Menu Item '
	                        ),
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            { onTouchTap: this.handleClose.bind(this) },
	                            'Menu Item 1'
	                        ),
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            { onTouchTap: this.handleClose.bind(this) },
	                            'Menu Item 2'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _Drawer2.default,
	                        { width: 200, openSecondary: true, open: openRight },
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            null,
	                            'Menu Item '
	                        ),
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            null,
	                            'Menu Item 1'
	                        ),
	                        _react2.default.createElement(
	                            _ListItem2.default,
	                            null,
	                            'Menu Item 2'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return DrawerPage;
	}(_BasePage3.default);

	exports.default = DrawerPage;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Drawer = __webpack_require__(535);

	var _Drawer2 = _interopRequireDefault(_Drawer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Drawer2.default; /**
	                                     * Created by guopeng on 16/4/6.
	                                     */

/***/ },

/***/ 535:
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

	var _reactEventListener = __webpack_require__(438);

	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

	var _keycode = __webpack_require__(404);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _autoPrefix = __webpack_require__(406);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(398);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _Overlay = __webpack_require__(439);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _Paper = __webpack_require__(442);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _propTypes = __webpack_require__(391);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _pixel = __webpack_require__(420);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var openNavEventHandler = null;

	var Drawer = function (_React$Component) {
	  _inherits(Drawer, _React$Component);

	  function Drawer() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Drawer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapOverlay = function (event) {
	      event.preventDefault();
	      _this.close('clickaway');
	    }, _this.handleKeyUp = function (event) {
	      if (_this.state.open && !_this.props.docked && (0, _keycode2.default)(event) === 'esc') {
	        _this.close('escape');
	      }
	    }, _this.onBodyTouchStart = function (event) {
	      var swipeAreaWidth = _this.props.swipeAreaWidth;

	      var touchStartX = event.touches[0].pageX;
	      var touchStartY = event.touches[0].pageY;

	      // Open only if swiping from far left (or right) while closed
	      if (swipeAreaWidth !== null && !_this.state.open) {
	        if (_this.props.openSecondary) {
	          // If openSecondary is true calculate from the far right
	          if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
	        } else {
	          // If openSecondary is false calculate from the far left
	          if (touchStartX > swipeAreaWidth) return;
	        }
	      }

	      if (!_this.state.open && (openNavEventHandler !== _this.onBodyTouchStart || _this.props.disableSwipeToOpen)) {
	        return;
	      }

	      _this.maybeSwiping = true;
	      _this.touchStartX = touchStartX;
	      _this.touchStartY = touchStartY;

	      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _this.onBodyTouchMove = function (event) {
	      var currentX = event.touches[0].pageX;
	      var currentY = event.touches[0].pageY;

	      if (_this.state.swiping) {
	        event.preventDefault();
	        _this.setPosition(_this.getTranslateX(currentX));
	      } else if (_this.maybeSwiping) {
	        var dXAbs = Math.abs(currentX - _this.touchStartX);
	        var dYAbs = Math.abs(currentY - _this.touchStartY);
	        // If the user has moved his thumb ten pixels in either direction,
	        // we can safely make an assumption about whether he was intending
	        // to swipe or scroll.
	        var threshold = 10;

	        if (dXAbs > threshold && dYAbs <= threshold) {
	          _this.swipeStartX = currentX;
	          _this.setState({
	            swiping: _this.state.open ? 'closing' : 'opening'
	          });
	          _this.setPosition(_this.getTranslateX(currentX));
	        } else if (dXAbs <= threshold && dYAbs > threshold) {
	          _this.onBodyTouchEnd();
	        }
	      }
	    }, _this.onBodyTouchEnd = function (event) {
	      if (_this.state.swiping) {
	        var currentX = event.changedTouches[0].pageX;
	        var translateRatio = _this.getTranslateX(currentX) / _this.getMaxTranslateX();

	        _this.maybeSwiping = false;
	        var swiping = _this.state.swiping;
	        _this.setState({
	          swiping: null
	        });

	        // We have to open or close after setting swiping to null,
	        // because only then CSS transition is enabled.
	        if (translateRatio > 0.5) {
	          if (swiping === 'opening') {
	            _this.setPosition(_this.getMaxTranslateX());
	          } else {
	            _this.close('swipe');
	          }
	        } else {
	          if (swiping === 'opening') {
	            _this.open('swipe');
	          } else {
	            _this.setPosition(0);
	          }
	        }
	      } else {
	        _this.maybeSwiping = false;
	      }

	      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Drawer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.maybeSwiping = false;
	      this.touchStartX = null;
	      this.touchStartY = null;
	      this.swipeStartX = null;

	      this.setState({
	        open: this.props.open !== null ? this.props.open : this.props.docked,
	        swiping: null
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // If controlled then the open prop takes precedence.
	      if (nextProps.open !== null) {
	        this.setState({
	          open: nextProps.open
	        });
	        // Otherwise, if docked is changed, change the open state for when uncontrolled.
	      } else if (this.props.docked !== nextProps.docked) {
	        this.setState({
	          open: nextProps.docked
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.disableSwipeHandling();
	    }
	  }, {
	    key: 'getStyles',
	    value: function getStyles() {
	      var muiTheme = this.context.muiTheme;
	      var theme = muiTheme.navDrawer;

	      var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());

	      var styles = {
	        root: {
	          height: '100%',
	          width: (0, _pixel.px2px)(this.props.width || theme.width, true),
	          position: 'fixed',
	          zIndex: muiTheme.zIndex.navDrawer,
	          left: 0,
	          top: 0,
	          transform: 'translate3d(' + x + 'px, 0, 0)',
	          transition: !this.state.swiping && _transitions2.default.easeOut(null, 'transform', null),
	          backgroundColor: theme.color,
	          overflow: 'auto',
	          WebkitOverflowScrolling: 'touch' },
	        overlay: {
	          zIndex: muiTheme.zIndex.drawerOverlay,
	          pointerEvents: this.state.open ? 'auto' : 'none' },
	        rootWhenOpenRight: {
	          left: 'auto',
	          right: 0
	        }
	      };

	      return styles;
	    }
	  }, {
	    key: 'shouldShow',
	    value: function shouldShow() {
	      return this.state.open || !!this.state.swiping; // component is swiping
	    }
	  }, {
	    key: 'close',
	    value: function close(reason) {
	      if (this.props.open === null) this.setState({ open: false });
	      if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
	      return this;
	    }
	  }, {
	    key: 'open',
	    value: function open(reason) {
	      if (this.props.open === null) this.setState({ open: true });
	      if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
	      return this;
	    }
	  }, {
	    key: 'getMaxTranslateX',
	    value: function getMaxTranslateX() {
	      var width = (0, _pixel.px2px)(this.props.width || this.context.muiTheme.navDrawer.width, true);
	      return width + 10;
	    }
	  }, {
	    key: 'getTranslateMultiplier',
	    value: function getTranslateMultiplier() {
	      return this.props.openSecondary ? 1 : -1;
	    }
	  }, {
	    key: 'enableSwipeHandling',
	    value: function enableSwipeHandling() {
	      if (!this.props.docked) {
	        document.body.addEventListener('touchstart', this.onBodyTouchStart);
	        if (!openNavEventHandler) {
	          openNavEventHandler = this.onBodyTouchStart;
	        }
	      } else {
	        this.disableSwipeHandling();
	      }
	    }
	  }, {
	    key: 'disableSwipeHandling',
	    value: function disableSwipeHandling() {
	      document.body.removeEventListener('touchstart', this.onBodyTouchStart);
	      if (openNavEventHandler === this.onBodyTouchStart) {
	        openNavEventHandler = null;
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(translateX) {
	      var drawer = _reactDom2.default.findDOMNode(this.refs.clickAwayableElement);
	      var transformCSS = 'translate3d(' + this.getTranslateMultiplier() * translateX + 'px, 0, 0)';
	      this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
	      _autoPrefix2.default.set(drawer.style, 'transform', transformCSS);
	    }
	  }, {
	    key: 'getTranslateX',
	    value: function getTranslateX(currentX) {
	      return Math.min(Math.max(this.state.swiping === 'closing' ? this.getTranslateMultiplier() * (currentX - this.swipeStartX) : this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX), 0), this.getMaxTranslateX());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var containerClassName = _props.containerClassName;
	      var containerStyle = _props.containerStyle;
	      var docked = _props.docked;
	      var openSecondary = _props.openSecondary;
	      var overlayClassName = _props.overlayClassName;
	      var overlayStyle = _props.overlayStyle;
	      var style = _props.style;
	      var zDepth = _props.zDepth;


	      var styles = this.getStyles();

	      var overlay = void 0;
	      if (!docked) {
	        overlay = _react2.default.createElement(_Overlay2.default, {
	          ref: 'overlay',
	          show: this.shouldShow(),
	          className: overlayClassName,
	          style: Object.assign(styles.overlay, overlayStyle),
	          transitionEnabled: !this.state.swiping,
	          onTouchTap: this.handleTouchTapOverlay
	        });
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          style: style
	        },
	        _react2.default.createElement(_reactEventListener2.default, { elementName: 'window', onKeyUp: this.handleKeyUp }),
	        overlay,
	        _react2.default.createElement(
	          _Paper2.default,
	          {
	            ref: 'clickAwayableElement',
	            zDepth: zDepth,
	            rounded: false,
	            transitionEnabled: !this.state.swiping,
	            className: containerClassName,
	            style: Object.assign(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)
	          },
	          children
	        )
	      );
	    }
	  }]);

	  return Drawer;
	}(_react2.default.Component);

	Drawer.propTypes = {
	  /**
	   * The contents of the `Drawer`
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * The CSS class name of the container element.
	   */
	  containerClassName: _react2.default.PropTypes.string,

	  /**
	   * Override the inline-styles of the container element.
	   */
	  containerStyle: _react2.default.PropTypes.object,

	  /**
	   * If true, swiping sideways when the `Drawer` is closed will not open it.
	   */
	  disableSwipeToOpen: _react2.default.PropTypes.bool,

	  /**
	   * If true, the `Drawer` will be docked. In this state, the overlay won't show and
	   * clicking on a menu item will not close the `Drawer`.
	   */
	  docked: _react2.default.PropTypes.bool,

	  /**
	   * Callback function fired when the `open` state of the `Drawer` is requested to be changed.
	   *
	   * @param {boolean} open If true, the `Drawer` was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'swipe' for open requests; 'clickaway' (on overlay clicks),
	   * 'escape' (on escape key press), and 'swipe' for close requests.
	   */
	  onRequestChange: _react2.default.PropTypes.func,

	  /**
	   * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`
	   * into a controlled component.
	   */
	  open: _react2.default.PropTypes.bool,

	  /**
	   * If true, the `Drawer` is positioned to open from the opposite side.
	   */
	  openSecondary: _react2.default.PropTypes.bool,

	  /**
	   * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayClassName: _react2.default.PropTypes.string,

	  /**
	   * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayStyle: _react2.default.PropTypes.object,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * The width of the left most (or right most) area in pixels where the `Drawer` can be
	   * swiped open from. Setting this to `null` spans that area to the entire page
	   * (**CAUTION!** Setting this property to `null` might cause issues with sliders and
	   * swipeable `Tabs`: use at your own risk).
	   */
	  swipeAreaWidth: _react2.default.PropTypes.number,

	  /**
	   * The width of the `Drawer` in pixels. Defaults to using the values from theme.
	   */
	  width: _react2.default.PropTypes.number,

	  /**
	   * The zDepth of the `Drawer`.
	   */
	  zDepth: _propTypes2.default.zDepth

	};
	Drawer.defaultProps = {
	  disableSwipeToOpen: false,
	  docked: true,
	  open: null,
	  openSecondary: false,
	  swipeAreaWidth: 30,
	  width: null,
	  zDepth: 2
	};
	Drawer.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Drawer;

/***/ }

});