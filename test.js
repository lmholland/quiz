async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Senegal");
        const data = require('cheerio').load(response.data);
        const size= "500px";
        const countryNum = 30;

        // flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
        // leaderImg(4, "jpg")


        //         for(let j=0; j < data(`th.infobox-label`).length; j++){
        //     try{
        //         if( 
        //                 data(`th.infobox-label`)[j].children[0].data == "Official language"
        //             ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
        //             ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
        //             ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
        //             ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
        //         ){
        //             // for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children.length; k++){
        //             //     console.log(data(`th.infobox-label`)[j].next.children[1].children[0].children[k].children[0].children[0].data);
        //             // }
        //             console.log(data(`th.infobox-label`)[j].next.children[0].children[0].data);
        //         }
        //     } catch(error){
        //     }
        // }


        function flag_symbol_map(flagNum, flagType, symbolNum, symbolType, mapNum, mapType){
            try{
                flagURL = data(`img`)[flagNum].attribs.src;
                pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                flagURL = flagURL.replace(pxSize, size);
                flagURL = flagURL.replace("//", "https://")
                console.log(flagURL);
                symbolURL = data(`img`)[symbolNum].attribs.src;
                pxSize = symbolURL.substring(symbolURL.indexOf(`.${symbolType}/`) + 5, symbolURL.lastIndexOf("px") + 2);
                symbolURL = symbolURL.replace(pxSize, size);
                symbolURL = symbolURL.replace("//", "https://")
                console.log(symbolURL);
                mapURL = data(`img`)[mapNum].attribs.src;
                pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                mapURL = mapURL.replace(pxSize, size);
                mapURL = mapURL.replace("//", "https://")
                console.log(mapURL);    
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