import {create as createTweet} from '../models/Tuit';

export function* create() {
  const query = this.request.body;
  this.type = 'application/json';

  try{
    const tuit = yield createTweet(query);
    this.status = 201;
    this.body = tuit;
  }
  catch(error){
    console.log(error);
    this.status = 500;
    this.body = {
      errors: [
        {
          status: this.status,
          title: 'Error Interno'
        }
      ]
    };
  }
}
