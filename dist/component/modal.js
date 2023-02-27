"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    isOpen,
    onClose,
    title,
    subTitle,
    content
  } = _ref;
  if (isOpen) {
    return /*#__PURE__*/_react.default.createElement("dialog", {
      className: "modal"
    }, /*#__PURE__*/_react.default.createElement("section", {
      className: "section"
    }, /*#__PURE__*/_react.default.createElement("header", {
      className: "header"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "title"
    }, title), /*#__PURE__*/_react.default.createElement("span", {
      className: "subtitle"
    }, subTitle), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn",
      onClick: onClose
    }, "x")), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-container"
    }, content), /*#__PURE__*/_react.default.createElement("footer", {
      className: "footer"
    })));
  }
}
var _default = Modal;
exports.default = _default;