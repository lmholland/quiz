async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/Nicolás_Maduro");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        imgURL = data(`td.infobox-image`)[0].children[0].children[0].attribs.src;
        pxSize = imgURL.substring(imgURL.indexOf(".jpeg/") + 6, imgURL.lastIndexOf("px"));
        imgURL = imgURL.replace(pxSize, "500");
        console.log(imgURL);

    } catch (error) {
    }

}

getData();