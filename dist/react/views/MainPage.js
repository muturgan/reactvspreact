"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPage = void 0;
const Layout_1 = require("./Layout");
const React = require("react");
const ar = [];
for (let i = 0; i < 1000; i++) {
    ar.push(i);
}
const MainPageTemplate = (props) => {
    const listItems = ar.map((number) => React.createElement("li", { key: String(number) },
        props.product,
        ": ",
        props.price + number,
        "$"));
    return React.createElement("ul", null, listItems);
};
exports.MainPage = (props) => {
    const content = MainPageTemplate(props);
    if (content === null) {
        throw new Error('main page content is null');
    }
    return Layout_1.Layout(content);
};
exports.default = exports.MainPage;
