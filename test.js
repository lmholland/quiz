async function getData(){

    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government");
        const data = require('cheerio').load(response.data);
        const size= "500px";


        console.log(data(`td.table-success`)[132].children[0].children[0].data
            .concat(data(`td.table-success`)[132].children[0].children[1].children[0].data));
        console.log(data(`td.table-success`)[132].children[0].children[3].children[0].data);
        console.log(data(`td.table-success`)[132].children[0].children[3].attribs.href);

    } catch (error) {
    }

}

getData();