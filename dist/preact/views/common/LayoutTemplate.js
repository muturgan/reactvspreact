"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutTemplate = void 0;
const Head_1 = require("./Head");
const preact_1 = require("preact");
const React = {
    createElement: preact_1.h,
};
exports.LayoutTemplate = (headOptions) => (content) => React.createElement("html", null,
    React.createElement(Head_1.Head, { title: headOptions.title }),
    React.createElement("body", null, content));
exports.default = exports.LayoutTemplate;
