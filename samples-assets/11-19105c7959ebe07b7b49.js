webpackJsonp([11],{

/***/ 491:
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

	var _ListItem = __webpack_require__(395);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(434);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _style = __webpack_require__(492);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/9/13.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var IndexPage = function (_BasePage) {
	    _inherits(IndexPage, _BasePage);

	    function IndexPage() {
	        _classCallCheck(this, IndexPage);

	        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
	    }

	    _createClass(IndexPage, [{
	        key: "redirect",
	        value: function redirect(hash) {
	            this.navigationController.push(hash);
	        }
	    }, {
	        key: "renderContent",
	        value: function renderContent() {
	            var pathMap = [{ label: '简单使用', hash: '/scroller/simple' }, { label: '使用PullRefresh和LoadMore', hash: '/scroller/complete' }];

	            //使用外部容器定义显示区域大小
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.title },
	                    "Scroller Demo"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.summary },
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryLabel },
	                        "demo将展示 Scroller 的使用方法."
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryTip },
	                        "演示中的列表请通过拖拽进行滚动."
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.content },
	                    "演示列表"
	                ),
	                _react2.default.createElement(
	                    "list",
	                    null,
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "简单使用----模拟IOS的惯性和弹性", onTouchTap: this.redirect.bind(this, '/scroller/simple') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "高级使用----PullRefresh和LoadMore", onTouchTap: this.redirect.bind(this, '/scroller/complete') }),
	                    _react2.default.createElement(_Divider2.default, null)
	                )
	            );
	        }
	    }]);

	    return IndexPage;
	}(_BasePage3.default);

	exports.default = IndexPage;

/***/ },

/***/ 492:
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
	        fontSize: '0.8rem',
	        textAlign: 'center',
	        borderBottom: '0.02666666666666667rem solid #efefef'
	    },
	    summary: {
	        fontSize: '0.4266666666666667rem',
	        padding: '0.4266666666666667rem'
	    },
	    summaryLabel: {
	        color: '#0091EA'
	    },
	    summaryTip: {
	        marginTop: '0.26666666666666666rem',
	        color: '#FF8A65',
	        display: 'block',
	        fontSize: '0.37333333333333335rem'
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
	    }
	};

	exports.default = demoStyle;

/***/ }

});