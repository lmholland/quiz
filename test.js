async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Assimi_Go%C3%AFta");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        let num = 3;
        let type = "png";

        imgURL = data(`img`)[num].attribs.src;
        pxSize = imgURL.substring(imgURL.indexOf(`.${type}/`) + (type.length + 2), imgURL.lastIndexOf("px"));
        imgURL = imgURL.replace(pxSize, "500");
        imgURL = imgURL.replace("//", "https://")
        console.log(imgURL);

    } catch (error) {
    }

}

getData();