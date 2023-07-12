let masterList = [];
const timer = ms => new Promise(res => setTimeout(res, ms))
const countryTotal = 195;
const waitTime = 10000;

async function getData(){
    // country, leader
    try {
        const response = await require('axios').get("https://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government");
        const data = require('cheerio').load(response.data)
        const skipList = [
            // changes here affect the second switch statement in grabInfo(), so update the numbers of countries there that are or come after any changes here
            // numbers here mean country position in list, comment numbers are leader position minus position in this list
            // * -1 is used so the list can start at 0, this affects countryRow in skipDeJureLeaders

            -1,     //  000-00  start*
            21,     //  022-01  Bosnia
            26,     //  028-02  Burkina Faso
            69,     //  072-03  Guinea
            97,     //  101-04  Liechtenstein
            112,    //  117-05  Moldova
            118,    //  124-06  Myanmar
            139,    //  146-07  Poland
            142,    //  150-08  Romania
            148,    //  157-09  San Marino
            150,    //  160-10  Saudi Arabia
            153,    //  164-11  Serbia
            160,    //  172-12  Somalia
            165,    //  178-13  Sudan
            179,    //  193-14  Turkmenistan
        ]
        let info = [];

        for (let countryRow = 0, info = countryRow; countryRow < countryTotal; countryRow++){
            skipDeJureLeaders();
            grabInfo();
            formatURLs();
            addInfoToMasterList();

            console.log(countryNum, info) 

            function skipDeJureLeaders(){
                for (let skippedLeaders = 0; skippedLeaders < skipList.length; skippedLeaders++){
                    if (countryRow > skipList[skippedLeaders]) {
                        countryNum = countryRow + skippedLeaders;
                    }
                }
            }

            function grabInfo(){
                let countryName = data(`span.flagicon`)[countryRow].next.attribs.title;
                let countryURL = data(`span.flagicon`)[countryRow].next.attribs.href;
                
                switch(countryRow){     // changes country name
                    default: 
                        countryName = data(`span.flagicon`)[countryRow].next.attribs.title;
                        break;
                    case 32:    // CAR
                        countryName = "the Central African Republic";
                        break;
                    case 37:    // Comoros
                        countryName = "the Comoros";
                        break;
                    case 38:    // Congo-Kinshasa (DRC)
                        countryName = "Congo-Kinshasa";
                        break;
                    case 39:    // Congo-Brazzaville (ROTC)
                        countryName = "Congo-Brazzaville";
                        break;
                    case 44:    // Czechia
                        countryName = "Czechia";
                        break;
                    case 48:    // Dominican Republic
                        countryName = "the Dominican Republic";
                        break;
                    case 63:    // Georgia
                        countryName = "Georgia";
                        break;
                    case 80:    // Ireland
                        countryName = "Ireland";
                        break;
                    case 83:    // Ivory Coast
                        countryName = "the Ivory Coast";
                        break;
                    case 104:   // Maldives
                        countryName = "the Maldives";
                        break;
                    case 107:   // Marshall Islands
                        countryName = "the Marshall Islands";
                        break;
                    case 111:   // Micronesia
                        countryName = "Micronesia";
                        break;
                    case 122:   // Netherland
                        countryName = "the Netherlands";
                        break;
                    case 133:   // Palestine
                        countryName = "Palestine";
                        break;
                    case 138:   // Philippines
                        countryName = "the Philippines";
                        break;
                    case 159:   // Solomon Islands
                        countryName = "the Solomon Islands";
                        break;
                    case 183:   // UAE
                        countryName = "the United Arab Emirates";
                        break;
                    case 184:   // UK
                        countryName = "the United Kingdom";
                        break;
                    case 185:   // USA
                        countryName = "the United States";
                        break;
                }

                switch(countryNum){     // creates info object
                    default:
                        leader_00_20_2();
                        break;
                    case 27:    // Burkina Faso
                        leader_00010_03_03();
                        break; 
                    case 35:    // Chad
                        leader_00010_03_03();
                        break; 
                    case 71:    // Guinea
                        leader_0001_03_03();
                        break; 
                    case 75:    // Haiti
                        leader_00010_03_03();
                        break; 
                    case 102:   // Liechtenstein
                        leader_000_0101020_02();
                        break; 
                    case 109:   // Mali
                        leader_00010_03_03();
                        break; 
                    case 123:   // Myanmar
                        leader_000_02_02();
                        break;
                    case 149:   // Qatar
                        leader_00_112_2();
                        break; 
                    case 168:   // Slovakia
                        leader_00010_03_03();
                        break;
                    case 179:   // Sudan
                        leader_0101_00_00();
                        break;
                    case 182:   // Switzerland 
                        leader_00_00_0();
                        break;          
                    case 192:   // Turkmenistan
                        leader_010_3_3();
                        break; 
                    case 197:   // UAE
                        leader_00_112_2();
                        break; 
                    case 206:   // Yemen
                        leader_000_02_02();
                        break; 
                }

                function leader_00_00_0(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].data,
                            pos: pos_00(),
                            name: data(`td.table-success`)[countryNum].children[0].children[0].data,
                            url: data(`td.table-success`)[countryNum].children[0].attribs.href,
                        }
                    }
                }

                function leader_00_20_2(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },  
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].data,
                            pos: pos_00(),
                            name: data(`td.table-success`)[countryNum].children[2].children[0].data,
                            url: data(`td.table-success`)[countryNum].children[2].attribs.href,
                        },
                    }
                }

                function leader_00_112_2(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].data,
                            pos: pos_00(),
                            name: data(`td.table-success`)[countryNum].children[1].data
                                .substring(3, data(`td.table-success`)[countryNum].children[1].data.length)
                                .concat(data(`td.table-success`)[countryNum].children[2].attribs.title),
                            url: data(`td.table-success`)[countryNum].children[2].attribs.href,
                        }
                    }
                }

                function leader_000_02_02(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].children[0].data,
                            pos: pos_000(),
                            name: data(`td.table-success`)[countryNum].children[0].children[2].attribs.title,
                            url: data(`td.table-success`)[countryNum].children[0].children[2].attribs.href,
                        },
                    }
                }

                function leader_000_0101020_02(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].children[0].data,
                            pos: pos_000(),
                            name: data(`td.table-success`)[countryNum].children[0].children[1].data
                                .substring(3, data(`td.table-success`)[countryNum].children[0].children[1].data.length)
                                .concat(data(`td.table-success`)[countryNum].children[0].children[2].children[0].data),
                            url: data(`td.table-success`)[countryNum].children[0].children[2].attribs.href,
                        },
                    }
                }

                function leader_010_3_3(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].data
                                .concat(data(`td.table-success`)[countryNum].children[1].children[0].data),
                            pos: pos_0cc10(),
                            name: data(`td.table-success`)[countryNum].children[3].attribs.title,
                            url: data(`td.table-success`)[countryNum].children[3].attribs.href,
                        }
                    }
                }

                function leader_0001_03_03(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].data
                                .concat(data(`td.table-success`)[countryNum].children[0].children[1].children[0].data),
                            pos: pos_00cc010(),
                            name: data(`td.table-success`)[countryNum].children[0].children[3].children[0].data,
                            url: data(`td.table-success`)[countryNum].children[0].children[3].attribs.href,
                        },
                    }
                }

                function leader_0101_00_00(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[1].data
                                .substring(2, data(`td.table-success`)[countryNum].children[0].children[1].data.length-1),
                            pos: pos_01ss01(),
                            name: data(`td.table-success`)[countryNum].children[0].children[0].attribs.title,
                            url: data(`td.table-success`)[countryNum].children[0].children[0].attribs.href,
                        },
                    }
                }

                function leader_00010_03_03(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].data
                                .concat(data(`td.table-success`)[countryNum].children[0].children[1].children[0].data),
                            pos: pos_00cc010(),
                            name: data(`td.table-success`)[countryNum].children[0].children[3].attribs.title,
                            url: data(`td.table-success`)[countryNum].children[0].children[3].attribs.href,
                        },
                    }
                }

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
        
                        return pos.concat(rest).join(" ");
        
                    } else {
                        let arr = data(`td.table-success`)[countryNum].children[0].children[0].data.split(" ");
                        let pos = [];

                        for(let word = 0; word < arr.length; word++){
                            pos.push(arr[word].toLowerCase());
                        }

                        return pos.join(" ");

                    }
                }

                function pos_000(){
                    if(
                            data(`td.table-success`)[countryNum].children[0].children[0].children[0].data.indexOf("of") > -1
                        ||  data(`td.table-success`)[countryNum].children[0].children[0].children[0].data.indexOf("for") > -1
                    ){
                        let arr = data(`td.table-success`)[countryNum].children[0].children[0].children[0].data.split(" ");
                        let pos = [];
                        let rest = [];
        
                        for(let word = 0; word < arr.length; word++){
                            if(arr[word] == "of" || arr[word] == "for" || rest.length > 0){
                                rest.push(arr[word]);
                            } else {
                                pos.push(arr[word].toLowerCase());
                            }
                        }
        
                        return pos.concat(rest).join(" ");
        
                    } else {
                        let arr = data(`td.table-success`)[countryNum].children[0].children[0].children[0].data.split(" ");
                        let pos = [];

                        for(let word = 0; word < arr.length; word++){
                            pos.push(arr[word].toLowerCase());
                        }

                        return pos.join(" ");

                    }
                }

                function pos_0cc10(){
                    if(
                            data(`td.table-success`)[countryNum].children[0].data.indexOf("of") > -1
                        ||  data(`td.table-success`)[countryNum].children[0].data.indexOf("for") > -1
                    ){
                        let arr = data(`td.table-success`)[countryNum].children[0].data.split(" ");
                        let pos = [];
                        let rest = [];
        
                        for(let word = 0; word < arr.length; word++){
                            if(arr[word] == "of" || arr[word] == "for" || rest.length > 0){
                                rest.push(arr[word]);
                            } else {
                                pos.push(arr[word].toLowerCase());
                            }
                        }
        
                        return pos.concat(rest).join(" ").concat(data(`td.table-success`)[countryNum].children[1].children[0].data);
        
                    } else {
                        let arr = data(`td.table-success`)[countryNum].children[0].data.split(" ");
                        let pos = [];

                        for(let word = 0; word < arr.length; word++){
                            pos.push(arr[word].toLowerCase());
                        }

                        return pos.join(" ").concat(data(`td.table-success`)[countryNum].children[1].children[0].data);

                    }
                }

                function pos_00cc010(){
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
        
                        return pos.concat(rest).join(" ").concat(data(`td.table-success`)[countryNum].children[0].children[1].children[0].data);
        
                    } else {
                        let arr = data(`td.table-success`)[countryNum].children[0].children[0].data.split(" ");
                        let pos = [];

                        for(let word = 0; word < arr.length; word++){
                            pos.push(arr[word].toLowerCase());
                        }

                        return pos.join(" ").concat(data(`td.table-success`)[countryNum].children[0].children[1].children[0].data.toLowerCase());

                    }
                }

                function pos_01ss01(){
                    let arr = data(`td.table-success`)[countryNum].children[0].children[1].data.split(" ");
                    let pos = [];

                    for(let word = 0; word < arr.length; word++){
                        pos.push(arr[word].toLowerCase());
                    }

                    return pos.join(" ").substring(2, pos.join(" ").length-1);
                }

            }

            function formatURLs(){
                info.country.url = "//en.wikipedia.org" + info.country.url;
                info.leader.url = "//en.wikipedia.org" + info.leader.url;
            }

            function addInfoToMasterList(){
                masterList.push(info);
            }
        }
    } catch (error) {
        console.log(error)
    }

    // flag, symbol, map, capital, largestCity, language, demonym, currency, tld
    try {
        for (let i = 0; i < countryTotal; i++){
            const response = await require('axios').get(masterList[i].country.url);
            const data = require('cheerio').load(response.data);
            let size = "500px";

            getFlagImgURL();
            getSymbolImgURL();
            getMapImgURL();
            getTextInfo();
            console.log(i, masterList[i])
            await timer(waitTime);


            function getFlagImgURL(){
                switch(i){
                    default:
                        flag_ai0_c0_svg();
                        break;
                    case 5:     // Antigua
                        flag_ai1_c0_svg();
                        break;
                    case 24:    // Brunei
                        flag_ai1_c0_svg();
                        break;
                    case 187:   // Uzbekistan
                        flag_ai1_c0_svg();
                        break;
                }

                function flag_ai0_c0_svg(){
                    try{
                        flagURL = data(`a.mw-file-description`)[0].children[0].attribs.src;
                        pxSize = flagURL.substring(flagURL.indexOf(".svg/") + 5, flagURL.lastIndexOf("px") + 2);
                        flagURL = flagURL.replace(pxSize, size);
                        masterList[i].flag = {}
                        masterList[i].flag.url = flagURL;
                    } catch (error) {
                        console.log(masterList[i].country.name, "flagURL");
                    }
                }

                function flag_ai1_c0_svg(){
                    try{
                        flagURL = data(`a.mw-file-description`)[1].children[0].attribs.src;
                        pxSize = flagURL.substring(flagURL.indexOf(".svg/") + 5, flagURL.lastIndexOf("px") + 2);
                        flagURL = flagURL.replace(pxSize, size);
                        masterList[i].flag = {}
                        masterList[i].flag.url = flagURL;
                    } catch (error) {
                        console.log(masterList[i].country.name, "flagURL");
                    }
                }
            }

            function getSymbolImgURL(){
                switch(i){
                    default:
                        symbol_ai1_c1_svg();
                        break;
                    case 5:     // Antigua
                        symbol_ai2_c1_svg();
                        break;
                    case 24:    // Brunei
                        symbol_ai2_c1_svg();
                        break;
                    case 38:    // Congo-Kinshasa
                        symbol_ai1_c1_png();
                        break;
                    case 76:    // India
                        symbol_ai1_c1_gif();
                        break;
                    case 178:   // Turkey
                        symbol_none_turkey();
                        break;
                    case 185:   // USA
                        symbol_ai2_c1_svg();
                        break;
                    case 187:   // Uzbekistan
                        symbol_ai2_c1_svg();
                        break;
                }

                function symbol_ai1_c1_gif(){
                    try{
                        symbolURL = data(`a.mw-file-description`)[1].children[0].attribs.src;
                        pxSize = symbolURL.substring(symbolURL.indexOf(".gif/") + 5, symbolURL.lastIndexOf("px") + 2);
                        symbolURL = symbolURL.replace(pxSize, size);
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = symbolURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "symbolURL");
                    }
                }

                function symbol_ai1_c1_png(){
                    try{
                        symbolURL = data(`a.mw-file-description`)[1].children[0].attribs.src;
                        pxSize = symbolURL.substring(symbolURL.indexOf(".png/") + 5, symbolURL.lastIndexOf("px") + 2);
                        symbolURL = symbolURL.replace(pxSize, size);
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = symbolURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "symbolURL");
                    }
                }

                function symbol_ai1_c1_svg(){
                    try{
                        symbolURL = data(`a.mw-file-description`)[1].children[0].attribs.src;
                        pxSize = symbolURL.substring(symbolURL.indexOf(".svg/") + 5, symbolURL.lastIndexOf("px") + 2);
                        symbolURL = symbolURL.replace(pxSize, size);
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = symbolURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "symbolURL");
                    }
                }

                function symbol_ai2_c1_svg(){
                    try{
                        symbolURL = data(`a.mw-file-description`)[2].children[0].attribs.src;
                        pxSize = symbolURL.substring(symbolURL.indexOf(".svg/") + 5, symbolURL.lastIndexOf("px") + 2);
                        symbolURL = symbolURL.replace(pxSize, size);
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = symbolURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "symbolURL");
                    }
                }

                function symbol_none_turkey(){
                    masterList[i].symbol = {};
                    masterList[i].symbol.url = "//upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Emblem_of_Turkey.svg/500px-Emblem_of_Turkey.svg.png";
                }
            }

            function getMapImgURL(){
                switch(i){
                    default:
                        map_ai2_c0_svg();
                        break;
                    case 1:     // Albania
                        map_ai2_c0_png();
                        break;
                    case 3:     // Andorra
                        map_ai2_c0_png();
                        break;
                    case 5:     // Antigua
                        map_ai3_c0_svg();
                        break;
                    case 10:    // Azerbaijan
                        map_ai3_c0_svg();
                        break;
                    case 13:    // Bangladesh
                        map_ai3_c0_svg();
                        break;
                    case 20:    // Bolivia
                        map_ai3_c0_svg();
                        break;
                    case 24:    // Brunei
                        map_ai3_c0_svg();
                        break;
                    case 41:    // Croatia
                        map_ai2_c0_png();
                        break;
                    case 85:    // Japan
                        map_ai3_c0_svg();
                        break;
                    case 112:   // Moldova
                        map_ai2_c0_png();
                        break;
                    case 113:   // Monaco
                        map_ai2_c0_png();
                        break;
                    case 149:   // San Marino
                        map_ai2_c0_png();
                        break;
                    case 157:   // Slovakia
                        map_ai3_c0_svg();
                        break;
                    case 162:   // South Korea
                        map_ai3_c0_svg();
                        break;
                    case 178:   // Turkey
                        map_ai1_c0_svg();
                        break;
                    case 184:   // UK
                        map_ai3_c0_svg();
                        break;
                    case 186:   // Uruguay
                        map_ai3_c0_svg();
                        break;
                    case 187:   // Uzbekistan
                        map_ai3_c0_svg();
                        break;
                }

                function map_ai1_c0_svg(){
                    try{
                        mapURL = data(`a.mw-file-description`)[1].children[0].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(".svg/") + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "mapURL");
                    }
                }

                function map_ai2_c0_png(){
                    try{
                        mapURL = data(`a.mw-file-description`)[2].children[0].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(".png/") + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "mapURL");
                    }
                }

                function map_ai2_c0_svg(){
                    try{
                        mapURL = data(`a.mw-file-description`)[2].children[0].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(".svg/") + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;
                    } catch(error) {
                        console.log(masterList[i].country.name, "mapURL");
                    }
                }

                function map_ai3_c0_svg(){
                    try{
                        mapURL = data(`a.mw-file-description`)[3].children[0].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(".svg/") + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;
                    } catch( error ) {
                        console.log(masterList[i].country.name, "mapURL");
                    }
                }
            }

            function getTextInfo(){
                for(let j=0; j < data(`th.infobox-label`).length; j++){
                    try{    // gets capital
                        switch(i){
                            default:
                                capital_1_nc00();
                                break;
                            case 20:    // Bolivia
                                capital_2_nc00();
                                break;
                            case 56:    // Eswatini
                                capital_2_nc11000();
                                break;
                            case 113:   // Monaco
                                capital_1_cs();
                                break;
                            case 133:   // Palestine
                                capital_2_c10000();
                                break;
                            case 156:   // Singapore
                                capital_1_cs();
                                break;
                            case 161:   // South Africa
                                capital_3_nc10000();
                                break;
                            case 165:   // Sri Lanka
                                capital_2_nc1000();
                                break;
                            case 169:   // Switzerland
                                capital_2_nc1100ss02();
                                break;
                            case 189:   // Vatican
                                capital_1_cs();
                                break;
                        }

                        function capital_1_nc00(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                                masterList[i].capital = [];
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].children[0].data.toLowerCase(),
                                });
                            }
                        }

                        function capital_1_cs(){
                            // People actual fight about whether city-states have capitals or not on wikipedia
                            // so the capitals are manually added because they may or may not be there
                            masterList[i].capital = [];
                            masterList[i].capital.push({
                                name: masterList[i].country.name,
                                type: "capital",
                            });
                        }

                        function capital_2_c10000(){
                            if(data(`th.infobox-label`)[j].children[1].children[0].children[0].children[0].data == "Proclaimed capital"){
                                masterList[i].capital = [];
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].children[1].children[0].children[0].children[0].data.split(" ")[0].toLowerCase(),
                                });
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].children[1].children[0].children[1].children[0].data.toLowerCase(),
                                });
                            }
                        }

                        function capital_2_nc00(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                                masterList[i].capital = [];
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[2].children[0].data
                                        .substring(1, data(`th.infobox-label`)[j].next.children[2].children[0].data.length-1).toLowerCase(),
                                });
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[4].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[6].children[0].data
                                        .substring(1, data(`th.infobox-label`)[j].next.children[6].children[0].data.length-1).toLowerCase(),
                                });
                            }
                        }

                        function capital_2_nc1000(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                                masterList[i].capital = []
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[1].data.length-1),
                                });
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[1].data.length-1),
                                });
                            }
                        }

                        function capital_2_nc11000(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                                masterList[i].capital = [];
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[2].children[0].data
                                        .substring(1, data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[2].children[0].data.length-1).toLowerCase(),
                                });
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[2].children[0].data
                                    .substring(1, data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[2].children[0].data.length-1).toLowerCase(),
                                });
                            }
                        }

                        function capital_2_nc1100ss02(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                                masterList[i].capital = [];
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[2].children[0].children[0].data,
                                });
                            }
                        }

                        function capital_3_nc10000(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Capital"){
                                masterList[i].capital = [];
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[1].data.length-1).toLowerCase(),
                                });
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[1].data.length-1).toLowerCase(),
                                });
                                masterList[i].capital.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[0].children[2].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[0].children[2].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[0].children[2].children[1].data.length-1).toLowerCase(),
                                });
                            }
                        }

                    } catch(error){
                    }

                    try{    // gets largest city, if different from capital
                        switch(i){
                            default:
                                largestCity_1_nc00();
                                break;
                            case 20:    // Bolivia
                                largestCity_1_nc000();
                                break;
                            case 76:    // India
                                largestCity_2_nc11000();
                                break;
                            case 106:   // Malta
                                largestCity_1_nc00_lau();
                                break;
                            case 120:   // Nauru
                                largestCity_1_nc00();
                                break;
                            case 161:   // South Africa
                                largestCity_1_nc000();
                                break;
                        }

                        function largestCity_1_nc00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Largest city" 
                                ||  data(`th.infobox-label`)[j].children[0].data == "Largest metropolitan area" 
                                ||  data(`th.infobox-label`)[j].children[0].data == "Largest municipality" 
                                ||  data(`th.infobox-label`)[j].children[0].data == "Largest town"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Largest settlement"
                            ){
                                masterList[i].largestCity = [];
                                masterList[i].largestCity.push({
                                    name: data(`th.infobox-label`)[j].next.children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].children[0].data.toLowerCase(),
                                });
                            } 
                        }

                        function largestCity_1_nc00_lau(){
                            if(
                                data(`th.infobox-label`)[j].children[0].data + data(`th.infobox-label`)[j].children[1].children[0].data == "Largest administrative unit"){
                                masterList[i].largestCity = [];
                                masterList[i].largestCity.push({
                                    name: data(`th.infobox-label`)[j].next.children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].children[0].data.toLowerCase() + data(`th.infobox-label`)[j].children[1].children[0].data.toLowerCase(),
                                });
                            }
                        }

                        function largestCity_1_nc000(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Largest city"){
                                masterList[i].largestCity = [];
                                masterList[i].largestCity.push({
                                    name: data(`th.infobox-label`)[j].next.children[0].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].children[0].data.toLowerCase(),
                                });
                            } 
                        }

                        function largestCity_2_nc11000(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Largest city"){
                                masterList[i].largestCity = [];
                                masterList[i].largestCity.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[1].data.length-1).toLowerCase(),
                                });
                                masterList[i].largestCity.push({
                                    name: data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[0].children[0].data,
                                    type: data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[1].data
                                        .substring(2, data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[1].data.length-1).toLowerCase(),
                                });
                            } 
                        }

                    } catch(error){
                    }

                    try{    // gets languages
                        switch(i){
                            default:
                                language_nc00();
                                break;
                            case 0:     // Afghanistan
                                language_nc10k00();
                                break;
                            case 2:     // Algeria
                                language_nc11k00();
                                break;
                            case 8:     // Australia
                                language_c00_1();
                                break;
                            case 13:    // Bangladesh
                                language_nc00();
                                break;
                            case 15:    // Belarus
                                language_nc10k00();
                                break;
                            case 16:    // Belgium
                                language_nc10k00();
                                break;
                            case 20:    // Bolivia
                                language_nc11k00m1();
                                break;
                            case 21:    // Bosnia
                                language_nc10k00();
                                break;
                            case 27:    // Burundi
                                language_nc10k00();
                                break;
                            case 29:    // Cameroon
                                language_nck0_k2();
                                break;
                            case 30:    // Canada
                                language_nc10k00();
                                break;
                            case 32:    // CAR
                                language_nc10k00();
                                break;
                            case 33:    // Chad
                                language_nc10k00();
                                break;
                            case 34:    // Chile
                                language_c00_1();
                                break;
                            case 37:    // Comoros
                                language_nc10k00();
                                break;
                            case 43:    // Cyprus
                                language_nc10k00();
                                break;
                            case 46:    // Djibouti
                                language_nc10k00();
                                break;
                            case 49:    // East Timor
                                language_nc11k00();
                                break;
                            case 53:    // Equatorial Guinea
                                language_nc11k00();
                                break;
                            case 54:    // Eritrea
                                language_c00_2();
                                break;
                            case 56:    // Eswatini
                                language_nc10k00();
                                break;
                            case 57:    // Ethiopia
                                language_nck0_k4();
                                break;
                            case 58:    // Fiji
                                language_nc11k00();
                                break;
                            case 59:    // Finland
                                language_nc10k00();
                                break;
                            case 67:    // Grenada
                                language_nc10000();
                                break;
                            case 72:    // Haiti
                                language_nc10k00();
                                break;
                            case 76:    // India
                                language_nc10k00();
                                break;
                            case 79:    // Iraq
                                language_nc10k00();
                                break;
                            case 80:    // Ireland
                                language_nc10k00();
                                break;
                            case 87:    // Kazakhstan
                                language_nc10k00();
                                break;
                            case 88:    // Kenya
                                language_nc10k00();
                                break;
                            case 89:    // Kiribati
                                language_nc10k00();
                                break;
                            case 91:    // Kyrgyzstan
                                language_nc10k00();
                                break;
                            case 95:    // Lesotho
                                language_nc10k00();
                                break;
                            case 100:   // Luxembourg
                                language_nc20_nc80_nc100();
                                break;
                            case 101:   // Madagascar
                                language_nck0_k2();
                                break;
                            case 102:   // Malawi
                                language_nc100();
                                break;
                            case 106:   // Malta
                                language_nc10k00();
                                break;
                            case 107:   // Marshall Islands
                                language_nc10k00();
                                break;
                            case 108:   // Mauritania
                                language_nc11000();
                                break;
                            case 109:   // Mauritius
                                language_nc310000();
                                break;
                            case 110:   // Mexico
                                language_nc00();
                                break;
                            case 116:   // Morocco
                                language_nc10k00();
                                break;
                            case 120:   // Nauru
                                language_nc11k00();
                                break;
                            case 123:   // New Zealand
                                language_nc10k00();
                                break;
                            case 128:   // North Macedonia
                                language_nc11k000();
                                break;
                            case 129:   // Norway
                                language_nc10k00();
                                break;
                            case 131:   // Pakistan
                                language_nc10k00();
                                break;
                            case 132:   // Palau
                                language_nck0000_k2();
                                break;
                            case 135:   // PNG
                                language_nc10k00();
                                break;
                            case 136:   // Paraguay
                                language_c00_2();
                                break;
                            case 137:   // Peru
                                language_nc00_pnc111k00();
                                break;
                            case 138:   // Philippines
                                language_nc10k00();
                                break;
                            case 139:   // Poland
                                language_c00_1();
                                break;
                            case 144:   // Rwanda
                                language_nc10k00();
                                break;
                            case 148:   // Samoa
                                language_nck0_k2();
                                break;
                            case 154:   // Seychelles
                                language_nc10k00();
                                break;
                            case 156:   // Singapore
                                language_nc10k00();
                                break;
                            case 160:   // Somalia
                                language_nck0_k2();
                                break;
                            case 161:   // South Africa
                                language_nc41k00_k2();
                                break;
                            case 164:   // Spain
                                language_c00_1();
                                break;
                            case 165:   // Sri Lanka
                                language_nc10k00();
                                break;
                            case 166:   // Sudan
                                language_nc10k00();
                                break;
                            case 169:   // Switzerland
                                language_nc11k00();
                                break;
                            case 171:   // Tajikistan
                                language_nc100k0_k3();
                                break;
                            case 172:   // Tanzania
                                language_nc10k00();
                                break;
                            case 174:   // Togo
                                language_nc10000();
                                break;
                            case 175:   // Tonga
                                language_nc10k00();
                                break;
                            case 180:   // Tuvalu
                                language_nc10k00();
                                break;
                            case 181:   // Uganda
                                language_nc100k0_k2();
                                break;
                            case 182:   // Ukraine
                                language_c1000();
                                break;
                            case 184:   // UK
                                language_nc11000();
                                break;
                            case 185:   // USA
                                language_c00_1();
                                break;
                            case 186:   // Uruguay
                                language_c00_2();
                                break;
                            case 188:   // Vanuatu
                                language_nc10k00();
                                break;
                            case 189:   // Vatican
                                language_nc10k00();
                                break;
                            case 193:   // Zambia
                                language_nc0();
                                break;
                            case 194:   // Zimbabwe
                                language_nc50k00();
                                break;
                        }

                        function language_c00_1(){
                            try {
                                if( 
                                        data(`th.infobox-label`)[j].children[0].children[0].data == "National language"
                                    ||  data(`th.infobox-label`)[j].children[0].children[0].data == "Official language"
                                ){
                                    masterList[i].language = {};
                                    masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[0].children[0].data];
                                }
                            } catch(error){
                            }
                        }

                        function language_c00_2(){
                            try{
                                if(
                                        data(`th.infobox-label`)[j].children[0].children[0].data == "Working languages"
                                    ||  data(`th.infobox-label`)[j].children[0].children[0].data == "Official languages"
                                    ||  data(`th.infobox-label`)[j].children[0].children[0].data == "Official language"

                                ){
                                    masterList[i].language = {};
                                    masterList[i].language.list = [];

                                    for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children.length; k++){
                                        masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[0].children[k].children[0].children[0].data);
                                    }
                                }
                            } catch(err){
                            }
                        }

                        function language_c1000(){
                            try{
                                if(
                                    data(`th.infobox-label`)[j].children[1].children[0].children[0].children[0].data == "Official language"
                                ){
                                    masterList[i].language = {};
                                    masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[0].children[0].data];
                                }
                            } catch(error){
                            }
                        }

                        function language_nc0(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[0].data];
                            }
                        }

                        function language_nc00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official and national language"

                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[0].children[0].data];
                            }
                        }

                        function language_nc00_pnc100(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [
                                    data(`th.infobox-label`)[j].next.children[0].children[0].data,
                                    data(`th.infobox-label`)[j].parent.next.children[1].children[0].children[0].data
                                ]
                            }
                        }

                        function language_nc00_pnc111k00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                                masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[0].children[0].data);
                
                                for(let k=0; k < 3; k+=2){
                                    masterList[i].language.list.push(
                                        data(`th.infobox-label`)[j].parent.next.children[1].children[1].children[1].children[k].children[0].children[0].data
                                    )
                                }
                            }
                        }

                        function language_nc100(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[1].children[0].children[0].data];
                            }
                        }

                        function language_nc10000(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data];
                            }
                        }

                        function language_nc100k0_k2(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[k].children[0].data);
                                }
                            }
                        }

                        function language_nc100k0_k3(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children.length; k+=3){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[k].children[0].data);
                                }
                            }
                        }

                        function language_nc10k00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];

                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children.length; k++){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[0].children[k].children[0].children[0].data);
                                }
                            }
                        }

                        function language_nc100_nc140(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [
                                    data(`th.infobox-label`)[j].next.children[1].children[0].children[0].data,
                                    data(`th.infobox-label`)[j].next.children[1].children[4].children[0].data
                                ]
                            }
                        }

                        function language_nc11k00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];

                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[1].children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[1].children[k].children[0].children[0].data);
                                }
                
                            }
                        }

                        function language_nc11k000(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];

                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[1].children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[1].children[k].children[0].children[0].children[0].data);
                                }
                            }
                        }

                        function language_nc11k00m1(){
                            if(data(`th.infobox-label`)[j].children[0].data == "Official languages"){
                                masterList[i].language = {};
                                masterList[i].language.list = []
                
                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[1].children.length-1; k++){
                                    try {
                                        masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[1].children[k].children[0].children[0].data)
                                    } catch (error) {
                                    }
                                }
                            }
                        }

                        function language_nc20_nc80_nc100(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[2].children[0].data);
                                masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[8].children[0].data);
                                masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[10].children[0].data);
                
                            }
                        }

                        function language_nck0_k2(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];

                                for(let k=0; k < data(`th.infobox-label`)[j].next.children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[k].children[0].data);
                                }
                            }
                        }

                        function language_nck0_k4(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                for(let k=0; k< data(`th.infobox-label`)[j].next.children.length; k+=4){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[k].children[0].data)
                                }
                            }
                        }

                        function language_nck0000_k2(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                for(let k=1; k < data(`th.infobox-label`)[j].next.children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[k].children[0].children[0].children[0].children[0].data);
                                }
                
                            }
                        }

                        function language_nc11000(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].children[0].data];
                            }
                        }

                        function language_nc310000(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [
                                    data(`th.infobox-label`)[j].next.children[3].children[1].children[0].children[0].children[0].children[0].data,
                                    data(`th.infobox-label`)[j].next.children[3].children[1].children[0].children[1].children[0].children[0].data,
                                    data(`th.infobox-label`)[j].parent.next.children[1].children[0].children[0].data
                                ]
                            }
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
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[4].children[1].children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[4].children[1].children[k].children[0].children[0].data);
                                }
                            }
                        }

                        function language_nc50k00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];
                
                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[5].children[0].children.length; k++){
                                    if (k==5){
                                        masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[3].children[0].data);
                                    } else if (k==9){
                                        masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[1].attribs.title);
                                    } else {
                                        masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[0].children[0].data);
                                    }
                                }
                            }
                        }

                    } catch(error){
                    }

                    try{    // gets demonym
                        switch(i){
                            default:
                                demonym_nc00();
                                break;
                            case 4:     //  Angola
                                demonym_nc10000();
                                break;
                            case 5:     //  Antigua and Barbuda
                                demonym_nc0();
                                break;
                            case 6:     //  Argentina
                                demonym_nc10000();
                                break;
                            case 8:     //  Australia
                                demonym_nc10000();
                                break;
                            case 10:    //  Azerbaijan
                                demonym_nc10000_c0();
                                break;
                            case 14:    //  Barbados
                                demonym_nc10000();
                                break;
                            case 16:    //  Belgium
                                demonym_nc10000();
                                break;
                            case 18:    //  Benin
                                demonym_nc1000();
                                break;
                            case 21:    //  Bosnia
                                demonym_nc10000();
                                break;
                            case 22:    //  Botswana
                                demonym_nc10000_s0();
                                break;
                            case 25:    //  Bulgaria
                                demonym_nc10000();
                                break;
                            case 26:    //  Burkina Faso
                                demonym_nc1000();
                                break;
                            case 27:    //  Burundi
                                demonym_nc10000();
                                break;
                            case 28:    //  Cambodia
                                demonym_nc10000();
                                break;
                            case 34:    //  Chile
                                demonym_nc10000();
                                break;
                            case 40:    //  Costa Rica
                                demonym_nc10000();
                                break;
                            case 41:    //  Croatia
                                demonym_nc10000();
                                break;
                            case 45:    //  Denmark
                                demonym_nc10000();
                                break;
                            case 49:    //  East Timor
                                demonym_nc1100();
                                break;
                            case 53:    //  Eq. Guinea
                                demonym_nc10000();
                                break;
                            case 54:    //  Eritrea
                                demonym_nc11000();
                                break;
                            case 56:    //  Eswatini
                                demonym_nc10000();
                                break;
                            case 59:    //  Finland
                                demonym_nc10000();
                                break;
                            case 61:    //  Gabon
                                demonym_nc1000();
                                break;
                            case 66:    //  Greek
                                demonym_nc10000();
                                break;
                            case 70:    //  Guinea-Bissau
                                demonym_nc0();
                                break;
                            case 73:    //  Honduras
                                demonym_nc10000();
                                break;
                            case 75:    //  Iceland
                                demonym_nc1010();
                                break;
                            case 76:    //  India
                                demonym_nc10000();
                                break;
                            case 78:    //  Iran
                                demonym_nc0_c0();
                                break;
                            case 83:    //  Ivory Coast
                                demonym_nc1000();
                                break;
                            case 87:    //  Kazakhstan
                                demonym_nc0();
                                break;
                            case 92:    //  Laos
                                demonym_nc20();
                                break;
                            case 95:    //  Lesotho
                                demonym_nc10000();
                                break;
                            case 100:   //  Luxembourg
                                demonym_nc10100();
                                break;
                            case 113:   //  Monaco
                                demonym_nc1000();
                                break;
                            case 114:   //  Mongolia
                                demonym_nc0();
                                break;
                            case 121:   //  Nepal
                                demonym_nc10100();
                                break;
                            case 123:   //  NZ
                                demonym_nc10000();
                                break;
                            case 124:   //  Nicaragua
                                demonym_nc10000();
                                break;
                            case 125:   //  Niger
                                demonym_nc0();
                                break;
                            case 127:   //  North Korea
                                demonym_nc10000();
                                break;
                            case 128:   //  North Macedonia
                                demonym_nc1000();
                                break;  
                            case 139:   //  Poland
                                demonym_nc10000();
                                break;
                            case 144:   //  Rwanda
                                demonym_nc1000();
                                break;
                            case 145:   //  St. Kitts
                                demonym_nc1000();
                                break;
                            case 150:   //  Sao Tome
                                demonym_nc10000_cc01();
                                break;
                            case 151:   //  Saudi Arabia
                                demonym_nc10000();
                                break;
                            case 154:   //  Seychelles
                                demonym_nc1000();
                                break;
                            case 158:   //  Slovenia
                                demonym_nc10000();
                                break;
                            case 159:   //  Solomon Islands
                                demonym_nc0();
                                break;
                            case 162:   //  South Korea
                                demonym_nc10000();
                                break;
                            case 164:   //  Spain
                                demonym_nc1010();
                                break;
                            case 168:   //  Swedish
                                demonym_nc10000();
                                break;
                            case 169:   //  Switzerland
                                demonym_nc100100();
                                break;
                            case 171:   //  Tajikistan
                                demonym_nc1000();
                                break;
                            case 176:   //  Trinidad
                                demonym_nc10000();
                                break;
                            case 178:   //  Turkey
                                demonym_nc1000();
                                break;
                            case 179:   //  Turkmenistan
                                demonym_nc0();
                                break;
                            case 181:   //  Uganda
                                demonym_nc0();
                                break;
                            case 184:   //  UK
                                demonym_nc10000();
                                break;
                            case 188:   //  Vanuatu
                                demonym_nc0_s1();
                                break;
                            case 189:   //  Vatican
                                demonym_nc2_s2();
                                break;
                            case 194:   //  Zimbabwe
                                demonym_nc0();
                                break;
                        }

                        function demonym_nc0(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc0_c0(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[0].data.split(",")[0];
                                }
                            } catch(error){
                            }
                        }
                        
                        function demonym_nc0_s1(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[0].data.split(" and ")[1];
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc00(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc1000(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc10000(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc10000_c0(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].data.split(",")[0];
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc10000_s0(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].data.split(" ")[0];;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc10000_cc01(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    let arr = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data.split(" ");

                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = arr[0].concat(" ").concat(arr[1]);
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc100100(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[1].children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc1010(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc10100(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc1100(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc11000(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc2_s2(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[2].data.split(" ")[2];
                                }
                            } catch(error){
                            }
                        }

                        function demonym_nc20(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[2].children[0].data;
                                }
                            } catch(error){
                            }
                        }

                    } catch(error){
                    }

                    try{    // gets currency
                        switch(i){
                            default:
                                currency_0_1();
                                break;
                            case 3:     // Andorra
                                currency_full();
                                break;
                            case 5:     // Antigua
                                currency_full();
                                break;
                            case 9:     // Austria
                                currency_full();
                                break;
                            case 16:    // Belgium
                                currency_full();
                                break;
                            case 18:    // Benin
                                currency_full();
                                break; 
                            case 19:    // Bhutan
                                currency_0_1_4();
                                break;
                            case 21:    // Bosnia
                                currency_012_34();
                                break;
                            case 26:    // Burkina Faso
                                currency_full();
                                break;
                            case 28:    // Cambodia
                                currency_nc1000_0_1_full_nc1010();
                                break;
                            case 29:    // Cameroon
                                currency_full();
                                break;
                            case 31:    // Cape Verde
                                currency_01_2();
                                break;
                            case 32:    // CAR
                                currency_nc1100_full_full();
                                break;
                            case 33:    // Chad
                                currency_full();
                                break;
                            case 35:    // China
                                currency_full();
                                break;
                            case 39:    // Congo-Brazzaville
                                currency_full();
                                break;
                            case 40:    // Costa Rica
                                currency_01_2();
                                break;
                            case 41:    // Croatia
                                currency_full();
                                break;
                            case 43:    // Cyprus
                                currency_full();
                                break;
                            case 47:    // Dominica
                                currency_full();
                                break;
                            case 49:    // East Timor
                                currency_full();
                                break;
                            case 50:    // Ecuador
                                currency_full();
                                break;
                            case 52:    // El Salvador
                                currency_nc1000_full_full();
                                break;
                            case 53:    // Eq Guinea
                                currency_full();
                                break;
                            case 55:    // Estonia
                                currency_full();
                                break;
                            case 56:    // Eswatini
                                currency_nc1100_0_1_full();
                                break;
                            case 59:    // Finland
                                currency_full();
                                break;
                            case 60:    // France
                                currency_nc1000_full_lc();
                                break;
                            case 61:    // Gabon
                                currency_full();
                                break;
                            case 64:    // Germany
                                currency_full();
                                break;
                            case 66:    // Greece
                                currency_full();
                                break;
                            case 67:    // Grenada
                                currency_full();
                                break;
                            case 70:    // Guinea-Bissau
                                currency_full();
                                break;
                            case 80:    // Ireland
                                currency_full();
                                break;
                            case 81:    // Israel
                                currency_0_12();
                                break;
                            case 82:    // Italy
                                currency_full();
                                break;
                            case 83:    // Ivory Coast
                                currency_full();
                                break;
                            case 89:    // Kiribati
                                currency_full();
                                break;
                            case 93:    // Latvia
                                currency_full();
                                break;
                            case 95:    // Lesotho
                                currency_0_1_3();
                                break;
                            case 98:    // Liechtenstein
                                currency_full();
                                break;
                            case 99:    // Lithuania
                                currency_full();
                                break;
                            case 100:   // Luxembourg
                                currency_full();
                                break;
                            case 104:   // Maldives
                                currency_nc1000_0_1_full_nc1010();
                                break;
                            case 105:   // Mali
                                currency_full();
                                break;
                            case 106:   // Malta
                                currency_full();
                                break;
                            case 107:   // Marshall Islands
                                currency_full();
                                break;
                            case 111:   // Micronesia
                                currency_full();
                                break;
                            case 113:   // Monaco
                                currency_full();
                                break;
                            case 115:   // Montenegro
                                currency_full();
                                break;
                            case 119:   // Namibia
                                currency_0_1_6();
                                break;
                            case 120:   // Nauru
                                currency_full();
                                break;
                            case 122:   // Netherlands
                                currency_nc0301();
                                break;
                            case 123:   // New Zealand
                                currency_01_2();
                                break;
                            case 125:   // Niger
                                currency_full();
                                break;
                            case 127:   // North Korea
                                currency_01_2();
                                break;
                            case 132:   // Palau
                                currency_full();
                                break;
                            case 133:   // Palestine
                                currency_full_fullFull();
                                break;
                            case 134:   // Panama
                                currency_nc1000_0_1_full_nc10100();
                                break;
                            case 135:   // PNG
                                currency_012_3();
                                break;
                            case 140:   // Poland
                                currency_full();
                                break;
                            case 145:   // St Kitts
                                currency_full();
                                break;
                            case 146:   // St Lucia
                                currency_full();
                                break;
                            case 147:   // St Vincent
                                currency_full();
                                break;
                            case 149:   // San Marino
                                currency_full();
                                break;
                            case 150:   // Sao Tome
                                currency_0123_4();
                                break;
                            case 152:   // Senegal
                                currency_full();
                                break;
                            case 155:   // Sierra Leone
                                currency_01_2();
                                break;
                            case 157:   // Slovakia
                                currency_full();
                                break;
                            case 158:   // Slovenia
                                currency_full();
                                break;
                            case 159:   // Solomon Islands
                                currency_01_2();
                                break;
                            case 161:   // South Africa
                                currency_01_2();
                                break;
                            case 162:   // South Korea
                                currency_01_2();
                                break;
                            case 163:   // South Sudan
                                currency_01_2();
                                break;
                            case 164:   // Spain
                                currency_full();
                                break;
                            case 165:   // Sri Lanka
                                currency_01_2();
                                break;
                            case 174:   // Togo
                                currency_full();
                                break;
                            case 176:   // Trinidad
                                currency_012_3();
                                break;
                            case 180:   // Tuvalu
                                currency_nc1100_0_1_full();
                                break;
                            case 183:   // UAE
                                currency_012_3();
                                break;
                            case 184:   // UK
                                currency_full();
                                break;
                            case 185:   // USA
                                currency_01_2();      
                                break;
                            case 189:   // Vatican
                                currency_full();
                                break;
                            case 190:   // Venezuela
                                currency_0_1_2();
                                break;
                            case 194:   // Zimbabwe
                                currency_0_1_28();
                                break; 
                        }

                        function currency_0_1(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                            }
                        }

                        function currency_0_1_2(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[2].attribs.title;
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });

                            }
                        }

                        function currency_0_1_28(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                                let otherCurrency1 = data(`th.infobox-label`)[j].next.children[2].attribs.title;
                                let otherCurrency2 = data(`th.infobox-label`)[j].next.children[8].attribs.title;

                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency1,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency2,
                                });
                
                            }
                        }

                        function currency_0_1_3(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[3].attribs.title;
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });
                            }
                        }

                        function currency_0_1_4(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[4].attribs.title;

                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });
                            }
                        }

                        function currency_0_1_6(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[6].attribs.title;
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });

                            }
                        }

                        function currency_0_12(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency.split(" ");
                                let demonym = words[0];
                                let unit = [words[1].toLowerCase(), words[2].toLowerCase()].join(" ");
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                            }
                        }

                        function currency_01_2(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency.split(" ");
                                let demonym = [words[0], words[1]].join(" ");
                                let unit = words[2].toLowerCase();
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                            }
                        }

                        function currency_012_3(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency.split(" ");
                                let demonym = [words[0], words[1], words[2]].join(" ");
                                let unit = words[3].toLowerCase();
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                            }
                        }

                        function currency_012_34(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency.split(" ");
                                let demonym = [words[0], words[1], words[2]].join(" ");
                                let unit = [words[3].toLowerCase(), words[4].toLowerCase()].join(" ");
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                            }
                        }

                        function currency_0123_4(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;
                                let words = fullCurrency.split(" ");
                                let demonym = [words[0], words[1], words[2], words[3]].join(" ");
                                let unit = words[4].toLowerCase();
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                            }
                        }

                        function currency_full_fullFull(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].attribs.title;
                                let otherCurrency1 = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].attribs.title;
                                let otherCurrency2 = data(`th.infobox-label`)[j].next.children[1].children[0].children[2].children[0].attribs.title;
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    full: fullCurrency,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency1,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency2,
                                });
                            }
                        }

                        function currency_nc0301(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].children[3].children[0].children[1].attribs.title.toLowerCase();
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    full: fullCurrency,
                                });
                            }
                        }

                        function currency_nc1000_0_1_full_nc1010(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1];
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].attribs.title;
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency
                                });
                            }
                        }

                        function currency_nc1000_0_1_full_nc10100(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1].toLowerCase();
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].children[0].attribs.title;
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });
                            }
                        }

                        function currency_nc1000_full_full(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].attribs.title;
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].attribs.title;

                                if(otherCurrency == "Bitcoin"){
                                    otherCurrency = otherCurrency.toLowerCase();
                                }

                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    full: fullCurrency,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });
                            }
                        }

                        function currency_nc1000_full_lc(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].attribs.title.toLowerCase();
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    full: fullCurrency,
                                });
                            }
                        }

                        function currency_nc1100_0_1_full(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency1 = data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].attribs.title;
                                let words = fullCurrency1.split(" ");
                                let demonym = words[0];
                                let unit = words[1];
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[0].attribs.title;

                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    demonym: demonym,
                                    unit: unit,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });
                            }
                
                        }

                        function currency_nc1100_full_full(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[1].children[1].children[0].children[0].attribs.title;
                                let otherCurrency = data(`th.infobox-label`)[j].next.children[1].children[1].children[2].children[0].attribs.title.toLowerCase();
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    full: fullCurrency,
                                });
                                masterList[i].currency.push({
                                    other: otherCurrency,
                                });
                            }
                        }

                        function currency_full(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].data == "Currency"
                            ){
                                let fullCurrency = data(`th.infobox-label`)[j].next.children[0].attribs.title;

                                if(
                                        fullCurrency == "Euro"
                                    ||  fullCurrency == "Renminbi"
                                ){
                                    fullCurrency = fullCurrency.toLowerCase();
                                }
                
                                masterList[i].currency = [];
                                masterList[i].currency.push({
                                    full: fullCurrency,
                                });
                            }
                        }

                    } catch(error){
                    }

                    try{    // gets tld code
                        switch(i){
                            default:
                                tld_nc00();
                                break;
                            case 7:     // Armenia
                                tld_nc10000();
                                break;
                            case 15:    // Belarus
                                tld_nc10000();
                                break;
                            case 25:    // Bulgaria
                                tld_nc10000();
                                break;
                            case 35:    // China
                                tld_nc10000();
                                break;
                            case 41:    // Croatia
                                tld_nc10000();
                                break;
                            case 51:    // Egypt
                                tld_nc10000();
                                break;
                            case 66:    // Greece
                                tld_nc10000();
                                break;
                            case 78:    // Iran
                                tld_nc10000();
                                break;
                            case 87:    // Kazakhstan
                                tld_nc10000();
                                break;
                            case 122:   // Netherlands
                                tld_nc03010();
                                break;
                            case 128:   // North Macedonia
                                tld_nc10000();
                                break;
                            case 131:   // Pakistan
                                tld_nc10000();
                                break;
                            case 141:   // Qatar
                                tld_nc10000();
                                break;
                            case 143:   // Russia
                                tld_nc10000();
                                break;
                            case 151:   // Saudi Arabia
                                tld_nc10000();
                                break;
                            case 153:   // Serbia
                                tld_nc10000();
                                break;
                            case 162:   // South Korea
                                tld_nc10000();
                                break;
                            case 165:   // Sri Lanka
                                tld_nc10000();
                                break;
                            case 173:   // Thailand
                                tld_nc10000();
                                break;
                            case 177:   // Tunisia
                                tld_nc10000();
                                break;
                            case 182:   // Ukraine
                                tld_nc10000();
                                break;
                            case 183:   // UAE
                                tld_nc10000();
                                break;
                        }

                        function tld_nc00(){
                            try{
                                if(
                                    data(`th.infobox-label`)[j].children[0].children[0].data == "Internet TLD"
                                ){
                                    masterList[i].tld = {};
                                    masterList[i].tld.name = data(`th.infobox-label`)[j].next.children[0].children[0].data;
                                }       
                            } catch(err){
                            }
                        }

                        function tld_nc03010(){
                            try{
                                if(
                                    data(`th.infobox-label`)[j].children[0].children[0].data == "Internet TLD"
                                ){
                                    masterList[i].tld = {};
                                    masterList[i].tld.name = data(`th.infobox-label`)[j].next.children[0].children[3].children[0].children[1].children[0].data;
                                }    
                            } catch(error){
                            }
                        }

                        function tld_nc10000(){
                            try{
                                if(
                                    data(`th.infobox-label`)[j].children[0].children[0].data == "Internet TLD"
                                ){
                                    masterList[i].tld = {};
                                    masterList[i].tld.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data;
                                }    
                            } catch(error){
                            }
                        }

                        function tld_nc20(){
                            if(
                                data(`th.infobox-label`)[j].children[0].children[0].data == "Internet TLD"
                            ){
                                masterList[i].tld = {};
                                masterList[i].tld.name = data(`th.infobox-label`)[j].next.children[2].children[0].data;
                            }       
                        }

                    } catch(error){
                    }
                }

                try {    // gets largest city, if same as capital
                    switch(i){
                        default:
                            largestCityIsCapital_dicl0();
                            break;
                        case 45:    // Denmark
                            largestCityIsCapital_dipdl0();
                            break;
                        case 113:   // Monaco
                            largestCityIsCapital_cs();
                            break
                        case 156:   // Singapore
                            largestCityIsCapital_cs();
                            break;
                        case 189:   // Vatican
                            largestCityIsCapital_cs();
                            break;
                    }

                    function largestCityIsCapital_dicl0(){
                        try{    // gets largest city, if same as capital
                            if(data(`div.ib-country-largest`)[0].children[0].data == "and largest city"){
                                masterList[i].largestCity = [];
                                masterList[i].largestCity.push({
                                    name: masterList[i].capital[0].name,
                                    type: data(`div.ib-country-largest`)[0].children[0].data
                                        .substring(4, data(`div.ib-country-largest`)[0].children[0].data.length),
                                });
                            }
                        } catch(error){
                        }
                    }

                    function largestCityIsCapital_dipdl0(){
                        try{    // Denmark, gets largest city, same as capital
                            if(data(`div.ib-pol-div-largest`)[0].children[0].data == "and largest city"){
                                masterList[i].largestCity = [];
                                masterList[i].largestCity.push({
                                    name: masterList[i].capital[0].name,
                                    type: data(`div.ib-pol-div-largest`)[0].children[0].data
                                        .substring(4, data(`div.ib-pol-div-largest`)[0].children[0].data.length),
                                });
                            }
                        } catch(error){
                        }
                    }

                    function largestCityIsCapital_cs(){
                        masterList[i].largestCity = [];
                        masterList[i].largestCity.push({
                            name: masterList[i].country.name,
                            type: "largest city",
                        });
                    }

                } catch(error){
                }
            }
        }
    } catch (error) {
        console.log(error)
    }

    // leaderImgURL
    try {
        for (let i = 0; i < countryTotal; i++){
            const response = await require('axios').get(masterList[i].leader.url);
            const data = require('cheerio').load(response.data);

            getLeaderImgURL();
            console.log(i, masterList[i])
            await timer(waitTime);

            function getLeaderImgURL(){
                switch(i){
                    default:
                        img_tii0_c000_jpg();
                        break;
                    case 20:    // Bolivia
                        img_tii0_c00_png();
                        break;
                    case 24:    // Brunei
                        img_tii0_c000_jpg();
                        break;
                    case 26:    // Burkina Faso
                        img_tii0_c000_jpg_aa1thumb();
                        break;
                    case 29:    // Cameroon
                        img_tii0_c000_png();
                        break;
                    case 57:    // Ethiopia
                        img_tii0_c000_jpeg();
                        break;
                    case 68:    // Guatemala
                        img_tii0_c000_png();
                        break;
                    case 76:    // India
                        img_tii0_c000_png();
                        break;
                    case 78:    // Iran
                        img_tii0_c000_jpeg();
                        break;
                    case 101:   // Madagascar
                        img_tii0_c000_png();
                        break;
                    case 120:   // Nauru
                        img_tii0_c000_jpg_aa9thumb();
                        break;
                    case 146:   // St. Lucia
                        img_tii0_c000_png();
                        break;
                    case 169:   // Switzerland
                        img_tifd0_c00000_jpg();
                        break;
                    case 170:   // Syria
                        img_tii0_c000_jpeg();
                        break;
                    case 174:   // Togo
                        img_tii0_c000_png();
                        break;
                    case 188:   // Vanuatu
                        img_tii0_c000_png();
                        break;
                    case 190:   // Venezuela
                        img_tii0_c00_jpeg();
                        break;
                }

                function img_tifd0_c00000_jpg(){
                    try {
                        imgURL = data(`td.infobox-full-data`)[0].children[0].children[0].children[0].children[0].children[0].attribs.src;
                        pxSize = imgURL.substring(imgURL.indexOf(".jpg/") + 5, imgURL.lastIndexOf("px"));
                        imgURL = imgURL.replace(pxSize, "500");
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c000_jpg(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].children[0].attribs.src;
                        pxSize = imgURL.substring(imgURL.indexOf(".jpg/") + 5, imgURL.lastIndexOf("px"));
                        imgURL = imgURL.replace(pxSize, "500");
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c000_png(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].children[0].attribs.src;
                        pxSize = imgURL.substring(imgURL.indexOf(".png/") + 5, imgURL.lastIndexOf("px"));
                        imgURL = imgURL.replace(pxSize, "500");
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c000_jpeg(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].children[0].attribs.src;
                        pxSize = imgURL.substring(imgURL.indexOf(".jpeg/") + 6, imgURL.lastIndexOf("px"));
                        imgURL = imgURL.replace(pxSize, "500");
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c00_jpeg(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].attribs.src;
                        pxSize = imgURL.substring(imgURL.indexOf(".jpeg/") + 6, imgURL.lastIndexOf("px"));
                        imgURL = imgURL.replace(pxSize, "500");
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c00_png(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].attribs.src;
                        pxSize = imgURL.substring(imgURL.indexOf(".png/") + 5, imgURL.lastIndexOf("px"));
                        imgURL = imgURL.replace(pxSize, "500");
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c000_jpg_aa1thumb(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].children[0].attribs.src;
                        thumb = imgURL.substring(imgURL.indexOf("commons/"), imgURL.indexOf("/a/"));
                        imgURL = imgURL.replace(thumb, "commons/thumb");
                        resize = imgURL.substring(imgURL.indexOf("a1/") + 3);
                        imgURL = imgURL.replace(resize, resize + "/500px-".concat(resize));
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }

                function img_tii0_c000_jpg_aa9thumb(){
                    try {
                        imgURL = data(`td.infobox-image`)[0].children[0].children[0].children[0].attribs.src;
                        thumb = imgURL.substring(imgURL.indexOf("commons/"), imgURL.indexOf("/a/"));
                        imgURL = imgURL.replace(thumb, "commons/thumb");
                        resize = imgURL.substring(imgURL.indexOf("a9/") + 3);
                        imgURL = imgURL.replace(resize, resize + "/500px-".concat(resize));
                        masterList[i].leader.imgUrl = imgURL;
                    } catch(error){
                    }
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
    
    writeToFile();

    function writeToFile(){
        let file = require('fs').createWriteStream("newInfo.js");
        file.on('error', function(error) {console.log(error)});
        file.write(`const lastChecked = "${getDate()}";` + "\n");
        file.write("const newInfo = [" + "\n");
        masterList.forEach(obj => { 
            file.write("    {" + "\n");
            Object.keys(obj).forEach(key => {
                file.write("        " + key + ": " + JSON.stringify(obj[key]) + ", " + "\n");
            })
            file.write("    }, " + "\n");
        });
        file.write("]" + "\n");
        file.write("module.exports = { newInfo }")
        file.end();
    } 

    function getDate(){
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    }
}

getData();

