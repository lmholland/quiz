const { info } = require('./currentInfo.js')
const axios = require('axios');
const fs = require('fs')
const timer = ms => new Promise(res => setTimeout(res, ms))

const downloadFiles = async () => {
    for(let i=0; i < info.length; i++){
        if(i==178){     // Turkey has no symbol
            continue;
        }

        try {
            let name = `./images/${info[i].country.name.replaceAll(" ", "_")}/symbol.jpg`;
            let url = `${info[i].symbol.url}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            });
            response.data.pipe(file);
            console.log(info[i].country.name, ": symbol @ ", info[i].symbol.url);
            await timer(10000);
        } catch (error){
            console.log(info[i].country.name, "symbol", error);
        }

    }

    for(let i=0; i < info.length; i++){
        try {
            let name = `./images/${info[i].country.name.replaceAll(" ", "_")}/flag.jpg`;
            let url = `${info[i].flag.url}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            });
            response.data.pipe(file);
            console.log(info[i].country.name, ": flag @ ", info[i].flag.url);
            await timer(10000);
        } catch (error){
            console.log(info[i].country.name, "flag", error);
        }
    }

    for(let i=0; i < info.length; i++){
        try {
            let name = `./images/${info[i].country.name.replaceAll(" ", "_")}/map.jpg`;
            let url = `${info[i].map.url}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            })
            response.data.pipe(file);
            console.log(info[i].country.name, ": map @ ", info[i].map.url);
            await timer(10000);
        } catch (error){
            console.log(i, info[i].map.url, "map", error)
        }
    }

    for(let i=0; i < info.length; i++){
        try {
            let name = `./images/${info[i].country.name.replaceAll(" ", "_")}/leader.jpg`;
            let url = `${info[i].leader.imgUrl}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            })
            response.data.pipe(file);
            console.log(info[i].country.name, ": leader @ ", info[i].leader.imgUrl);
            await timer(10000);
        } catch (error){
            console.log(i, info[i].country.name, "leader", error)
        }
    }
}

downloadFiles();