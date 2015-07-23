import {getAll} from '../models/Tuit';
import readFile from '../modules/readFile-promise';
import path from 'path';

export function* index() {

  try {
    const template = yield readFile(path.join(__dirname, '..', 'views', 'partials', 'tuits.hbs'));

    const tuits = yield getAll;
    yield this.render('home', {tuits, tuitsTemplate: template });
  } catch (e) {
    console.log(e);
  }
}
