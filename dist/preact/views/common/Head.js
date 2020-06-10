"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
const preact_1 = require("preact");
const React = {
    createElement: preact_1.h,
};
exports.Head = (props) => React.createElement("head", null,
    React.createElement("meta", { charSet: "utf-8" }),
    React.createElement("title", null, props.title));
exports.default = exports.Head;
