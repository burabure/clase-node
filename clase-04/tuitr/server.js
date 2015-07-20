import koa from 'koa';
import {index as homeIndex} from './app/controllers/homeController';

const app = koa();

app.use(function* (next) {
  const start = new Date();
  yield next;
  const end = new Date();

  console.log(`${this.ip} :: ${this.method} - ${this.url} - respuesta en ${end - start}ms`);
});

app.use(homeIndex);

export default app.listen(3000);
