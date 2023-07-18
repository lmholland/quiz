async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government");
        const data = require('cheerio').load(response.data);
        const size= "500px";

        for(let j=0; j < data(`th.infobox-label`).length; j++){
        }

        function language_nc41k00_k2(){
            if( 
                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                ||  data(`th.infobox-label`)[j].children[0].data == "Official"
            ){
                // masterList[i].language = {};
                // masterList[i].language.list = [];

                for(let k=0; k < data(`th.infobox-label`)[j].next.children[4].children[1].children.length; k+=2){
                    console.log(data(`th.infobox-label`)[j].next.children[4].children[1].children[k].children[0].children[0].data)
                    // masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[4].children[1].children[k].children[0].children[0].data);
                }
            }
        }


    } catch (error) {
    }

}

getData();