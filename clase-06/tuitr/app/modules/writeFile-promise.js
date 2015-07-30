import fs from 'fs';

export default function(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, err => {
      if (err) { reject(err); }
      resolve(true);
    });
  });
}
