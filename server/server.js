import path from "path";
import Koa from "koa";
import serve from "koa-static";
import mount from "koa-mount";

const PORT = process.env.PORT || 8000;
const PATH_DIST = path.resolve(__dirname, '../dist');
const app = new Koa();

app.use(serve(PATH_DIST));

app.listen(PORT, () => console.log(`server listening on ${PORT}`))

export default app;

/*
const path = require("path");
const Express = require("express");

let app = Express();
let server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../client');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

//app.get('/', (req, res) => {
//  res.sendFile(path.resolve(__dirname, '../client/index.html'));
//});

server = app.listen(process.env.PORT || 8080, () => {
  let port = server.address().port;

  console.log('Server is listening at %s', port);
});
*/
