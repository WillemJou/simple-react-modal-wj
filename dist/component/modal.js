"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, null, /*#__PURE__*/_react.default.createElement("dialog", {
    "aria-modal": "true",
    onClick: props.onClose,
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "section",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Hello"), /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "title"
  }, props.title), /*#__PURE__*/_react.default.createElement("span", {
    className: "subtitle"
  }, props.subTitle), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    onClick: props.onClose
  }, "x")), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-container"
  }, props.content), /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer"
  }))));
}
var _default = Modal;
exports.default = _default;