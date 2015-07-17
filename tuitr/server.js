import koa from 'koa';

const app = koa();

app.use(function* (next) {
  const start = new Date();
  yield next;
  const end = new Date();

  console.log(`${this.ip} :: ${this.method} - ${this.url} - respuesta en ${end - start}ms`);
});

app.use(function* (next) {
  console.log('hola1');

  this.body = 'hola ';
  yield next;
});

app.use(function* () {
  console.log('hola2');

  this.body += 'a todos';
});

app.listen(3000);
