import { read, readFile } from 'fs';

readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});

console.log("読み込みを開始しました。");
