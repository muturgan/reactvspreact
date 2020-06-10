"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require("fastify");
const render_1 = require("./react/render");
const views_1 = require("./react/views");
const render_2 = require("./preact/render");
const views_2 = require("./preact/views");
const app = fastify();
app.get('/favicon.ico', (_req, res) => {
    res.status(204).send();
});
app.get('/react', (_req, res) => {
    const html = render_1.renderReact(views_1.MainPage, { product: 'apple', price: 5 });
    res.header('content-type', 'text/html').send(html);
});
app.get('/react/stream', (_req, res) => {
    const htmlStream = render_1.renderReactStream(views_1.MainPage, { product: 'apple', price: 5 });
    res.header('content-type', 'text/html').send(htmlStream);
});
app.get('/preact', (_req, res) => {
    const html = render_2.renderPreact(views_2.MainPage, { product: 'apple', price: 5 });
    res.header('content-type', 'text/html').send(html);
});
app.listen(3000, (err, address) => {
    if (err) {
        throw err;
    }
    console.info(`server listening on ${address}`);
});
