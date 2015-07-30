import co from 'co';
import path from 'path';
import readFile from '../modules/readFile-promise';
import writeFile from '../modules/writeFile-promise';

const tuitsFilePath = path.join(__dirname, '..', '..', 'tmp', 'tuits.json');

export const getAll = co(function* (){
  const tuitsFile =
      yield readFile(tuitsFilePath, {encoding: 'utf-8'});

  return JSON.parse(tuitsFile.trim());
});


export function create({user, body}) {
  return co(function* (){
    let tuits = yield getAll;
    const tuit = {
      user,
      body
    };

    tuits.push(tuit);

    try {
      yield writeFile(tuitsFilePath, JSON.stringify(tuits));
      return tuit;
    }
    catch(error) {
      throw error;
    }
  });
}
