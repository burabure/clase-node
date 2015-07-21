import koa from 'koa';
import hbs from 'koa-hbs';
import route from 'koa-route';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import {index as homeIndex} from './app/controllers/homeController';
import {create as tweetsCreate} from './app/controllers/tuitsController';

const app = koa();

app.use(hbs.middleware({
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
app.use(route.put('/tweets', tweetsCreate));

export default app.listen(3000);
