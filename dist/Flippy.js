"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FlippyFooter = _interopRequireDefault(require("./FlippyFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Flippy =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Flippy, _React$Component);

  function Flippy(props) {
    var _this;

    _classCallCheck(this, Flippy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Flippy).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        isFlipped: !_this.state.isFlipped
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFooterDotClick", function (newCardIndex, event) {
      _this.setState({
        isFlipped: newCardIndex === 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHoverOn", function (event) {
      _this.setState({
        isFlipped: true
      });

      _this.props.onMouseEnter(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (event) {
      _this.setState({
        isFlipped: true,
        isTouchDevice: true
      });

      _this.props.onTouchStart(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function (event) {
      _this.setState({
        isFlipped: false
      });

      _this.props.onTouchEnd(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleHoverOff", function (event) {
      _this.setState({
        isFlipped: false
      });

      _this.props.onMouseLeave(event);
    });

    _this.state = {
      isFlipped: false,
      isTouchDevice: false
    };
    return _this;
  }

  _createClass(Flippy, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style,
          flipDirection = _this$props.flipDirection,
          flipOnHover = _this$props.flipOnHover,
          flipOnClick = _this$props.flipOnClick;
      var _this$state = this.state,
          isFlipped = _this$state.isFlipped,
          activeCardIndex = _this$state.activeCardIndex,
          isTouchDevice = _this$state.isTouchDevice;
      var methods = !!flipOnHover ? {
        onMouseEnter: this.handleHoverOn,
        onMouseLeave: this.handleHoverOff,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      } : flipOnClick ? {
        onClick: this.toggle
      } : {};
      return _react.default.createElement("div", _extends({
        className: "flippy-container",
        style: _objectSpread({}, style)
      }, methods), _react.default.createElement("div", {
        className: "flippy-cardContainer-wrapper ".concat(flipDirection)
      }, _react.default.createElement("div", {
        className: "flippy-cardContainer ".concat(isFlipped ? 'isActive' : '', " ").concat(isTouchDevice ? 'istouchdevice' : '')
      }, children), this.props.showNavigation && _react.default.createElement(_FlippyFooter.default, {
        onDotClick: this.handleFooterDotClick,
        activeCardIndex: activeCardIndex,
        cards: this.props.children
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return _objectSpread({}, state, {
        isFlipped: typeof props.isFlipped === 'boolean' ? props.isFlipped : state.isFlipped
      });
    }
  }]);

  return Flippy;
}(_react.default.Component);

exports.default = Flippy;
Flippy.defaultProps = {
  showNavigation: false,
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOnClick: true,
  usePrettyStyle: true,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  onTouchEnd: function onTouchEnd() {},
  onClick: function onClick() {}
};