"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
const preact_1 = require("preact");
exports.Head = (props) => preact_1.h("head", null,
    preact_1.h("meta", { charSet: "utf-8" }),
    preact_1.h("title", null, props.title));
exports.default = exports.Head;
