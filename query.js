const { info } = require('./newInfo.js')

info.forEach(country => {

    console.log(country.country.name, country.leader.pos)

})

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
//     capital: name, type
//     language: list
//     currency: demonym, unit, full, other
//     tld: name
//     largestCity: name, type
// }, 