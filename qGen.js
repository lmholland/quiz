const { info } = require('./currentInfo.js')

generateQA();

function generateQA(){
    let randomCountry = info[Math.floor(Math.random() * info.length)];
    let qa = {};
    let allAnswers = [];
    let otherAnswers = [];
    let possibleAnswers = [];
    let key = {
        capital: Math.floor(Math.random() * randomCountry.capital.length),
        currency: Math.floor(Math.random() * randomCountry.currency.length),
        language: Math.floor(Math.random() * randomCountry.language.list.length),
        largestCity: Math.floor(Math.random() * randomCountry.largestCity.length),
    }
    let currName;

    chooseQA();
    getAllAnswers();
    deduplicateAnswers();
    shuffleAnswers();

    function chooseQA(){
        let randomCapital = randomCountry.capital[key.capital];
        let randomLargestCity = randomCountry.largestCity[key.largestCity];
        let qaList = [
            {
                // 0
                question: `What is the title of ${randomCountry.country.name}'s leader?`,
                answer: `${randomCountry.leader.title}`,
                ansProp: "leader",
                ansSub: "title",
            },
            {
                // 1
                question: `Which country's leader is a ${randomCountry.leader.pos}?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
                check: "lepo_cona",
            },
            {
                // 2
                question: `Who is the leader of ${randomCountry.country.name}?`,
                answer: `${randomCountry.leader.name}`,
                ansProp: "leader",
                ansSub: "name",
            },
            {
                // 3
                question: `${randomCountry.leader.name} is the ${randomCountry.leader.pos} of which country?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
                check: "lena_lepo_cona",
            },
            {
                // 4 
                question: `What is this leader's name?`,
                questionImg: `./images/${randomCountry.country.name}/leader.jpg`,
                answer: `${randomCountry.leader.name}`,
                ansProp: "leader",
                ansSub: "name",
            },
            {
                // 5
                question: `Which country's leader is this?`,
                questionImg: `./images/${randomCountry.country.name}/leader.jpg`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
            {
                // 6
                question: `Who is the ${randomCountry.leader.pos} of ${randomCountry.country.name}?`,
                answer: `./images/${randomCountry.country.name}/leader.jpg`,
                ansProp: "country",
                ansSub: "name",
                check: "leim_cona",
            },
            {
                // 7
                question: `Which leader's name is ${randomCountry.leader.name}?`,
                answer: `./images/${randomCountry.country.name}/leader.jpg`,
                ansProp: "country",
                ansSub: "name",
                check: "leim_cona",
            },
            {
                // 8
                question: `Which country does this flag belong to?`,
                questionImg: `./images/${randomCountry.country.name}/flag.jpg`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
            {
                // 9
                question: `Which flag belongs to ${randomCountry.country.name}?`,
                answer: `./images/${randomCountry.country.name}/flag.jpg`,
                ansProp: "country",
                ansSub: "name",
                check: "flim_cona",
            },
            {
                // 10
                question: `Which country is this symbol associated with?`,
                questionImg: `./images/${randomCountry.country.name}/symbol.jpg`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
            {
                // 11
                question: `Which symbol is associated with ${randomCountry.country.name}?`,
                answer: `./images/${randomCountry.country.name}/symbol.jpg`,
                ansProp: "country",
                ansSub: "name",
                check: "syim_cona",
            },
            {
                // 12
                question: `Which country is highlighted on this map?`,
                questionImg: `./images/${randomCountry.country.name}/map.jpg`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
            {
                // 13
                question: `Which map shows ${randomCountry.country.name} being highlighted?`,
                answer: `./images/${randomCountry.country.name}/map.jpg`,
                ansProp: "country",
                ansSub: "name",
                check: "maim_cona",
            },
            {
                // 14
                question: `What is ${getCapitalType()} in ${randomCountry.country.name}?`,
                answer: randomCapital.name,
                ansProp: "capital",
                ansSub: "name",
            },
            {
                // 15
                question: `${randomCapital.name} is ${getCapitalType()} of what country?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
            {
                // 16
                question: `Which language is commonly used in ${randomCountry.country.name}?`,
                answer: `${randomCountry.language.list[key.language]}`,
                ansProp: "language",
                ansSub: "list",
                check: "cona_lali"
            },
            {
                // 17
                question: `${randomCountry.language.list[key.language]} ${spokenOrUsed()} in which country?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
                check: "lali_cona"
            },
            {
                // 18
                question: `Which currency is used in ${randomCountry.country.name}?`,
                answer: `${getCurrency()}`,
                ansProp: "currency",
                check: "cona_cu"
            },
            {
                // 19
                question: `The ${getCurrencyUnit()} is used in which country?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
                check: "cu_cona"
            },
            {
                // 20
                question: `websiteName${randomCountry.tld.name} has which country's top-level domain name?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
            {
                // 21
                question: `Which top-level domain name does ${randomCountry.country.name} have?`,
                answer: `${randomCountry.tld.name}`,
                ansProp: "tld",
                ansSub: "name",
            },
            {
                // 22
                question: `What is ${getLargestCityType()} of ${randomCountry.country.name}?`,
                answer: `${randomLargestCity.name}`,
                ansProp: "largestCity",
                ansSub: "name",
            },
            {
                // 23
                question: `${randomCapital.name} is ${getLargestCityType()} of what country?`,
                answer: `${randomCountry.country.name}`,
                ansProp: "country",
                ansSub: "name",
            },
        ];
        let qaNum = getQaNum();

        qa = qaList[qaNum];

        function getCapitalType(){
            if (
                randomCountry.capital.length > 1 
            ||  randomCountry.country.name == "Switzerland" // has a de facto capital, but only 1 capital
            ){
                key["capital"] = Math.floor(Math.random() * randomCountry.capital.length);
                return `the ${randomCountry.capital[key.capital].type} capital`;
            } else {
                key["capital"] = Math.floor(Math.random() * randomCountry.capital.length);
                return `the ${randomCountry.capital[key.capital].type}`;
            }
        }

        function getLargestCityType(){
            if (randomCountry.country.name == "India"){
                key["largestCity"] = Math.floor(Math.random() * randomCountry.largestCity.length);
                return `the largest ${randomCountry.largestCity[key.largestCity].type}`;
            } else {
                key["largestCity"] = Math.floor(Math.random() * randomCountry.largestCity.length);
                return `the ${randomCountry.largestCity[key.largestCity].type}`;
            }
        }

        function getCurrency(){
            if(Object.hasOwn(randomCountry.currency[key.currency], "full")){
                return randomCountry.currency[key.currency].full;
            } else if (Object.hasOwn(randomCountry.currency[key.currency], "unit")){
                return randomCountry.currency[key.currency].unit;
            } else if (Object.hasOwn(randomCountry.currency[key.currency], "other")){
                return randomCountry.currency[key.currency].other;
            }
        }

        function getCurrencyUnit(){
            if(Object.hasOwn(randomCountry.currency[key.currency], "full")){
                return randomCountry.currency[key.currency].full;
            } else if (Object.hasOwn(randomCountry.currency[key.currency], "unit")){
                return randomCountry.currency[key.currency].unit;
            } else if (Object.hasOwn(randomCountry.currency[key.currency], "other")){
                return randomCountry.currency[key.currency].other;
            }
        }

        function getQaNum(){
            let numArray = [...Array(qaList.length).keys()];
            return Math.floor(Math.random() * numArray.length);
        }

        function spokenOrUsed(){
            if(
                    randomCountry.language.list[key.language] == "NZ Sign Language" 
                ||  randomCountry.language.list[key.language] == "PNG Sign Language" 
                ||  randomCountry.language.list[key.language] == "Uruguayan Sign Language"
            ){
                return "is used";
            } else if (
                randomCountry.language.list[key.language] == "Zimbabwean sign languages"
            ){
                return "are used";
            } else {
                return "is spoken";
            }
        }

    }

    function getAllAnswers(){
        for(let i=0; i < info.length; i++){
            if(qa.ansProp == "capital"){
                for(let j=0; j < info[i][qa.ansProp].length; j++){
                    allAnswers.push(info[i][qa.ansProp][j][qa.ansSub]);
                };
            } else if (qa.ansProp == "language"){
                for(let j=0; j < info[i][qa.ansProp][qa.ansSub].length; j++){
                    allAnswers.push(info[i][qa.ansProp][qa.ansSub][j]);
                };
            } else if (qa.ansProp == "currency"){
                for(let j=0; j < info[i][qa.ansProp].length; j++){
                    if(Object.hasOwn(info[i][qa.ansProp][j], "unit")){
                        allAnswers.push(info[i][qa.ansProp][j].unit);
                    } else if (Object.hasOwn(info[i][qa.ansProp][j], "full")){
                        otherAnswers.push(info[i][qa.ansProp][j].full)
                    } else if (Object.hasOwn(info[i][qa.ansProp][j], "other")){
                        otherAnswers.push(info[i][qa.ansProp][j].other)
                    }
                };
            } else if (qa.ansProp == "largestCity"){
                for(let j=0; j < info[i][qa.ansProp].length; j++){
                    allAnswers.push(info[i][qa.ansProp][j][qa.ansSub]);
                }
            } else {
                allAnswers.push(info[i][qa.ansProp][qa.ansSub]);
            }
        }
    }

    function deduplicateAnswers(){
        let dedupedAns = [...new Set(allAnswers)];
        let dedupedOtherAns;
        let listChoice;

        // deduplicates other answers if they exist and adds it to possibleAnswer
        if(otherAnswers.length > 0){
            let randNum_dedupedotherAns = Math.floor(Math.random() * 3);
            dedupedOtherAns = [...new Set(otherAnswers)];
            
            for(let i=0; i < randNum_dedupedotherAns; i++){
                let ans = dedupedOtherAns[Math.floor(Math.random() * dedupedOtherAns.length)];

                if(
                        possibleAnswers.includes(ans)
                    ||  ans == randomCountry.currency[key.currency].demonym + " " + randomCountry.currency[key.currency].unit
                    ||  ans == randomCountry.currency[key.currency].full
                    ||  ans == randomCountry.currency[key.currency].other
                ){
                    continue;
                }

                possibleAnswers.push(ans);
            }
        }

        // Adds real answer to possibleAnswers
        if(qa.ansProp == "capital"){
            listChoice = Math.floor(Math.random() * randomCountry[qa.ansProp].length);
            possibleAnswers.push(randomCountry[qa.ansProp][listChoice][qa.ansSub]);
        } else if (qa.ansProp == "language"){         
            possibleAnswers.push(randomCountry.language.list[key.language]);
        } else if (qa.ansProp == "currency" && Object.hasOwn(randomCountry.currency[key.currency], "unit")){
            possibleAnswers.push(randomCountry.currency[key.currency].demonym + " " + randomCountry.currency[key.currency].unit);
        } else if (qa.ansProp == "currency" && Object.hasOwn(randomCountry.currency[key.currency], "full")){
            possibleAnswers.push(randomCountry.currency[key.currency].full);
        } else if (qa.ansProp == "currency" && Object.hasOwn(randomCountry.currency[key.currency], "other")){
            possibleAnswers.push(randomCountry.currency[key.currency].other);
        } else if (qa.ansProp == "largestCity"){         
            listChoice = Math.floor(Math.random() * randomCountry[qa.ansProp].length);
            possibleAnswers.push(randomCountry[qa.ansProp][listChoice][qa.ansSub]);
        } else {         
            possibleAnswers.push(randomCountry[qa.ansProp][qa.ansSub]);
        }

        while(possibleAnswers.length < 4){
            let randNum_dedupedAns = Math.floor(Math.random() * dedupedAns.length);
            let randDedupedAns = dedupedAns[randNum_dedupedAns];
            let findCountry;
            let isTrue = [];

            if(qa.check == "cona_cu" && randomCountry.currency[key.currency].demonym){
                randDedupedAns = randomCountry.currency[key.currency].demonym + " " + randDedupedAns;
            } else if (qa.check == "cona_cu" && !randomCountry.currency[key.currency].demonym){
                randDedupedAns = randomCountry.demonym.name + " " + randDedupedAns;
            }

            if(qa.check == "lali_cona" || qa.check == "cu_cona"){
                info.forEach(obj => {
                    if(obj.country.name == randDedupedAns){
                        findCountry = obj;
            }});}

            if(qa.check == "cu_cona"){
                findCountry.currency.forEach(curr => {
                    if(Object.hasOwn(curr, "full")){
                        if(curr.full == currName){
                            isTrue.push(true)
                    }}

                    if(Object.hasOwn(curr, "other")){
                        if(curr.other == currName){
                            isTrue.push(true)
                    }}

                    if(Object.hasOwn(curr, "unit")){
                        if((curr.unit) == currName){
                            isTrue.push(true)
                    }}
                });}

            switch(true){
                // skips repeats of answer
                case (possibleAnswers.indexOf(randDedupedAns) >= 0): 
                case (qa.check == "lepo_cona" && info[randNum_dedupedAns].leader.pos == randomCountry.leader.pos):
                case (qa.check == "lena_lepo_cona" && info[randNum_dedupedAns].leader.name == randomCountry.leader.name):
                case (qa.check == "cona_lali" && (randDedupedAns in randomCountry.language.list)):
                case (qa.check == "lali_cona" && findCountry.language.list.includes(randomCountry.language.list[key.language])):
                case (qa.check == "cu_cona" && isTrue.includes(true)):
                    continue;

                // updates answers to get respective image from file
                case (qa.check == "leim_cona"):
                    possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub]}/leader.jpg`;
                    randDedupedAns = `./images/${randDedupedAns}/leader.jpg`;
                    break;
                case (qa.check == "flim_cona"):
                    possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub]}/flag.jpg`;
                    randDedupedAns = `./images/${randDedupedAns}/flag.jpg`;
                    break;
                case (qa.check == "syim_cona"):
                    possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub]}/symbol.jpg`;
                    randDedupedAns = `./images/${randDedupedAns}/symbol.jpg`;
                    break;
                case (qa.check == "maim_cona"):
                    possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub]}/map.jpg`;
                    randDedupedAns = `./images/${randDedupedAns}/map.jpg`;
                    break;                
            }

            possibleAnswers.push(randDedupedAns);
        }
    }

    function shuffleAnswers() {
        let currentIndex = possibleAnswers.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [possibleAnswers[currentIndex], possibleAnswers[randomIndex]] = [
            possibleAnswers[randomIndex], possibleAnswers[currentIndex]];
        }
      
        return possibleAnswers;
    }

    console.log(qa.question);
    if(qa.questionImg){console.log(qa.questionImg);}
    console.log(qa.answer);
    console.log(possibleAnswers);
}