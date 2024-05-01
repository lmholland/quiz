const { newInfo } = require('./newInfo.js');

for(let i=0; i < newInfo.length; i++){
    console.log(newInfo[i].country.name)
    console.log(newInfo[i].largestCity[0])
}

//_____________________________________________________

// for(let i=0; i < currentInfo.length; i++){
//     console.log(currentInfo[i].country.name)
// }

// Uniques:
//
// !sy  =   Turkey
// !lc  =   Australia
//
// ____________________________________________________
//
// {
//     country: name, url
//     leader: title, pos, name, url, imgUrl
//     flag: url
//     symbol: url
//     map: url
//     capital: [name, type]...
//     language: [list]...
//     demonym: name
//     currency: demonym, unit, full, other
//     tld: name
//     largestCity: name, type
// }, 