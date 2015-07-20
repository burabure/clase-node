import readFile from '../modules/readfile-promise';
import path from 'path';

export function* index() {
  const tuits = yield readFile(path.join(__dirname, '..', '..', 'tmp', 'tuits.json'), {encoding: 'utf-8'});

  this.body = tuits;
}
