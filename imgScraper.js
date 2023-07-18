const { currentInfo } = require('./currentInfo.js')
const axios = require('axios');
const fs = require('fs')
const timer = ms => new Promise(res => setTimeout(res, ms))

const downloadFiles = async () => {
    for(let i=0; i < currentInfo.length; i++){
        if(i==178){     // Turkey has no symbol
            continue;
        }

        try {
            let name = `./images/${currentInfo[i].country.name.replaceAll(" ", "_")}/symbol.jpg`;
            let url = `${currentInfo[i].symbol.url}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            });
            response.data.pipe(file);
            console.log(currentInfo[i].country.name, ": symbol @ ", currentInfo[i].symbol.url);
            await timer(10000);
        } catch (error){
            console.log(currentInfo[i].country.name, "symbol", error);
        }

    }

    for(let i=0; i < currentInfo.length; i++){
        try {
            let name = `./images/${currentInfo[i].country.name.replaceAll(" ", "_")}/flag.jpg`;
            let url = `${currentInfo[i].flag.url}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            });
            response.data.pipe(file);
            console.log(currentInfo[i].country.name, ": flag @ ", currentInfo[i].flag.url);
            await timer(10000);
        } catch (error){
            console.log(currentInfo[i].country.name, "flag", error);
        }
    }

    for(let i=0; i < currentInfo.length; i++){
        try {
            let name = `./images/${currentInfo[i].country.name.replaceAll(" ", "_")}/map.jpg`;
            let url = `${currentInfo[i].map.url}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            })
            response.data.pipe(file);
            console.log(currentInfo[i].country.name, ": map @ ", currentInfo[i].map.url);
            await timer(10000);
        } catch (error){
            console.log(i, currentInfo[i].map.url, "map", error)
        }
    }

    for(let i=0; i < currentInfo.length; i++){
        try {
            let name = `./images/${currentInfo[i].country.name.replaceAll(" ", "_")}/leader.jpg`;
            let url = `${currentInfo[i].leader.imgUrl}`;
            let file = fs.createWriteStream(name);
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            })
            response.data.pipe(file);
            console.log(currentInfo[i].country.name, ": leader @ ", currentInfo[i].leader.imgUrl);
            await timer(10000);
        } catch (error){
            console.log(i, currentInfo[i].country.name, "leader", error)
        }
    }
}

downloadFiles();