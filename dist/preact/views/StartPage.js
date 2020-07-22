"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartPage = void 0;
const Layout_1 = require("./Layout");
const preact_1 = require("preact");
const React = {
    createElement: preact_1.h,
};
const StartPageTemplate = () => {
    return React.createElement("ul", null,
        React.createElement("li", null,
            "React string ",
            React.createElement("a", { href: "/react", target: "_blank" }, '=>')),
        React.createElement("li", null,
            "React stream ",
            React.createElement("a", { href: "/react/stream", target: "_blank" }, '=>')),
        React.createElement("li", null,
            "Preact string ",
            React.createElement("a", { href: "/preact", target: "_blank" }, '=>')),
        React.createElement("li", null,
            "Preact buffer ",
            React.createElement("a", { href: "/preact/buffer", target: "_blank" }, '=>')));
};
exports.StartPage = () => {
    const content = StartPageTemplate({});
    if (content === null) {
        throw new Error('start page content is null');
    }
    return Layout_1.Layout(content);
};
exports.default = exports.StartPage;
