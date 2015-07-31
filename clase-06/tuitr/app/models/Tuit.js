import mongoose from 'mongoose';
import co from 'co';

const tuitSchema = mongoose.Schema({
  user: String,
  body: String
});

var Tuit = mongoose.model('Tuit', tuitSchema);

export const getAll = Tuit.find().sort({_id: -1});


export function create({user, body}) {
  return co(function* (){

    try {
      const tuit = new Tuit({user, body});
      return tuit.save();
    }
    catch(error) {
      throw error;
    }
  });
}
