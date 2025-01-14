"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackSide = exports.FrontSide = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FlippyCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlippyCard, _React$Component);

  function FlippyCard() {
    _classCallCheck(this, FlippyCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlippyCard).apply(this, arguments));
  }

  _createClass(FlippyCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cardType = _this$props.cardType,
          style = _this$props.style,
          elementType = _this$props.elementType,
          animationDuration = _this$props.animationDuration,
          rest = _objectWithoutProperties(_this$props, ["className", "cardType", "style", "elementType", "animationDuration"]);

      return _react.default.createElement(elementType || 'div', _objectSpread({
        className: "flippy-card flippy-".concat(cardType, " ").concat(className || '')
      }, rest, {
        style: _objectSpread({}, style || {}, {}, {
          transitionDuration: "".concat(animationDuration / 1000, "s")
        })
      }), this.props.children);
    }
  }]);

  return FlippyCard;
}(_react.default.Component);

var FrontSide = function FrontSide(_ref) {
  var isFlipped = _ref.isFlipped,
      style = _ref.style,
      animationDuration = _ref.animationDuration,
      props = _objectWithoutProperties(_ref, ["isFlipped", "style", "animationDuration"]);

  return _react.default.createElement(FlippyCard, _extends({}, props, {
    style: _objectSpread({}, style || {}),
    animationDuration: animationDuration,
    cardType: "front"
  }));
};

exports.FrontSide = FrontSide;

var BackSide = function BackSide(_ref2) {
  var isFlipped = _ref2.isFlipped,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["isFlipped", "style"]);

  return _react.default.createElement(FlippyCard, _extends({}, props, {
    style: _objectSpread({}, style || {}),
    cardType: "back"
  }));
};

exports.BackSide = BackSide;
FlippyCard.defaultProps = {
  animationDuration: 600
};