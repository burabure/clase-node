import {getAll} from '../models/Tuit';

export function* index() {
  const tuits = yield getAll;

  yield this.render('home', {tuits});
}
