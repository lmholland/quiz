async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Yemen");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        let flagNum = 4;
        let flagType = "svg";

        flagURL = data(`img`)[flagNum].attribs.src;
        pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
        flagURL = flagURL.replace(pxSize, size);
        flagURL = flagURL.replace("//", "https://")
        console.log(flagURL);

    } catch (error) {
    }

}

getData();