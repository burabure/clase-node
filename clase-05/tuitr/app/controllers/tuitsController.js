import * as Tuit from '../models/Tuit';

export function* create() {
  const query = this.request.body;
  this.type = 'application/json';

  try{
    yield Tuit.create(query);
    this.status = 201;
    this.body = yield Tuit.getAll;
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
