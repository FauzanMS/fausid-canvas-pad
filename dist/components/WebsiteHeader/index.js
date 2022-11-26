"use strict";

exports.__esModule = true;
exports.WebsiteHeader = void 0;
var _react = _interopRequireDefault(require("react"));
require("./WebsiteHeader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var WebsiteHeader = function WebsiteHeader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header_flex"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "heading_header"
  }, "Fausid Canvas Pad"));
};
exports.WebsiteHeader = WebsiteHeader;