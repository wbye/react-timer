'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-timer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * handle show time format
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * format just like moment format function
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * todo 1. add offset attribte to custom show
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FORMAT_REG = /(YYYY|YYY|YY|Y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|.)/g;

var Time = function (_React$Component) {
	_inherits(Time, _React$Component);

	function Time(props) {
		_classCallCheck(this, Time);

		var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

		_this.displayName = 'Time';
		return _this;
	}

	_createClass(Time, [{
		key: 'formatTime',
		value: function formatTime() {
			var _props = this.props;
			var _props$value = _props.value;
			var value = _props$value === undefined ? '' : _props$value;
			var format = _props.format;


			return Time.format(value, format);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props;
			var value = _props2.value;
			var format = _props2.format;

			var props = _objectWithoutProperties(_props2, ['value', 'format']);

			return _react2.default.createElement(
				'span',
				props,
				this.formatTime()
			);
		}
	}]);

	return Time;
}(_react2.default.Component);

//time format


Time.format = function (value) {
	var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD hh:mm:ss';

	var ReplaceFunction = {};

	if (!value) {
		return '';
	}
	if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
		value = new Date(value);
	}

	var matchResult = format.match(FORMAT_REG);

	if (matchResult) {
		return matchResult.map(function (item, index) {
			if (!ReplaceFunction[item]) {
				ReplaceFunction[item] = createReplaceFunction(item);
			}

			return ReplaceFunction[item]();
		}).join('');
	}

	return format;

	//create replace function
	function createReplaceFunction(format) {
		return function () {
			switch (format) {
				case "YYYY":
					return getYear(4);
					;
				case "YYY":
					return getYear(3);
					;
				case "YY":
					return getYear(2);
					;
				case "Y":
					return getYear(1);
					;
				case "MM":
					return getMonth(2);
					;
				case "M":
					return getMonth(1);
					;
				case "DD":
					return getDay(2);
					;
				case "D":
					return getDay(1);
					;
				case "hh":
					return getHour(2);
					;
				case "h":
					return getHour(1);
					;
				case "HH":
					return getHour(2);
					;
				case "H":
					return getHour(1);
					;
				case "mm":
					return getMinute(2);
					;
				case "m":
					return getMinute(1);
					;
				case "ss":
					return getSecond(2);
					;
				case "s":
					return getSecond(1);
					;
				default:
					return format;
					;
			}
		};

		function getYear(num) {
			var reg = new RegExp('^[0-9]{' + (4 - num) + '}');

			return (value.getFullYear() + "").replace(reg, '');
		}

		function getMonth(num) {
			var month = value.getMonth() + 1;

			return getFormattedValue(month, num);
		}

		function getDay(num) {
			var day = value.getDate();

			return getFormattedValue(day, num);
		}
		function getHour(num) {
			var hour = value.getHours();

			return getFormattedValue(hour, num);
		}
		function getMinute(num) {
			var hour = value.getMinutes();

			return getFormattedValue(hour, num);
		}
		function getSecond(num) {
			var seconds = value.getSeconds();

			return getFormattedValue(seconds, num);
		}

		function getFormattedValue(value, num) {
			if (num === 1) {
				return value;
			} else {
				return fillZero(value);
			}
		}

		function fillZero(num) {
			return num >= 10 ? num : "0" + num;
		}
	}
};

exports.default = Time;