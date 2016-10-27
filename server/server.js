import path from "path";
import Koa from "koa";
import serve from "koa-static";
import mount from "koa-mount";

const PORT = process.env.PORT || 8000;
const PATH_DIST = path.resolve(__dirname, '../dist');
const app = new Koa();

app.use(serve(PATH_DIST));

app.listen(PORT, () => console.log(`serving ${PATH_DIST} on port ${PORT}`));

export default app;