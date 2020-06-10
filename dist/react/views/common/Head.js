"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
const React = require("react");
exports.Head = (props) => React.createElement("head", null,
    React.createElement("meta", { charSet: "utf-8" }),
    React.createElement("title", null, props.title));
exports.default = exports.Head;
