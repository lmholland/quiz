async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Nguyễn_Phú_Trọng");
        const data = require('cheerio').load(response.data);
        const size= "500px";
        const countryNum = 30;

        // flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
        leaderImg(4, "jpg")

        function pos_00(){
            if(
                    data(`td.table-success`)[countryNum].children[0].children[0].data.indexOf("of") > -1
                ||  data(`td.table-success`)[countryNum].children[0].children[0].data.indexOf("for") > -1
            ){
                let arr = data(`td.table-success`)[countryNum].children[0].children[0].data.split(" ");
                let pos = [];
                let rest = [];

                for(let word = 0; word < arr.length; word++){
                    if(arr[word] == "of" || arr[word] == "for" || rest.length > 0){
                        rest.push(arr[word]);
                    } else {
                        pos.push(arr[word].toLowerCase());
                    }
                }

                return console.log("pos_00", pos.concat(rest).join(" "))

            } else {
                let arr = data(`td.table-success`)[countryNum].children[0].children[0].data.split(" ");
                let pos = [];

                for(let word = 0; word < arr.length; word++){
                    pos.push(arr[word].toLowerCase());
                }

                return console.log(pos.join(" "))

            }
        }

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

        // for(let j=0; j < data(`th.infobox-label`).length; j++){

        //     try{
        //         if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
        //             console.log(data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data);
        //             // masterList[i].demonym = {};
        //             // masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[0].data;
        //         }
        //     } catch(error){
        //     }

        // }

    } catch (error) {
    }

}

getData();