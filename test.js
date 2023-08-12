async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Cyril_Ramaphosa");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        // flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
        leaderImg(4, "jpg");


        function flag_symbol_map(flagNum, flagType, symbolNum, symbolType, mapNum, mapType){
            try{
                flagURL = data(`img`)[flagNum].attribs.src;
                pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                flagURL = flagURL.replace(pxSize, size);
                flagURL = flagURL.replace("//", "https://")
                console.log(flagURL);
                // masterList[i].flag = {}
                // masterList[i].flag.url = flagURL;

                symbolURL = data(`img`)[symbolNum].attribs.src;
                pxSize = symbolURL.substring(symbolURL.indexOf(`.${symbolType}/`) + 5, symbolURL.lastIndexOf("px") + 2);
                symbolURL = symbolURL.replace(pxSize, size);
                symbolURL = symbolURL.replace("//", "https://")
                console.log(symbolURL);
                // masterList[i].symbol = {}
                // masterList[i].symbol.url = symbolURL;

                mapURL = data(`img`)[mapNum].attribs.src;
                pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                mapURL = mapURL.replace(pxSize, size);
                mapURL = mapURL.replace("//", "https://")
                console.log(mapURL);
                // masterList[i].map = {}
                // masterList[i].map.url = mapURL;        
            } catch (error) {
                console.log(`error in ${masterList[i].country.name}'s image urls`);
            }
        }

        function leaderImg(num, type){
            try {
                imgURL = data(`img`)[num].attribs.src;
                pxSize = imgURL.substring(imgURL.indexOf(`.${type}/`) + (type.length + 2), imgURL.lastIndexOf("px"));
                imgURL = imgURL.replace(pxSize, "500");
                imgURL = imgURL.replace("//", "https://")
                // masterList[i].leader.imgUrl = imgURL;
                console.log(imgURL);
            } catch(error){
            }
        }

    } catch (error) {
    }

}

getData();