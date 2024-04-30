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
            // this is a list of skipped leaders, (ex. there are both a blue & green highlighted leader in the country row, this number skips the blue leader (who is lesser))
            // changes here affect the second switch statement in grabInfo(), so update the numbers of countries there that are or come after any changes here
            // numbers here mean country position in list, comment numbers are leader position minus position in this list
            // * -1 is used so the list can start at 0, this affects countryRow in skipDeJureLeaders

            -1,     //  000-00  start*  000 <- the line being skipped, 00 <- the country's place in this list 
            21,     //  022-01  Bosnia
            26,     //  028-02  Burkina Faso
            28,     //  032-03  Cambodia
            52,     //  056-04  El Salvador
            61,     //  066-05  Gabon
            69,     //  075-06  Guinea
            97,     //  104-07  Liechtenstein
            112,    //  120-08  Moldova
            118,    //  127-09  Myanmar
            131,    //  141-10  Pakistan
            142,    //  152-10  Romania
            148,    //  159-11  San Marino
            150,    //  162-12  Saudi Arabia
            153,    //  166-13  Serbia
            160,    //  174-14  Somalia
            165,    //  180-15  Sudan
            179,    //  195-16  Turkmenistan
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
                    case 25:    // Brunei
                        leader_00_40_4();
                        break;
                    case 26:    // Bulgaria
                        leader_test();
                        break;
                    case 27:    // Burkina Faso
                        leader_00cc010_03_03();
                        break; 
                    case 30:    // Cambodia
                        leader_010_3_3();
                        break; 
                    case 36:    // Chad
                        leader_00cc010_03_03();
                        break; 
                    case 65:    // Gabon
                        leader_00cc010_03_03();
                        break; 
                    case 74:    // Guinea
                        leader_0001_03_03();
                        break; 
                    case 78:    // Haiti
                        leader_00cc010_03_03();
                        break; 
                    case 105:   // Liechtenstein
                        leader_000_0101020_02();
                        break; 
                    case 112:   // Mali
                        leader_00cc010_03_03();
                        break; 
                    case 126:   // Myanmar
                        leader_000_02_02();
                        break;
                    case 134:   // Niger
                        leader_0001_03_03();
                        break;
                    case 152:   // Qatar
                        leader_00_112_2();
                        break; 
                    case 182:   // Sudan
                        leader_0101_00_00();
                        break;
                    case 185:   // Switzerland 
                        leader_00_00_0();
                        break;          
                    case 195:   // Turkmenistan
                        leader_010_3_3();
                        break; 
                    case 200:   // UAE
                        leader_00_112_2();
                        break; 
                    case 209:   // Yemen
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

                function leader_00_40_4(){
                    info = {
                        country: {
                            name: countryName,
                            url: countryURL,
                        },  
                        leader: {
                            title: data(`td.table-success`)[countryNum].children[0].children[0].data,
                            pos: pos_00(),
                            name: data(`td.table-success`)[countryNum].children[4].children[0].data,
                            url: data(`td.table-success`)[countryNum].children[4].attribs.href,
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

                function leader_test(){
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

                function leader_00cc010_03_03(){
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
                info.country.url = "https://en.wikipedia.org" + info.country.url;
                info.leader.url = "https://en.wikipedia.org" + info.leader.url;
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

            getImgInfo();
            getTextInfo();
            console.log(i, masterList[i])
            await timer(waitTime);

            function getImgInfo(){
                switch(i){  
                    case 0:     // Afghanistan
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 1:     // Albania
                        flag_symbol_map(4, "svg", 5, "svg", 6, "png");
                        break;
                    case 2:     // Algeria
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 3:     // Andorra
                        flag_symbol_map(3, "svg", 4, "svg", 5, "png");
                        break;
                    case 4:     // Angola
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 5:     // Antigua
                        flag_symbol_map(6, "svg", 7, "svg", 8, "svg");
                        break;
                    case 6:     // Argentina
                        flag_symbol_map(4, "svg", 6, "svg", 7, "svg");
                        break;
                    case 7:     // Armenia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 8:     // Australia
                        flag_symbol_map(6, "svg", 7, "svg", 8, "svg");
                        break;
                    case 9:     // Austria
                        flag_symbol_map(7, "svg", 8, "svg", 9, "svg");
                        break;
                    case 10:    // Azerbaijan
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 11:    // Bahamas
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 12:    // Bahrain
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 13:    // Bangladesh
                        flag_symbol_map(4, "svg", 5, "svg", 7, "svg");
                        break;
                    case 14:    // Barbados
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 15:    // Belarus
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 16:    // Belgium
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 17:    // Belize
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 18:    // Benin
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 19:    // Bhutan
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 20:    // Bolivia
                        flag_symbol_map(3, "svg", 5, "svg", 6, "svg");
                        break;
                    case 21:    // Bosnia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 22:    // Botswana
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 23:    // Brazil
                        flag_symbol_map(4, "svg", 5, "svg", 7, "svg");
                        break;
                    case 24:    // Brunei
                        flag_symbol_map(7, "svg", 8, "svg", 9, "svg");
                        break;
                    case 25:    // Bulgaria
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 26:    // Burkina Faso
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 27:    // Burundi
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 28:    // Cambodia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 29:    // Cameroon
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 30:    // Canada
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 31:    // Cape Verde
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 32:    // CAR
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 33:    // Chad
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 34:    // Chile
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 35:    // China
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 36:    // Colombia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 37:    // Comoros
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 38:    // Congo-Kinshasa
                        flag_symbol_map(3, "svg", 4, "png", 5, "svg");
                        break;
                    case 39:    // Congo-Brazzaville
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 40:    // Costa Rica
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 41:    // Croatia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "png");
                        break;
                    case 42:    // Cuba
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 43:    // Cyprus
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 44:    // Czechia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 45:    // Denmark
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 46:    // Djibouti
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 47:    // Dominica
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 48:    // DR
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 49:    // East Timor
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 50:    // Ecuador
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 51:    // Egypt
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 52:    // El Salvador
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 53:    // Eq Guinea
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 54:    // Eritrea
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 55:    // Estonia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 56:    // Eswatini
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 57:    // Ethiopia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 58:    // Fiji
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 59:    // Finland
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 60:    // France
                        flag_symbol_map(6, "svg", 7, "svg",9, "svg");
                        break;
                    case 61:    // Gabon
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 62:    // Gambia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 63:    // Georgia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 64:    // Germany
                        flag_symbol_map(6, "svg", 7, "svg", 8, "svg");
                        break;
                    case 65:    // Ghana
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 66:    // Greece
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 67:    // Grenada
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 68:    // Guatemala
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 69:    // Guinea
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 70:    // Guinea-Bissau
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 71:    // Guyana
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 72:    // Haiti
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 73:    // Honduras
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 74:    // Hungary
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 75:    // Iceland
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 76:    // India
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 77:    // Indonesia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 78:    // Iran
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 79:    // Iraq
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 80:    // Ireland
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 81:    // Israel
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 82:    // Italy
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 83:    // Ivory Coast
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 84:    // Jamaica
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 85:    // Japan
                        flag_symbol_map(5, "svg", 6, "svg", 8, "svg");
                        break;
                    case 86:    // Jordan
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 87:    // Kazakhstan
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 88:    // Kenya
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 89:    // Kiribati
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 90:    // Kuwait
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 91:    // Kyrgyzstan
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 92:    // Laos
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 93:    // Latvia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 94:    // Lebanon
                        lebanon_noSymbol(4, "svg", 5, "svg");
                        break;
                    case 95:    // Lesotho
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 96:    // Liberia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 97:    // Libya
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 98:    // Liechtenstein
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 99:    // Lithuania
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 100:    // Luxembourg
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 101:    // Madagascar
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 102:    // Malawi
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 103:    // Malaysia
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 104:    // Maldives
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 105:    // Mali
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 106:    // Malta
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 107:    // Marshall Islands
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 108:    // Mauritania
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 109:    // Mauritius
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 110:    // Mexico
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 111:    // Micronesia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 112:    // Moldova
                        flag_symbol_map(4, "svg", 5, "svg", 6, "png");
                        break;
                    case 113:    // Monaco
                        flag_symbol_map(4, "svg", 5, "svg", 6, "png");
                        break;
                    case 114:    // Mongolia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 115:    // Montenegro
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 116:    // Morocco
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 117:    // Mozambique
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 118:    // Myanmar
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 119:    // Namibia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 120:    // Nauru
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 121:    // Nepal
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 122:    // Netherlands
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 123:    // New Zealand
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 124:    // Nicaragua
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 125:    // Niger
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 126:    // Nigeria
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 127:    // North Korea
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 128:    // North Macedonia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "png");
                        break;
                    case 129:    // Norway
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 130:    // Oman
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 131:    // Pakistan
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 132:    // Palau
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 133:    // Palestine
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 134:    // Panama
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 135:    // PNG
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 136:    // Paraguay
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 137:    // Peru
                        flag_symbol_map(4, "svg", 5, "svg", 7, "svg");
                        break;
                    case 138:    // Philippines
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 139:    // Poland
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 140:    // Portugal
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 141:    // Qatar
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 142:    // Romania
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 143:    // Russia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 144:    // Rwanda
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 145:    // St Kitts
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 146:    // St Lucia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 147:    // St Vincent
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 148:    // Samoa
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 149:    // San Marino
                        flag_symbol_map(3, "svg", 4, "svg", 5, "png");
                        break;
                    case 150:    // Sao Tome
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 151:    // Saudi Arabia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 152:    // Senegal
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 153:    // Serbia
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 154:    // Seychelles
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 155:    // Sierra Leone
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 156:    // Singapore
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 157:    // Slovakia
                        flag_symbol_map(4, "svg", 5, "svg", 7, "svg");
                        break;
                    case 158:    // Slovenia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 159:    // Solomon Islands
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 160:    // Somalia
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 161:    // South Africa
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 162:    // South Korea
                        flag_symbol_map(4, "svg", 5, "svg", 7, "svg");
                        break;
                    case 163:    // South Sudan
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 164:    // Spain
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 165:    // Sri Lanka
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 166:    // Sudan
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 167:    // Suriname
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 168:    // Sweden
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 169:    // Switzerland
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 170:    // Syria
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 171:    // Tajikistan
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 172:    // Tanzania
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 173:    // Thailand
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 174:    // Togo
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 175:    // Tonga
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 176:    // Trinidad
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 177:    // Tunisia
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 178:    // Turkey
                        turkey_noSymbol(4, "svg", 5, "svg");
                        break;
                    case 179:    // Turkmenistan
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 180:    // Tuvalu
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 181:    // Uganda
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 182:    // Ukraine
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 183:    // UAE
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 184:    // UK
                        uk_doubleSymbol(4, "svg", 6, "svg");
                        break;
                    case 185:    // USA
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 186:    // Uruguay
                        flag_symbol_map(3, "svg", 5, "svg", 6, "svg");
                        break;
                    case 187:    // Uzbekistan
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 188:    // Vanuatu
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 189:    // Vatican City
                        flag_symbol_map(4, "svg", 5, "svg", 7, "svg");
                        break;
                    case 190:    // Venezuela
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 191:    // Vietnam
                        flag_symbol_map(5, "svg", 6, "svg", 7, "svg");
                        break;
                    case 192:    // Yemen
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    case 193:    // Zambia
                        flag_symbol_map(3, "svg", 4, "svg", 5, "svg");
                        break;
                    case 194:    // Zimbabwe
                        flag_symbol_map(4, "svg", 5, "svg", 6, "svg");
                        break;
                    default:
                }

                function flag_symbol_map(flagNum, flagType, symbolNum, symbolType, mapNum, mapType){
                    try{
                        flagURL = data(`img`)[flagNum].attribs.src;
                        pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                        flagURL = flagURL.replace(pxSize, size);
                        flagURL = flagURL.replace("//", "https://")
                        masterList[i].flag = {}
                        masterList[i].flag.url = flagURL;
        
                        symbolURL = data(`img`)[symbolNum].attribs.src;
                        pxSize = symbolURL.substring(symbolURL.indexOf(`.${symbolType}/`) + 5, symbolURL.lastIndexOf("px") + 2);
                        symbolURL = symbolURL.replace(pxSize, size);
                        symbolURL = symbolURL.replace("//", "https://")
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = symbolURL;
        
                        mapURL = data(`img`)[mapNum].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        mapURL = mapURL.replace("//", "https://")
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;        
                    } catch (error) {
                        console.log(`error in ${masterList[i].country.name}'s image urls`);
                    }
                }

                function lebanon_noSymbol(flagNum, flagType, mapNum, mapType){
                    try{
                        flagURL = data(`img`)[flagNum].attribs.src;
                        pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                        flagURL = flagURL.replace(pxSize, size);
                        flagURL = flagURL.replace("//", "https://")
                        masterList[i].flag = {}
                        masterList[i].flag.url = flagURL;
        
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coat_of_arms_of_Lebanon.svg/500px-Coat_of_arms_of_Lebanon.svg.png";
        
                        mapURL = data(`img`)[mapNum].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        mapURL = mapURL.replace("//", "https://")
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;        
                    } catch (error) {
                        console.log(`error in ${masterList[i].country.name}'s image urls`);
                    }
                }

                function turkey_noSymbol(flagNum, flagType, mapNum, mapType){
                    try{
                        flagURL = data(`img`)[flagNum].attribs.src;
                        pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                        flagURL = flagURL.replace(pxSize, size);
                        flagURL = flagURL.replace("//", "https://")
                        masterList[i].flag = {}
                        masterList[i].flag.url = flagURL;
        
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Emblem_of_Turkey.svg/500px-Emblem_of_Turkey.svg.png";
        
                        mapURL = data(`img`)[mapNum].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        mapURL = mapURL.replace("//", "https://")
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;        
                    } catch (error) {
                        console.log(`error in ${masterList[i].country.name}'s image urls`);
                    }
                }

                function uk_doubleSymbol(flagNum, flagType, mapNum, mapType){
                    // the UK has two coats of arms, but the image displayed on their country page is the two grouped together in one image
                    // So I chose the English coat of arms to be hardcoded as the one symbol to use, so the image doesn't get warped in the quiz
        
                    try{
                        flagURL = data(`img`)[flagNum].attribs.src;
                        pxSize = flagURL.substring(flagURL.indexOf(`.${flagType}/`) + 5, flagURL.lastIndexOf("px") + 2);
                        flagURL = flagURL.replace(pxSize, size);
                        flagURL = flagURL.replace("//", "https://")
                        masterList[i].flag = {}
                        masterList[i].flag.url = flagURL;
        
                        masterList[i].symbol = {}
                        masterList[i].symbol.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Royal_Coat_of_Arms_of_the_United_Kingdom_(Tudor_crown).svg/500px-Royal_Coat_of_Arms_of_the_United_Kingdom_(Tudor_crown).svg.png";
        
                        mapURL = data(`img`)[mapNum].attribs.src;
                        pxSize = mapURL.substring(mapURL.indexOf(`.${mapType}/`) + 5, mapURL.lastIndexOf("px") + 2);
                        mapURL = mapURL.replace(pxSize, size);
                        mapURL = mapURL.replace("//", "https://")
                        masterList[i].map = {}
                        masterList[i].map.url = mapURL;        
                    } catch (error) {
                        console.log(`error in ${masterList[i].country.name}'s image urls`);
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
                                language_c00_3();
                                break;
                            case 26:    // Burkina Faso
                                language_c00_3();
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
                            case 105:   // Mali
                                language_nc10000_wl();
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
                                language_nc410k00();
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
                            case 159:   // Solomon Islands
                                language_nc10k00();
                                break;
                            case 160:   // Somalia
                                language_nck0_k2();
                                break;
                            case 161:   // South Africa
                                language_nc51k00_k2();
                                break;
                            case 165:   // Sri Lanka
                                language_nc10k00();
                                break;
                            case 166:   // Sudan
                                language_nck0_k2();
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

                        function language_c00_3(){
                            if( 
                                data(`th.infobox-label`)[j].children[0].children[0].data == "Recognised national languages"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [];

                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children.length; k++){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[0].children[k].children[0].children[0].data);
                                }
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

                        function language_nc10000_wl(){
                            try{
                                if( 
                                        data(`th.infobox-label`)[j].children[0].attribs.title == "Working language"
                                    ||  data(`th.infobox-label`)[j].children[0].attribs.title == "Working language"
                                ){
                                    masterList[i].language = {};
                                    masterList[i].language.list = [data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].children[0].data];
                                }
                            } catch(err){
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

                        function language_nc410k00(){
                            if( 
                                    data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official language"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Official languages"
                                ||  data(`th.infobox-label`)[j].children[0].data == "Working language"
                            ){
                                masterList[i].language = {};
                                masterList[i].language.list = [
                                    data(`th.infobox-label`)[j].next.children[4].children[1].children[0].children[0].children[0].children[0].data,
                                    data(`th.infobox-label`)[j].next.children[4].children[1].children[0].children[1].children[0].children[0].data,
                                    data(`th.infobox-label`)[j].parent.next.children[1].children[0].children[0].data
                                ]
                            }
                        }

                        function language_nc51k00_k2(){
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
                
                                for(let k=0; k < data(`th.infobox-label`)[j].next.children[5].children[1].children.length; k+=2){
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[1].children[k].children[0].children[0].data);
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
                                    masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[5].children[0].children[k].children[0].children[0].data);
                                }
                            }
                        }

                        function language_sl_nc10k00(){
                            try{
                                if( 
                                    data(`th.infobox-label`)[j].children[0].children[0].data == "Spoken languages"
                                ||  data(`th.infobox-label`)[j].children[0].children[0].data == "Spoken languages"
                                ){
                                    masterList[i].language = {};
                                    masterList[i].language.list = [];

                                    for(let k=0; k < data(`th.infobox-label`)[j].next.children[1].children[0].children.length; k++){
                                        masterList[i].language.list.push(data(`th.infobox-label`)[j].next.children[1].children[0].children[k].children[0].children[0].data)
                                    }
                                }
                            } catch(err){
                            }
                        }

                    } catch(error){
                    }

                    try{    // gets demonym
                        switch(i){
                            default:
                                demonym_nc00();
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
                                demonym_nc0();
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
                            case 38:    // Congo-Kinshasa
                                demonym_nc000();
                                break;
                            case 39:    // Congo-Brazzaville
                                demonym_nc000();
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
                            case 91:    //  Kyrgystan
                                demonym_nc0();
                                break;
                            case 92:    //  Laos
                                demonym_nc20();
                                break;
                            case 95:    //  Lesotho
                                demonym_nc1010_s0();
                                break;
                            case 100:   //  Luxembourg
                                demonym_nc10100();
                                break;
                            case 113:   //  Monaco
                                demonym_nc1000();
                                break;
                            case 118:   //  Myanmar
                                demonym_nc10000();
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
                            case 161:   //  South Africa
                                demonym_nc10000();
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

                        function demonym_nc000(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[0].children[0].children[0].data;
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
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[0].children[0].data.split(" ")[0];
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

                        function demonym_nc1010_s0(){
                            try{
                                if(data(`th.infobox-label`)[j].children[0].children[0].data == "Demonym(s)"){
                                    masterList[i].demonym = {};
                                    masterList[i].demonym.name = data(`th.infobox-label`)[j].next.children[1].children[0].children[1].children[0].data.split(" ")[0];
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
                            case 79:    // Iraq
                                tld_nc10000();
                                break;   
                            case 87:    // Kazakhstan
                                tld_nc10000();
                                break;
                            case 94:    // Lebanon
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
                try{
                    switch(i){
                        default:
                            leaderImg(3, "jpg");
                            break;
                        case 0:     // Afghanistan
                            leaderImg(4, "jpg");
                            break;
                        case 3:     // Andorra
                            leaderImg(4, "jpg");
                            break;
                        case 6:     // Argentina
                            leaderImg(4, "jpg");
                            break;
                        case 8:     // Australia
                            leaderImg(4, "jpg");
                            break;
                        case 10:    // Azerbaijan
                            leaderImg(4, "jpg");
                            break;
                        case 11:    // Bahamas
                            leaderImg(4, "jpg");
                            break;
                        case 13:    // Bangladesh
                            leaderImg(5, "jpg");
                            break;
                        case 15:    // Belarus
                            leaderImg(4, "jpg");
                            break;
                        case 18:    // Benin
                            leaderImg(4, "jpg");
                            break;
                        case 20:    // Bolivia
                            leaderImg(3, "png");
                            break;
                        case 23:    // Brazil
                            leaderImg(5, "jpg");
                            break;
                        case 26:    // Botswana
                            leaderImg(3, "png");
                            break;
                        case 29:    // Cameroon
                            leaderImg(3, "png");
                            break;
                        case 30:    // Canada
                            leaderImg(5, "jpg");
                            break;
                        case 35:    // China
                            leaderImg(4, "jpg");
                            break;
                        case 38:    // Congo-Kinshasa
                            leaderImg(4, "jpg");
                            break;
                        case 51:    // Egypt
                            leaderImg(4, "jpg");
                            break;
                        case 54:    // Eritrea
                            leaderImg(4, "jpg");
                            break;
                        case 57:    // Ethiopia
                            leaderImg(5, "jpeg");
                            break;
                        case 60:    // France
                            leaderImg(5, "jpg");
                            break;
                        case 61:    // Gabon
                            leaderImg_thumbless(3);
                            break;
                        case 68:    // Guatemala
                            leaderImg(3, "png");
                            break;
                        case 74:    // Hungary
                            leaderImg(4, "jpg");
                            break;
                        case 76:    // India
                            leaderImg(5, "png");
                            break;
                        case 77:    // Indonesia
                            leaderImg(4, "jpg");
                            break;
                        case 78:    // Iran
                            leaderImg(4, "jpg");
                            break;
                        case 81:    // Israel
                            leaderImg(4, "jpg");
                            break;
                        case 82:    // Italy
                            leaderImg(4, "jpg");
                            break;
                        case 85:    // Japan
                            leaderImg(4, "jpg");
                            break;
                        case 86:    // Jordan
                            leaderImg(4, "jpg");
                            break;
                        case 93:    // Latvia
                            leaderImg(4, "jpg");
                            break;
                        case 95:    // Lesotho
                            leaderImg(6, "jpg");
                            break;
                        case 100:   // Luxembourg
                            leaderImg(4, "jpg");
                            break;
                        case 108:   // Mauritania
                            leaderImg(4, "jpg");
                            break;
                        case 109:   // Mauritius
                            leaderImg(4, "jpg");
                            break;
                        case 110:   // Mexico
                            leaderImg(4, "jpg");
                            break;
                        case 118:   // Myanmar
                            leaderImg(4, "jpg");
                            break;
                        case 120:   // Nauru
                            leaderImg(4, "jpg");
                            break;
                        case 121:   // Nepal
                            leaderImg(4, "jpg");
                            break;
                        case 122:   // Netherlands
                            leaderImg(4, "jpg");
                            break;
                        case 123:   // New Zealand
                            leaderImg(3, "png");
                            break;
                        case 124:   // Nicaragua
                            leaderImg(4, "jpg");
                            break;
                        case 125:   // Niger
                            leaderImg(3, "png");
                            break;
                        case 126:   // Nigeria
                            leaderImg(4, "jpg");
                            break;
                        case 127:   // North Korea
                            leaderImg(4, "jpg");
                            break;
                        case 133:   // Palestine
                            leaderImg(4, "jpg");
                            break;
                        case 134:   // Panama
                            leaderImg(4, "jpg");
                            break;
                        case 138:   // Philippines
                            leaderImg(4, "jpg");
                            break;
                        case 143:   // Russia
                            leaderImg(5, "jpg");
                            break;
                        case 146:   // St. Lucia
                            leaderImg(3, "png");
                            break;
                        case 151:   // Saudi Arabia
                            leaderImg(4, "jpg");
                            break;
                        case 153:   // Serbia
                            leaderImg(4, "jpg");
                            break;
                        case 161:   // South Africa
                            leaderImg(4, "jpg");
                            break;
                        case 166:   // Sudan
                            leaderImg(6, "jpg");
                            break;
                        case 169:   // Switzerland
                            leaderImg(4, "jpg");
                            break;
                        case 170:   // Syria
                            leaderImg(4, "jpeg");
                            break;
                        case 176:   // Trinidad
                            leaderImg(3, "jpeg");
                            break;
                        case 178:   // Turkey
                            leaderImg(4, "jpg");
                            break;
                        case 179:   // Turkmenistan
                            leaderImg(4, "jpg");
                            break;
                        case 182:   // Ukraine
                            leaderImg(4, "jpg");
                            break;
                        case 184:   // UK
                            leaderImg(4, "jpg");
                            break;
                        case 185:   // US
                            leaderImg(4, "jpg");
                            break;
                        case 189:   // Vatican
                            leaderImg(4, "jpg");
                            break;
                        case 190:   // Venezuela
                            leaderImg(4, "jpeg");
                            break;
                        case 191:   //  Vietnam
                            leaderImg(4, "jpg");
                            break;
                        case 193:   // Zambia
                            leaderImg(4, "jpg");
                            break;
                        case 194:   // Zimbabwe
                            leaderImg(4, "jpg");
                            break;
                    }

                    function leaderImg(num, type){
                        try {
                            imgURL = data(`img`)[num].attribs.src;
                            pxSize = imgURL.substring(imgURL.indexOf(`.${type}/`) + (type.length + 2), imgURL.lastIndexOf("px"));
                            imgURL = imgURL.replace(pxSize, "500");
                            imgURL = imgURL.replace("//", "https://")
                            masterList[i].leader.imgUrl = imgURL;
                        } catch(error){
                        }
                    }

                    function leaderImg_thumbless(num){
                        try {
                            imgURL = data(`img`)[num].attribs.src;
                            afterCommons = imgURL.substring(imgURL.lastIndexOf("commons/") + 8);
                            imgURL = imgURL.replace(afterCommons, "thumb/" + afterCommons);
                            fileName = imgURL.substring(imgURL.lastIndexOf("/") + 1);
                            imgURL = imgURL.replace(fileName, fileName + "/500px-" + fileName);
                            imgURL = imgURL.replace("//", "https://")
                            masterList[i].leader.imgUrl = imgURL;
                        } catch(error){
                        }
                    }
                } catch(err) {
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
        file.write("];" + "\n");
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

