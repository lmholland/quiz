import { open } from 'node:fs/promises';

const curFile = await open('currentInfo.js');
const newFile = await open('newInfo.js');
let curArr = [];
let newArr = [];

for await (const line of curFile.readLines()) {
  curArr.push(line);
}

for await (const line of newFile.readLines()) {
  newArr.push(line);
}

for(let i = 0; i < curArr.length; i++){
    if(curArr[i] !== newArr[i]){
        console.log("_________________________________");
        console.log(`Line ${i+1} is different`);
        console.log(`currentInfo = `, curArr[i]);
        console.log(`    newInfo = `, newArr[i]);
    }
}