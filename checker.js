const { newInfo } = require('./newInfo.js');
const { currentInfo } = require('./currentInfo.js');

for(let i=0; i < newInfo.length; i++){
    if(newInfo[i].country.name !== currentInfo[i].country.name){console.log(newInfo[i].country.name, "|| Country Name || \n", newInfo[i].country.name, "!== \n", currentInfo[i].country.name)};
    if(newInfo[i].country.url !== currentInfo[i].country.url){console.log(newInfo[i].country.name, "||Country Url || \n", newInfo[i].country.url, "!== \n", currentInfo[i].country.url)};
    if(newInfo[i].leader.title !== currentInfo[i].leader.title){console.log(newInfo[i].country.name, "|| Leader Title || \n", newInfo[i].leader.title, "!== \n", currentInfo[i].leader.title)};
    if(newInfo[i].leader.pos !== currentInfo[i].leader.pos){console.log(newInfo[i].country.name, "|| Leader Pos || \n", newInfo[i].leader.pos, "!== \n", currentInfo[i].leader.pos)};
    if(newInfo[i].leader.name !== currentInfo[i].leader.name){console.log(newInfo[i].country.name, "|| Leader Name || \n", newInfo[i].leader.name, "!== \n", currentInfo[i].leader.name)};
    if(newInfo[i].leader.url !== currentInfo[i].leader.url){console.log(newInfo[i].country.name, "|| Leader Url || \n", newInfo[i].leader.url, "!== \n", currentInfo[i].leader.url)};
    if(newInfo[i].leader.imgUrl !== currentInfo[i].leader.imgUrl){console.log(newInfo[i].country.name, "|| Leader ImgUrl || \n", newInfo[i].leader.imgUrl, "!== \n", currentInfo[i].leader.imgUrl)};
    if(newInfo[i].flag.url !== currentInfo[i].flag.url){console.log(newInfo[i].country.name, "|| Flag Url || \n", newInfo[i].flag.url, "!== \n", currentInfo[i].flag.url)};
    if(newInfo[i].symbol.url !== currentInfo[i].symbol.url){console.log(newInfo[i].country.name, "|| Symbol Url || \n", newInfo[i].symbol.url, "!== \n", currentInfo[i].symbol.url)};
    if(newInfo[i].map.url !== currentInfo[i].map.url){console.log(newInfo[i].country.name, "|| Map Url || \n", newInfo[i].map.url, "!== \n", currentInfo[i].map.url)};
    if(newInfo[i].capital.name !== currentInfo[i].capital.name){console.log(newInfo[i].country.name, "|| Capital Name || \n", newInfo[i].capital.name, "!== \n", currentInfo[i].capital.name)};
    if(newInfo[i].capital.type !== currentInfo[i].capital.type){console.log(newInfo[i].country.name, "|| Capital Type || \n", newInfo[i].capital.type, "!== \n", currentInfo[i].capital.type)};
    for(let j=0; j < newInfo[i].language.list.length; j++){
        if(newInfo[i].language.list[j] !== currentInfo[i].language.list[j]){
            console.log(newInfo[i].country.name, "|| Language List || \n", newInfo[i].language.list, "!== \n", currentInfo[i].language.list);
        };
    }
    if(newInfo[i].demonym.name !== currentInfo[i].demonym.name){console.log(newInfo[i].country.name, "|| Demonym || \n", newInfo[i].demonym.name, "!== \n", currentInfo[i].demonym.name)};
    if(newInfo[i].currency.demonym !== currentInfo[i].currency.demonym){console.log(newInfo[i].country.name, "|| Currency Demonym || \n", newInfo[i].currency.demonym, "!== \n", currentInfo[i].currency.demonym)};
    if(newInfo[i].currency.unit !== currentInfo[i].currency.unit){console.log(newInfo[i].country.name, "|| Currency Unit || \n", newInfo[i].currency.unit, "!== \n", currentInfo[i].currency.unit)};
    if(newInfo[i].currency.full !== currentInfo[i].currency.full){console.log(newInfo[i].country.name, "|| Currency Full || \n", newInfo[i].currency.full, "!== \n", currentInfo[i].currency.full)};
    if(newInfo[i].currency.other !== currentInfo[i].currency.other){console.log(newInfo[i].country.name, "|| Currency Other || \n", newInfo[i].currency.other, "!== \n", currentInfo[i].currency.other)};
    if(newInfo[i].tld.name !== currentInfo[i].tld.name){console.log(newInfo[i].country.name, "|| Tld Name || \n", newInfo[i].tld.name, "!== \n", currentInfo[i].tld.name)};
    if(newInfo[i].largestCity.name !== currentInfo[i].largestCity.name){console.log(newInfo[i].country.name, "|| LargestCity Name || \n", newInfo[i].largestCity.name, "!== \n", currentInfo[i].largestCity.name)};
    if(newInfo[i].largestCity.type !== currentInfo[i].largestCity.type){console.log(newInfo[i].country.name, "|| Largest City Type || \n", newInfo[i].largestCity.type, "!== \n", currentInfo[i].largestCity.type)};
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