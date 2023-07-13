async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/bolivia");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        for(let j=0; j < data(`th.infobox-label`).length; j++){

            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                console.log(data(`th.infobox-label`)[j].next.children[0].children[0].data);
                console.log(data(`th.infobox-label`)[j].children[0].data.toLowerCase());
                // masterList[i].capital = [];
                // masterList[i].capital.push({
                //     name: data(`th.infobox-label`)[j].next.children[0].children[0].data,
                //     type: data(`th.infobox-label`)[j].children[0].data.toLowerCase(),
                // });
            }

        }

    } catch (error) {
    }

}

getData();