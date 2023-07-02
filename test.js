async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/sudan");
        const data = require('cheerio').load(response.data);

        try{
            console.log(data(`a.image`)[1].children[0].attribs.src);
            // pxSize = mapURL.substring(mapURL.indexOf(".svg/") + 5, mapURL.lastIndexOf("px") + 2);
            // mapURL = mapURL.replace(pxSize, size);
            // masterList[i].map = {}
            // masterList[i].map.url = mapURL;
        } catch( error ) {
            console.log(masterList[i].country.name, "mapURL");
        }
    
    } catch (error) {
    }

}

getData();