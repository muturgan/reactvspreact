"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutTemplate = void 0;
const Head_1 = require("./Head");
const preact_1 = require("preact");
exports.LayoutTemplate = (headOptions) => (content) => preact_1.h("html", null,
    preact_1.h(Head_1.Head, { title: headOptions.title }),
    preact_1.h("body", null, content));
exports.default = exports.LayoutTemplate;
