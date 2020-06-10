"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderReactStream = exports.renderReact = void 0;
const react_1 = require("react");
const server_1 = require("react-dom/server");
exports.renderReact = (component, props) => {
    return '<!DOCTYPE html>' + server_1.renderToStaticMarkup(react_1.createElement(component, props));
};
exports.renderReactStream = (component, props) => {
    return server_1.renderToStaticNodeStream(react_1.createElement(component, props));
};
