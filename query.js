const { newInfo } = require('./newInfo.js');

for(let i=0; i < newInfo.length; i++){
    console.log(newInfo[i].largestCity)
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
//     currency: demonym, unit, full, other
//     tld: name
//     largestCity: name, type
// }, 