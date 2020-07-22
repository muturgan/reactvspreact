"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticRendered = exports.Rendered = exports.renderStaticPreact = exports.renderPreact = void 0;
const preact_render_to_string_1 = __importDefault(require("preact-render-to-string"));
exports.renderPreact = (component, props) => {
    const vnode = component(props);
    if (vnode === null) {
        throw new Error('vnode for rendering is null');
    }
    return '<!DOCTYPE html>' + preact_render_to_string_1.default(vnode);
};
exports.renderStaticPreact = (component) => {
    return exports.renderPreact(component, {});
};
class Rendered extends Buffer {
    // @ts-ignore
    constructor(component, props) {
        const vnode = component(props);
        if (vnode === null) {
            throw new Error('vnode for rendering is null');
        }
        return Buffer.from('<!DOCTYPE html>' + preact_render_to_string_1.default(vnode));
    }
}
exports.Rendered = Rendered;
class StaticRendered extends Rendered {
    constructor(component) {
        super(component, {});
    }
}
exports.StaticRendered = StaticRendered;
