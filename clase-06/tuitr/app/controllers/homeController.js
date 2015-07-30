import {getAll} from '../models/Tuit';

export function* index() {

  try {
    const tuits = yield getAll;
    yield this.render('home', {tuits});
  } catch (e) {
    console.log(e);
  }
}
