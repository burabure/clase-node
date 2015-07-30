import koa from 'koa';
import appHbs from './app/modules/appHbs';
import path from 'path';
import serve from 'koa-static';
import route from 'koa-route';
import bodyParser from 'koa-bodyparser';
import {index as homeIndex} from './app/controllers/homeController';
import {create as tweetsCreate} from './app/controllers/tuitsController';

const app = koa();

app.use(serve(path.join(__dirname, 'public')));

app.use(appHbs.middleware({
  viewPath: path.join(__dirname, 'app', 'views'),
  partialsPath: path.join(__dirname, 'app', 'views', 'partials')
}));

app.use(bodyParser());

app.use(function* (next) {
  const start = new Date();
  yield next;
  const end = new Date();

  console.log(`${this.ip} :: ${this.method} - ${this.url} - respuesta en ${end - start}ms`);
});

/**
 * Routes
 */

app.use(route.get('/', homeIndex));
app.use(route.put('/tuits', tweetsCreate));

export default app.listen(3000);
