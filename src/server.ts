import fastify = require('fastify');
import { renderReact, renderReactStream } from './react/render';
import { MainPage as MainReactPage } from './react/views';
// import { renderPreact } from './preact/rendet';
// import { MainPage as MainPreactPage } from './preact/views';
const app = fastify();

app.get('/favicon.ico', (_req, res) => {
   res.status(204).send();
});

app.get('/react', (_req, res) => {
   const html = renderReact(MainReactPage, {product: 'apple', price: 5});
   res.header('content-type', 'text/html').send(html);
});

app.get('/react/stream', (_req, res) => {
   const htmlStream = renderReactStream(MainReactPage, {product: 'apple', price: 5});
   res.header('content-type', 'text/html').send(htmlStream);
});

// app.get('/preact', (_req, res) => {
//    const html = renderPreact(MainPreactPage, {product: 'apple', price: 5});
//    res.header('content-type', 'text/html').send(html);
// });

app.listen(3000, (err, address) => {
   if (err) { throw err; }
   console.info(`server listening on ${address}`);
});