async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Mark_Rutte");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        // flag_symbol_map(4, "svg", 5, "svg", 6, "svg");

        // function flag_symbol_map(flagNum, flagType, symbolNum, symbolType, mapNum, mapType){
        //     try{
        //         flagURL = data(`img`)[flagNum].attribs.src;
        //         pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
        //         flagURL = flagURL.replace(pxSize, size);
        //         // masterList[i].flag = {}
        //         // masterList[i].flag.url = flagURL;
        //         console.log(flagURL)

        //         symbolURL = data(`img`)[symbolNum].attribs.src;
        //         pxSize = symbolURL.substring(symbolURL.indexOf(`.${symbolType}/`) + 5, symbolURL.lastIndexOf("px") + 2);
        //         symbolURL = symbolURL.replace(pxSize, size);
        //         // masterList[i].symbol = {}
        //         // masterList[i].symbol.url = symbolURL;
        //         console.log(symbolURL)


        //         mapURL = data(`img`)[mapNum].attribs.src;
        //         pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
        //         mapURL = mapURL.replace(pxSize, size);
        //         // masterList[i].map = {}
        //         // masterList[i].map.url = mapURL;       
        //         console.log(mapURL)
 
        //     } catch (error) {
        //         console.log(`error in ${masterList[i].country.name}'s image urls`);
        //     }
        // }

        // _______________________

        leaderImg(4, "jpg");

        function leaderImg(num, type){
            try {
                imgURL = data(`img`)[num].attribs.src;
                pxSize = imgURL.substring(imgURL.indexOf(`.${type}/`) + (type.length + 2), imgURL.lastIndexOf("px"));
                imgURL = imgURL.replace(pxSize, "500");
                console.log(imgURL);
                // masterList[i].leader.imgUrl = imgURL;
            } catch(error){
            }
        }

        // ______________________

        // leaderImg_thumbless(3);

        // function leaderImg_thumbless(num){
        //     try {
        //         imgURL = data(`img`)[num].attribs.src;
        //         afterCommons = imgURL.substring(imgURL.lastIndexOf("commons/") + 8);
        //         imgURL = imgURL.replace(afterCommons, "thumb/" + afterCommons);
        //         fileName = imgURL.substring(imgURL.lastIndexOf("/") + 1);
        //         imgURL = imgURL.replace(fileName, fileName + "/500px-" + fileName);
        //         console.log(imgURL);
        //         // masterList[i].leader.imgUrl = imgURL;
        //     } catch(error){
        //     }
        // }

    } catch (error) {
    }

}

getData();