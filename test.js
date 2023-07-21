async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Thailand");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
        // leaderImg(4, "jpeg");

        function flag_symbol_map(flagNum, flagType, symbolNum, symbolType, mapNum, mapType){
            try{
                flagURL = data(`img`)[flagNum].attribs.src;
                pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                flagURL = flagURL.replace(pxSize, size);
                // masterList[i].flag = {}
                // masterList[i].flag.url = flagURL;
                console.log(flagURL);

                symbolURL = data(`img`)[symbolNum].attribs.src;
                pxSize = symbolURL.substring(symbolURL.indexOf(`.${symbolType}/`) + 5, symbolURL.lastIndexOf("px") + 2);
                symbolURL = symbolURL.replace(pxSize, size);
                // masterList[i].symbol = {}
                // masterList[i].symbol.url = symbolURL;
                console.log(symbolURL);


                mapURL = data(`img`)[mapNum].attribs.src;
                pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                mapURL = mapURL.replace(pxSize, size);
                // masterList[i].map = {}
                // masterList[i].map.url = mapURL;        
                console.log(mapURL);

            } catch (error) {
                console.log(`error in ${masterList[i].country.name}'s image urls`);
            }
        }

        // function leaderImg(num, type){
        //     try {
        //         imgURL = data(`img`)[num].attribs.src;
        //         pxSize = imgURL.substring(imgURL.indexOf(`.${type}/`) + (type.length + 2), imgURL.lastIndexOf("px"));
        //         imgURL = imgURL.replace(pxSize, "500");
        //         // masterList[i].leader.imgUrl = imgURL;
        //         console.log(imgURL);
        //     } catch(error){
        //     }
        // }

        // for(let j=0; j < data(`th.infobox-label`).length; j++){
        //     if( 
        //             data(`th.infobox-label`)[j].children[0].data == "Official language"
        //         ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
        //         ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
        //         ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
        //         ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
        //     ){
        //         // masterList[i].language = {};
        //         // masterList[i].language.list = [];

        //         for(let k=0; k < data(`th.infobox-label`)[j].next.children[5].children[0].children.length; k++){
        //             console.log(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[0].children[0].data);
        //             // if (k==5){
        //             //     masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[3].children[0].data);
        //             // } else if (k==9){
        //             //     masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[1].attribs.title);
        //             // } else {
        //             //     masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[0].children[0].data);
        //             // }
        //         }
        //     }
        // }

    } catch (error) {
    }

}

getData();