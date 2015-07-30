import fs from 'fs';

export default function readFile(path, options = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) { reject(err); }
      resolve(data);
    });
  });
}
