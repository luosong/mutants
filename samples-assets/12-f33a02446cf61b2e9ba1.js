webpackJsonp([12],{

/***/ 493:
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

	var _chanjetScroller = __webpack_require__(494);

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Avatar = __webpack_require__(508);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _FakerAvatarImages = __webpack_require__(510);

	var _FakerAvatarImages2 = _interopRequireDefault(_FakerAvatarImages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/9/13.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var IndexPage = function (_BasePage) {
	    _inherits(IndexPage, _BasePage);

	    function IndexPage(props, context) {
	        _classCallCheck(this, IndexPage);

	        var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props, context));

	        _this.data = [];


	        _this.initData();
	        return _this;
	    }

	    //初始化数据


	    _createClass(IndexPage, [{
	        key: "initData",
	        value: function initData() {
	            //生成五条数据
	            for (var i = 0; i < 20; i++) {
	                this.data.push({
	                    name: faker.name.findName(),
	                    email: faker.internet.email(),
	                    avatar: faker.random.arrayElement(_FakerAvatarImages2.default).headPicture
	                });
	            }
	        }
	    }, {
	        key: "getStyles",
	        value: function getStyles() {

	            //定义显示区域大小
	            return {
	                root: {
	                    width: '100%',
	                    height: '100%',
	                    overflowY: 'hidden',
	                    display: 'flex',
	                    flexDirection: 'column',
	                    cursor: 'url("/assets/images/cursor-mobile-move.ico"),auto'
	                },
	                wrapper: {
	                    flexGrow: 1,
	                    display: 'flex',
	                    flexDirection: 'column'
	                },
	                scroller: {
	                    flexGrow: 1
	                }
	            };
	        }
	    }, {
	        key: "renderContent",
	        value: function renderContent() {
	            var styles = this.getStyles();

	            var items = this.data.map(function (data, index) {
	                return _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(_ListItem2.default, {
	                        key: index,
	                        disabled: true,
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: data.avatar }),
	                        primaryText: data.name,
	                        secondaryText: data.email
	                    }),
	                    _react2.default.createElement(_Divider2.default, { inset: true })
	                );
	            });

	            //使用外部容器定义显示区域大小
	            return _react2.default.createElement(
	                "div",
	                { style: styles.root },
	                _react2.default.createElement(
	                    "div",
	                    { style: styles.wrapper },
	                    _react2.default.createElement(
	                        _chanjetScroller.Scroller,
	                        {
	                            style: styles.scroller
	                        },
	                        items
	                    )
	                )
	            );
	        }
	    }]);

	    return IndexPage;
	}(_BasePage3.default);

	exports.default = IndexPage;

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

/***/ 510:
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var data=[{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/745de405c9394c6392f6f49ce11e50e4.jpg","name":"产品管理部-张红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/30/916ccb02345d4ed0b0cd76623e2b4d76.jpg","name":"运维工作圈-赵海华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/09/a6d2142b63ca4d049c5b6946bc0fbeeb.jpg","name":"产品管理部 武轩"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/25/91b36aa04fcf41a08edd94026093faca.jpg","name":"代账平台-薛敏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/2fc9980a3e654a4d842d0b613276a65e.jpg","name":"畅捷通云-樊进忠"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/24/4be39ae89efe41589319dd7cb915d522.jpg","name":"陈婷婷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/15/13f6ec94fd0840a09401bc900139d82c.jpg","name":"云应用研发—向南月"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/24/eb229ce9d37845be9eb87de28c4fc0fa.jpg","name":"协同云测试－何珍"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/04/f301621dff954dec8cbd254c95a9b165.png.teamlogo.png","name":"运维DBA-张玉彬"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/16/36c0193c3ddf468fa2566876f6260cd7.jpg","name":"畅捷通云-杨晓辉"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/61fa1bcee2c940e7866975af09668428.jpg.teamlogo.jpg","name":"软件研发部-李胜国"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/04/280bd609690c441aa09ac611efda082e.jpg","name":"软件研发部-蔡晓冰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/0945ede6996943f7899a4716f7dbc64a.jpg","name":"销管--李晓龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/72593e07e66d4f56b1d702e3c06965d2.jpg","name":"代账服务平台-韩修国"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/d331fa1fe6e2484886f6c40e893ac453.jpg","name":"畅捷通-曾志勇"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/19/8a9a8b83521e49cdb6a3ecb48487be03.jpg","name":"研究院－张颖"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/02/7a9a5463e4454dbca48e64852ffd73b7.jpg.teamlogo.jpg","name":"研究院—张艳军"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/21/013d3bacffc5411ea3ea429054093e0b.jpg","name":"软件研发部-王庆伟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/7821eeae41404eec9bc1af618a2c1f7d.jpg","name":"行政工作组-张云"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/04/7178400f09f54f39ab6a1afc886a8dec.jpg.big.jpg","name":"软件研发部-娄东生"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/16/e5b24501c5e84b23a2aaecec35e03086.jpg.small.jpg","name":"广东-叶昌文"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/87309955bb604586a6a245b3548bcf9d.jpg","name":"代帐服务平台_张金宝"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/18/f2dad63c23fc49bb815e6284ddde60d1.jpg","name":"畅捷通云-伍国锋"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/11/e30086aa9bda420a9b5da4a6fc536fd3.jpg","name":"畅捷通云-李晋"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/19/d2d43b3bbd7e4a62a35a014282627eaf.jpg","name":"软件研发部-李泽鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/16/f908e310998849ecb6dc9ed6733d0a54.jpg","name":"孙林-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/15/9642954baa844c5ebee466f3d63026a1.jpg","name":"普及进销存组褚衍臣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/447a5098a9c14374a4f3347287462a92.jpg","name":"软件研发部-张刘剑"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/28/8b19acd1af244b168a2d283e3f218c9e.jpg","name":"北京办-王进华"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/18/1b70642b86754548a9878751ecfe9c45.jpg.teamlogo.jpg","name":"软件研发部-张艳晖"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/03/135b61e8df2d49d7bc96e76b9a6405cb.jpg","name":"山东业务代表处-宋云山"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/b80699f7c3f04e56bebaaddd5a0e9f57.jpg","name":"555"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/92333d061aca4fc3becbd9a31d220629.jpg.teamlogo.jpg","name":"软件研发部-王皓"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/03/85a4994d5562467abc5a26e937b05ffb.jpg","name":"软件研发部-王加位"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/21/656bc068be35462da4255ac78c891214.jpg.big.jpg","name":"北京业务代表处-刘博"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/24/ec6fb73fcf9044318a68ba9bfb001807.jpg","name":"北京办王朝"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/02/9b1e6a3fc94a4bbfa8362d7ddf424001.JPG.teamlogo.JPG","name":"微企云-刘小平"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/25/e548e3ac479f4e9081963a228b1f3511.jpg.big.jpg","name":"北京办-马晓辉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/27/3af9c4e4c5cb4643af78bc7c5686fb30.jpg","name":"客户支持部-刘静静"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/12/a96c0753291042fc8e1d05f78f28e6b1.jpg","name":"软件研发部-邹全林"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/14/2e5e64e8ef514c3da34376f17ae18432.jpg","name":"西部大区-刘志东"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/15/2986547987a84c048ac7587eda596944.jpg.teamlogo.jpg","name":"产品支持部-于子洋"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/03/62464b59429c45d5ab9e58fa22c86f67.jpg","name":"软件研发部-刘帅一"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/22/67bc27c1d7f2475d8549f2ffbb533f2d.jpg","name":"李瑞娟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/19/9242887157eb4b8a90a1959c927a94e1.jpg","name":"湖南代表处-毛新逊"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/42b552cbdfa5494196013f7fbf7dd874.jpg","name":"销售管理部-魏利杰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/28/2a2b2ed578374f48ade09334f31ef650.jpg","name":"客户支持部-赵东涛"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/11/bfec1bc3fea94b9ba26fb206cb086447.jpg.teamlogo.jpg","name":"辽宁办-赵冬恩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/24/161e32b1ff2a4e3b99f187c99d658cbd.jpg","name":"产品支持部-伍绍连"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/6318b79ca9714425933dfdd9c5c6df5b.jpg","name":"研究院-张继伟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/15/e9a9b1d430084f0d98c435a38fd40b05.jpg.teamlogo.jpg","name":"软件研发部-司建成"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/11/879cf74d7fde4bfb85315909525cf2ec.jpg.teamlogo.jpg","name":"山西办-韩胜"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/96882f6fe44a4749b2c1abef7fae7821.jpg","name":"广西办-黄飞"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/20/e8a22a12725f4505a49d8be8df85908f.jpg","name":"山西办-杨林"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/57d11e4df7974867bec038c45112b902.JPG.teamlogo.JPG","name":"客户支持部-姜艳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/17/99dcfff48a1745e3afab4f30684097ed.jpg.teamlogo.jpg","name":"软件研发部-李昕东"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/27/41fa98a1eaf440b2b5f81f3cbf14623f.jpg","name":"协同云－沈新宇"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/04/8c8be2f0d755427d8c080b93dbc1f71c.jpg.big.jpg","name":"软件研发部-李凤娟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/27/b2fa8c6983264df9977ed8fb34e1e18b.jpg","name":"河南业务代表处-杨凤生"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/21/dafe4f34b8b24886a9a4bcaa790b539c.png","name":"代账服务平台-卢森"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/20/ee7263d90dea4986ace3f0fe38c4db3f.jpg.small.jpg","name":"软件研发部-李文强"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/17/5bb998858cd44487947a1efd9d620eca.jpg","name":"代账服务-潘祖峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/25/530ea2ed21014396b4bfed452c0e36a8.jpg","name":"陕宁业务代表处-朱强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/1e1b80b208444186a68cd72bee46bbc2.jpg","name":"客户支持部-朱雪彪"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/18/998b7abab35040649aa4f2c6038f322f.jpg","name":"畅捷通云-王婧"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/24/5ba223646ceb46cab98bccd41692a550.jpg","name":"软件研发部-耿沅标"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/22/50eedb8c4fd54e32b5bc21aeea87448d.JPG.big.JPG","name":"软件研发部-蔡春红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/19/1d9ba177d64243f1829a9d183dd260f1.png","name":"协同云－常立静"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/5e625f8250c846cc81f9e9583411aba3.JPG.teamlogo.JPG","name":"江苏业务代表处陈平"},{"headPicture":"http://sto.chanapp.chanjet.com/4a47ecad-3fcd-422b-879b-b2df91606e00/2015/06/24/1435108716723.png.crop.png.comp.png","name":"客户支持部-左美清"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/02/6283cd7a22f4435092b97ce0bd77276b.JPG.teamlogo.JPG","name":"企管部-邓学鑫"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/30/471e7c18dd2d42cca7d1d318cb624038.jpg","name":"河南业务代表处-杜辉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/24/bd538fd1dd43410cb4b5726435e7eaf4.jpg","name":"琼桂办-覃勇茂"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/25/cbf1f2502fbe480a8d9d06a417d3181c.jpg","name":"产品管理部_路超"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/05/57d5576e61c9445c9a189b4de4138b05.jpg","name":"畅捷通商务部-高静"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"畅捷通商务部-郑挽菲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/28/ca9a1807331640738d322839d13056f3.jpg","name":"客户支持部-颜玲丹"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/04/2b48fe2c50f342fb8029e767469d8684.jpg","name":"客户支持部_丁磊"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/06/03e4af2b8ab443f2bf4e2bccf016993d.jpg","name":"广深办-吕惠杰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/26/16cc0b1c3af34d5f97b86642e9bbe0de.jpg","name":"营销中心总经理-茹海"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/27/a3882fb175244e299b85f2a068d32fff.png","name":"安徽业务代表处-徐茂富"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/16/0af0bf9a303949afbf9ec63ed49dae47.jpg","name":"辽宁办-- 王亭佳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/29/a9b7fa231cc8421cb88cb4980bf36c32.jpg","name":"山东业务代表处高兵"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/13/92b69dd5e7d24b91a370955924d53416.JPG.big.JPG","name":"软件研发部-陈雅佳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/20/4702847db519474f8bb1050735a9c27d.jpg","name":"人力资源-刘良娟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/15/706876e857af493c9cea74343385f38d.jpg","name":"微企云-华艳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/27/db66451899304390956c7f4c7c6d2c21.jpg","name":"微企云-余涛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/02/cb1ab3d7d4354875b6c557c49b714003.jpg","name":"湖南代表处-张强"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/05/db6a52350da64875a289fd688dd20e40.jpg.big.jpg","name":"湖北业务代表处李哲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/14/141ceabfcbee43a8a998ce8b5858f320.jpg","name":"产品管理部-王莲"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/df2f1580b37b4c01a28cd635015888b4.jpg.teamlogo.jpg","name":"广东办-杨卫涛"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/11/2fe46714bf5844dfafc40db6e49774be.JPG.teamlogo.JPG","name":"黑龙江办-胡朝阳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/14/b992e11721284a759ad24e3813be6bd3.jpg","name":"江西业务代表处-梁林涛"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/27/f87d5153507d42b3bcd518f1964cfd0a.jpg","name":"研究院-瞿剑川"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/64a4c270a30841cd97bc20847f09e3ae.jpg","name":"证券部审计部尤宏涛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/21/d0d25a643371402c9c5351733ea17723.jpg","name":"软件研发部-黄文雄"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/12/40a98b1d919d438abcd6b98b6f773f9f.jpg","name":"广东办-张胜银"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/349bef43f3c84a028ba1e619eb16bfbc.png","name":"微企云-戴志中"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/02/0baf4d847688490485a1230548a82fbc.jpg.teamlogo.jpg","name":"财务云－孟峰"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/01/c4e725a2a48c4f8185817e1786608174.jpg","name":"产品支持部-陈书华"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/22/bd1529eb05c14df8a3c05a5758fe56db.png.big.png","name":"产品支持部-赵树峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/23748347ed8f485bbdf797e24a0409d7.jpg","name":"研究院-杨光"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/46b96e93e34d431085a1e449f38917cd.jpg","name":"畅捷通云-曾雪枫"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/16/3acc27f0f5de43d4a86bb84ba6102619.jpg.big.jpg","name":"重庆业务代表处-余永兰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/7aed1ce3626a4d1aa95d41b421234ae3.jpg.teamlogo.jpg","name":"客户支持部-赖海芳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/09/c488b2810e15412eb502540c7ec8c654.jpg","name":"暢捷通—夏万强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/15/2e020c77e8ef4dbf8a8a3201dbef2b3d.jpg","name":"客户支持部-齐宝强"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/31/d2a8cf4997a04588a1da036b2681c720.jpg","name":"浙江办凌建生"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/cfa97ff7d7b84bba9f3ffecc383cf5b1.jpg.teamlogo.jpg","name":"服务社区-邓华亮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/21/72144a87119c432e87fcacdcea7fca09.jpg","name":"客户支持部-刘礽"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/02/92b86650e8114a309b037ca7de3c0613.jpg","name":"山东业务代表处-王喜"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/23/9dbe636836da42a0941e0da79561b871.png.big.png","name":"软件研发部-闫伟华"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/06/81174ee0cdf8434a8dd2b973f7a18eb0.jpg","name":"吉林业务代表处-袁强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/18/a6bc3da378dc49aca90d12188b8e83f4.jpg","name":"浙江业务代表处－阮屹"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/09/fe34a2e9b01c4811a0ba44ffae885959.jpg.big.jpg","name":"畅捷通商务部-桂春林"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/11/c02fcb646ae541aca792e155811391e5.jpg.teamlogo.jpg","name":"培训教育部-赵政"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/19/1b9bf83952c346f1a0dd18b6f318b83a.jpg","name":"软件研发部-杨玉凡"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/21/ca1b43632c6143e186537bf18647526d.jpg","name":"销售管理部-李广欣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/28/d6399c50fa514739a3af00103f14c1e4.jpg","name":"渐渐_"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/7b749f7070cd4e69bf91c9d3bd0f2f29.jpg.teamlogo.jpg","name":"客户支持部-陈一"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/b2b91d5588e144028cd10759bde08f29.jpg","name":"客户支持部－韦小锋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/14/a973693dfcc9478bb66598ac539a00cd.jpg","name":"研究院--郭锐"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/ef961c83587f4277bc9978cb45df8766.jpg","name":"软件研发部-冯守昌"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/07193c7a2b1e483aabe2eca7e7476e1f.jpg","name":"客户支持部-王光伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/10/e9bbfb0f78dc4592849a2069db9e2126.jpg","name":"软件研发部--鲍东华"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/06/4194254b38d14adc83cdc7f9623d9f2a.jpg","name":"软件研发部-高丽芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/19/479f51de52b840a3a2736762f3469609.JPG.teamlogo.JPG","name":"软件研发部-李卓"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/22/aea7566b1bce41cc8f1e7e1fd3262420.jpg","name":"川藏办渠道支持沈青丽"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/18/ef98a03c3cb84f2d950c42f1d53876c2.jpg","name":"研究院-李越"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/20/2e0dd9868ed94fc4989b5ea768bfe752.jpg","name":"培训教育部-高弘"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/e4fd3ef55f214d4f9190263f0673be85.jpg.teamlogo.jpg","name":"客户支持部-吴娟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/18/c8952a4fef8a469eb96c6048f6758a50.jpg","name":"软件研发部-任慧贤"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/965476863fc24a5f9d94eeac5ab9d838.jpg","name":"微企云-王建芬"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/09/9feb9f786a024bda8ce9d3786d1faa96.jpg","name":"软件研发部-李伟勤"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/17/a6c986208e1640a3a80f892a7b542887.jpg","name":"软件研发部-张彦"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/6625e07403a24cd68154a94890033646.jpg","name":"畅捷通云-黎叶红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/18/eb56f2b2f9c4436d9ea52da0575d107f.jpg","name":"川藏业务代表处--郑鑫"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/06/f5b664d8216c4049a7a368404e10d44c.jpg.teamlogo.jpg","name":"软件研发部－万征"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/31/ce5649ca77d6417a89de116904d6da1e.JPG.teamlogo.JPG","name":"胡松"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/11/24b8713eccd548619b999c1bcdb40fda.jpg","name":"广东办-池霏"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/08/05baa1b7d96c40e598e28a141bab7563.jpg","name":"安徽代表处-王书弟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/14/944046c000df4501884f3d497118ad2b.jpg","name":"安徽业务代表处-刘闪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/28/aedd7d36afe34821aa363ed81a87da28.jpg","name":"产品支持部_江智立"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/359823ad8d594b368a1c12a89eb4c5c5.jpg","name":"浙江办-徐阳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/25/36b0afdef95e49b0a90542fe38a69943.jpg","name":"客户支持部-赖勇洪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/26/a710056433104418ae3f275462c94823.jpg","name":"软件研发部-张丽平"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/27/b71ae8139500460984de20e58f446564.jpg","name":"财务云-戴崇恩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/18/5ce264b3336e4bd59fd2c8666991a374.jpg","name":"客户支持部-王思梦"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/10/045445076b7a4662aca0779e8aedf1d2.jpg","name":"客户支持部-陈玲"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/17/f9ce182e2f734f78b4582767d2dc0c22.jpg.small.jpg","name":"内蒙办-付大朋"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/30/2317516c44ab478e8b69a8030e07e299.jpg","name":"软件研发部-李豪"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/25/ba0595834c6340af923135057877f9e0.jpg.big.jpg","name":"软件研发部-刘培培"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/26/2a9333c9906441fb8375904fa1fe2eec.jpg","name":"产品支持部-吕斌"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/2b909c313fc341b1b3462fe15c35e0d3.jpg","name":"河南业务代表处 卢少春"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/10/da6f8f94d17a46a3a9ecc768b439bf77.jpg","name":"客户支持部-王丽"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/25/efb476ff350a4d6595f95616d224bda0.jpg","name":"山东业务代表处-姜宏伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/14/4c7c9718a42a4728b15536c73d0c2bca.jpg","name":"客户支持部-卢金凤"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/24/8918a693c95a4a49a5de36ef4fbb6303.jpg","name":"客户支持部-窦佳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/27/9f0c498bd10b4ec9be859deff40ca2bb.jpg","name":"陕宁代表处-李大伟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/20/c71a0214e3ea402d8f50f5e49c979690.jpg","name":"江西业务代表处ｰ杨帆"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/03/9f57d8c2a6ec41e6960a05884e5d281d.jpg.big.jpg","name":"公共服务研发-乔磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/20/7a0eda9ac238458d964d3959d64b7069.jpg","name":"客户支持部-钱兴林"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/09/d50efd3d0c804bb5be619ac1d3c6c0ac.jpg","name":"产品支持部--孙熠"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/03/64a46bf644bd4af4a27e5497945ab321.jpg","name":"辽宁办－王建铎"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/12/95fac3de1dbd47be882fc303479876aa.jpg","name":"吉林业务代表处--袁博"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/c48b153db2694b09b3bc32b551575348.jpg","name":"马靖昊"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/756be6b86e8c48df9a20ebfc5ab245c3.jpg.teamlogo.jpg","name":"客户支持部-刘影"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/25/0b847ad0af244249ac022cc3e2ec56c5.jpg","name":"新疆业务代表闫利辉"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/29/7f46ab6858004b329952ebc146670f92.jpg.big.jpg","name":"畅捷通云-郝彬"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/30/f679ad84ba4f49bf9c585ce3a0d220c6.jpg","name":"吉林办-孙馨"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/fa9cb8e77860494da8bec40bccd5dfba.jpg","name":"山东业务代表处-孙琪"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"财务部-项慧春"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/12/d51f25483cdc41db849559bcbe043da1.jpg","name":"软件研发部-刘红俊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/31/ad11113e940343cb80ee15e952e4eef2.jpg","name":"运维综合-熊昌伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/18/8a1e857b66cb44ecab18cb05e5e83326.jpg","name":"培训教育部-郭玲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/93d49c2e637149feb24e7f89b64ea334.jpg","name":"畅捷云-田荣"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/23/0ecfebabf8eb435e9b223bef4fa854ed.jpg","name":"开发管理-罗恒毅"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/02/33d503cfd8214fecb15cdb1e565513a6.jpg","name":"福建业务代表处-潘旭"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/19/99141ba513934728a1af67245a6145cc.jpg","name":"客户支持部－石克"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/25/81352ec9146f47c8b2b173e7d0a77939.jpg","name":"公共服务研发-温艳萍"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/30fc1401d1ef4470b1df2804dfd59226.jpg","name":"服务社区胡圆圆"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/08/a9b94eb9e404440dbc139cec88ac8269.jpg","name":"培训教育部-吕奥林"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/ca40169461d64ac3bf70b65fd5d3b81a.png.teamlogo.png","name":"客户支持部－徐泽华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/31/1f62ba343a3e43099fa475f3fade41e2.jpg","name":"客户支持部-陈芳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/24/66367c59d079479b9770dc093ea0262e.jpg","name":"贵州业务代表处-班文"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/ab7211c0e12e452f81e4d082b499bbc7.jpg.teamlogo.jpg","name":"应玉峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/22/dd2efa28cb8749c9bcc492ce9a786ef5.jpg","name":"邱"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/05/19c45f73d36740ab87db6c3eaf1f18e0.jpg.teamlogo.jpg","name":"协同云-刘石明"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/10/580f4a68bfa743b0bc77c8be96754db2.jpg","name":"畅捷云-刘明聪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/31/5978e2e9d2634ca3964887f263e7884a.jpg","name":"广西业务代表处_汪苏文"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/20/c9ad57c8e35e4749a0795f13bdffb68c.jpg","name":"陕宁办-樊鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/19/1b745e8028154a2988b7cdab66993b07.JPG.teamlogo.JPG","name":"安徽代表处-刘凯"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/b5422623a55e4111b47b88bf4129e474.jpg","name":"川藏业务代表处-王玎"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/22/c3947f5ad8a14ead9534098050f9b4fa.jpg","name":"甘青蒙-赵强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/05/e5a78283eb7747d6b43bd558b27c46e7.jpg","name":"琼桂办-麦匡锐"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/29/0b3e61ef64774d5585648e5df6078c6c.png.big.png","name":"广东办--陈青春"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/27/76cc2ef7a2c84e7993de43f69be05c09.jpg","name":"江苏业务代表处姚凯"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/05/744044dbac264c01a9272d18ff798472.jpg","name":"山东业务代表处-李洪远"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/19/05d9de290ba343fc98c3ca3707d29d9c.jpg.teamlogo.jpg","name":"江苏业务代表处马岳峰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/05/2ed52004a6fa4dcbb110513d77c33b3e.jpg.small.jpg","name":"微企云-濮吉"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/25/f9f2c132e64c42969238029024201d81.jpg","name":"北方大区-刘云鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/253fe1fd5aaf4b699ec2bfe50a1dc96b.jpg","name":"华东大区-彭振斌"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/18/709903dbd6ee4316b49467cab0b78c03.jpg","name":"重庆业务代表处-周少飞"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/729467bc0e0947f599fc6587b29f42f4.jpg","name":"福建杨松青"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/39dc6d2acc1445da87a562a2e0991299.jpg","name":"上海业务代表处-陈博"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/11/9dc68dd514af4d16a2e92d4e8b6d960f.jpg","name":"贵州业务代表处-韦杨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/21/cb3f1e6932cd4b08bbc2ea1a5412174b.jpg","name":"徐洪江"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/26/7f72e09872ab484f8604f6cb85ddf3f4.JPG.teamlogo.JPG","name":"西南大区－黄俊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/06/ecf0f490fde24fc5bc90255a3b71faa7.jpg","name":"新疆业务代表处姚国强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/19/8082a71a6d3546dabdbe0b6c9675ee1b.jpg","name":"京津冀大区-刘书伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/15/dba498a42d4d472da5190d884a810a8c.jpg","name":"华南大区-杜江"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/e0cd349f02ed4a23927250ebd95a6226.jpg","name":"微企云—李民"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/20/eff08d7ab84e426cb0987a270cf31229.jpg","name":"华中大区-肖明晓"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/14/7129647a4ef54fbfb4dafda2a6ee47a2.jpg.teamlogo.jpg","name":"湖北业务代表处岳锋"},{"headPicture":"http://staticoss.csp.chanapp.com/90003790471/Android/60000654661/1401508526405.png","name":"协同云刘志刚"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/02/62ce9832c15741578f94f321edb6b768.jpg","name":"福建-潘泉孝"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/15/448a4447a455475f894c62e344b0a2d4.jpg","name":"培训教育部—谭兆成"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/4c26b5115f1b4d09966e1a91ad19a5b3.jpg.teamlogo.jpg","name":"山西业务代表处-仇风"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/15/8c57763d6ce94084baa627457509e931.jpg","name":"湖北代表处-朱金财"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/ff863750309f49aeaf48c47134189d53.jpg","name":"微企云-张连江"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/14/1f7dd2de83494b76adcf4fa82840bca1.jpg","name":"福建-甘耀芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/16/68f3f27a617546539be698309951e74e.jpg","name":"软件研发部-王海燕"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/b9d42a4583354adb913afa1ce59b361c.jpg","name":"浙江办-虞伟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/11/d4fc1386f6b64008a9886910d859f4ce.jpg.small.jpg","name":"福建-林腾洋"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/08/0178bd7d72a8471ea451b8715242cb22.jpg.big.jpg","name":"陕宁业务代表处--王涛"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/05/1bff37adc17343e7a44e13b70828a0f7.jpg","name":"客户支持部-刘璐"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/fa0e83b7093a46b5bcce34066ba71f0b.jpg","name":"云平台研发-黄春亮"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/18/5125f9ad6b5841c290fa501c1d83955c.jpg","name":"黑龙江-吴轶哲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/aeeb29d8453a49f78c69f942f84e3031.jpg","name":"客户支持部-苏娜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/25/47f4f1b985a8483fb9615186d1823215.jpg","name":"客户支持部_牛晓敏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/9b5e989557db468b9286e88c93b5837d.jpg","name":"培训教育部胡磊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/24/5517d4d6bd18429bbd354c839c355001.jpg","name":"湖南业务代表处—曾瑜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/af44a32a26714b0dba10b64340b8a007.jpg","name":"公共服务研发-孙伟颖"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/0939dd4f2f8d4717a9314dbdb5d31eec.jpg","name":"客户支持部-章莹芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/11/0ca2f93ff8d1423fb0f2e58125d130dd.jpg.teamlogo.jpg","name":"软件研发部-孔珺"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/17174ecf1f3941a8929e2204c05aea2a.jpg","name":"客户支持部-彭多多"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/ad32777ad89d4d0d9ddc942a07c0601f.jpg","name":"运维监控-金梦蛟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/31/af87b555e28f4a61a9ea7f7bfa28f437.jpg","name":"客户支持部-黄文婷"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/03/15485a1894b2440cb92d38f4ad38a089.png.big.png","name":"软件研发部-张妍莺"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/09/c3045f190d2d4051bfa83f3e2d6599ca.jpg","name":"客户支持部-王娟娟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/24/2d98191a8ec240cf8b43e5550afd04f8.jpg","name":"软件研发部-张晨"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/29/384d6feb9ce44d54ae93b94f1f9d51c9.jpg.teamlogo.jpg","name":"软件研发部-王丙建"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/26/7c3ed025ba8546998eb57fb496c82a9c.jpg","name":"客户支持部—张燕"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/13/2127a454cbb84d6dbdcc15808b010825.jpg","name":"培训教育部蔡明辉"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/11/35e2958d9b5c451cb42a52b805560649.jpg.big.jpg","name":"客户支持部-杨凤花"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/12/32bcb011e5574b0a98f2cfce2f680700.jpg","name":"软件研发部-包耐明"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/01/ee6c2834e4954e69ad393284e87522bb.jpg","name":"上海办-张红丽"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/30/7b413076e763483993a820c61aa5b106.jpg","name":"河南业务代表处—郝虎"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/30/3940d7488eda4b7eb7384f95e95fd9d9.jpg","name":"安徽代表处吴天浩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/16/191d74df3bf94f08bf64b259c9c60065.jpg","name":"云平台研发-侯运喜"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/b6cd7864da6b4f1b95a7c5c4dd8240fc.jpg.small.jpg","name":"销售管理部刘馨"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/08/24eefb22bbd74ab49d4711ac4c9f0a69.jpg","name":"产品支持部-郑爽"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/2ccaf4c8d063431eb0ba227ad1f66a98.jpg","name":"客户支持-熊潇潇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/02b33ba3267442bc9e66e21116f9165e.png","name":"公共服务研发-薛会萍"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/6fafa775a29a4ca3bd60b08cfc8d34d5.JPG.teamlogo.JPG","name":"开发管理-张巍"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/13/666b5fc104664ae1b5a0d816066ea2ee.jpg","name":"开放平台-孙振海"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/08/619c6e37414445d8b0d0c413e67d39c6.jpg","name":"杜宇-协同云"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/28/4de81cceb8b64e55932373bb36728a8a.png","name":"开放平台-唐洪睿"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/06/a85fdbdb9b754a8983c167b84fb0efce.jpg.teamlogo.jpg","name":"协同云-尹玉峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/22/86b61c4c851140f4acf5235a8e22a40e.png","name":"开放平台-郭  鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/31/9fcd870f2b1d422fbfa39084937feadd.jpg","name":"客户支持部-吴旋"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/28/07d70c5496f64cf19c7623e210b61bdd.jpg","name":"协同云-贾双涛"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/13/efe036078afa44cc9633ae5fe7c5d6bd.jpg","name":"协同云-翟政辉"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/22/25dd59ceab5c4dde8b1c642bbcc7d923.jpg","name":"代账平台-苗杰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/01/159a2904c0624ef9abfb48083c588987.jpg","name":"协同云-丁磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/e4342f21b7ef4a0db22ea82c4164c3e2.jpg","name":"畅捷服务北京刘佳佳_"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/02/c731a55994504b388552066d603dc6c5.jpg","name":"福建-吴世辉"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/12/ab524a2452ee490295322cd9ac959131.jpg.teamlogo.jpg","name":"上海办彭光亮"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/03/42efcef6ddc340168dcf8ae052f54da5.jpg.big.jpg","name":"软件研发部-刘莉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/08/e1129d63ff9c4650b71d363f0c759e6e.jpg","name":"江波_代账平台事业部"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/02/ab3f257cc8ac4fdcb03c500c2b8eae8e.jpg","name":"证券部-张伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/24/b63e7fccea55420f8aadc1fb636aa45d.jpg","name":"客户支持部-童飞"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/19/ea6ff77856e44700abec25faa9be4c4b.jpg","name":"开发管理—张翠萍"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/2e6549e333e14da6af9af8381026a0ba.jpg","name":"江西代表处-刘雪飞"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/17/184556d2008d44cebbd0b4d5765621de.jpg.teamlogo.jpg","name":"软件研发部-李冬梅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/c19971e30c4342ff8ea5cf2841c10c56.jpg","name":"客户支持部-姚培德"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/27/40c646de2f264fc4a59cd536177f16a9.jpg","name":"培训教育部张鑫荣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/25/3ed36ad9269d4e13869017ce31994cc9.jpg","name":"客户支持部-黄旻"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/21/4394a319f2474fd3af3f33d3743c3893.jpg","name":"人力资源部-宗威"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/22/0bb5655ed9244b01afe18144f348d319.jpg.big.jpg","name":"客户支持部-李璐"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/18/36dafdf4aead43ddabec334ec41a6f08.jpg","name":"X3运维_林九根"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/0df9a78b317b40189dcd2830e1412a7f.jpg.small.jpg","name":"山东业务代表处-李晓飞"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/17/09a114633e0540b59c9a47c5f9f99a22.JPG.teamlogo.JPG","name":"软件研发部-杜芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/10/aae7fab0657246e89c176c11e2f5ae5a.png.teamlogo.png","name":"辽宁办-邵家旭"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/54eebbfb5cfb4462af8e24396ebf5b47.jpg.teamlogo.jpg","name":"客户支持部-黄思源"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/04/a45d1411b0ac4f689fce083a267c6056.JPG.teamlogo.JPG","name":"软件研发部-张伟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/06/04b96222ba214b24b3cd17c9be0ecfcb.jpg.small.jpg","name":"销售管理部-陈文娟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/25/8a4f4965e25c43afa3c0ac408bb4e618.jpg.big.jpg","name":"畅捷通商务部-蔡京胜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/20/1ad0ac76439a47ad993fd7243a273df9.jpg","name":"李文金"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/08/19f8a0deaec942e18f91caa5acfa50bd.jpg","name":"财务部-范立绣"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/28/ce5e30374d2c47968a911c28fee74e79.jpg.big.jpg","name":"广东办-刘鑫昭"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/17/1d667ff1ea7a4219a9ad8a05f040e9e2.jpg","name":"川藏业务代表处 田安德"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/2ea39a17d52c4d4cb31ccf816f5804d0.jpg","name":"广东办-余沐生"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/30/ac361a9eb045451eadc468973341e1e9.jpg","name":"川藏业务代表处_胡成军"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/ab184da5b9a241a6a711d1efd0b420e5.jpg","name":"好会计好生意-梁灵芝"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/06/aec58d4e09274d1da39ad874b2f634be.jpg","name":"培训教育部-陈江北"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/05/221f53d666c64792b9362e1957d9c1b7.jpg","name":"客户支持部-周义刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/24/53d8398c9ce7427da4541a74536fcc6a.jpg","name":"川藏业务代表处-黄晓刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/a746afb4f3b64a47bd69aeceead70aba.jpg","name":"运维网络_汪钰广"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/03/f0d19fbd677641cfac8d8e3de221efe2.png.big.png","name":"开发管理-赵原"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/19/ef94633e8d7b4e0f964b98213d2b89f7.jpg","name":"客户支持部-叶宝琛"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/15/8f46162ff1934229972894c2046b626a.jpg","name":"公共服务研发-张俊林"},{"headPicture":"http://staticoss.csp.chanapp.com/ce38c71f-799e-481a-b785-af357949ae68/logo/view/user/big_ffe15cccb5b741b7b9fc6eabd1e3a06e.jpg","name":"开放平台-王双玲"},{"headPicture":"http://sto.chanapp.chanjet.com/90003793376/2015/12/28/007ef6f409fd49318e6a7584e6621956.jpg","name":"云应用研发-马彦杰l"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/18/ca444da5c16f4b1dacca0402f94218bd.jpg","name":"协同云-陈兴华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/15/191bc692eb734c8ea1733dae60041622.jpg","name":"云业务发展部-杨雨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/28/00061cd8d3b34f0487ea3f4e0ca8326b.jpg","name":"开放平台-万星"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/9f7e199a5d1f444e80fe555d38719a8b.jpg","name":"公共服务-洪光华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/16/553d15fd0f6d40a09dee609ced597f54.jpg","name":"微企云-周昊"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/4117cb592dab4204960fca12793b8e00.jpg.teamlogo.jpg","name":"研发中心-薛峰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/90b798c34fe84dd49eb38708efb52ffb.jpg","name":"产品管理部-王碧"},{"headPicture":"http://staticoss.csp.chanapp.com/ce38c71f-799e-481a-b785-af357949ae68/logo/view/user/big_563768af828f48c1b4572828e074d74c.jpg","name":"协同云-李志鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/168ddee4f01f48ef9668dbfbbc5cf3d3.jpg.teamlogo.jpg","name":"云平台研发一纪向峰"},{"headPicture":"http://staticoss.csp.chanapp.com/ce38c71f-799e-481a-b785-af357949ae68/logo/view/user/big_284f430658a211e3ab02001cc493f2ec.jpg","name":"开放平台-李鲲"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/16/c76e86e0880e4534936faa07f3b5001a.jpg","name":"开放平台-宋永强"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/27/3895ac95b2204f9f8c2b37c209e8f963.jpg","name":"云平台研发-沈庚"},{"headPicture":"http://staticoss.csp.chanapp.com/ce38c71f-799e-481a-b785-af357949ae68/logo/view/user/big_7ce537d258f111e38d22001cc493f2ec.jpg","name":"财务云-肖培征"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/10/6a1e6da747594aba9cd7a97de857e3ef.jpg","name":"代账-陈水超"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/ab7a2d34ad034ae4a4189d094d4b73b9.jpg","name":"云平台研发－尹明君"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/07/c13de09e38814d4f830fa330820280b0.jpg","name":"云应用研发-李岩"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/4af71b5f498743b1b24f34596cf4893c.jpg","name":"畅捷通软件-程刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/04/bbf7cd43653a4e56b01e6a1ddd748fbb.jpg","name":"财务服务孙国平"},{"headPicture":"http://sto.chanapp.chanjet.com/4a47ecad-3fcd-422b-879b-b2df91606e00/2015/04/24/1429858415873.png.crop.png.comp.png","name":"微企云-马宝婧"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/28/c004b9bf897947b6a0cd05ba8ed58247.jpg","name":"产品支持部-宋张月"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/28/37d4a2230aca4e42b2e755d676e5cd06.jpg","name":"开发管理-王西牛"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/13/c66f985b708c448489aa0c5cef27c7c2.jpg","name":"软件研发部-张丽"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/29/0fc0a2cfb3db46cd8d09aa63e5f279f3.jpg","name":"研究院王学钧"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/14/89b7e0a3211e4034bb99f58dc8898087.jpg.teamlogo.jpg","name":"公共服务研发-徐铭"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/5f3446326a9649d2b5ca5fe1f1ecede3.jpg","name":"协同云-肖峰"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/05/39ced076a8074cb7892f024804159070.jpg","name":"协同云-吴雨虹"},{"headPicture":"http://staticoss.csp.chanapp.com/ce38c71f-799e-481a-b785-af357949ae68/logo/view/user/big_e951f772b02944688c72389c31fac2c9.jpg","name":"软件研发部-许鹤飞"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/01/87b1d93723834051a7339bc804f15978.jpg","name":"硅谷研发-蔡劲松"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/02/31019eeb8dd84868bce5f851e635d25f.jpg","name":"财务云-秦然"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/31/a7f81d9d4e5649c9a148a063e6af7365.jpg","name":"公共服务研发-黄通文"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/29/d126651e35bd47e2a11a400cdb84994f.png","name":"开放平台-刘丹丹"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/01/ca9058e23b234a7bb6fe55b98751b824.jpg","name":"云应用研发-苏鸣鸣"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/03/2db0f14a68c841c18d0f3b90ba2dfd7b.jpg.teamlogo.jpg","name":"云业务发展部-侯雪晴"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/03/8ec2391578554d89b01fb69132340d4d.jpg","name":"协同云-刘志刚-研发"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/10/3a8f0881afb04c4cb42253781a60bf26.jpg","name":"软件研发部-杨海燕"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/05/71c0180a1e0f4953aae93dc3db6f59d5.jpg","name":"天津业务代表处-鲍欣"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/08/6de09f483cd3493a8bef73f891226174.jpg","name":"浙江业务代表处-杨耀竣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/03/30/2425cbb6a360437b8cf11d24933aa5f8.png","name":"湖北代表处李广哲"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/33faf87a66de403f91da22c3b940c25b.jpg","name":"广东办-黄怀方"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/15/9ab7adf9785a4ff48fd9af4936b35b4c.jpg","name":"湖北业务代表处-王韬"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/11/2e3ea0aaec2a414a9be69fd274f177cc.jpg","name":"研究院-周健"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/03/674beee67dcc42a8af699659cdd0145b.jpg","name":"浙江办-孙石磊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/19/0eed04ddcef94807a18593ee77a7df13.jpg","name":"云平台研发-罗亚慧"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/06/06faaaddeacc4bfda49fa06e62ee3a7b.jpg","name":"代账服务平台-刘天宇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/1f59fcf97e814f66bb1896ffd0a81746.jpg","name":"畅捷通云-王阔"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/21/688a63725ae84a3b908c631e461054af.jpg","name":"协同云-季业舜"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/06/b84c68577e134b76948b672a66d746cb.jpg.teamlogo.jpg","name":"刘洁"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/28/d786dd0f592048d199c417dc678e6f77.jpg.teamlogo.jpg","name":"软件研发部-冯新刚"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/e70e56f1800849058c4fd9f25b57a1c5.jpg","name":"侯少静-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/28/eb78adfc4e234bec9b1851e78ef065b1.jpg","name":"开放平台-测试-周萃萃"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/09/3bebab8eafd643f29cae2543f6b0bc7e.jpg.small.jpg","name":"畅捷通云_张晓"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/21/928ca2aa8c074225a893a1848377eb66.png","name":"新疆业务代表处-张梦安"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/09/4855805ed88040c2a2b079e234ef8ffc.jpg.small.jpg","name":"何强 Andy He"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/25/cb8e7d437f8b40a39eaaf63f2b881c5d.jpg","name":"客户支持部－黄庆明"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/02/27/d4d24a6cce864f44934672c2949afdb7.jpg","name":"运维服务器-李勇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/25/2589c5e6cb254de0ac554d8df8d1b3e2.jpg","name":"重庆业务代表处韩磊"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/ae04055e6ccc448aaab2157f4dc16fe9.jpg.small.jpg","name":"硅谷研发-刘冰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/04/873f0bb4c4794a9c83f10e91d1f27db1.jpg.big.jpg","name":"软件研发部-常红"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/05/227d3039fd4e4db0a1a2d8b1b66ff148.jpg.small.jpg","name":"硅谷研发 - 龚博"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/28/5642f560998245198da978e6598f152e.jpg","name":"江苏业务代表处-蔡清江"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"软件研发部-曹保勇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/cfa70e93afa74db39a7ae6cd4b6d9e88.jpg","name":"公共服务研发-曹红娥"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/07/d16d247fb2404e02bcc17d855578a0f2.jpg","name":"人力资源部—屈琳琳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/31/28f150d979734d929f552a04498b6e5b.jpg","name":"客户支持部-常媛露"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"软件研发部-陈斌"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/07/26e6802b7fd4475096702bbc1d7ae3a1.JPG.teamlogo.JPG","name":"客户支持部-陈亮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/02/d37bd9c1ffb24bd4978b4515a63613ce.jpg","name":"江西业务代表-陈小龙"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/04/574693af3fc343e0a89593a464f98f75.JPG.teamlogo.JPG","name":"软件研发部-褚志朋"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/01/16ad53ac4c2d4b5b9a3df0044362fade.jpg","name":"畅接通商务部--崔陇利"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/30/2994fb2440524fb195f72f3b9bd36486.jpg","name":"开发管理-崔晓芳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/30/4d1e5f93d9744fd2a4ea9d5d039641e8.jpg","name":"客户支持部-丁红萍"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/05/178d9f5c7c304b8198e977e59ba7e75e.jpg","name":"软件研发部-杜玉洁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/04/db71c765869249f58d5891f212378791.jpg","name":"代账服务平台－方巧飞"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/03/0b0824cb6a2b42f091ce460bef87a6a5.jpg.big.jpg","name":"软件研发部-范文娟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/05/779c101d74fa4c4aa20e9ed821044323.png","name":"培训教育部-高从迎"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/16/06dc40b28fc8440e9541bbc10538cf6f.jpg.teamlogo.jpg","name":"湖南业务代表处-龚一铭"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/23/7760d31040294c74939c4f2b77fe1044.jpg","name":"甘青蒙业务代表处-孟敬"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"云平台研发-郝玖锋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/04/1b2d771642374002a37c85f892d6d31d.jpg","name":"协同云-杨献仑"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/24/3a848391e1c94811a033a4c88bdc24ee.jpg","name":"川藏业务代表处-何博"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/b897c4db7df04aaa87203041e266ccaa.jpg","name":"客户支持部-何虎林"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/d03e3c2e8a254a518ce2917d16d9e4be.jpg","name":"财务部-贺利"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/08/a54ba70060f74a2b8a6a3f10d57d1684.jpg.big.jpg","name":"软件研发部-侯明"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/24/bfbac3ab4a9c48f5b0b182716fb6b9de.jpg","name":"胡全伟-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/08/4f75427d17ca4525ba2afb35765698bd.jpg","name":"软件研发部-胡威"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"软件研发部-姬亚伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/3495d3b421cc46d8937573adf56ade84.jpg","name":"软件研发部-江振中"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/04/203f0c85b9d045cf886ff5e26f4908ed.JPG.big.JPG","name":"服务支持部-康莲"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/25/5d5bac26579143cfa39ca9647c65a4a2.jpg.big.jpg","name":"软件研发部-刘福琨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/10/e9a4251e03ca49cf8589906bd1e3be19.jpg","name":"客户支持部-梁园"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/15/ef60ae3cc34c49c5896a357087fe7fc9.jpg","name":"开发管理-梁喆"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/21/f082b0ded53c45d8a4170b3863702229.jpg.teamlogo.jpg","name":"软件研发部-李红娇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/13/47a9220bbd424d9ab8b2845ec93c4d5f.png","name":"协同云－李海洋"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/17/b7403274a3914c1fb1b898cd90fc9746.png.teamlogo.png","name":"商务部-李洪艳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/16/c52118bdf61a43949b4b7bace6906ad9.jpg","name":"河北业务代表处-李力"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/26/c763a4f8bbe648fd828ee184beacc527.jpg","name":"客户支持部-刘宝华"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/2003164ffaf543d9afbaad9a5eaa1cdc.jpg.teamlogo.jpg","name":"客户支持部-刘攀"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/07/bbb59b6f6e0042308d6d2ea8bd17bc57.jpg","name":"软件研发部-刘正刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/21/3d8549a92e60452aa69043242bb1c2d0.jpg","name":"畅捷通商务部-历颖"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/14/986a97e2517f4328b345b8aaf4ef8f40.jpg","name":"云平台研发-李智慧"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/16/b981c2acfea04593abc834c8c1975d48.jpg.teamlogo.jpg","name":"上海业务代表处-鲁文波"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/07/020d1adc20814af0843dca50147c55c0.jpg","name":"软件研发部-马坚"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/03/8c2fd7feb9d44fdb944667dbbee07b2f.png.big.png","name":"畅捷通软件研发慕红利"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/24/3478d03c410f4bec91703dbe36bb6ecf.JPG.teamlogo.JPG","name":"软件研发部-邱芳芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/08/e73c3832e9f44f5d88e79d7ba1429502.jpg","name":"畅捷通软件研发祁伟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/20/3ac474276fd743e6a051d2a7284ccdb2.jpg","name":"人力资源部-任洁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/9b11f3525251419b91865f2aff9a1d74.jpg","name":"客户支持部-任海伦"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/11/68534057e9f742fb9c9c3edf5c739e60.jpg","name":"公共服务研发-沈磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/da620fac07694d02a35df73a0bac1004.jpg","name":"畅捷通商务部—石峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/14/b8f07a1264144438bcca753662eb33a8.jpg","name":"研究院－孙宝骏"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/settingAccount/head_img.png","name":"培训教育部-孙雪玲"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/31/c7d570594f9c4b7fba81ed3d49bd4e66.jpg","name":"软件研发部-孙炎"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/30/edfbf015cd6b4605bf20b0ca334642d3.jpg.big.jpg","name":"软件研发部－苏泰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/14/76e8d9ba934f44a3bf67c9d03cbfcc33.jpg","name":"客户支持部-苏文强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/31/4afd0396cb014a1cbd5d0cb459a445a1.jpg","name":"人力资源部-孙向薇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/ee643cc490e14abd86a055d1c40d3309.jpg","name":"北京办事处—汤建威"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/22/1d9a2c0ee3204de092e935317dbe11fb.jpg","name":"产品管理部-汤小波"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/29/60a25200747b44afa359337f98395465.jpg","name":"行政工作组-谈旭"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/13/0766385936f24b068c0d20662de745b7.jpg","name":"微企云—田霞"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/10/3df80a6e79b54c78b3774dee22fa9c83.jpg","name":"客户支持部-汪峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/12/0b2d1c6d13cb43e0b421c21a02c2afe0.jpg","name":"公共服务研发-王国伟"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/18/c9b57c3b9c9b4ed7a00b0a47f606d0f0.jpg.teamlogo.jpg","name":"云平台研发部-王雷"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/20/e00dd4fdf2fa45bd823c8b06de6f01e6.jpg.big.jpg","name":"软件研发部-王磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/04/d97affb898df4bf68e9bd63e9d4322ce.jpg","name":"软件研发部-王龙飞"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/07/ce297400b87b46b4b4b78b8465ea27cb.jpg.teamlogo.jpg","name":"人力资源部-万英君"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/24/e983c544a2754e0aa8fb04d17cc35e8f.jpg","name":"客户支持部-吴潮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/d80ebd6f2ce1467fa9d2c56806d6adaa.jpeg","name":"运维安全-吴雷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/25/7885151c3b084c6e9df56092165ac71d.jpg","name":"云业务发展-吴伟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/02/d55c469d9385402ab7ba5eef0e4d0e33.jpg","name":"软件研发部-吴泽楷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/26/1d50fe111fdb4670beb26711432c0b44.jpg","name":"软件研发部-肖庚久"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/18/a8421dfeb23a460d89d217d97df58b6a.jpg","name":"人力资源-夏玉晗"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/05/6fcdbf2061254638b25cd1b957cb2ec5.jpg","name":"财务云-谢婧"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/17/10853cbf8dda4c32ae70a5c7ce6108f3.jpg","name":"云平台研发-薛宇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/27/21fc028bb5694385b50db94f79ff0ce9.jpg","name":"财务部-席筱霞"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/07/cb475a41c6294aaf8b5c7e584a91fd47.png.big.png","name":"软件研发部-胥智强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/26/d9e66bbda66942d3a41ee7c816ad3d4f.jpg","name":"杨苓"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/27/99fa1f4323464721839e8ba63763e250.jpg","name":"云南业务代表处-杨希"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/16/46028c7100164b6498b88c53d8e10ff4.jpg","name":"云平台研发-闫秋燕"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/01/57841b8fe63246fbb23fb816b2baf843.jpg","name":"云平台研发-闫相通"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/07/55d8161494584898baf94cbc8d950e1c.jpg.small.jpg","name":"研究院-于亮"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/21/125c6d1d568149eda30b0118c86f297b.JPG.teamlogo.JPG","name":"软件研发部-翟罡"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/12/8f37fe3b04ef43548982deca78d3dd6e.jpg","name":"培训教育部-张娣"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/27/00181af8127840a1901e0ee85690a052.jpg","name":"行政工作组-张富国"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/11/fc4fef315f0740c8a9ec12ac112d99d6.jpg","name":"审计部-章永丰"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/17/d3be0c59022c49638d6a6e1483f89788.jpg.teamlogo.jpg","name":"商务-赵万振"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/21/37b974b135004e92800fd2ebbf7eef2f.jpg.teamlogo.jpg","name":"软件研发部-赵子东"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/23/e5a6cfc88ef8486baf508f4deb1adfa6.jpg","name":"云平台研发-郑荣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/16/15e98e49e37b4d548cee4ac539821c4b.jpg","name":"软件研发部-郑亚栋"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/03/057d943e1cce4a1e865c6cf5d7183c57.jpg.big.jpg","name":"软件研发部-周航滔"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/05/0fdd6619185c4b73a59352a580761cb6.jpg","name":"软件研发部-卓敏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/fe04d4636fbc44c5a737ce8912eedcdd.jpg","name":"总裁会-邹丹"},{"headPicture":"http://www.gongzuoquan.com/views/resources/default/images/normlImg.png","name":"软件研发部-左龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/20/547838e69c204e7e803477bd5d8299e4.png","name":"测试帐号"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/799cde2741314841bd05211e7737b565.jpg","name":"王小平"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/10/336388057dac408cb2e044743fac934d.jpg.teamlogo.jpg","name":"开放平台研发-蒋宗良"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/04/867f227436e246578644ce6800e06712.jpg","name":"硅谷研发－李林"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/23/80b00b824fa0424ab68f3c5972c8c06b.jpg.small.jpg","name":"孟佩环"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/05/c0d4ee605f0e45f7b917b05454309aaf.jpg.small.jpg","name":"硅谷研发-戴原"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/05/b966560bec5f44b993f8e618b5102179.png","name":"软件研发部-刘俊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/10/3a26a21e88b846f6bf09c813c6f56f72.jpg","name":"软件研发部-尹伟斌"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/20/31063f876caa43b19237f5292c3e2b3c.jpg","name":"甘青蒙办事处－张龙龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/30/36325e5ef34c4b7fb4d8ae74c0b44933.jpg","name":"客户支持部-赵美红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/13/7b82e3a6be1a4e5ba0fc1e1abe6c9460.jpg","name":"协同云-彭凌波"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/ca341238a46046acada822a8c67c02d6.jpg","name":"测试-张贵宝"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/10/72c3ca6dde174d9ea61f606d54687aee.jpg.small.jpg","name":"福建-赵强"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/27/c37ffa7f80ca47c6b6939ebeffd6d587.jpg","name":"江苏业务代表处杨通"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/11/76491bd6e07a44f29f6deea6274a70ee.jpg","name":"协同云-曾成龙"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/28/555c0a67d1b3448babaa7dcedbb6f167.png","name":"张阳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/851c42596ef04e19bbd6b68fd8062c7c.jpg","name":"开放平台-田大帅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/22/4a2c00a24a8147ecbae044cce739ffa1.jpg","name":"软件研发部-王陶亮"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/09/3f13b5e134ff4f098fc4a9d2635a8ddb.jpg","name":"企业管理部-李佳慧"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/c9f4e94a758d4b43ac627e9803788d6b.jpg","name":"财务云-卞永锋"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/09/1d97f10bf7dd46a9be641781050a9080.jpg","name":"客户支持部-吕菲菲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/1c0d2ae98b3b499abdd86993f6145cf6.jpg","name":"客户支持部-王芬"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/67b7b200d242495db8c622b4aa0d5c22.jpg","name":"客户支持部-王祖君"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/10/89db0dceed0b4d9da4261d6b29a92548.jpg","name":"黑龙江办-张源"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/11/c738e8e0d5954b4bb370abf379d1c8b1.jpg","name":"黑龙江办-李昌明"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/13/18db89a50b364eafb217a00ab5572bc8.jpg.small.jpg","name":"协同云-余芳芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/27/0a8f429e449646899c29313cb9b7e370.JPG.big.JPG","name":"广东办—高五成"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/21/347a34ee560a41d08099749b23ef172d.jpg","name":"客户支持部－孙志强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/15/a3b02515c387417d941c2208f6325248.jpg","name":"开放平台-卢凡"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/11/ee2a70cd83f24d018ad0dcd78d51e1f3.jpg.big.jpg","name":"软件研发部-刘宇"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/15/67e1a670138047be912d7c71ff635a20.jpg.teamlogo.jpg","name":"微企云测试-梁冬冬"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/26/9efe40ad3c954b81ae5315d788360cfc.jpg","name":"软件研发部-郝利军"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/06/fbd0f0d347dc4a0ab0491a1582864e57.jpg","name":"法务部-贾弘毅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/31/df07e044a03c49ad8a3134b9138ab175.jpg","name":"云南办-王书成"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/14/2238a700b96c4e94af96cd7f184e57a0.jpg.teamlogo.jpg","name":"软件研发部-刘菁菁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/05/756a6563107047dda791d3146d929e35.jpg","name":"张衍哲-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/04/16/4eddb4a1609d4667958c6bdfad3753a9.jpg","name":"浙江办_章来胜"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"李沂军"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/c8f6c342822347058f038d17df35f1d6.jpg","name":"浙江业务部-王胜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/03/257bbba74b524e3abc3e6b8a5b5d6521.jpg","name":"产品管理部-侯鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/40e5bca6e9784c47880189fee6c2256e.jpg","name":"运维社区-乔绍宇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/13/001cdec6eaad478eb0acbb8ba9d3775f.jpg","name":"客户支持部—熊雪萍"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/12/783bc62662a5471c81d9a63d9325edd1.jpg","name":"刘南"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/03/3c1b782360aa4dfbb1e3d36244567f0e.jpg","name":"微企云-张延龙"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/08/e26f73f77c4f40d28ea37f6266e0b5ce.jpg.small.jpg","name":"协同云-戢运鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/b6ddf490dd1e4bebb33b4243c543ef45.png","name":"软件研发部-申恒军"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/29/8937c1b0d5f84eb5b4e076a37b138595.jpg","name":"协同云-赵炜♐️"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/13/9aefaaabe6cd46c28ab598cff12bf60c.jpg","name":"畅捷支持"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/07/39b5f92173a4420ebb75206bd568037b.jpg","name":"协同云 任旭东"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/22/4987a97d67464fd9969a7c7fc91f8e06.jpg","name":"客户支持部-郭天洋"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/23/a5207d01fde144fab8d3ed73748525ea.jpg","name":"协同云-裴沪滨"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/01/1af89a1a21a54b1bb1c3efb7b6928f43.jpg","name":"北京业务代表处-范润池"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/28/124c5e2e9deb4b0ba2463824ec55824c.jpg","name":"张建宾-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/06/05/20f2a0a03dba4e369ad3490c5cfcc62e.jpg.small.jpg","name":"云应用研发-史艳芳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/01/1335ff2a8ca247f2a0f260fc7a7318e2.jpg.big.jpg","name":"马骞-开发管理"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/15/18604b7a84e5468fb858595ddf9ce585.jpg","name":"开放平台-郑江"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/28/8fedcdbd8db24e15ba2a87263e86ebfd.png.big.png","name":"财务云-付俊伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/c1fdcb8f737847db9f741480d495e5d6.jpg","name":"客户支持部-李开振"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/05/30/5e51ff087ebc450c921971dcb55cbec4.jpg.big.jpg","name":"云应用研发—王明敏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/24/22288fd4ea3e4b76be5743cef3670a37.jpg","name":"开发管理-赵葳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/14/832dfe6d56f144ebbd7252432f225aa3.jpg","name":"协同云-付文章"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/17/c996ed583fcd4ca0a020e9210aa62a06.jpg","name":"客户支持部-童颖"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/21/176f1dc048284c2e86502610c241b67e.jpg","name":"运维部-牟清超"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/01/d08b125fa7934dabb6435d50e7bbdfa6.jpg","name":"客户支持部-汤增梅"},{"headPicture":"http://staticoss.csp.chanapp.com/90003796269/Android/60003792290/1402994835178.png","name":"营销云-吴静"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/02/4d050d4c7a2b4054a963b7310cbad381.jpg","name":"客户支持部-吕利"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/03/72c7a9abb2364f27b3df6795c162fd03.jpg","name":"畅捷服务刘佳佳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/536ad4796d4b45b39fc3a1417afb540f.jpg","name":"客户支持部-陈嘉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/bc3d7bfbbcd948b59f52f1498a0c589b.jpg","name":"客户支持部-张小翠"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/4c7e6a96aa044fdcb1183a9ef5eb0109.png","name":"协同云－曹磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/df52b300718a4b9c8f181d2f450a408a.jpg","name":"开放平台-李卓"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/972fae1e88d84d97bc7baf2720c381e4.jpg","name":"运维大数据-倪海涛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/19/f75322ba9d584cf9a941b34fa97442bd.jpg","name":"财务部-王艳艳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/16/53d9d15f22ce48fe9680e7563cee4498.jpg","name":"朱展- 协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/e192b321be9e4175a7b2f0b76ee006a4.jpg","name":"微企云-周亮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/14/2501320e96a84e3f8968c5bcc9720113.jpg","name":"软件研发部-苏昭"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/742507b4603e408da7b0fc6edca5e8e1.jpg","name":"畅捷通云-谢尧"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/11/07f6701a57074c94ba0ebd5b208eaf98.jpg.big.jpg","name":"软件研发部-杨威"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/14/793c5a57de0e41df9c3521c93c8f3db6.jpg","name":"云业务发展部—杨柳"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/02/740c2702c048485eb5a10214dd9be987.JPG.big.JPG","name":"客户支持部-方然"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/f606cb29685442adaa286d78a4c0fc9e.jpg","name":"畅捷通云_王微"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/14/96fcfcf8d5884ba7a8f893e54b30eee6.jpg.small.jpg","name":"培训教育部-李钢"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/27/f20a112f4904433abd8ed51cfc648fc8.jpg","name":"财务云-张婷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/29/83c8cb839b0d4025b92d9391afb9b735.jpg","name":"开放平台-褚旭昭"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/26/1040f1b9299a4c4e8da47c270e102624.jpg","name":"培训教育部-伍昶"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/dbfcf0f951bb478da9115a83461e166f.jpg","name":"培训教育部-陈建宇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/03/2d07b70b4b594a7cade2c19a51e1e7fc.jpg","name":"培训教育部—陆蕙"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/18/bc57b584594a46b98e673c942b2e9dec.jpg.big.jpg","name":"软件研发部-唐政"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/21/704bddd26a5c46c090fd09022bdcf78f.jpg","name":"培训教育部-李志刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/01/e4c258bd46164df195f04607cad1aa4d.jpg","name":"财务云-吕进"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/02/2b9a16d5509e482abfbc386cb492d423.jpg","name":"代账服务平台-韩海迪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/08/f7a2831e8787421f898dcaed3854e559.jpg","name":"协同云-胡继红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/12/6b3deca7a7fe451fa8b69dbd3ad70a1a.png","name":"测试1"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/24/d889326b46974b4389b063a26f26ce3f.jpg","name":"软件研发部-王毅"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/30/7b756bdb43ab4ecf86e018e396bbb8d2.png.big.png","name":"畅捷云-杨琳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/01/a33df7be9b994e75b9130b93ca193c08.jpg","name":"财务云-李剑泽"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/08/2a333aa17efa4f7c93f4a11c0da0b08e.jpg","name":"云平台测试-艾荣荣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/25/229538b7fc5840c18e6018e5e0bb0d44.png","name":"云应用研发-宋艳红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/08/197c3789d2ca4fd39a5dea536378c4c3.jpg","name":"协同云-贾爱强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/17/d88ea046545d4161981f103a527c8827.jpg","name":"天津办-周玉健"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/08/14/3c876dc3099f4adcaaf5f250cc39c3bd.jpg","name":"代账平台测试-来晓宾"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/13/6ae00d3eef9a4f9aafc30f4d719f1ab5.jpg","name":"客户支持部-梁龙飞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/06/ae5ecd0dacf74a5c9ba68243ea08539f.jpg","name":"云平台研发-曹亚南"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/31/539cf7f9ee1d4822b442f71e4ea0d9f9.jpg","name":"客户支持部 —付芝琴"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/16/7fce3064de4e44ff937ade6cf8c30935.jpg","name":"代账服务平台-陈龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/feaa15966b0747d1b670459629afc49e.jpg","name":"市场部-李卓超"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/03/4b810201129943dbb28e56e3708e6dfc.jpg","name":"代账服务平台孔欢欢"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/14/24bd2f23d6fa45ff819f29da4eb5f74c.jpg","name":"运维-权宁升"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/04/f0e1e03066c648b88d6e262616bc086b.jpg","name":"软件研发部-李艳峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/cd2a406e3028410e981570bc9caf8ca3.png","name":"畅捷通云-侯菲菲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/09/26/4b5f5cb65827417da3352726ae516022.jpg","name":"证券部-鲍洁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/18/a5db60d5c7aa4074a436e5240929bd97.jpg","name":"滕亮亮—协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/15/b4966b6b28674f6aa0978421a3ca7b68.jpg","name":"客户支持部-刘明新"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/29/99074d4b35a04ec6b4efb5feb0b44b16.jpg","name":"刘博(法务部)"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/f896506238424bfbb9285983bea3f5cc.jpg","name":"云平台研发-高玉凤"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/02/03628c7f53574edb9ef057ef16659cc0.jpg","name":"羊岩勾青"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/25cef9689120416bb3b40b836728b98c.jpg","name":"运维DBA-尹霏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/4e1abe6fbe1e4e30b5644800fa03997a.jpg","name":"公共服务研发-陈强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/20/9822371a2c9d4ff7976adfcaafa4d10d.jpg","name":"协同云-陈文修"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/26/2c8bb56e76ca488bbe8ae238a7b4f327.jpg","name":"客户支持部-张艳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/04/f0fe837d5fef4fc09356a169aed4383c.jpg","name":"云业务发展部--贾静"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/450779d32fa944389df3b474e07bd0bd.jpg","name":"陕宁办-孙磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/21/8e75c4e1ae404b3ea52f3a8d3290bbf6.jpg","name":"软件研发部-叶皖平"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/20/02d95891750040f28be902cc8a95a258.jpg","name":"财务部-韩妙琴"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/24/3cb8971c01f940d2921143ad7242fab3.jpg","name":"软件研发部-杨小强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/10/27/6a145fd25aa94f39b4d5f2003938ae72.jpg","name":"客户支持部 - 郝瑞然_"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/20/fedd68d4cb734efc9fe8d7a5c105e120.jpg","name":"云应用研发-苗霖"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/7f39f2efb7784192ab79dc35bbadaf71.jpg","name":"畅捷通云-姜彦辉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/26/db6e1fc01d084aac838d8a64179cc0f5.jpg","name":"客户支持部-程相真"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/10/93362191e0234beaa4e1d6586482e647.jpg","name":"畅捷云-卢玉"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/24/558f01fe1ca149519eb8d24ad367d072.jpg","name":"协同云测试-李仁伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/08/732c3cc21871437bb5851783ec371401.jpg","name":"上海办-张勇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/11/1902cfc449b54160b817fc0892c83998.jpg","name":"畅捷通商务部-吕爱梅"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/05/a1679026243946498821c2b9b9b33f8c.jpg","name":"云平台研发-杨明"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/17/ed744419178d43529e28ce087faff31e.jpg","name":"公共服务研发-黄德权"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/04/6cbd160d5ca64e1cb23ec85daa1918e2.jpg","name":"湖南业务代表处-陈明"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/27/f2610ba14f374c3891dca4a2546b6e1c.jpg","name":"畅捷通云-张琪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/15/59485ee5d4b44e3891faa6546a5c9659.jpg","name":"云平台研发-肖云鹏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/12/6a3300194d0e4601a5478addfc2d0f23.jpg","name":"汪蕾-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/06/1af6d4c09b8f4ac8816e5aeaba2939d3.jpg","name":"云平台测试-刘杨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/23/065b8dfa90c846c596165e692a39909e.jpg","name":"上海办—李恒"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/03/2ec9bb8cd03d45c896894db33fd4f262.jpg","name":"湖北业务代表处孙均"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/05/4853d50489694c1e87e07d5c95775a84.png","name":"畅捷通云-冯军"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/22/eb5e0fa9df4544b38bbccdfdefc4a575.jpg","name":"协同云-修俊侨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/12/959631a63297444c81ef96cc4dcae35e.jpg","name":"微企云-吕宝晶"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/26/14d633165eb04187bcf72629fc4e4182.jpg","name":"张阳-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/01/7b94033007b645459351e77c9629123e.jpg","name":"软件研发部-裴文飞"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/13/9ceb5a66bd8d440bbaeec690d33a97fc.jpg","name":"畅捷通云-王振"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/11/61e51efd01584cef8e25f910a2b6fce2.jpg","name":"lily2代表的决定"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/16/3d2670dea18a43c8bfed7422481b4d1a.jpg","name":"lily1获得解决的"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/28/4986e2947bb9462984cbe4dd503c7dfa.jpg","name":"协同云-胡圣"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/1b86dea343b145338691dd764f6cbba6.jpg","name":"公共服务研发-刘峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/abf335bddf7a4aba9e1c4623b00b0ac4.jpg","name":"云平台研发-曾鹏文"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/31/0d3e47cdc3a1449ea0762de295a8adc2.jpg","name":"微企云-汪洋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/28/485f895fabde4eba838d38f862c84179.jpg","name":"客户支持部—唐亚男"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/15/f2a040433b1c4ea2bcd54883da24eaa6.jpg","name":"畅捷云-运营-周赣宁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/21/7eddf30e92c149a18e675ec5ff2a28f6.jpg","name":"畅捷云-李玲瑶"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/03/fb2695a294c34f8aaf582f77ef9d2160.jpg","name":"软件研发部-唐晶晶"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/0170f49cff0f498e8718cf6a5147ec89.jpg","name":"史佳兴"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/01/2bfaec3df0c643f1b23fedddc31342dc.jpg","name":"户伟利-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/17/0609f4545dcf4e048ccdd581c2a3b164.jpg","name":"畅捷通云-郜司徒"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/24/d3ac9d5eb1e34dbebe2da4646262c967.jpg","name":"畅捷云 - 闫雪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/10/413dc8a96c75471187058a6832b5f8d6.jpg","name":"济南永君企业管理咨询有限公司"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/15/60a4262ad5b74c75a58e2c70d9e4e104.jpg","name":"云应用研发—赵双敏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/26/1ea9d9fd1e154ae5b02a815b8ab707ea.jpg","name":"云平台研发-杨晓康"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/16/6a827193737246e694b217c8742434c0.jpg","name":"畅捷通云云-余志华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/09/5f057448226f42e88ec20aec95505ba3.jpg","name":"云应用研发-丁康"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/25/fa3ff2da2cc84f8493ab92f4e68fce66.jpg","name":"河北办支持-李少波"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/29/1ee8c4023da241f2b0c37a22604f2050.jpg","name":"于文远-管理员🐦"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/17/2e5bfffa9c7745559b953de95428a6d2.jpg","name":"客户支持部-李珊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/15/82778b41188040628d7cb18c08650a0d.jpg","name":"南通网格-王子祥"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/17/44e27435ddb3489bb803eef9056f600f.jpg","name":"王贵喜-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/07/e3e9e3a7e3fa4955ad258acb478489ee.jpg","name":"软件研发部-汪中华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/06/b28f642bb6bb4ec5a60257a46515039f.jpg","name":"财务云-黄科良"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/26/93f55034d6cd458b917058b9cf6b53dd.jpg","name":"代账服务平台-白雪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/49267abb72c44f92a8d4735bd33c52a6.jpg","name":"安徽业务代表处卢柏宇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/16/f8d95c0a615c48b09c75e57331a4ba56.jpg","name":"天津业务代表处张云胜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/13/b2cffefca2014e95b9a5eb0cb19d6e76.jpg","name":"广东办-邓联益"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/23/f5c9a456a291465e930774596f74df64.jpg","name":"公共服务测试_李洁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/06/7b889ee06a5a4874a4409a5ccf403dec.png","name":"财务部-李学萍"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/19/7dc0bd591a03449baba7b41743c6a0d6.png","name":"云平台研发-罗宁"},{"headPicture":"http://sto.chanapp.chanjet.com/4a47ecad-3fcd-422b-879b-b2df91606e00/2016/02/01/1454290979880.png.crop.png.comp.png","name":"云平台研发-王磊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/27/b8e79183749f4ec7877746a526db3cb5.jpg","name":"江苏办事处张盛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/06/b692673d321740f7897c7fa2538826fc.jpg","name":"协同云-翟刘振"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/03/49751cf10ddc4071a37d05ba8463b581.jpg","name":"河南业务代表处-邱佳佳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/20/a58da40f59214e1fa3a92faa13e313e1.jpg","name":"财务云—李滨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/05/4f15c7553fb549cc9285094429757db4.jpg","name":"公共服务研发-刘桂林"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/09/744ac24b251c4b5babdf0286a6709720.jpg","name":"畅捷通云-薄萍萍"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/10/39b3aade29b94b36884403125ec9b778.jpg","name":"运维应用-鱼健榕"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/02/13/3dd4703adc4c49b3bba29bb85ffa8803.jpg","name":"软件研发部-王庆福"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/14/945727c980704d4cb63a149813ff19e2.png","name":"畅捷云-王亮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/14/8bf098d4897f42ad99e65b36988547e1.jpg","name":"客户支持部-缪巾男"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/16/a9cae1e3c6604e3987a679cef995a397.jpg","name":"山西办-胡典秋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/12/339227c66f1543bda773968d1ad40ef3.jpg","name":"微企云--独道东"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/10/1db6ddf5c6a74f8fa0398b3ed88928d2.jpg","name":"公共服务研发-章伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/04/5687ddff74e048928f5fd6503100c203.jpg","name":"畅捷通商务部-杨成刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/25/2ba4afac476a4b56a4379f4aae019b4e.jpg","name":"云业务发展部--王琳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/17/123cf920218b483ca9dc9574af2156cd.jpg","name":"协同云测试-姜鑫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/07/f494200f81964f14a299930f9081b653.jpg","name":"云平台研发-宓学通"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/28/0d52a310bcb741b5827e9e7aaa14ef00.jpg","name":"营销云-李军"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/21/c40bd17fb331420e9a3d235ba5c3f1d5.jpg","name":"商务--李诗玉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/03/f051a7eaf8ef4aaa96813da2c07f7e11.jpg","name":"辛欣"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"筱小"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/10/42da8d8d3bf34e12a0ff3bd76d087329.jpg","name":"培訓教育部-孙国新"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/14/1e51b71fc7e94e93ab05b7bde5ba2c0e.jpg","name":"协同云-李姣姣⚜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/15/551eb15d4f95488fb8e9a4e157d27512.jpg","name":"湖南业务代表处-罗璟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/15/d3574bd3c0c2462f9da7396d9544b8b3.jpg","name":"陕宁业务代表处王伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/17/154e741051e249c6837cf4de7f6edf85.jpg","name":"协同云-陈鑫"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/28/72814b3479df486d811d2107f412d64b.jpg","name":"云平台研发-胡成杰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/09/706ba8cecc8342e5a3a61e1ef069811e.jpg","name":"开放平台-张阔"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/15/21552fc5d355437ba9780eeffaaabfd5.jpg","name":"王兆雪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/13/60ee804fb830466ea31ecca9bfa59e88.jpg","name":"公共服务研发-刘晨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/17/dc372c47264843e6a4c45d40fe03f38a.jpg","name":"代账服务平台-褚德龙"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/11/a9db6f2abddf40a4aa5abf36f3603133.jpg","name":"软件研发部-宁锐"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/07/a460c0f21fe149e4846f1fb85a48ffe4.jpg","name":"协同云研发-庄佳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/18/0df7899fee0a437897c129037d5ebfbc.jpg","name":"公共服务研发-张永军"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/15/24f4fa0009eb4d468bc874fce422a3ae.jpg","name":"运维自动化－马超"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/20/6aa74136930c4c6ebac80cde1ac4c2e3.jpg","name":"协同云-侯仲繁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/20/b249997f3b2f484ca4624560db8dde66.jpg","name":"云应用研发-崔言伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/24/7b3050996afa48d6abc0f075b88e440f.jpg","name":"代账平台事业部郭智强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/25/4fabe5accf494012a4c1b2a934e6e3e0.jpg","name":"协同云-王利飞"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/12/a15d3e06d1ac4af8add016517843773e.jpg","name":"李艳坪-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/25/2548f619e6004b338a6848a0a40e69b6.jpg","name":"软件研发部-伍仪锐"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/18/eafe8a76e9c846f39f561c8211e67893.jpg","name":"微企云-王安邦"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/14/17edf4664b1e43fea32ad98b4fa538f5.jpg","name":"徐正雯"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/03/31/36e8c1bdb8df4400ad92e5eee6debf3f.jpg","name":"软件研发部-韩振宇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/18/e5207ccd2a4e4506b3a15818a26179d0.jpg","name":"协同云-窦金月"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/14/bffa9d3373ef46f5b129a8e8d52853fa.jpg","name":"云平台研发-赵俊磊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/03/999f067e9b0242f59289fba1b3c85f24.jpg","name":"开放平台研发-吴生祥"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/11/7a68a74d283544f5bca96c9eb268b292.jpg","name":"软件研发部-李楠楠"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/04/91f0dbeb80ac4bb0a24027b32a3a9be9.jpg","name":"广深办－吴超"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/02/3208018a6f624c22b71562202c3b57dc.jpg","name":"软件研发部-叶树球"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/09/71bfeee3f6fb46b6af612f24313ec706.jpg","name":"文地星"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/21/867125453b874ec59e6fe54adbf3e28d.jpg","name":"客户支持部-张倩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/08/a984bd7ab3f642d581d6f276218b20b0.jpg","name":"云应用测试-王晨"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/25/f26276d14d9f4cc2853ffeb7f1fdc893.jpg","name":"协同云-隆竹寒"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/20/73b794da63d9418fa80378bbe6ab326d.jpg","name":"产品管理部-葛海东"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/14/31b2efa057eb4c028c93c7439ecaa765.jpg","name":"云南办-李鹏举"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/15/8059344e7c77463cb408a88d50fc2675.jpg","name":"软件研发部-袁成"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/17/585a357f53034556ba0e3fb154c0bf9a.jpg","name":"江西代表处—姜荣敏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/05/2a77b93da6224228a8de1a2ace6aab4a.jpg","name":"王慷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/20/0f5798aec6f441dfb50c038ad361b73c.jpg","name":"河北办网格-张云"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/25/ecf32106a4004183b2e703cc849e4e3a.jpg","name":"客户支持部-卢海丹"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/22/1bcf59bff74740a39312c06204cfe953.jpg","name":"畅捷服务卢儒佳"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/03/b0ef1fd859dc42ae9ea417b2dcf1bda5.jpg","name":"客户支持部-胡新华"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/23/fc21d58433f345fb93d5cfc3e6e90765.png","name":"软件研发部-杨彦芳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/18/7cbf6809a2fc451d9cf6a51b6b68a6c2.jpg","name":"畅捷通云-王宁"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/06/c0c409dde2544843975d3f27e0d88884.jpg","name":"开发管理-赵俊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/22/4832a9edc0dd400f98155a0f00c9d6f2.jpg","name":"云应用研发-王润燕"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/23/f1af361cc54a41b7b50add80697ba539.jpg","name":"协同云—任海朋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/26/89d9b466cd4b490290fbc1585aed3537.jpg","name":"财务云-唐明龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/04/27/8cd55eaee97841c88a7e581f1620508b.jpg","name":"江苏业务代表处薛亮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/06/bb8e06b2e0704e4aad3c78b0f162ec1b.jpg","name":"协同云-李光"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/23/e7ea4be9884c416782089b7d963beefb.jpeg","name":"协同云-邓海龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/11/6cd7711e707a472e8a1fd64c29b734b4.jpg","name":"协同云-郝勇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/17/d6ccc4a5c1724c17a2f3e49b978ecce7.jpg","name":"户手机"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/05/4ec7bb56894e46c199be7478baa2c498.jpg","name":"云平台研发-黄威"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/08/16430ef37aa44096969d928b08ab7871.jpg","name":"王淑波-协同云测试"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/08/5a3b093dac5941f792b909970f2497a4.jpg","name":"畅捷通云-贾跃鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/19/f105492790964ed1803505c0921199ee.jpg","name":"郭文彬"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/13/80c3c9d4b3804909a9b292db41e00738.jpg","name":"江苏业务代表处刘宝"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/10/e8d2a0a7ea7542b2988bc19852c5f383.jpg","name":"云应用研发-刘姝"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/12/1294226bd3f04049a6e1b874cb47ba22.jpg","name":"易代账-杨奇"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/12/0609ac8de86644bcb8cab285350c15a3.jpg","name":"冯云雷🕊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/21/406ad71d7cb94b169bcbecbe0e58c85e.jpg","name":"运维X3-张志豪"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/20/94c7cf8d45e8451da282e86111dd5170.jpg","name":"畅捷通云-李艳霞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/24/d084a608012e4e62b434a47e8e8c61b2.jpg","name":"协同云-金巍巍"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/20/58119e4cafe74a9b9413f43d4bbe0af1.jpg","name":"天津办-李彤"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/21/234e347d5bec47f18b4e9fca899ab278.jpg","name":"江苏业务代表处耿朋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/09/72367563c86d438abab6e15c58f868f9.jpg","name":"畅捷服务魏雯"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/04/bf431059c2154e98be9f8860be80d188.jpg","name":"商务部——袁默鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/11/d731b0f4269343a6a379c51d543b5b75.jpg","name":"sophie"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/02/1db437c763304822a9ec495bc9c05ddb.jpg","name":"广东办-谢伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/02/ff482c382094488a8fb241415252c396.jpg","name":"云平台研发-原伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/02/983d0c10c02d470dbd9e84ba138758b5.jpg","name":"软件研发部-李士恩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/03/3822c48a27b44902b36ed6bc1e6a252c.jpg","name":"云平台测试-白琳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/14/59b18b7451d2478c851868985cdfc1c5.jpg","name":"战略市场-刘佳"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/04/3b5c330f22f542ff894f2eb0eb4fc66d.jpg","name":"公共服务研发-杨文俊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/08/3b454837d80a42d49db939e08f4a9360.jpg","name":"刘海萍"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/14/3f99c54474f9464bb515695cdfbb93a1.jpeg","name":"何玉鹏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/05/0ab6f7a53fbb41e18dda23d952118131.jpg","name":"郭海涛-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/19/dd9fa294468c4560bf66376ac28aa627.jpg","name":"云应用-测试-王继冲"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/18/2e311f7acde54cc2abc97ba80e609868.jpg","name":"协同云-王慷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/07/71645361c2944d65bbcf235ec49b8adf.jpg","name":"南方资源中心-李锐"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/26/e87f7d2f50cc48ed86a8ffc02b7b1a53.jpg","name":"产品规划部-朱莉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/17/1f277415352244758d54faff717765d3.jpg","name":"山西办刘东"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/17/5ccae2df9b144211827b009dd0a417df.jpg","name":"协同云—赵丹楠"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/06/17/03b131d782d54b9abaaf75911d969cb5.jpg","name":"公共服务研发-魏贺彬"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/04/3c6401260c7d4ea08d66baf0c48726b9.jpg","name":"冯阳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/07/44e551eb5c1b4ef9a27e66acab289795.jpg","name":"云平台研发-王春辉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/25/0524f1725d044ebc93b2a46b27efa302.jpg","name":"运维网络-秦亮"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/16/bd49109a4b8443fca6eaed04720dd8c1.jpg","name":"畅捷服务付琴"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/20/2f623e406ae34dbca7d5baa1b2022e54.jpg","name":"畅捷通微企云-曹云雷"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/31/0831b8a15eb54fdba1ba1f685da1e272.jpg","name":"公共服务研发-张文会"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/07/ef6301fc3a064e08ab95e39e31df6d1e.jpg","name":"运维自动化-刘德鑫"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/14/1afad0979fa94e2a9a3b2ae0096010f4.jpg","name":"畅捷服务闫新华"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/31/32aeddcd4bba4df8a5cc4db745a67086.jpg","name":"公共服务研发-桑海岩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/20/74efb696620b464aa9e49a6befef45f3.jpg","name":"甘青蒙-袁大伟"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/07/77e5dfc457e44c80b9dd33bc2974500a.jpg","name":"协同云—付雪青"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/16/5fc1eb514ace4e529283d20378f70361.jpg","name":"人力资源部-金宗华"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/14/54b29b8dfd9a43faa69950db3aba72b0.jpg","name":"云业务发展部--颜廷帅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/23/3cba6faf179d442cb779e86b32b78e7e.jpg","name":"软件研发部-陈呈"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/14/4fa35a74c1b648599c332ef8b5882776.jpg","name":"畅捷云—杨超"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/08/9e633bb832a6415fbd4d5169267a66ce.jpg","name":"天津办_孟凡玉"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/29/c62da36bc49d4abfa2aa9414b3b41df0.jpg","name":"软件研发部-李正"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/14/089726d2e3d147829c6876ae0b8f311d.jpg","name":"研究院_郭栋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/23/a06c7593c03b4ddca33684932c235075.jpg","name":"小户6715"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/16/4a8968c95aa74e6eba9bbdab2ab89a90.jpg","name":"云平台研发-王向"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/19/6f30e6908c6b4a7088d1cf9eb9ac88ed.jpg","name":"协同云-黄双霜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/20/e21bac3e6e064e75b71b59e192752631.jpg","name":"开发管理-杨珂"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/17/e09bdfdcc0be490ebc2672056638e015.jpg","name":"云平台研发-杨刚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/18/8667df6d0a3b488b93b00e3ef9ef16e8.jpg","name":"云业务发展部-罗志民"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/09/5e773fd9aad144479f5afbffa3a14f67.jpg","name":"软件研发部—李化民"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/03/b1710a7093734070b316c2852cb3ee43.jpg","name":"广东办-漆孙利"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/25/e911620aaeca4098b1732075dbae7f27.jpg","name":"协同云李佳怡"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/18/e5a05af01dd34441978857e2efbb0f12.jpg","name":"产品管理部-田阳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/26/53c314348bf44c05987e8afac0c47c74.jpg","name":"协同云-林本兴"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/07/28/c4d76dc7d1874a8f9e5a737a92f3fd52.jpg","name":"湖南业务代表处-臧朋涛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/13/dd17808100dd421ba990444dcaa37e98.jpg","name":"软件研发部-孙博文"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/13/2c916f2baa604dd198bd373b1692dec3.jpg","name":"协同云-王银涛"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/24/e861de670af6463e94866465e197bb0d.jpg","name":"公共服务研发-田斌"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/settingAccount/head_img.png","name":"王鹏"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/27/a47fa1e251bf44efb29819bce441bbbd.jpg","name":"协同云-刘畅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/25/c5b880086e324d599891da8f84d5b813.jpg","name":"培训教育部-王帅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/14/b74f07bc8bc34f21ac86b34d3899e0a3.jpg","name":"云南业务代表处潘瀚"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/17/0e59855f78634990972f620123c791f9.jpg","name":"云南办-潘瀚"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/04/86e21f03b11b494bbb1bb08a958ff6dc.jpg","name":"协同云-张海涵"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/15/1c19975cc02b47bb8a036e1d13826ce4.jpg","name":"协同云－周夕涵"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/20/0057c52a2ad84edb95235ec2b646bc95.jpg","name":"代账服务平台—李兴"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/21/581f26459eb4487997e12ea8959da78d.jpg","name":"张敏（微企云交互）"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/14/902fb0c72bd0420d80636883153342c0.jpg","name":"协同云-张建佳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/17/21393816a3d8498986cdffe07935b866.jpg","name":"协同云-王兆涵"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/25/fd5d6f53b85c44e78b3a1f6b0ab1aa51.jpg","name":"运维小微企业-宋瑞勇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/25/9c36e572aaf14a1cb2e899aa64ada868.jpg","name":"畅捷服务李笑旺"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/14/446b0cd9f4744a49a2fd27ef322b0a26.jpg","name":"协同云-易俊松"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/25/1b45a0d4d4cb431e8e37b43e2ae8fb91.jpg","name":"协同云—吴明焘"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/25/bfebe57817af4dceb89acc463a7b69e6.jpg","name":"畅捷通云-栾舒迪"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/16/1f61547564f44e8381a909ce30f5f81c.jpg","name":"公共服务研发-吴高强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/08/18/43ff58b5c45c433799138a979f4ffe9e.jpg","name":"小旭哥哥"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/21/966efea1faaf4d839386b0fc617c1220.jpg","name":"河北代表处—李鑫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/04/1d1be25391704950ba5d7a6bbd160e3c.jpg","name":"辽宁业务代表处-张甜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/06/4e766f3ec4a447249c5ecf7e73de0e2a.jpg","name":"江涛"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/07/f671c6f328084a03ac16f06823561669.jpg","name":"代账服务平台-梁宾"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/15/0c39791032394647a4e24a7fb57c8614.jpg","name":"湖北业务代表处-王刚"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/08/1a9c2942f5434239a6b9ba0c39938393.jpg","name":"畅捷云—李增鹏"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/settingAccount/head_img.png","name":"河北业务代表处—赵博岩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/02/c3c3ad721b814f5dbb86c5e4f2247417.jpg","name":"辽宁办-申家喆"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/25/2e8a09a8d67e4e4b8ca0ac3bf5f4c621.jpg","name":"畅捷通云_田晓璇"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/24/5e0679a6f7a04c4a9ee960433df211a4.jpg","name":"孙彦杰"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/14/3d771bcf483d4e7f88186ec06b590650.jpg","name":"程静雯"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/29/942f50bdf2244dfb8d80ded089089f5f.jpg","name":"广东办-覃家业"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/01/933214d9f0de42dd9b4d08d45c54bb57.jpg","name":"周俊贺"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/28/907d73930f5f41d2b0008e7f8bbe506f.jpg","name":"上海办-李柏林"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/20/87d3277a163047fb9afb7bd968d59ada.jpg","name":"微企云--王欧"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/14/778e4e8f433c43d3a6e3657dc62688a6.jpg","name":"王志雄"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/03/b508adb347924b5f900322b702c7f29d.jpg","name":"畅捷通云-黄胜良"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/21/976410f0203d4892b7e7fe029bd51cc2.jpg","name":"代账服务平台－许洁虹"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/09/15/966f6a65b1a540e5bba501aedcc2e904.jpg","name":"代账平台事业李昌凡"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/13/2bbf8053dee243f99aa5cd237e1f1308.jpg","name":"老板七"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/09/32d082ee0d6540dda60571be65a94532.jpg","name":"广东办-谢清海"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/31/4429f08affcd47a3ab0d717ed3b62e00.jpg","name":"公共服务研发-马柏樟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/02/acd365e5f18742fd8ab78f18295310cd.jpeg","name":"云平台研发-徐浩然"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/22/6a698f2d92f84d88b8412ce14af17821.png","name":"微企云-施思"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/04/33c56ec9dbca42f8b92e3d7e33bff556.jpg","name":"邓尉"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/24/78c09bc1bdfc42c2aaee14dd5eaa6c6b.jpg","name":"协同云-仇书兵"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/11/d656f960b82d4c1c89ae4cf338f7049f.png","name":"畅捷通云_丛岳"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/10/26/5f114dfb13c44f1e834721f7241fcd7f.jpg","name":"畅捷通云-吴小鑫"},{"headPicture":"http://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/01/7ff20c53da084f0382341916877ec8bb.jpg","name":"郑仙树"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"江西业务代表处--傅建霖"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/16/20c98a23d3a24ad7ad44a718d06108f2.jpg","name":"协同云-栗榛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/24/6855ab6200e24b48aa4994c8a6ed680b.jpg","name":"陈蒙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/30/06ff52436c3341c1bd03b71fd428bf23.jpg","name":"吴美凌"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/06/94e28426341b463382bfa43728a200c1.jpg","name":"赵一"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/16/8f59cc92d6b34a25828d967ffebce5a4.jpg","name":"软件研发部-赵嫒"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/25/b94f88367b5e4e57bbd8f270f76a9207.jpg","name":"培训教育部-武哲方"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/11/24/b05e4aebbd324d37933921536ca926d6.jpg","name":"协同云—孙建芳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/16/2ccd8cbcde85424cb1d39b83d8bcd69d.jpg","name":"畅捷云*郭新"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/11/1c3537adfc3a4bc998fd4f61752ca1eb.jpg","name":"史海龙"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/01/f9384cba75fd46d2aaf0f3793835e87f.jpg","name":"川藏业务代表处黄强"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/05/a1c5fc5a29fd474bb591ba40ea1e9c79.jpg","name":"宋佳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/09/9fb272f2cb454ab184985a30dd6fdda3.jpg","name":"畅捷云李长玥☁"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/07/a407e61c96e24571a600a3fcbf072cdd.jpg","name":"人力资源-刘雨瑄"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/08/ad9a2b0dc4464cc59cd6c014d90fdbdd.jpg","name":"山西办-罗君"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/09/993288a7365c409fba4cee8def3dcac8.jpg","name":"畅捷云～张捷"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/29/d005685a5fc743029c07525d8589d15a.jpg","name":"畅捷通_张彩用"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/10/007733c31dcc47219acabb4ef1610630.jpg","name":"畅捷云-杨天兵"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/03/1c0d77f4bcf540ef9c84b55a7367842b.jpg","name":"财务软件"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/16/b3c2127ded654ea99558b073f715033b.jpg","name":"运维-李彦超"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/16/edc3e240004f43a091eb3ffc4c627008.jpg","name":"云应用研发-肖延英"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/01/7902db0aa707463aa0bd83114f801d1d.jpg","name":"闫亚楠"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/16/5522e88159c8486baee9e6ed97db6f85.jpg","name":"畅捷通云-蔡明"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/05/8071dc1103124aba9e64bf854edab64c.jpg","name":"协同云研发-曲晓飞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/27/32f1c5cd86b64d889333067d3962b1b3.jpg","name":"张瑜华"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/26/d9fb95b3b1624618a1850784fde02a2c.jpg","name":"琼桂办-吴昌文"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"肖琼"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/04/13fbaee5d6e74d63b25875ff241a1592.jpg","name":"辽宁办-张晓博"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"代账服务平台-何杰"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/04/7576aafe90a64eacbe2fc303741b1d41.jpg","name":"黑龙江办-孔德禄"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/05/cbefe86cbc20417fb4b740e4a65e241e.jpg","name":"湖北代表处-方轻飞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/04/7ed0b0a5e46b45c58f5c69baecb2368b.jpg","name":"畅捷通云—丁改花"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/13/742258f9a70444738b2dc4379c56e322.jpg","name":"孙传方"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/15/ccda8034cd944f84b01a0002d8a2c224.png","name":"开发管理-刘鹏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/01/3df1dbcf59d24039adf8f77a68ee0e0c.png","name":"微企云-李均会"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/15/baf3165fd571461b902c99ee79878818.jpeg","name":"畅捷云-冯立强"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/11/388dd1bc837647bfa1ebf706557b8eca.jpg","name":"畅捷云-任航澜"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/27/b2130f923d214bc0a41887d9af59dc86.jpg","name":"云业务发展部-颜廷帅"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/11/33d73b254d0e4598bb55995867aac402.jpg","name":"畅捷云潘泓丞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/11/cd034cfd6ef141758d1c900db1e4c77f.jpg","name":"许更"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/18/64aec63ee02045029b76af344f1d88fe.jpg","name":"开发管理-王雷"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/22/133be49d84b64877b8cbeb3b8cebe777.jpg","name":"李晓"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/19/3e984342dfd040fcb404af382f7aea0e.png","name":"李楠"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/23/71c99e279b594075a5505c3cd0d38d52.png","name":"徐令果"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/20/21f789d305fa46239e6c8fc2fe5dc0be.jpg","name":"协同云－牛威"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/15/989fba15fef841efab7f0df23319dc7a.jpg","name":"协同云-牛威"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/01/20/4db44719e54c45908bc25df0f2b3201d.png","name":"运维开发-李楠"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/14/b50681190ae6433a82c2403cfd9ac9d1.jpg","name":"江苏业务代表处-钟鑫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/16/4d6bb6498b7d4cbdbd45d08dbeb6b36a.jpg","name":"黑龙江办—施金鑫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/28/7147a49f6a6e4d5ebf843968c6e05220.jpg","name":"浙江业务代表处-章烨彬"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/01/8c4606cef4e1475e99bad1656f97dab6.jpg","name":"刘阳-协同云"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/19/be6236932baa471ab10f728a01958d75.png","name":"党羽"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/23/f495dc85d78e4fc5a3c6b354929dbf08.jpg","name":"人力资源部-赵益"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/23/0b283f56eb6d4d44b8cad836cd2445bf.jpg","name":"好会计PM-张莹"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/25/83b77566f6634d6ab1ea55cb33320e28.jpg","name":"浙江业务代表处於展鹏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/03/d3e49dfab9964343a6c230eac3b78584.jpg","name":"云平台研发_杨畅怡"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/02/28/354dec6f421a450f82e8efa154608da7.jpg","name":"浙江办朱冠林"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/12/7bb69383ee164870915930d6a09cef22.jpg","name":"黑龙江支持王跃"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/15/545451c38cbd4b1088a22c953e4ede9d.jpg","name":"吉林办-吕凤英"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/11/62dfa1001c7f4e0eae4a78ff8060c876.jpg","name":"河南办–时超磊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/28/a9d0c88d550b453b808d02baf7075d6a.jpg","name":"畅捷通云-冯立强"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/30/6a50aeafce744a90a5fbb7654c580be4.jpg","name":"甘青蒙～高健"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/11/37e76d4685f94383af013f73e6d750c7.jpg","name":"吴琼"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/05/8bd3728854614a82abbccc05deb156d4.jpg","name":"贵州办-白涛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/10/5cc7657e96814513b64e81fa679d14a1.jpg","name":"软件研发部-郑芸"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/15/333d9681995b46c1a859cc116ef3061e.jpg","name":"开发管理-王韵迪"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/16/e3e4b0cfa8f44c7982b0b3cfec448030.jpg","name":"运维大数据-赵鹏鹏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/29/93c1e0a78b264d538902edb588515a97.jpg","name":"山东业务代表处--王飞"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"江西业务代表处-冷优军"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/17/860409dd9cf64ba0942bb123364e98d1.jpg","name":"湖南办-胡超"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/18/15fab01d50384d8f80fd43173af0dda5.jpg","name":"软件研发部-郭庭震"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/21/c6177c4bba1343c3a7d0b57a3c5c542a.jpg","name":"陈昭"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/11/f0b08a16518f4643b77f9e574a6bf986.jpg","name":"黄梓宸"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/14/b1ff085150a94dc5b91cf03dcad9071c.jpg","name":"刘颂"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/07/19df9870b9034a1b99e95d54895910f0.jpg","name":"林美幸"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/29/a1de0c2161e14a5d8d01747410acc787.jpg","name":"协同云-张海龙"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/30/6eddca3d3e9040368e3630e7d18cfeee.jpg","name":"江斌-协同云"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/22/54f8af81a842493fa58e622003d114cf.jpg","name":"张亮"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/08/659ba23d28ce4a47bcf205b0f063fcc7.jpg","name":"公共服务研发-赛万明"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/30/c66623d8f22e49719a1aa8ec322269e7.jpg","name":"公共服务研发-王小东"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/05/0380908f35c54082b550906880e5cfcf.jpg","name":"河北业务代表处王凯"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/07/18670bf815eb48b08ec29d86bc84085e.jpg","name":"运维-文吉"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/21/dfc3a53da35c492c94e9fee871c0057b.jpg","name":"开放平台研发-王照"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/15/a462956d855c4d4d916bc16050368696.jpg","name":"琼桂办-林克义"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/22/77d0bc61c7b04dc98970d21bf28e31d1.jpg","name":"北京办事处-侯万丰"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/24/9cfcea12cc174b918076b96e4a734391.jpg","name":"河南业务代表处于晓"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/16/79ffc0030f864a378b1a0a47909336a4.jpg","name":"河南业务代表处-时超磊"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"黑龙江王跃"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/30/b131719847f840af9810212658d3d7d2.jpg","name":"南方支持中心-彭杨"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/29/ffa33f6748a540d49661ab6afc70cc55.jpg","name":"南方支持中心-王昊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/30/34b29d31ca0946408c515bc964eb4995.jpg","name":"软件研发部-金亚莹"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/14/f3a4dad2204b4efb906157b7d30cb564.jpg","name":"琼桂办-覃东文"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/18/13875923f5384dcda78e109a9f9871b6.jpg","name":"南方支持中心-马强"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/01/37fd4e002b3d412091452ef12ce0e549.jpg","name":"软件研发部－李向影"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/24/4cf8973c3fe64f8c87acc316cd92e557.jpg","name":"高尚"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"上海办—陈飞"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"山西办 陈尚光"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/12/dc1af9ec6b1f4a9294e5ae99403f8f47.jpg","name":"南方支持中心—李哲"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"。。。。。。。。。。。"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"山西业务代表处—王晨"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/25/00e1ea4064324706bc7bd8cdc208408d.jpg","name":"李晓凤🎃"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"何好"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/15/c263fb2f482948d3b2dcc78c15ef8db1.jpg","name":"刘飞达-协同云"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/15/18c28faecdb44bb69f4004285c17cfd4.jpg","name":"协同云-马金斗"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/19/87e3b8ce76f5498f9341cb83e294fefb.jpg","name":"软件研发部-王小燕"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/19/0e95ac412161419dbe753b0b7961026c.jpg","name":"公共服务研发-王贯一"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/11/c7c640868f3b4064bf49366e23bfbe00.jpg","name":"梁昊"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/23/aff380ec9f594efdbdcdcbc9037f0110.jpg","name":"胡跃梅"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/31/580d50d0b3364c4ca1e4699911bc125e.jpg","name":"梁娟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/22/dc567356193e4e938f1d61ddddad58da.jpg","name":"李诗宇"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/27/893f963523844b818e562ae0d3ce95a5.jpg","name":"浙江办－王业宝"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/140fc961c2534f6bad6ec13356e45049.jpg","name":"刘南"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/13/c82f83892a194c938f39ee9ccc6fa05c.png","name":"李光耀-协同云"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/19/fe5c7ae5483a467e89ccdc8f8350ee2f.jpg","name":"运维-范有昌"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/21/badfbae5e23049f090199d40ded99ef9.jpeg","name":"张亚南"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/20/06b16d39b48141dc90ec3ad5b6367400.jpg","name":"王骆宾"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/05/4d844a7e3c6849f180b38f29ff07585f.png","name":"云平台研发-朱威"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/30/b49844cec9e2420dbca20a113483a803.jpg","name":"170"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/29/f2bfe57e96614e829a3e6b6fb226c9c6.jpg","name":"王奔"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/11/735b0825d9f1439d9ea3cce0c65680e4.jpg","name":"软件研发部-路颖超"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/31/ce592b684f894d61b02af18e63bf761e.jpg","name":"黄金铃"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/07/722b0c8d79cc48bd9f47d4983898c11f.jpg","name":"郑配配"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/21/83d69b489ac3420aabf7ff74d2f128bf.jpg","name":"郭英龙"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/20/fc8a9e6fc6ab4f3787ff78eeecc1892d.jpg","name":"公共服务测试-邱瑞恒"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/dfb1411cca05494c8725c4bf8d0032a3.jpg","name":"张墨"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/10cba78710c64eff8bbd7ddf1d65cd0f.jpg","name":"张敏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/03/b360b71e7e2b4bbdbe11410bd96d6662.jpg","name":"唐冰"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/01/1339781403864363a43c1625392f6aa9.jpg","name":"山西办张大海"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/16/b840175159384743afddbfb25cccba67.jpg","name":"辽宁办-陈东翔"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/13/53f7ed633e5342d590ba51544823e72b.jpg","name":"吉林办-杨成群"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/19/9cb49b6e47264422840f8face103c396.jpg","name":"代账服务平台-陈少珊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/16/25db7e2956fc4ce6aaaa96b066a0e2ed.jpg","name":"李晓晶"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/09/77583fbbc0a94736ad953b4dec07533f.jpg","name":"史江鑫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/13/b630eca7472942cfa6ee5e0380cfaefc.jpg","name":"微企云-孙祥君"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/13/f8f0bc50bf9743569d87aeca33bb9005.jpg","name":"张晋"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"软件研发部-魏庆君"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/30/a86057eb8325492d97c48d9a5a71f19d.jpg","name":"何添"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"陈士雄"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"张月祺"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/26/b7d2236e487749a79c5d1864a0dd6de1.jpg","name":"雷孟琪"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/19/9c883c534fbe4a9aa2493e747638a0e8.jpg","name":"王建东"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"高少云"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/31/904687d1dedd4b9d92206438b227084a.jpg","name":"纪海涛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/23/7fb21a05b62e4b1784a8f07cd5f5cf0c.jpg","name":"开放平台-肖琪"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/08/ba15cdcaf2164dc6886fb407e9be8a60.jpg","name":"邬畏畏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/30/2cf47d927ab341d8a6164f99c1f788a3.jpg","name":"好生意后端-俞金贵"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/03/8ccbc0d95e2847aaab2257dccff4c956.jpg","name":"开放平台研发-唐力"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/09/0315cccf415b4913b59afe1722a7737c.jpg","name":"陈星昊"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/09/d7fe9fcb6fbe45fa8c416c83d8135851.jpg","name":"任晶"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/22/c476ed2fe9864a428b4d70262700236f.jpg","name":"马相亮"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/22/2c0b7b52984843c3bb8f628c9a3c4d51.jpg","name":"人力资源-李晓文"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/13/c7a177ca3e964d5199ae56a70390cd23.jpg","name":"李娜"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/13/9952ce142edf4041b72026776ac71564.jpg","name":"代账服务平台-张团伟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/19/58a4c9845f9042f69a36515fab0c1088.jpg","name":"邹赛"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/10/ba150c723968437580bf4cf559e74996.jpg","name":"钟海清"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/20/5ddaa3820f974260824f2a42e296bc40.jpg","name":"郝亚宁"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/02/ab705414304741ef80802585966b1476.jpg","name":"王志会"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/23/16a6debb2ea34399ad1caf62c79099da.jpg","name":"伍鹏"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/22/3b84d540ce8b469cb38ceb56f19f3b49.jpg","name":"邹振松"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/17/b071013608e342d1977410df48bdd908.jpg","name":"好生意PM—姜欢"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/24/55eafa61a95a4d959ffd60cfa88f2544.jpg","name":"协同云-李丽平"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/28/cf78393423f44369ba1cef59e846f889.jpg","name":"杨帆"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/28/ac682ef7c1204a5d9ef9607c550af64f.jpg","name":"好会计—孙赵娜"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/02/5c098bae0e3a44d79baaac485a5a01bb.jpg","name":"产品管理部-李瑞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/06/0aea71215171458ebbecc3bf2a31707e.jpg","name":"云业务发展-李昆"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/26/9505eb282e404451b0614c75ed04d72d.jpg","name":"王长富"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/28/9168e439fb4d4162ac555eeff119e38f.jpg","name":"张桂龙"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/04/af664c76a6344a5c98965e77cfc85e15.jpg","name":"刘莹"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/07/3f4bc98053f84a03a2be5f7feec631d7.jpg","name":"协同云-王云甫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/05/390ea6597c694374bc41d7a84b16d8d6.jpg","name":"软件研发部_鞠琳琳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/25/915c129cdb1e4510a635cfa9c628f775.png","name":"宋钰壮"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/13/83cecfc4b8a14a25bbb5ce276f55cd8b.jpg","name":"时硕"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/14/444d3fe6007142179462315d3cbaf14b.jpg","name":"微企云-王星"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/15/944037129a9d481b88ac9b35fa4ea9d4.jpg","name":"客户支持部-柴英"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/21/d2c5dbb2ad9d46de8f3bfdc93615e4cb.jpg","name":"公共服务研发-刘兆来"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/27/65a656b39a924749bdf0fe239f077458.jpg","name":"谢娜"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/22/c82e6121558243dcbd4191ddca9ddbee.jpg","name":"代账服务平台-王慧娜"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/12/55cdc577ea964d41b9da99ff3cc319cd.jpg","name":"运维中心-张宇航"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"丁国江"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/29/abeef46116774ed386d171d24abfc6e4.png","name":"代账服务平台-李童"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/26/54d91dd985154ee7b60d5f0ab00b760a.jpg","name":"张雅春"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/01/96c5137c153e4b5992ea95d41b7f7f37.jpg","name":"刘亚南"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/29/5420a34723a149eca586c03715a58466.jpg","name":"方志忠"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/16/5c689970f08144cb8279d59d0733a1da.jpg","name":"林中友"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/22/5899fbbbace3489f99fb313afe117d71.jpg","name":"吴娇娇"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/18/7181606f812444588556dd5c6a6c517b.jpg","name":"公共服务研发—冯娟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/04/25284bd5c3fe49d6823b2b156d87cb12.jpg","name":"公共服务研发–张昕雅"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/06/85749b472db74518a97962a54a18c31b.jpg","name":"严凯丽"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/29/f1e5334e80ad46a097661b6caea43f37.jpg","name":"彭成鑫"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/08/918f8d2e450d439aa08c12c7e85cfc9a.jpg","name":"公共服务研发-普勇军"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/19/4f3c861d33364fe79dfb152ffec6f1d8.jpg","name":"张保伟"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/12/42e9abe3830445e994eb177b1a0a2007.jpg","name":"代账服务平台-李江"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/16/d2f241c1afa540e582d88164f2731509.jpg","name":"任钰洁"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/15/f99bd1ba1adc4144b9b457a69dd07966.jpg","name":"王玉红"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/31/31499c4ec541477282e2d66c966a1ff4.jpg","name":"孙云璞"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/24/83c94c27758948509e88bf871b284a62.jpg","name":"河南业务代表处-魏传轩"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/19/4c36c42d0a234cafb1dcde54548d823d.jpg","name":"张洁"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/24/c1c7a833138040ed82932681375f44c3.jpg","name":"广东办-马广胜"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/19/5f7c915186874dc0ba47a62efe46f851.jpg","name":"王玉红"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/26/15530d5b8dab43dd9aa0a5e8a0e1b1a1.jpg","name":"开放平台-张志南"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/02/7e17ab431604475aa9c641e6cf2a7db2.jpg","name":"客户支持部-李佳慧"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/05/25/19249882024546cfb13ba44eab476d12.jpg","name":"畅捷通云-温茜"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2015/12/01/93d2afe05670491ebe3fad457b8a0715.jpg","name":"公共服务研发-李林"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"川藏业务代表处—杨靖"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/09/01/4c46c03e930149e6bb891cd8869243fb.jpg","name":"王伟权"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/20/c9243445eee24c0591b3a4ccc3fb2b9b.jpg","name":"畅捷通云-宋小光"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/19/55a131a1285a4caba48aeb2f0effa6ef.jpg","name":"吉林办刘旭"},{"headPicture":"http://i.static.chanjet.com/chanjet/images/workbench/user.png","name":"微企云--顾孝昀"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/11/26/8fccdabb5c8c4613af23de1e0451b38f.jpg","name":"开放平台测试-刘丹"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/03/27/6e001e5ca50245ec8bec950df96be3bc.jpg","name":"财务部-何颖"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/04/08/18b119c8b49b4d338b941b716a25b1cb.jpg","name":"甘青蒙-海硕"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/07/07/5235fecfb06541079858ca84ef046277.jpg","name":"姜明晓"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/16/6c0e2e23e30f4db5a180c695e8801cf8.jpg","name":"浙江业务代表处-徐林林"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2014/12/05/8c9b3b5addd742048084bd937a57718d.jpg","name":"客户支持部-许青"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/08/e1a1277c75424312b48fff625721898e.jpg","name":"冯云雷 🐦 协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/07/22/36c6389b226041f5a90d275dfd7fd9b7.jpg.big.jpg","name":"山东业务代表处-刘峰"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/08/26/da8a6606645d4ab5a2531d03bb188586.jpg","name":"客户支持部—刘小艳"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/22/5d4bab60e0e64bd8bb54097f930b0980.jpg","name":"客户支持部-刘宏宇"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/03/119bbb42efbe429cb56a94d721f610e0.jpg","name":"许长宗-协同云"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/18/5fdcebb4d4f34d5b960e1c3dbeea10b4.jpg","name":"河北办-王哲"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/03/31/2b61921be9f949089a2996c9ffd1ec4f.jpg","name":"战略市场部-汤倩影"},{"headPicture":"https://sto.chanapp.chanjet.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/06/03/40f8186e08094619a340717054cac779.png","name":"微企云－王亚朋"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpicture/2016/05/17/b791a362289848669761dc3d5607077c.jpg","name":"北京业务代表处-王猛"},{"headPicture":"http://staticoss.csp.chanapp.com/ecaf1c0b-3794-4a06-864a-17ce0d3245c3/2014/03/21/06f66fbffc3d4b21aa9c89fb8fb66e52.png.teamlogo.png","name":"软件研发部-高恩"},{"headPicture":"http://staticoss.csp.chanapp.com/a31cad70-142e-44f3-85ab-488629ec0275/cia/headpictrue/2015/01/21/962a46e8faae47aba38ba0bac9442626.jpg","name":"云南办-王哲"}];exports.default=data;

/***/ }

});