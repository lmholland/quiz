(() => {
    // replace lastChecked and currentInfo whenever currentInfo.js is confirmed
    const lastChecked = "September 29, 2023";
    const currentInfo = [
        {
            country: {"name":"Afghanistan","url":"https://en.wikipedia.org/wiki/Afghanistan"}, 
            leader: {"title":"Supreme Leader","pos":"supreme leader","name":"Hibatullah Akhundzada","url":"https://en.wikipedia.org/wiki/Hibatullah_Akhundzada","imgUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Hibatullah_Akhundzada.jpg/500px-Hibatullah_Akhundzada.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/500px-Flag_of_the_Taliban.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Arms_of_the_Islamic_Emirate_of_Afghanistan.svg/500px-Arms_of_the_Islamic_Emirate_of_Afghanistan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Afghanistan_%28orthographic_projection%29.svg/500px-Afghanistan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Kabul","type":"capital"}], 
            language: {"list":["Pashto","Dari"]}, 
            demonym: {"name":"Afghan"}, 
            currency: [{"demonym":"Afghan","unit":"afghani"}], 
            tld: {"name":".af"}, 
            largestCity: [{"name":"Kabul","type":"largest city"}], 
        }, 
        {
            country: {"name":"Albania","url":"https://en.wikipedia.org/wiki/Albania"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Edi Rama","url":"https://en.wikipedia.org/wiki/Edi_Rama","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sre%C4%8Danje_predsednika_vlade_Roberta_Goloba_s_predsednikom_vlade_Albanije_Edijem_Ramo_%2852320651109%29_%28cropped%29.jpg/500px-Sre%C4%8Danje_predsednika_vlade_Roberta_Goloba_s_predsednikom_vlade_Albanije_Edijem_Ramo_%2852320651109%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/500px-Flag_of_Albania.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Coat_of_arms_of_Albania.svg/500px-Coat_of_arms_of_Albania.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Location_Albania_Europe.png/500px-Location_Albania_Europe.png"}, 
            capital: [{"name":"Tirana","type":"capital"}], 
            language: {"list":["Albanian"]}, 
            demonym: {"name":"Albanian"}, 
            currency: [{"demonym":"Albanian","unit":"lek"}], 
            tld: {"name":".al"}, 
            largestCity: [{"name":"Tirana","type":"largest city"}], 
        }, 
        {
            country: {"name":"Algeria","url":"https://en.wikipedia.org/wiki/Algeria"}, 
            leader: {"title":"President","pos":"president","name":"Abdelmadjid Tebboune","url":"https://en.wikipedia.org/wiki/Abdelmadjid_Tebboune","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Abdelmadjid_Tebboune_%282023%29_%28cropped%29.jpg/500px-Abdelmadjid_Tebboune_%282023%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/500px-Flag_of_Algeria.svg.png"}, 
            symbol: {"url":""}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Algeria_%28centered_orthographic_projection%29.svg/500px-Algeria_%28centered_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Algiers","type":"capital"}], 
            language: {"list":["Arabic","Tamazight"]}, 
            demonym: {"name":"Algerian"}, 
            currency: [{"demonym":"Algerian","unit":"dinar"}], 
            tld: {"name":".dz"}, 
            largestCity: [{"name":"Algiers","type":"largest city"}], 
        }, 
        {
            country: {"name":"Andorra","url":"https://en.wikipedia.org/wiki/Andorra"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Xavier Espot Zamora","url":"https://en.wikipedia.org/wiki/Xavier_Espot_Zamora","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Xavier_Espot_Zamora_i_Isabel_Santos_a_l%27assemblea_de_l%27OSCE_2017_%28cropped%29.jpg/500px-Xavier_Espot_Zamora_i_Isabel_Santos_a_l%27assemblea_de_l%27OSCE_2017_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/500px-Flag_of_Andorra.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Andorra.svg/500px-Coat_of_arms_of_Andorra.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Location_Andorra_Europe.png/500px-Location_Andorra_Europe.png"}, 
            capital: [{"name":"Andorra la Vella","type":"capital"}], 
            language: {"list":["Catalan"]}, 
            demonym: {"name":"Andorran"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".ad"}, 
            largestCity: [{"name":"Andorra la Vella","type":"largest city"}], 
        }, 
        {
            country: {"name":"Angola","url":"https://en.wikipedia.org/wiki/Angola"}, 
            leader: {"title":"President","pos":"president","name":"João Lourenço","url":"https://en.wikipedia.org/wiki/Jo%C3%A3o_Louren%C3%A7o","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jo%C3%A3o_Louren%C3%A7o_2023.jpg/500px-Jo%C3%A3o_Louren%C3%A7o_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/500px-Flag_of_Angola.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Emblem_of_Angola.svg/500px-Emblem_of_Angola.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Angola_%28orthographic_projection%29.svg/500px-Angola_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Luanda","type":"capital"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"Angolan"}, 
            currency: [{"demonym":"Angolan","unit":"kwanza"}], 
            tld: {"name":".ao"}, 
            largestCity: [{"name":"Luanda","type":"largest city"}], 
        }, 
        {
            country: {"name":"Antigua and Barbuda","url":"https://en.wikipedia.org/wiki/Antigua_and_Barbuda"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Gaston Browne","url":"https://en.wikipedia.org/wiki/Gaston_Browne","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/10_06_2022_Segunda_Sess%C3%A3o_Plen%C3%A1ria_da_IX_C%C3%BApula_das_Am%C3%A9ricas_%2852137201805%29_%28cropped%29.jpg/500px-10_06_2022_Segunda_Sess%C3%A3o_Plen%C3%A1ria_da_IX_C%C3%BApula_das_Am%C3%A9ricas_%2852137201805%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/500px-Flag_of_Antigua_and_Barbuda.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Coat_of_arms_of_Antigua_and_Barbuda.svg/500px-Coat_of_arms_of_Antigua_and_Barbuda.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ATG_orthographic.svg/500px-ATG_orthographic.svg.png"}, 
            capital: [{"name":"St. John's","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Antiguan and Barbudan"}, 
            currency: [{"full":"East Caribbean dollar"}], 
            tld: {"name":".ag"}, 
            largestCity: [{"name":"St. John's","type":"largest city"}], 
        }, 
        {
            country: {"name":"Argentina","url":"https://en.wikipedia.org/wiki/Argentina"}, 
            leader: {"title":"President","pos":"president","name":"Alberto Fernández","url":"https://en.wikipedia.org/wiki/Alberto_Fern%C3%A1ndez","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Mensaje_de_fin_de_a%C3%B1o_del_Presidente_Alberto_Fern%C3%A1ndez_%28cropped%29.jpg/500px-Mensaje_de_fin_de_a%C3%B1o_del_Presidente_Alberto_Fern%C3%A1ndez_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/500px-Flag_of_Argentina.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sol_de_Mayo-Bandera_de_Argentina.svg/500px-Sol_de_Mayo-Bandera_de_Argentina.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/ARG_orthographic_%28%2Ball_claims%29.svg/500px-ARG_orthographic_%28%2Ball_claims%29.svg.png"}, 
            capital: [{"name":"Buenos Aires","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Argentine"}, 
            currency: [{"demonym":"Argentine","unit":"peso"}], 
            tld: {"name":".ar"}, 
            largestCity: [{"name":"Buenos Aires","type":"largest city"}], 
        }, 
        {
            country: {"name":"Armenia","url":"https://en.wikipedia.org/wiki/Armenia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Nikol Pashinyan","url":"https://en.wikipedia.org/wiki/Nikol_Pashinyan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB_%D0%9F%D0%B0%D1%88%D0%B8%D0%BD%D1%8F%D0%BD_%2820-04-2022%29.jpg/500px-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB_%D0%9F%D0%B0%D1%88%D0%B8%D0%BD%D1%8F%D0%BD_%2820-04-2022%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/500px-Flag_of_Armenia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Coat_of_arms_of_Armenia.svg/500px-Coat_of_arms_of_Armenia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Armenia_%28orthographic_projection%29.svg/500px-Armenia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Yerevan","type":"capital"}], 
            language: {"list":["Armenian"]}, 
            demonym: {"name":"Armenian"}, 
            currency: [{"demonym":"Armenian","unit":"dram"}], 
            tld: {"name":".am"}, 
            largestCity: [{"name":"Yerevan","type":"largest city"}], 
        }, 
        {
            country: {"name":"Australia","url":"https://en.wikipedia.org/wiki/Australia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Anthony Albanese","url":"https://en.wikipedia.org/wiki/Anthony_Albanese","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Anthony_Albanese_portrait_%28cropped%29.jpg/500px-Anthony_Albanese_portrait_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/500px-Flag_of_Australia_%28converted%29.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_Arms_of_Australia.svg/500px-Coat_of_Arms_of_Australia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Australia_with_AAT_%28orthographic_projection%29.svg/500px-Australia_with_AAT_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Canberra","type":"capital"}], 
            largestCity: [{"name":"Sydney","type":"largest city"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Australian"}, 
            currency: [{"demonym":"Australian","unit":"dollar"}], 
            tld: {"name":".au"}, 
        }, 
        {
            country: {"name":"Austria","url":"https://en.wikipedia.org/wiki/Austria"}, 
            leader: {"title":"Chancellor","pos":"chancellor","name":"Karl Nehammer","url":"https://en.wikipedia.org/wiki/Karl_Nehammer","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2020_Karl_Nehammer_Ministerrat_am_8.1.2020_%2849351366976%29_%28cropped%29_%28cropped%29.jpg/500px-2020_Karl_Nehammer_Ministerrat_am_8.1.2020_%2849351366976%29_%28cropped%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/500px-Flag_of_Austria.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Austria_Bundesadler.svg/500px-Austria_Bundesadler.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/EU-Austria_%28orthographic_projection%29.svg/500px-EU-Austria_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Vienna","type":"capital"}], 
            language: {"list":["German"]}, 
            demonym: {"name":"Austrian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".at"}, 
            largestCity: [{"name":"Vienna","type":"largest city"}], 
        }, 
        {
            country: {"name":"Azerbaijan","url":"https://en.wikipedia.org/wiki/Azerbaijan"}, 
            leader: {"title":"President","pos":"president","name":"Ilham Aliyev","url":"https://en.wikipedia.org/wiki/Ilham_Aliyev","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ilham_Aliyev_in_2023.jpg/500px-Ilham_Aliyev_in_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/500px-Flag_of_Azerbaijan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Emblem_of_Azerbaijan.svg/500px-Emblem_of_Azerbaijan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Azerbaijan_orthographic_projection.svg/500px-Azerbaijan_orthographic_projection.svg.png"}, 
            capital: [{"name":"Baku","type":"capital"}], 
            language: {"list":["Azerbaijani"]}, 
            demonym: {"name":"Azerbaijani"}, 
            currency: [{"demonym":"Azerbaijani","unit":"manat"}], 
            tld: {"name":".az"}, 
            largestCity: [{"name":"Baku","type":"largest city"}], 
        }, 
        {
            country: {"name":"The Bahamas","url":"https://en.wikipedia.org/wiki/The_Bahamas"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Philip Davis","url":"https://en.wikipedia.org/wiki/Philip_Davis_(Bahamian_politician)","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Philip_%22Brave%22_Davis_%28profile%29.jpg/500px-Philip_%22Brave%22_Davis_%28profile%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/500px-Flag_of_the_Bahamas.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Coat_of_arms_of_the_Bahamas.svg/500px-Coat_of_arms_of_the_Bahamas.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/The_Bahamas_on_the_globe_%28Americas_centered%29.svg/500px-The_Bahamas_on_the_globe_%28Americas_centered%29.svg.png"}, 
            capital: [{"name":"Nassau","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Bahamian"}, 
            currency: [{"demonym":"Bahamian","unit":"dollar"}], 
            tld: {"name":".bs"}, 
            largestCity: [{"name":"Nassau","type":"largest city"}], 
        }, 
        {
            country: {"name":"Bahrain","url":"https://en.wikipedia.org/wiki/Bahrain"}, 
            leader: {"title":"King","pos":"king","name":"Hamad bin Isa Al Khalifa","url":"https://en.wikipedia.org/wiki/Hamad_bin_Isa_Al_Khalifa","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/King_Hamad_bin_Isa_Al_Khalifa_of_Bahrain_Addresses_Reporters_at_the_Outset_of_a_Welcoming_Reception_for_Secretary_Kerry_in_Manama_%2826224844641%29_%28cropped%292.jpg/500px-King_Hamad_bin_Isa_Al_Khalifa_of_Bahrain_Addresses_Reporters_at_the_Outset_of_a_Welcoming_Reception_for_Secretary_Kerry_in_Manama_%2826224844641%29_%28cropped%292.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/500px-Flag_of_Bahrain.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_Arms_of_The_Kingdom_of_Bahrain.svg/500px-Coat_of_Arms_of_The_Kingdom_of_Bahrain.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Map_of_Bahrain.svg/500px-Map_of_Bahrain.svg.png"}, 
            capital: [{"name":"Manama","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Bahraini"}, 
            currency: [{"demonym":"Bahraini","unit":"dinar"}], 
            tld: {"name":".bh"}, 
            largestCity: [{"name":"Manama","type":"largest city"}], 
        }, 
        {
            country: {"name":"Bangladesh","url":"https://en.wikipedia.org/wiki/Bangladesh"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Sheikh Hasina","url":"https://en.wikipedia.org/wiki/Sheikh_Hasina","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/The_Prime_Minister%2C_Shri_Narendra_Modi_meeting_the_Prime_Minister_of_Bangladesh%2C_Mrs._Sheikh_Hasina%2C_at_New_York_on_September_24%2C_2015_%28cropped%29.jpg/500px-The_Prime_Minister%2C_Shri_Narendra_Modi_meeting_the_Prime_Minister_of_Bangladesh%2C_Mrs._Sheikh_Hasina%2C_at_New_York_on_September_24%2C_2015_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/500px-Flag_of_Bangladesh.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/National_emblem_of_Bangladesh.svg/500px-National_emblem_of_Bangladesh.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bangladesh_%28orthographic_projection%29.svg/500px-Bangladesh_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Dhaka","type":"capital"}], 
            language: {"list":["Bengali"]}, 
            demonym: {"name":"Bangladeshi"}, 
            currency: [{"demonym":"Bangladeshi","unit":"taka"}], 
            tld: {"name":".bd"}, 
            largestCity: [{"name":"Dhaka","type":"largest city"}], 
        }, 
        {
            country: {"name":"Barbados","url":"https://en.wikipedia.org/wiki/Barbados"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Mia Mottley","url":"https://en.wikipedia.org/wiki/Mia_Mottley","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mia_Mottley_%282021%29_%28cropped%29.jpg/500px-Mia_Mottley_%282021%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/500px-Flag_of_Barbados.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coat_of_arms_of_Barbados_%283%29.svg/500px-Coat_of_arms_of_Barbados_%283%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BRB_orthographic.svg/500px-BRB_orthographic.svg.png"}, 
            capital: [{"name":"Bridgetown","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Barbadian"}, 
            currency: [{"demonym":"Barbadian","unit":"dollar"}], 
            tld: {"name":".bb"}, 
            largestCity: [{"name":"Bridgetown","type":"largest city"}], 
        }, 
        {
            country: {"name":"Belarus","url":"https://en.wikipedia.org/wiki/Belarus"}, 
            leader: {"title":"President","pos":"president","name":"Alexander Lukashenko","url":"https://en.wikipedia.org/wiki/Alexander_Lukashenko","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9B%D1%83%D0%BA%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%BE_%2813-04-2023%29_%28cropped%29.jpg/500px-%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9B%D1%83%D0%BA%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%BE_%2813-04-2023%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/500px-Flag_of_Belarus.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Coat_of_arms_of_Belarus_%282020%E2%80%93present%29.svg/500px-Coat_of_arms_of_Belarus_%282020%E2%80%93present%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Europe-Belarus_%28orthographic_projection%29.svg/500px-Europe-Belarus_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Minsk","type":"capital"}], 
            language: {"list":["Belarusian","Russian"]}, 
            demonym: {"name":"Belarusian"}, 
            currency: [{"demonym":"Belarusian","unit":"ruble"}], 
            tld: {"name":".by"}, 
            largestCity: [{"name":"Minsk","type":"largest city"}], 
        }, 
        {
            country: {"name":"Belgium","url":"https://en.wikipedia.org/wiki/Belgium"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Alexander De Croo","url":"https://en.wikipedia.org/wiki/Alexander_De_Croo","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Alexander_De_Croo_%282022-04-28%29_%28cropped%29.jpg/500px-Alexander_De_Croo_%282022-04-28%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/500px-Flag_of_Belgium.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Great_coat_of_arms_of_Belgium.svg/500px-Great_coat_of_arms_of_Belgium.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Belgium_%28orthographic_projection%29.svg/500px-Belgium_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Brussels","type":"capital"}], 
            language: {"list":["Dutch","French","German"]}, 
            demonym: {"name":"Belgian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".be"}, 
            largestCity: [{"name":"Brussels","type":"largest city"}], 
        }, 
        {
            country: {"name":"Belize","url":"https://en.wikipedia.org/wiki/Belize"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Johnny Briceño","url":"https://en.wikipedia.org/wiki/Johnny_Brice%C3%B1o","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Johnny_Brice%C3%B1o_%2852135383761%29_%28cropped%29.jpg/500px-Johnny_Brice%C3%B1o_%2852135383761%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/500px-Flag_of_Belize.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Belize.svg/500px-Coat_of_arms_of_Belize.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BLZ_orthographic.svg/500px-BLZ_orthographic.svg.png"}, 
            capital: [{"name":"Belmopan","type":"capital"}], 
            largestCity: [{"name":"Belize City","type":"largest city"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Belizean"}, 
            currency: [{"demonym":"Belize","unit":"dollar"}], 
            tld: {"name":".bz"}, 
        }, 
        {
            country: {"name":"Benin","url":"https://en.wikipedia.org/wiki/Benin"}, 
            leader: {"title":"President","pos":"president","name":"Patrice Talon","url":"https://en.wikipedia.org/wiki/Patrice_Talon","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Patrice_Talon_at_USAID_HQ_%284%29_%28cropped%29.jpg/500px-Patrice_Talon_at_USAID_HQ_%284%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/500px-Flag_of_Benin.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Coat_of_arms_of_Benin.svg/500px-Coat_of_arms_of_Benin.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Benin_%28orthographic_projection_with_inset%29.svg/500px-Benin_%28orthographic_projection_with_inset%29.svg.png"}, 
            capital: [{"name":"Porto-Novo","type":"capital"}], 
            largestCity: [{"name":"Cotonou","type":"largest city"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Beninese"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".bj"}, 
        }, 
        {
            country: {"name":"Bhutan","url":"https://en.wikipedia.org/wiki/Bhutan"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Lotay Tshering","url":"https://en.wikipedia.org/wiki/Lotay_Tshering","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lotay_Tshering_December_2018_crop.jpg/500px-Lotay_Tshering_December_2018_crop.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/500px-Flag_of_Bhutan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_Bhutan.svg/500px-Emblem_of_Bhutan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bhutan_%28orthographic_projection%29.svg/500px-Bhutan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Thimphu","type":"capital"}], 
            language: {"list":["Dzongkha"]}, 
            demonym: {"name":"Bhutanese"}, 
            currency: [{"demonym":"Bhutanese","unit":"ngultrum"},{"other":"Indian rupee"}], 
            tld: {"name":".bt"}, 
            largestCity: [{"name":"Thimphu","type":"largest city"}], 
        }, 
        {
            country: {"name":"Bolivia","url":"https://en.wikipedia.org/wiki/Bolivia"}, 
            leader: {"title":"President","pos":"president","name":"Luis Arce","url":"https://en.wikipedia.org/wiki/Luis_Arce","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_I.png/500px-Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_I.png"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/500px-Flag_of_Bolivia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Banner_of_the_Qulla_Suyu.svg/500px-Banner_of_the_Qulla_Suyu.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/BOL_orthographic.svg/500px-BOL_orthographic.svg.png"}, 
            capital: [{"name":"Sucre","type":"capital"}], 
            largestCity: [{"name":"Santa Cruz de la Sierra","type":"largest city"}], 
            language: {"list":["Spanish","Quechua","Aymara","Guarani"]}, 
            demonym: {"name":"Bolivian"}, 
            currency: [{"demonym":"Bolivian","unit":"boliviano"}], 
            tld: {"name":".bo"}, 
        }, 
        {
            country: {"name":"Bosnia and Herzegovina","url":"https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina"}, 
            leader: {"title":"High Representative","pos":"high representative","name":"Christian Schmidt","url":"https://en.wikipedia.org/wiki/Christian_Schmidt_(politician)","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Christian_Schmidt_%28cropped%29.jpg/500px-Christian_Schmidt_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/500px-Flag_of_Bosnia_and_Herzegovina.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coat_of_arms_of_Bosnia_and_Herzegovina.svg/500px-Coat_of_arms_of_Bosnia_and_Herzegovina.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Europe-Bosnia_and_Herzegovina.svg/500px-Europe-Bosnia_and_Herzegovina.svg.png"}, 
            capital: [{"name":"Sarajevo","type":"capital"}], 
            language: {"list":["Bosnian","Croatian","Serbian"]}, 
            demonym: {"name":"Bosnian"}, 
            currency: [{"demonym":"Bosnia and Herzegovina","unit":"convertible mark"}], 
            tld: {"name":".ba"}, 
            largestCity: [{"name":"Sarajevo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Botswana","url":"https://en.wikipedia.org/wiki/Botswana"}, 
            leader: {"title":"President","pos":"president","name":"Mokgweetsi Masisi","url":"https://en.wikipedia.org/wiki/Mokgweetsi_Masisi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mokgweetsi_E.K._Masisi%2C_President_of_the_Republic_of_Botswana.jpg/500px-Mokgweetsi_E.K._Masisi%2C_President_of_the_Republic_of_Botswana.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/500px-Flag_of_Botswana.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_Botswana.svg/500px-Coat_of_arms_of_Botswana.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Botswana_%28centered_orthographic_projection%29.svg/500px-Botswana_%28centered_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Gaborone","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Batswana"}, 
            currency: [{"demonym":"Botswana","unit":"pula"}], 
            tld: {"name":".bw"}, 
            largestCity: [{"name":"Gaborone","type":"largest city"}], 
        }, 
        {
            country: {"name":"Brazil","url":"https://en.wikipedia.org/wiki/Brazil"}, 
            leader: {"title":"President","pos":"president","name":"Luiz Inácio Lula da Silva","url":"https://en.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28estreita%29.jpg/500px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28estreita%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/500px-Flag_of_Brazil.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/500px-Coat_of_arms_of_Brazil.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BRA_orthographic.svg/500px-BRA_orthographic.svg.png"}, 
            capital: [{"name":"Brasília","type":"capital"}], 
            largestCity: [{"name":"São Paulo","type":"largest city"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"Brazilian"}, 
            currency: [{"demonym":"Brazilian","unit":"real"}], 
            tld: {"name":".br"}, 
        }, 
        {
            country: {"name":"Brunei","url":"https://en.wikipedia.org/wiki/Brunei"}, 
            leader: {"title":"Sultan","pos":"sultan","name":"Hassanal Bolkiah","url":"https://en.wikipedia.org/wiki/Hassanal_Bolkiah","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hassanal_Bolkiah_at_the_Enthronement_of_Naruhito_%281%29.jpg/500px-Hassanal_Bolkiah_at_the_Enthronement_of_Naruhito_%281%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/500px-Flag_of_Brunei.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Emblem_of_Brunei.svg/500px-Emblem_of_Brunei.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Brunei_%28orthographic_projection%29.svg/500px-Brunei_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Bandar Seri Begawan","type":"capital"}], 
            language: {"list":["Malay"]}, 
            demonym: {"name":"Bruneian"}, 
            currency: [{"demonym":"Brunei","unit":"dollar"}], 
            tld: {"name":".bn"}, 
            largestCity: [{"name":"Bandar Seri Begawan","type":"largest city"}], 
        }, 
        {
            country: {"name":"Bulgaria","url":"https://en.wikipedia.org/wiki/Bulgaria"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Nikolai Denkov","url":"https://en.wikipedia.org/wiki/Nikolai_Denkov","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nikolai_Denkov_full_portrait_2021.jpg/500px-Nikolai_Denkov_full_portrait_2021.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/500px-Flag_of_Bulgaria.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coat_of_arms_of_Bulgaria.svg/500px-Coat_of_arms_of_Bulgaria.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/EU-Bulgaria.svg/500px-EU-Bulgaria.svg.png"}, 
            capital: [{"name":"Sofia","type":"capital"}], 
            language: {"list":["Bulgarian"]}, 
            demonym: {"name":"Bulgarian"}, 
            currency: [{"demonym":"Bulgarian","unit":"lev"}], 
            tld: {"name":".bg"}, 
            largestCity: [{"name":"Sofia","type":"largest city"}], 
        }, 
        {
            country: {"name":"Burkina Faso","url":"https://en.wikipedia.org/wiki/Burkina_Faso"}, 
            leader: {"title":"President of the Patriotic Movement for Safeguard and Restoration","pos":"president of the Patriotic Movement for Safeguard and Restoration","name":"Ibrahim Traoré","url":"https://en.wikipedia.org/wiki/Ibrahim_Traor%C3%A9","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ibrahim_Traor%C3%A9_2023_%28cropped%29.jpg/500px-Ibrahim_Traor%C3%A9_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/500px-Flag_of_Burkina_Faso.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_Burkina_Faso.svg/500px-Coat_of_arms_of_Burkina_Faso.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Burkina_Faso_%28orthographic_projection%29.svg/500px-Burkina_Faso_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Ouagadougou","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Burkinabè"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".bf"}, 
            largestCity: [{"name":"Ouagadougou","type":"largest city"}], 
        }, 
        {
            country: {"name":"Burundi","url":"https://en.wikipedia.org/wiki/Burundi"}, 
            leader: {"title":"President","pos":"president","name":"Évariste Ndayishimiye","url":"https://en.wikipedia.org/wiki/%C3%89variste_Ndayishimiye","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%D0%AD%D0%B2%D0%B0%D1%80%D0%B8%D1%81%D1%82_%D0%9D%D0%B4%D0%B0%D0%B9%D0%B8%D1%88%D0%B8%D0%BC%D0%B8%D0%B5_%2818-02-2022%29_%28cropped%29.jpg/500px-%D0%AD%D0%B2%D0%B0%D1%80%D0%B8%D1%81%D1%82_%D0%9D%D0%B4%D0%B0%D0%B9%D0%B8%D1%88%D0%B8%D0%BC%D0%B8%D0%B5_%2818-02-2022%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/500px-Flag_of_Burundi.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Coat_of_arms_of_Burundi.svg/500px-Coat_of_arms_of_Burundi.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Burundi_%28orthographic_projection%29.svg/500px-Burundi_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Gitega","type":"capital"}], 
            largestCity: [{"name":"Bujumbura","type":"largest city"}], 
            language: {"list":["Kirundi","French","English"]}, 
            demonym: {}, 
            currency: [{"demonym":"Burundian","unit":"franc"}], 
            tld: {"name":".bi"}, 
        }, 
        {
            country: {"name":"Cambodia","url":"https://en.wikipedia.org/wiki/Cambodia"}, 
            leader: {"title":"President of the People's Party","pos":"president of the People's Party","name":"Hun Sen","url":"https://en.wikipedia.org/wiki/Hun_Sen","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Prime_Minister_Hun_Sen_in_2022.jpg/500px-Prime_Minister_Hun_Sen_in_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/500px-Flag_of_Cambodia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Royal_arms_of_Cambodia.svg/500px-Royal_arms_of_Cambodia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cambodia_on_the_globe_%28Cambodia_centered%29.svg/500px-Cambodia_on_the_globe_%28Cambodia_centered%29.svg.png"}, 
            capital: [{"name":"Phnom Penh","type":"capital"}], 
            language: {"list":["Khmer"]}, 
            demonym: {"name":"Cambodian"}, 
            currency: [{"demonym":"Cambodian","unit":"riel"},{"other":"United States dollar"}], 
            tld: {"name":".kh"}, 
            largestCity: [{"name":"Phnom Penh","type":"largest city"}], 
        }, 
        {
            country: {"name":"Cameroon","url":"https://en.wikipedia.org/wiki/Cameroon"}, 
            leader: {"title":"President","pos":"president","name":"Paul Biya","url":"https://en.wikipedia.org/wiki/Paul_Biya","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Paul_Biya_2014.png/500px-Paul_Biya_2014.png"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/500px-Flag_of_Cameroon.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Coat_of_arms_of_Cameroon.svg/500px-Coat_of_arms_of_Cameroon.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cameroon_%28orthographic_projection%29.svg/500px-Cameroon_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Yaoundé","type":"capital"}], 
            largestCity: [{"name":"Douala","type":"largest city"}], 
            language: {"list":["French","English"]}, 
            demonym: {"name":"Cameroonian"}, 
            currency: [{"full":"Central African CFA franc"}], 
            tld: {"name":".cm"}, 
        }, 
        {
            country: {"name":"Canada","url":"https://en.wikipedia.org/wiki/Canada"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Justin Trudeau","url":"https://en.wikipedia.org/wiki/Justin_Trudeau","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Justin_Trudeau_at_the_2023_US-Canada_Summit_%2852807412945%29_%28cropped%29.jpg/500px-Justin_Trudeau_at_the_2023_US-Canada_Summit_%2852807412945%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/500px-Flag_of_Canada_%28Pantone%29.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Coat_of_arms_of_Canada.svg/500px-Coat_of_arms_of_Canada.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CAN_orthographic.svg/500px-CAN_orthographic.svg.png"}, 
            capital: [{"name":"Ottawa","type":"capital"}], 
            largestCity: [{"name":"Toronto","type":"largest city"}], 
            language: {"list":["English","French"]}, 
            demonym: {"name":"Canadian"}, 
            currency: [{"demonym":"Canadian","unit":"dollar"}], 
            tld: {"name":".ca"}, 
        }, 
        {
            country: {"name":"Cape Verde","url":"https://en.wikipedia.org/wiki/Cape_Verde"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Ulisses Correia e Silva","url":"https://en.wikipedia.org/wiki/Ulisses_Correia_e_Silva","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Ulisses_Correia_e_Silva.jpg/500px-Ulisses_Correia_e_Silva.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/500px-Flag_of_Cape_Verde.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coat_of_arms_of_Cape_Verde.svg/500px-Coat_of_arms_of_Cape_Verde.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cape_Verde_%28orthographic_projection%29.svg/500px-Cape_Verde_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Praia","type":"capital"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"Cape Verdean"}, 
            currency: [{"demonym":"Cape Verdean","unit":"escudo"}], 
            tld: {"name":".cv"}, 
            largestCity: [{"name":"Praia","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Central African Republic","url":"https://en.wikipedia.org/wiki/Central_African_Republic"}, 
            leader: {"title":"President","pos":"president","name":"Faustin-Archange Touadéra","url":"https://en.wikipedia.org/wiki/Faustin-Archange_Touad%C3%A9ra","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Faustin_Touadera_October_2019.jpg/500px-Faustin_Touadera_October_2019.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/500px-Flag_of_the_Central_African_Republic.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Coat_of_arms_of_the_Central_African_Republic.svg/500px-Coat_of_arms_of_the_Central_African_Republic.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Central_African_Republic_%28centered_orthographic_projection%29.svg/500px-Central_African_Republic_%28centered_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Bangui","type":"capital"}], 
            language: {"list":["Sango","French"]}, 
            demonym: {"name":"Central African"}, 
            currency: [{"full":"Central African CFA franc"},{"other":"bitcoin"}], 
            tld: {"name":".cf"}, 
            largestCity: [{"name":"Bangui","type":"largest city"}], 
        }, 
        {
            country: {"name":"Chad","url":"https://en.wikipedia.org/wiki/Chad"}, 
            leader: {"title":"Transitional President","pos":"transitional president","name":"Mahamat Déby","url":"https://en.wikipedia.org/wiki/Mahamat_D%C3%A9by","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mahamat_Idriss_D%C3%A9by_in_2022.jpg/500px-Mahamat_Idriss_D%C3%A9by_in_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/500px-Flag_of_Chad.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Coat_of_arms_of_Chad.svg/500px-Coat_of_arms_of_Chad.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chad_%28orthographic_projection%29.svg/500px-Chad_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"N'Djamena","type":"capital"}], 
            language: {"list":["Arabic","French"]}, 
            demonym: {"name":"Chadian"}, 
            currency: [{"full":"Central African CFA franc"}], 
            tld: {"name":".td"}, 
            largestCity: [{"name":"N'Djamena","type":"largest city"}], 
        }, 
        {
            country: {"name":"Chile","url":"https://en.wikipedia.org/wiki/Chile"}, 
            leader: {"title":"President","pos":"president","name":"Gabriel Boric","url":"https://en.wikipedia.org/wiki/Gabriel_Boric","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Retrato_Oficial_Presidente_Boric_Font.jpg/500px-Retrato_Oficial_Presidente_Boric_Font.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/500px-Flag_of_Chile.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Coat_of_arms_of_Chile_%28c%29.svg/500px-Coat_of_arms_of_Chile_%28c%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CHL_orthographic_%28%2Ball_claims%29.svg/500px-CHL_orthographic_%28%2Ball_claims%29.svg.png"}, 
            capital: [{"name":"Santiago","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Chilean"}, 
            currency: [{"demonym":"Chilean","unit":"peso"}], 
            tld: {"name":".cl"}, 
            largestCity: [{"name":"Santiago","type":"largest city"}], 
        }, 
        {
            country: {"name":"China","url":"https://en.wikipedia.org/wiki/China"}, 
            leader: {"title":"General Secretary of the Communist Party","pos":"general secretary of the Communist Party","name":"Xi Jinping","url":"https://en.wikipedia.org/wiki/Xi_Jinping","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Xi_Jinping_with_Macron_and_Von_der_Leyen_2023.jpg/500px-Xi_Jinping_with_Macron_and_Von_der_Leyen_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/500px-Flag_of_the_People%27s_Republic_of_China.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg/500px-National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CHN_orthographic.svg/500px-CHN_orthographic.svg.png"}, 
            capital: [{"name":"Beijing","type":"capital"}], 
            largestCity: [{"name":"Shanghai","type":"largest city"}], 
            language: {"list":["Standard Chinese"]}, 
            demonym: {"name":"Chinese"}, 
            currency: [{"full":"renminbi"}], 
            tld: {"name":".cn"}, 
        }, 
        {
            country: {"name":"Colombia","url":"https://en.wikipedia.org/wiki/Colombia"}, 
            leader: {"title":"President","pos":"president","name":"Gustavo Petro","url":"https://en.wikipedia.org/wiki/Gustavo_Petro","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Presidente_Gustavo_Petro_Urrego.jpg/500px-Presidente_Gustavo_Petro_Urrego.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/500px-Flag_of_Colombia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Coat_of_arms_of_Colombia.svg/500px-Coat_of_arms_of_Colombia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg/500px-COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg.png"}, 
            capital: [{"name":"Bogotá","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Colombian"}, 
            currency: [{"demonym":"Colombian","unit":"peso"}], 
            tld: {"name":".co"}, 
            largestCity: [{"name":"Bogotá","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Comoros","url":"https://en.wikipedia.org/wiki/Comoros"}, 
            leader: {"title":"President","pos":"president","name":"Azali Assoumani","url":"https://en.wikipedia.org/wiki/Azali_Assoumani","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Azali_Assoumani_in_New_York_City_on_September_19%2C_2023_-_53199606411_%28cropped%29.jpg/500px-Azali_Assoumani_in_New_York_City_on_September_19%2C_2023_-_53199606411_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/500px-Flag_of_the_Comoros.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Seal_of_the_Comoros.svg/500px-Seal_of_the_Comoros.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Comoros_%28orthographic_projection%29.svg/500px-Comoros_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Moroni","type":"capital"}], 
            language: {"list":["Comorian","French","Arabic"]}, 
            demonym: {"name":"Comorian"}, 
            currency: [{"demonym":"Comorian","unit":"franc"}], 
            tld: {"name":".km"}, 
            largestCity: [{"name":"Moroni","type":"largest city"}], 
        }, 
        {
            country: {"name":"Congo-Kinshasa","url":"https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo"}, 
            leader: {"title":"President","pos":"president","name":"Félix Tshisekedi","url":"https://en.wikipedia.org/wiki/F%C3%A9lix_Tshisekedi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sergio_Mattarella_F%C3%A9lix_Tshisekedi_al_Quirinale_2021_%282%29_%28cropped%29.jpg/500px-Sergio_Mattarella_F%C3%A9lix_Tshisekedi_al_Quirinale_2021_%282%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/500px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Coat_of_Arms_Democratic_Republic_of_Congo.png/500px-Coat_of_Arms_Democratic_Republic_of_Congo.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Democratic_Republic_of_the_Congo_%28orthographic_projection%29.svg/500px-Democratic_Republic_of_the_Congo_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Kinshasa","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Congolese"}, 
            currency: [{"demonym":"Congolese","unit":"franc"}], 
            tld: {"name":".cd"}, 
            largestCity: [{"name":"Kinshasa","type":"largest city"}], 
        }, 
        {
            country: {"name":"Congo-Brazzaville","url":"https://en.wikipedia.org/wiki/Republic_of_the_Congo"}, 
            leader: {"title":"President","pos":"president","name":"Denis Sassou Nguesso","url":"https://en.wikipedia.org/wiki/Denis_Sassou_Nguesso","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Denis_Sassou_Nguesso_2014.jpg/500px-Denis_Sassou_Nguesso_2014.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/500px-Flag_of_the_Republic_of_the_Congo.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Coat_of_arms_of_the_Republic_of_the_Congo.svg/500px-Coat_of_arms_of_the_Republic_of_the_Congo.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Republic_of_the_Congo_%28orthographic_projection%29.svg/500px-Republic_of_the_Congo_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Brazzaville","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Congolese"}, 
            currency: [{"full":"Central African CFA franc"}], 
            tld: {"name":".cg"}, 
            largestCity: [{"name":"Brazzaville","type":"largest city"}], 
        }, 
        {
            country: {"name":"Costa Rica","url":"https://en.wikipedia.org/wiki/Costa_Rica"}, 
            leader: {"title":"President","pos":"president","name":"Rodrigo Chaves Robles","url":"https://en.wikipedia.org/wiki/Rodrigo_Chaves_Robles","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rodrigo_Chaves_2022-5-16_Foto_by_Julieth_Mendez_%28cropped%29.jpg/500px-Rodrigo_Chaves_2022-5-16_Foto_by_Julieth_Mendez_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/500px-Flag_of_Costa_Rica.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_Costa_Rica.svg/500px-Coat_of_arms_of_Costa_Rica.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/CRI_orthographic.svg/500px-CRI_orthographic.svg.png"}, 
            capital: [{"name":"San José","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Costa Rican"}, 
            currency: [{"demonym":"Costa Rican","unit":"colón"}], 
            tld: {"name":".cr"}, 
            largestCity: [{"name":"San José","type":"largest city"}], 
        }, 
        {
            country: {"name":"Croatia","url":"https://en.wikipedia.org/wiki/Croatia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Andrej Plenković","url":"https://en.wikipedia.org/wiki/Andrej_Plenkovi%C4%87","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Obisk_predsednika_vlade_Hrva%C5%A1ke_Andreja_Plenkovi%C4%87a_-_28._3._2023_%2852777071695%29_%28cropped%29.jpg/500px-Obisk_predsednika_vlade_Hrva%C5%A1ke_Andreja_Plenkovi%C4%87a_-_28._3._2023_%2852777071695%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/500px-Flag_of_Croatia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coat_of_arms_of_Croatia.svg/500px-Coat_of_arms_of_Croatia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/EU-Croatia_%28orthographic_projection%29.png/500px-EU-Croatia_%28orthographic_projection%29.png"}, 
            capital: [{"name":"Zagreb","type":"capital"}], 
            language: {"list":["Croatian"]}, 
            demonym: {"name":"Croatian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".hr"}, 
            largestCity: [{"name":"Zagreb","type":"largest city"}], 
        }, 
        {
            country: {"name":"Cuba","url":"https://en.wikipedia.org/wiki/Cuba"}, 
            leader: {"title":"First Secretary of the Communist Party","pos":"first secretary of the Communist Party","name":"Miguel Díaz-Canel","url":"https://en.wikipedia.org/wiki/Miguel_D%C3%ADaz-Canel","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Miguel_D%C3%ADaz-Canel_2023_%28cropped%29.jpg/500px-Miguel_D%C3%ADaz-Canel_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/500px-Flag_of_Cuba.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Coat_of_arms_of_Cuba.svg/500px-Coat_of_arms_of_Cuba.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/CUB_orthographic.svg/500px-CUB_orthographic.svg.png"}, 
            capital: [{"name":"Havana","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Cuban"}, 
            currency: [{"demonym":"Cuban","unit":"peso"}], 
            tld: {"name":".cu"}, 
            largestCity: [{"name":"Havana","type":"largest city"}], 
        }, 
        {
            country: {"name":"Cyprus","url":"https://en.wikipedia.org/wiki/Cyprus"}, 
            leader: {"title":"President","pos":"president","name":"Nikos Christodoulides","url":"https://en.wikipedia.org/wiki/Nikos_Christodoulides","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/N%C3%ADkos_Christodoul%C3%ADdis%2C_23.03.23.jpg/500px-N%C3%ADkos_Christodoul%C3%ADdis%2C_23.03.23.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/500px-Flag_of_Cyprus.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Cyprus_%282006%29.svg/500px-Coat_of_arms_of_Cyprus_%282006%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Republic_of_Cyprus_%28orthographic_projection%29.svg/500px-Republic_of_Cyprus_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Nicosia","type":"capital"}], 
            language: {"list":["Greek","Turkish"]}, 
            demonym: {"name":"Cypriot"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".cy"}, 
            largestCity: [{"name":"Nicosia","type":"largest city"}], 
        }, 
        {
            country: {"name":"Czechia","url":"https://en.wikipedia.org/wiki/Czech_Republic"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Petr Fiala","url":"https://en.wikipedia.org/wiki/Petr_Fiala","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Petr_Fiala_%2851940875566%29.jpg/500px-Petr_Fiala_%2851940875566%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/500px-Flag_of_the_Czech_Republic.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coat_of_arms_of_the_Czech_Republic.svg/500px-Coat_of_arms_of_the_Czech_Republic.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/EU-Czech_Republic.svg/500px-EU-Czech_Republic.svg.png"}, 
            capital: [{"name":"Prague","type":"capital"}], 
            language: {"list":["Czech"]}, 
            demonym: {"name":"Czech"}, 
            currency: [{"demonym":"Czech","unit":"koruna"}], 
            tld: {"name":".cz"}, 
            largestCity: [{"name":"Prague","type":"largest city"}], 
        }, 
        {
            country: {"name":"Denmark","url":"https://en.wikipedia.org/wiki/Denmark"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Mette Frederiksen","url":"https://en.wikipedia.org/wiki/Mette_Frederiksen","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mette_Frederiksen_K%C3%B6%C3%B6penhaminassa_4.5.2022_%2852049397038%29_%28cropped%29.jpg/500px-Mette_Frederiksen_K%C3%B6%C3%B6penhaminassa_4.5.2022_%2852049397038%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/500px-Flag_of_Denmark.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/National_Coat_of_arms_of_Denmark.svg/500px-National_Coat_of_arms_of_Denmark.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Denmark_%28orthographic_projection%29.svg/500px-Denmark_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Copenhagen","type":"capital"}], 
            language: {"list":["Danish"]}, 
            demonym: {"name":"Danish"}, 
            currency: [{"demonym":"Danish","unit":"krone"}], 
            tld: {"name":".dk"}, 
            largestCity: [{"name":"Copenhagen","type":"largest city"}], 
        }, 
        {
            country: {"name":"Djibouti","url":"https://en.wikipedia.org/wiki/Djibouti"}, 
            leader: {"title":"President","pos":"president","name":"Ismaïl Omar Guelleh","url":"https://en.wikipedia.org/wiki/Isma%C3%AFl_Omar_Guelleh","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Djiboutian_President_Ismail_Omar_Guelleh_at_the_presidential_palace_in_Djibouti%2C_Republic_of_Djibouti%2C_September_24%2C_2023_-_%28cropped%29.jpg/500px-Djiboutian_President_Ismail_Omar_Guelleh_at_the_presidential_palace_in_Djibouti%2C_Republic_of_Djibouti%2C_September_24%2C_2023_-_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/500px-Flag_of_Djibouti.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Emblem_of_Djibouti.svg/500px-Emblem_of_Djibouti.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Djibouti_%28orthographic_projection%29.svg/500px-Djibouti_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Djibouti","type":"capital"}], 
            language: {"list":["Arabic","French"]}, 
            demonym: {"name":"Djiboutian"}, 
            currency: [{"demonym":"Djiboutian","unit":"franc"}], 
            tld: {"name":".dj"}, 
            largestCity: [{"name":"Djibouti","type":"largest city"}], 
        }, 
        {
            country: {"name":"Dominica","url":"https://en.wikipedia.org/wiki/Dominica"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Roosevelt Skerrit","url":"https://en.wikipedia.org/wiki/Roosevelt_Skerrit","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Swearing_in_of_His_Excellency_Charles_A_Savarin%2C_DAH%2C_President_of_the_Commonwealth_of_Dominica_%2831312241638%29.jpg/500px-Swearing_in_of_His_Excellency_Charles_A_Savarin%2C_DAH%2C_President_of_the_Commonwealth_of_Dominica_%2831312241638%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/500px-Flag_of_Dominica.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Coat_of_arms_of_Dominica.svg/500px-Coat_of_arms_of_Dominica.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dominica_on_the_globe_%28Americas_centered%29.svg/500px-Dominica_on_the_globe_%28Americas_centered%29.svg.png"}, 
            capital: [{"name":"Roseau","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Dominican"}, 
            currency: [{"full":"East Caribbean dollar"}], 
            tld: {"name":".dm"}, 
            largestCity: [{"name":"Roseau","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Dominican Republic","url":"https://en.wikipedia.org/wiki/Dominican_Republic"}, 
            leader: {"title":"President","pos":"president","name":"Luis Abinader","url":"https://en.wikipedia.org/wiki/Luis_Abinader","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Luis_Abinader_en_2022.jpg/500px-Luis_Abinader_en_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/500px-Flag_of_the_Dominican_Republic.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_the_Dominican_Republic.svg/500px-Coat_of_arms_of_the_Dominican_Republic.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dominican_Republic_%28orthographic_projection%29.svg/500px-Dominican_Republic_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Santo Domingo","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Dominican"}, 
            currency: [{"demonym":"Dominican","unit":"peso"}], 
            tld: {"name":".do"}, 
            largestCity: [{"name":"Santo Domingo","type":"largest city"}], 
        }, 
        {
            country: {"name":"East Timor","url":"https://en.wikipedia.org/wiki/East_Timor"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Xanana Gusmão","url":"https://en.wikipedia.org/wiki/Xanana_Gusm%C3%A3o","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Xanana_2011_%28cropped%29.jpg/500px-Xanana_2011_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/500px-Flag_of_East_Timor.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_East_Timor.svg/500px-Coat_of_arms_of_East_Timor.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Timor_Leste_%28orthographic_projection%29.svg/500px-Timor_Leste_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Dili","type":"capital"}], 
            language: {"list":["Portuguese","Tetum"]}, 
            demonym: {"name":"East Timorese"}, 
            currency: [{"full":"United States dollar"}], 
            tld: {"name":".tl"}, 
            largestCity: [{"name":"Dili","type":"largest city"}], 
        }, 
        {
            country: {"name":"Ecuador","url":"https://en.wikipedia.org/wiki/Ecuador"}, 
            leader: {"title":"President","pos":"president","name":"Guillermo Lasso","url":"https://en.wikipedia.org/wiki/Guillermo_Lasso","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Guillermo_Lasso_2023.jpg/500px-Guillermo_Lasso_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/500px-Flag_of_Ecuador.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/500px-Coat_of_arms_of_Ecuador.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ECU_orthographic.svg/500px-ECU_orthographic.svg.png"}, 
            capital: [{"name":"Quito","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Ecuadorian"}, 
            currency: [{"full":"United States dollar"}], 
            tld: {"name":".ec"}, 
            largestCity: [{"name":"Quito","type":"largest city"}], 
        }, 
        {
            country: {"name":"Egypt","url":"https://en.wikipedia.org/wiki/Egypt"}, 
            leader: {"title":"President","pos":"president","name":"Abdel Fattah el-Sisi","url":"https://en.wikipedia.org/wiki/Abdel_Fattah_el-Sisi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/AbdelFattah_Elsisi_%28cropped%29.jpg/500px-AbdelFattah_Elsisi_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/500px-Flag_of_Egypt.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coat_of_arms_of_Egypt_%28Official%29.svg/500px-Coat_of_arms_of_Egypt_%28Official%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/EGY_orthographic.svg/500px-EGY_orthographic.svg.png"}, 
            capital: [{"name":"Cairo","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Egyptian"}, 
            currency: [{"demonym":"Egyptian","unit":"pound"}], 
            tld: {"name":".eg"}, 
            largestCity: [{"name":"Cairo","type":"largest city"}], 
        }, 
        {
            country: {"name":"El Salvador","url":"https://en.wikipedia.org/wiki/El_Salvador"}, 
            leader: {"title":"President","pos":"president","name":"Nayib Bukele","url":"https://en.wikipedia.org/wiki/Nayib_Bukele","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Presidente_Nayib_Bukele_%28cropped%29.jpg/500px-Presidente_Nayib_Bukele_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/500px-Flag_of_El_Salvador.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Coat_of_arms_of_El_Salvador.svg/500px-Coat_of_arms_of_El_Salvador.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/El_Salvador_%28orthographic_projection%29.svg/500px-El_Salvador_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"San Salvador","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Salvadoran"}, 
            currency: [{"full":"United States dollar"},{"other":"bitcoin"}], 
            tld: {"name":".sv"}, 
            largestCity: [{"name":"San Salvador","type":"largest city"}], 
        }, 
        {
            country: {"name":"Equatorial Guinea","url":"https://en.wikipedia.org/wiki/Equatorial_Guinea"}, 
            leader: {"title":"President","pos":"president","name":"Teodoro Obiang Nguema Mbasogo","url":"https://en.wikipedia.org/wiki/Teodoro_Obiang_Nguema_Mbasogo","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Teodoro_Obiang_2019_%28cropped%29.jpg/500px-Teodoro_Obiang_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/500px-Flag_of_Equatorial_Guinea.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Coat_of_arms_of_Equatorial_Guinea.svg/500px-Coat_of_arms_of_Equatorial_Guinea.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GNQ_orthographic.svg/500px-GNQ_orthographic.svg.png"}, 
            capital: [{"name":"Malabo","type":"capital"}], 
            largestCity: [{"name":"Malabo","type":"largest city"}], 
            language: {"list":["Spanish","French","Portuguese"]}, 
            demonym: {"name":"Equatoguinean"}, 
            currency: [{"full":"Central African CFA franc"}], 
            tld: {"name":".gq"}, 
        }, 
        {
            country: {"name":"Eritrea","url":"https://en.wikipedia.org/wiki/Eritrea"}, 
            leader: {"title":"President","pos":"president","name":"Isaias Afwerki","url":"https://en.wikipedia.org/wiki/Isaias_Afwerki","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Isaias_Afwerki_%282023-05-31%29.jpg/500px-Isaias_Afwerki_%282023-05-31%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/500px-Flag_of_Eritrea.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emblem_of_Eritrea_%28or_argent_azur%29.svg/500px-Emblem_of_Eritrea_%28or_argent_azur%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Eritrea_%28Africa_orthographic_projection%29.svg/500px-Eritrea_%28Africa_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Asmara","type":"capital"}], 
            language: {"list":["Tigrinya","Arabic","English"]}, 
            demonym: {"name":"Eritrean"}, 
            currency: [{"demonym":"Eritrean","unit":"nakfa"}], 
            tld: {"name":".er"}, 
            largestCity: [{"name":"Asmara","type":"largest city"}], 
        }, 
        {
            country: {"name":"Estonia","url":"https://en.wikipedia.org/wiki/Estonia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Kaja Kallas","url":"https://en.wikipedia.org/wiki/Kaja_Kallas","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kaja_Kallas_%28crop%29.jpg/500px-Kaja_Kallas_%28crop%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/500px-Flag_of_Estonia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Coat_of_arms_of_Estonia.svg/500px-Coat_of_arms_of_Estonia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/EU-Estonia.svg/500px-EU-Estonia.svg.png"}, 
            capital: [{"name":"Tallinn","type":"capital"}], 
            language: {"list":["Estonian"]}, 
            demonym: {"name":"Estonian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".ee"}, 
            largestCity: [{"name":"Tallinn","type":"largest city"}], 
        }, 
        {
            country: {"name":"Eswatini","url":"https://en.wikipedia.org/wiki/Eswatini"}, 
            leader: {"title":"Ngwenyama","pos":"ngwenyama","name":"Mswati III","url":"https://en.wikipedia.org/wiki/Mswati_III","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/King_Mswati_III_2014.jpg/500px-King_Mswati_III_2014.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/500px-Flag_of_Eswatini.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Coat_of_arms_of_Eswatini.svg/500px-Coat_of_arms_of_Eswatini.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eswatini_on_the_globe_%28special_marker%29_%28Madagascar_centered%29.svg/500px-Eswatini_on_the_globe_%28special_marker%29_%28Madagascar_centered%29.svg.png"}, 
            capital: [{"name":"Mbabane","type":"executive"},{"name":"Lobamba","type":"legislative"}], 
            largestCity: [{"name":"Mbabane","type":"largest city"}], 
            language: {"list":["Swazi","English"]}, 
            demonym: {"name":"Swazi"}, 
            currency: [{"demonym":"Swazi","unit":"lilangeni"},{"other":"South African rand"}], 
            tld: {"name":".sz"}, 
        }, 
        {
            country: {"name":"Ethiopia","url":"https://en.wikipedia.org/wiki/Ethiopia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Abiy Ahmed","url":"https://en.wikipedia.org/wiki/Abiy_Ahmed","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Abiy_Ahmed_with_LI_Yong_2018_%28cropped%29.jpeg/500px-Abiy_Ahmed_with_LI_Yong_2018_%28cropped%29.jpeg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/500px-Flag_of_Ethiopia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Emblem_of_Ethiopia.svg/500px-Emblem_of_Ethiopia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ethiopia_%28Africa_orthographic_projection%29.svg/500px-Ethiopia_%28Africa_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Addis Ababa","type":"capital"}], 
            language: {"list":["Afar","Amharic","Oromo","Somali","Tigrinya"]}, 
            demonym: {"name":"Ethiopian"}, 
            currency: [{"demonym":"Ethiopian","unit":"birr"}], 
            tld: {"name":".et"}, 
            largestCity: [{"name":"Addis Ababa","type":"largest city"}], 
        }, 
        {
            country: {"name":"Fiji","url":"https://en.wikipedia.org/wiki/Fiji"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Sitiveni Rabuka","url":"https://en.wikipedia.org/wiki/Sitiveni_Rabuka","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sitiveni_Rabuka_2020.jpg/500px-Sitiveni_Rabuka_2020.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/500px-Flag_of_Fiji.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coat_of_arms_of_Fiji.svg/500px-Coat_of_arms_of_Fiji.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/500px-Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Suva","type":"capital"}], 
            language: {"list":["iTaukei (Fijian)","English","Fiji Hindi"]}, 
            demonym: {"name":"Fijian"}, 
            currency: [{"demonym":"Fijian","unit":"dollar"}], 
            tld: {"name":".fj"}, 
            largestCity: [{"name":"Suva","type":"largest city"}], 
        }, 
        {
            country: {"name":"Finland","url":"https://en.wikipedia.org/wiki/Finland"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Petteri Orpo","url":"https://en.wikipedia.org/wiki/Petteri_Orpo","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Petteri-Orpo-01_%28cropped%29.jpg/500px-Petteri-Orpo-01_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/500px-Flag_of_Finland.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_Finland_2.svg/500px-Coat_of_arms_of_Finland_2.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/EU-Finland_%28orthographic_projection%29.svg/500px-EU-Finland_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Helsinki","type":"capital"}], 
            language: {"list":["Finnish","Swedish"]}, 
            demonym: {"name":"Finnish"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".fi"}, 
            largestCity: [{"name":"Helsinki","type":"largest city"}], 
        }, 
        {
            country: {"name":"France","url":"https://en.wikipedia.org/wiki/France"}, 
            leader: {"title":"President","pos":"president","name":"Emmanuel Macron","url":"https://en.wikipedia.org/wiki/Emmanuel_Macron","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Emmanuel_Macron_2023_%28cropped%29.jpg/500px-Emmanuel_Macron_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/500px-Flag_of_France.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Armoiries_r%C3%A9publique_fran%C3%A7aise.svg/500px-Armoiries_r%C3%A9publique_fran%C3%A7aise.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/EU-France_%28orthographic_projection%29.svg/500px-EU-France_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Paris","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"French"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".fr"}, 
            largestCity: [{"name":"Paris","type":"largest city"}], 
        }, 
        {
            country: {"name":"Gabon","url":"https://en.wikipedia.org/wiki/Gabon"}, 
            leader: {"title":"Chairman of the Committee for the Transition and Restoration of Institutions","pos":"chairman of the Committee for the Transition and Restoration of Institutions","name":"Brice Clotaire Oligui Nguema","url":"https://en.wikipedia.org/wiki/Brice_Clotaire_Oligui_Nguema","imgUrl":""}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/500px-Flag_of_Gabon.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Coat_of_arms_of_Gabon.svg/500px-Coat_of_arms_of_Gabon.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gabon_%28orthographic_projection%29.svg/500px-Gabon_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Libreville","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Gabonese"}, 
            currency: [{"full":"Central African CFA franc"}], 
            tld: {"name":".ga"}, 
            largestCity: [{"name":"Libreville","type":"largest city"}], 
        }, 
        {
            country: {"name":"The Gambia","url":"https://en.wikipedia.org/wiki/The_Gambia"}, 
            leader: {"title":"President","pos":"president","name":"Adama Barrow","url":"https://en.wikipedia.org/wiki/Adama_Barrow","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Adama_Barrow_-_2018_%2839774084330%29_%28cropped%29.jpg/500px-Adama_Barrow_-_2018_%2839774084330%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/500px-Flag_of_The_Gambia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coat_of_arms_of_The_Gambia.svg/500px-Coat_of_arms_of_The_Gambia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gambia_%28orthographic_projection_with_inset%29.svg/500px-Gambia_%28orthographic_projection_with_inset%29.svg.png"}, 
            capital: [{"name":"Banjul","type":"capital"}], 
            largestCity: [{"name":"Serekunda","type":"largest metropolitan area"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Gambian"}, 
            currency: [{"demonym":"Gambian","unit":"dalasi"}], 
            tld: {"name":".gm"}, 
        }, 
        {
            country: {"name":"Georgia","url":"https://en.wikipedia.org/wiki/Georgia_(country)"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Irakli Garibashvili","url":"https://en.wikipedia.org/wiki/Irakli_Garibashvili","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/PM_Garibashvili%2C_Munich_Security_Conference%2C_Munich_-_Hotel_Bayerischer_Hof.jpg/500px-PM_Garibashvili%2C_Munich_Security_Conference%2C_Munich_-_Hotel_Bayerischer_Hof.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/500px-Flag_of_Georgia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Greater_coat_of_arms_of_Georgia.svg/500px-Greater_coat_of_arms_of_Georgia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Georgia_%28orthographic_projection_with_inset%29.svg/500px-Georgia_%28orthographic_projection_with_inset%29.svg.png"}, 
            capital: [{"name":"Tbilisi","type":"capital"}], 
            language: {"list":["Georgian"]}, 
            demonym: {"name":"Georgian"}, 
            currency: [{"demonym":"Georgian","unit":"lari"}], 
            tld: {"name":".ge"}, 
            largestCity: [{"name":"Tbilisi","type":"largest city"}], 
        }, 
        {
            country: {"name":"Germany","url":"https://en.wikipedia.org/wiki/Germany"}, 
            leader: {"title":"Chancellor","pos":"chancellor","name":"Olaf Scholz","url":"https://en.wikipedia.org/wiki/Olaf_Scholz","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Olaf_Scholz_in_2023_%28cropped%29.jpg/500px-Olaf_Scholz_in_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/500px-Flag_of_Germany.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/500px-Coat_of_arms_of_Germany.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/EU-Germany_%28orthographic_projection%29.svg/500px-EU-Germany_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Berlin","type":"capital"}], 
            language: {"list":["German"]}, 
            demonym: {"name":"German"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".de"}, 
            largestCity: [{"name":"Berlin","type":"largest city"}], 
        }, 
        {
            country: {"name":"Ghana","url":"https://en.wikipedia.org/wiki/Ghana"}, 
            leader: {"title":"President","pos":"president","name":"Nana Akufo-Addo","url":"https://en.wikipedia.org/wiki/Nana_Akufo-Addo","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nana_Akufo_Addo%2C_Jan._2020.jpg/500px-Nana_Akufo_Addo%2C_Jan._2020.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/500px-Flag_of_Ghana.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Ghana.svg/500px-Coat_of_arms_of_Ghana.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ghana_%28orthographic_projection%29.svg/500px-Ghana_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Accra","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Ghanaian"}, 
            currency: [{"demonym":"Ghanaian","unit":"cedi"}], 
            tld: {"name":".gh"}, 
            largestCity: [{"name":"Accra","type":"largest city"}], 
        }, 
        {
            country: {"name":"Greece","url":"https://en.wikipedia.org/wiki/Greece"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Kyriakos Mitsotakis","url":"https://en.wikipedia.org/wiki/Kyriakos_Mitsotakis","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kyriakos_Mitsotakis_%282021-12-08%29_03_%28cropped%29.jpg/500px-Kyriakos_Mitsotakis_%282021-12-08%29_03_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/500px-Flag_of_Greece.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Coat_of_arms_of_Greece.svg/500px-Coat_of_arms_of_Greece.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/EU-Greece_%28orthographic_projection%29.svg/500px-EU-Greece_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Athens","type":"capital"}], 
            language: {"list":["Greek"]}, 
            demonym: {"name":"Greek"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".gr"}, 
            largestCity: [{"name":"Athens","type":"largest city"}], 
        }, 
        {
            country: {"name":"Grenada","url":"https://en.wikipedia.org/wiki/Grenada"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Dickon Mitchell","url":"https://en.wikipedia.org/wiki/Dickon_Mitchell","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dickon_Mitchell_2022-07-01.jpg/500px-Dickon_Mitchell_2022-07-01.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/500px-Flag_of_Grenada.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Coat_of_arms_of_Grenada.svg/500px-Coat_of_arms_of_Grenada.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Grenada_on_the_globe_%28Americas_centered%29.svg/500px-Grenada_on_the_globe_%28Americas_centered%29.svg.png"}, 
            capital: [{"name":"St. George's","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Grenadian"}, 
            currency: [{"full":"East Caribbean dollar"}], 
            tld: {"name":".gd"}, 
            largestCity: [{"name":"St. George's","type":"largest city"}], 
        }, 
        {
            country: {"name":"Guatemala","url":"https://en.wikipedia.org/wiki/Guatemala"}, 
            leader: {"title":"President","pos":"president","name":"Alejandro Giammattei","url":"https://en.wikipedia.org/wiki/Alejandro_Giammattei","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Retrato_de_Alejandro_Giammattei%2C_Presidente_de_Guatemala_%282020-2024%29_%28cropped%29.png/500px-Retrato_de_Alejandro_Giammattei%2C_Presidente_de_Guatemala_%282020-2024%29_%28cropped%29.png"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/500px-Flag_of_Guatemala.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Coat_of_arms_of_Guatemala.svg/500px-Coat_of_arms_of_Guatemala.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Guatemala_%28orthographic_projection%29.svg/500px-Guatemala_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Guatemala City","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Guatemalan"}, 
            currency: [{"demonym":"Guatemalan","unit":"quetzal"}], 
            tld: {"name":".gt"}, 
            largestCity: [{"name":"Guatemala City","type":"largest city"}], 
        }, 
        {
            country: {"name":"Guinea","url":"https://en.wikipedia.org/wiki/Guinea"}, 
            leader: {"title":"Chairman of the National Committee of Reconciliation and Development","pos":"chairman of the National Committee of Reconciliation and Development","name":"Mamady Doumbouya","url":"https://en.wikipedia.org/wiki/Mamady_Doumbouya","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mamadi_Doumbouya_2022.jpg/500px-Mamadi_Doumbouya_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/500px-Flag_of_Guinea.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Guinea-new.svg/500px-Coat_of_arms_of_Guinea-new.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Guinea_%28orthographic_projection%29.svg/500px-Guinea_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Conakry","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Guinean"}, 
            currency: [{"demonym":"Guinean","unit":"franc"}], 
            tld: {"name":".gn"}, 
            largestCity: [{"name":"Conakry","type":"largest city"}], 
        }, 
        {
            country: {"name":"Guinea-Bissau","url":"https://en.wikipedia.org/wiki/Guinea-Bissau"}, 
            leader: {"title":"President","pos":"president","name":"Umaro Sissoco Embaló","url":"https://en.wikipedia.org/wiki/Umaro_Sissoco_Embal%C3%B3","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Umaro_Sissoco_Embal%C3%B3_2019.jpg/500px-Umaro_Sissoco_Embal%C3%B3_2019.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/500px-Flag_of_Guinea-Bissau.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Coat_of_arms_of_Guinea-Bissau_%28variant%29.svg/500px-Coat_of_arms_of_Guinea-Bissau_%28variant%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Location_Guinea_Bissau_AU_Africa.svg/500px-Location_Guinea_Bissau_AU_Africa.svg.png"}, 
            capital: [{"name":"Bissau","type":"capital"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"Bissau-Guinean"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".gw"}, 
            largestCity: [{"name":"Bissau","type":"largest city"}], 
        }, 
        {
            country: {"name":"Guyana","url":"https://en.wikipedia.org/wiki/Guyana"}, 
            leader: {"title":"President","pos":"president","name":"Irfaan Ali","url":"https://en.wikipedia.org/wiki/Irfaan_Ali","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Irfaan_Ali_in_2020.jpg/500px-Irfaan_Ali_in_2020.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/500px-Flag_of_Guyana.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Guyana.svg/500px-Coat_of_arms_of_Guyana.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Guyana_%28orthographic_projection%29.svg/500px-Guyana_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Georgetown","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Guyanese"}, 
            currency: [{"demonym":"Guyanese","unit":"dollar"}], 
            tld: {"name":".gy"}, 
            largestCity: [{"name":"Georgetown","type":"largest city"}], 
        }, 
        {
            country: {"name":"Haiti","url":"https://en.wikipedia.org/wiki/Haiti"}, 
            leader: {"title":"Acting Prime Minister","pos":"acting prime minister","name":"Ariel Henry","url":"https://en.wikipedia.org/wiki/Ariel_Henry","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ariel_Henry_2023.jpg/500px-Ariel_Henry_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/500px-Flag_of_Haiti.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/500px-Coat_of_arms_of_Haiti.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Haiti_%28orthographic_projection%29.svg/500px-Haiti_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Port-au-Prince","type":"capital"}], 
            language: {"list":["French","Haitian Creole"]}, 
            demonym: {"name":"Haitian"}, 
            currency: [{"demonym":"Haitian","unit":"gourde"}], 
            tld: {"name":".ht"}, 
            largestCity: [{"name":"Port-au-Prince","type":"largest city"}], 
        }, 
        {
            country: {"name":"Honduras","url":"https://en.wikipedia.org/wiki/Honduras"}, 
            leader: {"title":"President","pos":"president","name":"Xiomara Castro","url":"https://en.wikipedia.org/wiki/Xiomara_Castro","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Xiomara_Castro_2023_%28cropped%29.jpg/500px-Xiomara_Castro_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/500px-Flag_of_Honduras.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_arms_of_Honduras.svg/500px-Coat_of_arms_of_Honduras.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/HND_orthographic.svg/500px-HND_orthographic.svg.png"}, 
            capital: [{"name":"Tegucigalpa","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Honduran"}, 
            currency: [{"demonym":"Honduran","unit":"lempira"}], 
            tld: {"name":".hn"}, 
            largestCity: [{"name":"Tegucigalpa","type":"largest city"}], 
        }, 
        {
            country: {"name":"Hungary","url":"https://en.wikipedia.org/wiki/Hungary"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Viktor Orbán","url":"https://en.wikipedia.org/wiki/Viktor_Orb%C3%A1n","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Viktor_Orb%C3%A1n_2022.jpg/500px-Viktor_Orb%C3%A1n_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/500px-Flag_of_Hungary.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Coat_of_arms_of_Hungary.svg/500px-Coat_of_arms_of_Hungary.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/EU-Hungary.svg/500px-EU-Hungary.svg.png"}, 
            capital: [{"name":"Budapest","type":"capital"}], 
            language: {"list":["Hungarian"]}, 
            demonym: {"name":"Hungarian"}, 
            currency: [{"demonym":"Hungarian","unit":"forint"}], 
            tld: {"name":".hu"}, 
            largestCity: [{"name":"Budapest","type":"largest city"}], 
        }, 
        {
            country: {"name":"Iceland","url":"https://en.wikipedia.org/wiki/Iceland"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Katrín Jakobsdóttir","url":"https://en.wikipedia.org/wiki/Katr%C3%ADn_Jakobsd%C3%B3ttir","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Katr%C3%ADn_Jakobsd%C3%B3ttir_in_August_2023.jpg/500px-Katr%C3%ADn_Jakobsd%C3%B3ttir_in_August_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/500px-Flag_of_Iceland.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Coat_of_arms_of_Iceland.svg/500px-Coat_of_arms_of_Iceland.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Iceland_%28orthographic_projection%29.svg/500px-Iceland_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Reykjavík","type":"capital"}], 
            language: {"list":["Icelandic"]}, 
            demonym: {"name":"Icelandic"}, 
            currency: [{"demonym":"Icelandic","unit":"króna"}], 
            tld: {"name":".is"}, 
            largestCity: [{"name":"Reykjavík","type":"largest city"}], 
        }, 
        {
            country: {"name":"India","url":"https://en.wikipedia.org/wiki/India"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Narendra Modi","url":"https://en.wikipedia.org/wiki/Narendra_Modi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png/500px-Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/500px-Flag_of_India.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/500px-Emblem_of_India.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_%28orthographic_projection%29.svg/500px-India_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"New Delhi","type":"capital"}], 
            largestCity: [{"name":"Mumbai","type":"city proper"},{"name":"Delhi","type":"metropolitan area"}], 
            language: {"list":["Hindi","English"]}, 
            demonym: {"name":"Indian"}, 
            currency: [{"demonym":"Indian","unit":"rupee"}], 
            tld: {"name":".in"}, 
        }, 
        {
            country: {"name":"Indonesia","url":"https://en.wikipedia.org/wiki/Indonesia"}, 
            leader: {"title":"President","pos":"president","name":"Joko Widodo","url":"https://en.wikipedia.org/wiki/Joko_Widodo","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/500px-Joko_Widodo_2019_official_portrait.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/500px-Flag_of_Indonesia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_emblem_of_Indonesia_Garuda_Pancasila.svg/500px-National_emblem_of_Indonesia_Garuda_Pancasila.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Indonesia_%28orthographic_projection%29.svg/500px-Indonesia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Jakarta","type":"capital"}], 
            language: {"list":["Indonesian"]}, 
            demonym: {"name":"Indonesian"}, 
            currency: [{"demonym":"Indonesian","unit":"rupiah"}], 
            tld: {"name":".id"}, 
            largestCity: [{"name":"Jakarta","type":"largest city"}], 
        }, 
        {
            country: {"name":"Iran","url":"https://en.wikipedia.org/wiki/Iran"}, 
            leader: {"title":"Supreme Leader","pos":"supreme leader","name":"Ali Khamenei","url":"https://en.wikipedia.org/wiki/Ali_Khamenei","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Khamenei_2023.jpeg/500px-Khamenei_2023.jpeg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/500px-Flag_of_Iran.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Emblem_of_Iran.svg/500px-Emblem_of_Iran.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Iran_%28orthographic_projection%29.svg/500px-Iran_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Tehran","type":"capital"}], 
            language: {"list":["Persian"]}, 
            demonym: {}, 
            currency: [{"demonym":"Iranian","unit":"rial"}], 
            tld: {"name":".ir"}, 
            largestCity: [{"name":"Tehran","type":"largest city"}], 
        }, 
        {
            country: {"name":"Iraq","url":"https://en.wikipedia.org/wiki/Iraq"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Mohammed Shia' Al Sudani","url":"https://en.wikipedia.org/wiki/Mohammed_Shia%27_Al_Sudani","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Iraqi_PM_Visits_Shrine_of_Imam_Reza_%28AS%29_in_Mashhad_%28cropped%29.jpg/500px-Iraqi_PM_Visits_Shrine_of_Imam_Reza_%28AS%29_in_Mashhad_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/500px-Flag_of_Iraq.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Iraq.svg/500px-Coat_of_arms_of_Iraq.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Iraq_%28orthographic%29.svg/500px-Iraq_%28orthographic%29.svg.png"}, 
            capital: [{"name":"Baghdad","type":"capital"}], 
            language: {"list":["Arabic","Kurdish"]}, 
            demonym: {"name":"Iraqi"}, 
            currency: [{"demonym":"Iraqi","unit":"dinar"}], 
            tld: {"name":".iq"}, 
            largestCity: [{"name":"Baghdad","type":"largest city"}], 
        }, 
        {
            country: {"name":"Ireland","url":"https://en.wikipedia.org/wiki/Republic_of_Ireland"}, 
            leader: {"title":"Taoiseach","pos":"taoiseach","name":"Leo Varadkar","url":"https://en.wikipedia.org/wiki/Leo_Varadkar","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Leo_Varadkar_2016.jpg/500px-Leo_Varadkar_2016.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/500px-Flag_of_Ireland.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Coat_of_arms_of_Ireland.svg/500px-Coat_of_arms_of_Ireland.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/EU-Ireland.svg/500px-EU-Ireland.svg.png"}, 
            capital: [{"name":"Dublin","type":"capital"}], 
            language: {"list":["Irish","English"]}, 
            demonym: {"name":"Irish"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".ie"}, 
            largestCity: [{"name":"Dublin","type":"largest city"}], 
        }, 
        {
            country: {"name":"Israel","url":"https://en.wikipedia.org/wiki/Israel"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Benjamin Netanyahu","url":"https://en.wikipedia.org/wiki/Benjamin_Netanyahu","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/500px-Benjamin_Netanyahu%2C_February_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/500px-Flag_of_Israel.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Israel.svg/500px-Emblem_of_Israel.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Israel_%28orthographic_projection%29_with_occupied_territories.svg/500px-Israel_%28orthographic_projection%29_with_occupied_territories.svg.png"}, 
            capital: [{"name":"Jerusalem","type":"capital"}], 
            language: {"list":["Hebrew"]}, 
            demonym: {"name":"Israeli"}, 
            currency: [{"demonym":"Israeli","unit":"new shekel"}], 
            tld: {"name":".il"}, 
            largestCity: [{"name":"Jerusalem","type":"largest city"}], 
        }, 
        {
            country: {"name":"Italy","url":"https://en.wikipedia.org/wiki/Italy"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Giorgia Meloni","url":"https://en.wikipedia.org/wiki/Giorgia_Meloni","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Giorgia_Meloni_Official_2023_%28cropped%29.jpg/500px-Giorgia_Meloni_Official_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/500px-Flag_of_Italy.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_of_Italy.svg/500px-Emblem_of_Italy.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EU-Italy_%28orthographic_projection%29.svg/500px-EU-Italy_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Rome","type":"capital"}], 
            language: {"list":["Italian"]}, 
            demonym: {"name":"Italian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".it"}, 
            largestCity: [{"name":"Rome","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Ivory Coast","url":"https://en.wikipedia.org/wiki/Ivory_Coast"}, 
            leader: {"title":"President","pos":"president","name":"Alassane Ouattara","url":"https://en.wikipedia.org/wiki/Alassane_Ouattara","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/President_Alassane_Ouattara_in_Washington_-_2017_%2838244569701%29_%28cropped%29.jpg/500px-President_Alassane_Ouattara_in_Washington_-_2017_%2838244569701%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/500px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Coat_of_Arms_of_the_Ivory_Coast.svg/500px-Coat_of_Arms_of_the_Ivory_Coast.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/C%C3%B4te_d%27Ivoire_%28orthographic_projection%29.svg/500px-C%C3%B4te_d%27Ivoire_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Yamoussoukro","type":"capital"}], 
            largestCity: [{"name":"Abidjan","type":"largest city"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Ivorian"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".ci"}, 
        }, 
        {
            country: {"name":"Jamaica","url":"https://en.wikipedia.org/wiki/Jamaica"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Andrew Holness","url":"https://en.wikipedia.org/wiki/Andrew_Holness","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Andrew_Holness_Press_%28cropped%29_2.jpg/500px-Andrew_Holness_Press_%28cropped%29_2.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/500px-Flag_of_Jamaica.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Jamaica.svg/500px-Coat_of_arms_of_Jamaica.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jamaica_%28orthographic_projection%29.svg/500px-Jamaica_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Kingston","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Jamaican"}, 
            currency: [{"demonym":"Jamaican","unit":"dollar"}], 
            tld: {"name":".jm"}, 
            largestCity: [{"name":"Kingston","type":"largest city"}], 
        }, 
        {
            country: {"name":"Japan","url":"https://en.wikipedia.org/wiki/Japan"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Fumio Kishida","url":"https://en.wikipedia.org/wiki/Fumio_Kishida","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fumio_Kishida_20211005.jpg/500px-Fumio_Kishida_20211005.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/500px-Flag_of_Japan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Imperial_Seal_of_Japan.svg/500px-Imperial_Seal_of_Japan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Japan_%28orthographic_projection%29.svg/500px-Japan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Tokyo","type":"capital"}], 
            language: {"list":["Japanese"]}, 
            demonym: {"name":"Japanese"}, 
            currency: [{"demonym":"Japanese","unit":"yen"}], 
            tld: {"name":".jp"}, 
            largestCity: [{"name":"Tokyo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Jordan","url":"https://en.wikipedia.org/wiki/Jordan"}, 
            leader: {"title":"King","pos":"king","name":"Abdullah II","url":"https://en.wikipedia.org/wiki/Abdullah_II_of_Jordan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/King_Abdullah_II_%28cropped%29.jpg/500px-King_Abdullah_II_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/500px-Flag_of_Jordan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Coat_of_arms_of_Jordan.svg/500px-Coat_of_arms_of_Jordan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jordan_%28orthographic_projection%29.svg/500px-Jordan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Amman","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Jordanian"}, 
            currency: [{"demonym":"Jordanian","unit":"dinar"}], 
            tld: {"name":".jo"}, 
            largestCity: [{"name":"Amman","type":"largest city"}], 
        }, 
        {
            country: {"name":"Kazakhstan","url":"https://en.wikipedia.org/wiki/Kazakhstan"}, 
            leader: {"title":"President","pos":"president","name":"Kassym-Jomart Tokayev","url":"https://en.wikipedia.org/wiki/Kassym-Jomart_Tokayev","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%D0%9A%D0%B0%D1%81%D1%8B%D0%BC-%D0%96%D0%BE%D0%BC%D0%B0%D1%80%D1%82_%D0%A2%D0%BE%D0%BA%D0%B0%D0%B5%D0%B2_%2813-12-2022%29.jpg/500px-%D0%9A%D0%B0%D1%81%D1%8B%D0%BC-%D0%96%D0%BE%D0%BC%D0%B0%D1%80%D1%82_%D0%A2%D0%BE%D0%BA%D0%B0%D0%B5%D0%B2_%2813-12-2022%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/500px-Flag_of_Kazakhstan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Emblem_of_Kazakhstan_latin.svg/500px-Emblem_of_Kazakhstan_latin.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kazakhstan_%28orthographic_projection%29.svg/500px-Kazakhstan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Astana","type":"capital"}], 
            largestCity: [{"name":"Almaty","type":"largest city"}], 
            language: {"list":["Kazakh","Russian"]}, 
            demonym: {"name":"Kazakh"}, 
            currency: [{"demonym":"Kazakhstani","unit":"tenge"}], 
            tld: {"name":".kz"}, 
        }, 
        {
            country: {"name":"Kenya","url":"https://en.wikipedia.org/wiki/Kenya"}, 
            leader: {"title":"President","pos":"president","name":"William Ruto","url":"https://en.wikipedia.org/wiki/William_Ruto","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/William_Ruto_2023.jpg/500px-William_Ruto_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/500px-Flag_of_Kenya.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_Kenya_%28Official%29.svg/500px-Coat_of_arms_of_Kenya_%28Official%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kenya_%28orthographic_projection%29.svg/500px-Kenya_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Nairobi","type":"capital"}], 
            language: {"list":["Swahili","English"]}, 
            demonym: {"name":"Kenyan"}, 
            currency: [{"demonym":"Kenyan","unit":"shilling"}], 
            tld: {"name":".ke"}, 
            largestCity: [{"name":"Nairobi","type":"largest city"}], 
        }, 
        {
            country: {"name":"Kiribati","url":"https://en.wikipedia.org/wiki/Kiribati"}, 
            leader: {"title":"President","pos":"president","name":"Taneti Maamau","url":"https://en.wikipedia.org/wiki/Taneti_Maamau","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Taneti_Maamau_Feb_2023.jpg/500px-Taneti_Maamau_Feb_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/500px-Flag_of_Kiribati.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Coat_of_arms_of_Kiribati.svg/500px-Coat_of_arms_of_Kiribati.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kiribati_on_the_globe_%28Polynesia_centered%29.svg/500px-Kiribati_on_the_globe_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"South Tarawa","type":"capital"}], 
            language: {"list":["English","Gilbertese"]}, 
            demonym: {"name":"I-Kiribati"}, 
            currency: [{"full":"Australian dollar"}], 
            tld: {"name":".ki"}, 
            largestCity: [{"name":"South Tarawa","type":"largest city"}], 
        }, 
        {
            country: {"name":"Kuwait","url":"https://en.wikipedia.org/wiki/Kuwait"}, 
            leader: {"title":"Emir","pos":"emir","name":"Nawaf Al-Ahmad Al-Jaber Al-Sabah","url":"https://en.wikipedia.org/wiki/Nawaf_Al-Ahmad_Al-Jaber_Al-Sabah","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nawaf_Al-Ahmad_Al-Jaber_Al-Sabah_%28cropped%29.jpg/500px-Nawaf_Al-Ahmad_Al-Jaber_Al-Sabah_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/500px-Flag_of_Kuwait.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Emblem_of_Kuwait.svg/500px-Emblem_of_Kuwait.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/KWT_orthographic.svg/500px-KWT_orthographic.svg.png"}, 
            capital: [{"name":"Kuwait City","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Kuwaiti"}, 
            currency: [{"demonym":"Kuwaiti","unit":"dinar"}], 
            tld: {"name":".kw"}, 
            largestCity: [{"name":"Kuwait City","type":"largest city"}], 
        }, 
        {
            country: {"name":"Kyrgyzstan","url":"https://en.wikipedia.org/wiki/Kyrgyzstan"}, 
            leader: {"title":"President","pos":"president","name":"Sadyr Japarov","url":"https://en.wikipedia.org/wiki/Sadyr_Japarov","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/%D0%A1%D0%B0%D0%B4%D1%8B%D1%80_%D0%96%D0%B0%D0%BF%D0%B0%D1%80%D0%BE%D0%B2_%2805-11-2021%29.jpg/500px-%D0%A1%D0%B0%D0%B4%D1%8B%D1%80_%D0%96%D0%B0%D0%BF%D0%B0%D1%80%D0%BE%D0%B2_%2805-11-2021%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/500px-Flag_of_Kyrgyzstan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Emblem_of_Kyrgyzstan.svg/500px-Emblem_of_Kyrgyzstan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kyrgyzstan_%28orthographic_projection%29.svg/500px-Kyrgyzstan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Bishkek","type":"capital"}], 
            language: {"list":["Kyrgyz","Russian"]}, 
            demonym: {"name":"Kyrgyz"}, 
            currency: [{"demonym":"Kyrgyzstani","unit":"som"}], 
            tld: {"name":".kg"}, 
            largestCity: [{"name":"Bishkek","type":"largest city"}], 
        }, 
        {
            country: {"name":"Laos","url":"https://en.wikipedia.org/wiki/Laos"}, 
            leader: {"title":"General Secretary of the People's Revolutionary Party","pos":"general secretary of the People's Revolutionary Party","name":"Thongloun Sisoulith","url":"https://en.wikipedia.org/wiki/Thongloun_Sisoulith","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Thongloun_Sisoulith_%282023%29_%28cropped%29.jpg/500px-Thongloun_Sisoulith_%282023%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/500px-Flag_of_Laos.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emblem_of_Laos.svg/500px-Emblem_of_Laos.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Laos_%28orthographic_projection%29.svg/500px-Laos_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Vientiane","type":"capital"}], 
            language: {"list":["Lao"]}, 
            demonym: {"name":"Laotian"}, 
            currency: [{"demonym":"Lao","unit":"kip"}], 
            tld: {"name":".la"}, 
            largestCity: [{"name":"Vientiane","type":"largest city"}], 
        }, 
        {
            country: {"name":"Latvia","url":"https://en.wikipedia.org/wiki/Latvia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Evika Siliņa","url":"https://en.wikipedia.org/wiki/Evika_Sili%C5%86a","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jauniev%C4%93l%C4%93t%C4%81s_Ministru_prezidentes_Evikas_Sili%C5%86as_preses_konference_%28cropped%29.jpg/500px-Jauniev%C4%93l%C4%93t%C4%81s_Ministru_prezidentes_Evikas_Sili%C5%86as_preses_konference_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/500px-Flag_of_Latvia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_Latvia.svg/500px-Coat_of_arms_of_Latvia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EU-Latvia.svg/500px-EU-Latvia.svg.png"}, 
            capital: [{"name":"Riga","type":"capital"}], 
            language: {"list":["Latvian"]}, 
            demonym: {"name":"Latvian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".lv"}, 
            largestCity: [{"name":"Riga","type":"largest city"}], 
        }, 
        {
            country: {"name":"Lebanon","url":"https://en.wikipedia.org/wiki/Lebanon"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Najib Mikati","url":"https://en.wikipedia.org/wiki/Najib_Mikati","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Najib_Mikati_portrait.jpg/500px-Najib_Mikati_portrait.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/500px-Flag_of_Lebanon.svg.png"}, 
            symbol: {"url":""}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lebanon_%28orthographic_projection%29.svg/500px-Lebanon_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Beirut","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Lebanese"}, 
            currency: [{"demonym":"Lebanese","unit":"pound"}], 
            tld: {"name":".lb"}, 
            largestCity: [{"name":"Beirut","type":"largest city"}], 
        }, 
        {
            country: {"name":"Lesotho","url":"https://en.wikipedia.org/wiki/Lesotho"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Sam Matekane","url":"https://en.wikipedia.org/wiki/Sam_Matekane","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sam_Matekane_candidate_%28cropped%29.jpg/500px-Sam_Matekane_candidate_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/500px-Flag_of_Lesotho.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Lesotho.svg/500px-Coat_of_arms_of_Lesotho.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lesotho_%28orthographic_projection%29.svg/500px-Lesotho_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Maseru","type":"capital"}], 
            language: {"list":["Sesotho","English"]}, 
            demonym: {"name":"Mosotho "}, 
            currency: [{"demonym":"Lesotho","unit":"loti"},{"other":"South African rand"}], 
            tld: {"name":".ls"}, 
            largestCity: [{"name":"Maseru","type":"largest city"}], 
        }, 
        {
            country: {"name":"Liberia","url":"https://en.wikipedia.org/wiki/Liberia"}, 
            leader: {"title":"President","pos":"president","name":"George Weah","url":"https://en.wikipedia.org/wiki/George_Weah","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/George_Weah_in_2019_%28cropped%29.jpg/500px-George_Weah_in_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/500px-Flag_of_Liberia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Coat_of_arms_of_Liberia.svg/500px-Coat_of_arms_of_Liberia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Liberia_%28orthographic_projection%29.svg/500px-Liberia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Monrovia","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Liberian"}, 
            currency: [{"demonym":"Liberian","unit":"dollar"}], 
            tld: {"name":".lr"}, 
            largestCity: [{"name":"Monrovia","type":"largest city"}], 
        }, 
        {
            country: {"name":"Libya","url":"https://en.wikipedia.org/wiki/Libya"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Abdul Hamid Dbeibeh","url":"https://en.wikipedia.org/wiki/Abdul_Hamid_Dbeibeh","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Abdul_Hamid_Dbeibeh_%2815-04-2021%29.jpg/500px-Abdul_Hamid_Dbeibeh_%2815-04-2021%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/500px-Flag_of_Libya.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seal_of_the_Government_of_National_Unity_%28Libya%29.svg/500px-Seal_of_the_Government_of_National_Unity_%28Libya%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Libya_%28centered_orthographic_projection%29.svg/500px-Libya_%28centered_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Tripoli","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Libyan"}, 
            currency: [{"demonym":"Libyan","unit":"dinar"}], 
            tld: {"name":".ly"}, 
            largestCity: [{"name":"Tripoli","type":"largest city"}], 
        }, 
        {
            country: {"name":"Liechtenstein","url":"https://en.wikipedia.org/wiki/Liechtenstein"}, 
            leader: {"title":"Regent","pos":"regent","name":"Hereditary Prince Alois","url":"https://en.wikipedia.org/wiki/Alois,_Hereditary_Prince_of_Liechtenstein","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Alois_of_Liechtenstein_and_Karin_Kneissl_November_2018_%2845170115774%29_%28cropped%29_2.jpg/500px-Alois_of_Liechtenstein_and_Karin_Kneissl_November_2018_%2845170115774%29_%28cropped%29_2.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/500px-Flag_of_Liechtenstein.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Staatswappen-Liechtensteins.svg/500px-Staatswappen-Liechtensteins.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Europe-Liechtenstein.svg/500px-Europe-Liechtenstein.svg.png"}, 
            capital: [{"name":"Vaduz","type":"capital"}], 
            largestCity: [{"name":"Schaan","type":"largest municipality"}], 
            language: {"list":["German"]}, 
            demonym: {"name":"Liechtensteiner"}, 
            currency: [{"full":"Swiss franc"}], 
            tld: {"name":".li"}, 
        }, 
        {
            country: {"name":"Lithuania","url":"https://en.wikipedia.org/wiki/Lithuania"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Ingrida Šimonytė","url":"https://en.wikipedia.org/wiki/Ingrida_%C5%A0imonyt%C4%97","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ingrida_Simonyte_2019_crop_2.jpg/500px-Ingrida_Simonyte_2019_crop_2.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/500px-Flag_of_Lithuania.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Lithuania.svg/500px-Coat_of_arms_of_Lithuania.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/EU-Lithuania.svg/500px-EU-Lithuania.svg.png"}, 
            capital: [{"name":"Vilnius","type":"capital"}], 
            language: {"list":["Lithuanian"]}, 
            demonym: {"name":"Lithuanian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".lt"}, 
            largestCity: [{"name":"Vilnius","type":"largest city"}], 
        }, 
        {
            country: {"name":"Luxembourg","url":"https://en.wikipedia.org/wiki/Luxembourg"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Xavier Bettel","url":"https://en.wikipedia.org/wiki/Xavier_Bettel","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P061521-435269_%28cropped%29.jpg/500px-P061521-435269_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/500px-Flag_of_Luxembourg.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Greater-Coat-of-Arms-of-Luxembourg.svg/500px-Greater-Coat-of-Arms-of-Luxembourg.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/EU-Luxembourg.svg/500px-EU-Luxembourg.svg.png"}, 
            capital: [{"name":"Luxembourg","type":"capital"}], 
            language: {"list":["Luxembourgish","French","German"]}, 
            demonym: {"name":"Luxembourgish"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".lu"}, 
            largestCity: [{"name":"Luxembourg","type":"largest city"}], 
        }, 
        {
            country: {"name":"Madagascar","url":"https://en.wikipedia.org/wiki/Madagascar"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Christian Ntsay","url":"https://en.wikipedia.org/wiki/Christian_Ntsay","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD_%D0%9D%D1%82%D1%81%D0%B0%D0%B9_%2822-12-2020%29.jpg/500px-%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD_%D0%9D%D1%82%D1%81%D0%B0%D0%B9_%2822-12-2020%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/500px-Flag_of_Madagascar.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Seal_of_Madagascar.svg/500px-Seal_of_Madagascar.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Madagascar_%28centered_orthographic_projection%29.svg/500px-Madagascar_%28centered_orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Antananarivo","type":"capital"}], 
            language: {"list":["Malagasy","French"]}, 
            demonym: {"name":"Malagasy"}, 
            currency: [{"demonym":"Malagasy","unit":"ariary"}], 
            tld: {"name":".mg"}, 
            largestCity: [{"name":"Antananarivo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Malawi","url":"https://en.wikipedia.org/wiki/Malawi"}, 
            leader: {"title":"President","pos":"president","name":"Lazarus Chakwera","url":"https://en.wikipedia.org/wiki/Lazarus_Chakwera","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lazarus_Chakwera_2023.jpg/500px-Lazarus_Chakwera_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/500px-Flag_of_Malawi.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Coat_of_arms_of_Malawi.svg/500px-Coat_of_arms_of_Malawi.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Malawi_%28orthographic_projection%29.svg/500px-Malawi_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Lilongwe","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Malawian"}, 
            currency: [{"demonym":"Malawian","unit":"kwacha"}], 
            tld: {"name":".mw"}, 
            largestCity: [{"name":"Lilongwe","type":"largest city"}], 
        }, 
        {
            country: {"name":"Malaysia","url":"https://en.wikipedia.org/wiki/Malaysia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Anwar Ibrahim","url":"https://en.wikipedia.org/wiki/Anwar_Ibrahim","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anwar_Ibrahim_09012023_%28cropped%29.jpg/500px-Anwar_Ibrahim_09012023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/500px-Flag_of_Malaysia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Malaysia_%28orthographic_projection%29.svg/500px-Malaysia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Kuala Lumpur","type":"capital"}], 
            language: {"list":["Malay"]}, 
            demonym: {"name":"Malaysian"}, 
            currency: [{"demonym":"Malaysian","unit":"ringgit"}], 
            tld: {"name":".my"}, 
            largestCity: [{"name":"Kuala Lumpur","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Maldives","url":"https://en.wikipedia.org/wiki/Maldives"}, 
            leader: {"title":"President","pos":"president","name":"Ibrahim Mohamed Solih","url":"https://en.wikipedia.org/wiki/Ibrahim_Mohamed_Solih","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ibrahim_Mohamed_Solih_official_portrait.jpg/500px-Ibrahim_Mohamed_Solih_official_portrait.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/500px-Flag_of_Maldives.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Emblem_of_Maldives.svg/500px-Emblem_of_Maldives.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Maldives_%28orthographic_projection%29.svg/500px-Maldives_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Malé","type":"capital"}], 
            language: {"list":["Dhivehi"]}, 
            demonym: {"name":"Maldivian"}, 
            currency: [{"demonym":"Maldivian","unit":"rufiyaa"},{"other":"United States dollar"}], 
            tld: {"name":".mv"}, 
            largestCity: [{"name":"Malé","type":"largest city"}], 
        }, 
        {
            country: {"name":"Mali","url":"https://en.wikipedia.org/wiki/Mali"}, 
            leader: {"title":"Interim President","pos":"interim president","name":"Assimi Goïta","url":"https://en.wikipedia.org/wiki/Assimi_Go%C3%AFta","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Assimi_Go%C3%AFta_with_Russian_president_Vladmir_Putin_July_2023.jpg/500px-Assimi_Go%C3%AFta_with_Russian_president_Vladmir_Putin_July_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/500px-Flag_of_Mali.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Coat_of_arms_of_Mali.svg/500px-Coat_of_arms_of_Mali.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mali_%28orthographic_projection%29.svg/500px-Mali_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Bamako","type":"capital"}], 
            language: {"list":["Bambara","Bobo","Bozo","Dogon","Fula","Hassaniya Arabic","Kassonke","Maninke","Minyanka","Senufo","Songhay","Soninke","Tamasheq","French","Mandinka","Maure","Dafing","Samogo","Hausa"]},
            demonym: {"name":"Malian"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".ml"}, 
            largestCity: [{"name":"Bamako","type":"largest city"}], 
        }, 
        {
            country: {"name":"Malta","url":"https://en.wikipedia.org/wiki/Malta"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Robert Abela","url":"https://en.wikipedia.org/wiki/Robert_Abela","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Robert_Abela_-_Official_Portrait_2022_%28cropped%29.jpg/500px-Robert_Abela_-_Official_Portrait_2022_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/500px-Flag_of_Malta.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Malta.svg/500px-Coat_of_arms_of_Malta.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/EU-Malta.svg/500px-EU-Malta.svg.png"}, 
            capital: [{"name":"Valletta","type":"capital"}], 
            largestCity: [{"name":"St. Paul's Bay","type":"largest administrative unit"}], 
            language: {"list":["Maltese","English","Maltese Sign Language"]}, 
            demonym: {"name":"Maltese"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".mt"}, 
        }, 
        {
            country: {"name":"the Marshall Islands","url":"https://en.wikipedia.org/wiki/Marshall_Islands"}, 
            leader: {"title":"President","pos":"president","name":"David Kabua","url":"https://en.wikipedia.org/wiki/David_Kabua","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/David_Kabua_%2816-06-2021%29.jpg/500px-David_Kabua_%2816-06-2021%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/500px-Flag_of_the_Marshall_Islands.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Seal_of_the_Marshall_Islands.svg/500px-Seal_of_the_Marshall_Islands.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/500px-Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Delap-Uliga-Djarrit","type":"capital"}], 
            language: {"list":["Marshallese","English"]}, 
            demonym: {"name":"Marshallese"}, 
            currency: [{"full":"United States dollar"}], 
            tld: {"name":".mh"}, 
            largestCity: [{"name":"Delap-Uliga-Djarrit","type":"largest city"}], 
        }, 
        {
            country: {"name":"Mauritania","url":"https://en.wikipedia.org/wiki/Mauritania"}, 
            leader: {"title":"President","pos":"president","name":"Mohamed Ould Ghazouani","url":"https://en.wikipedia.org/wiki/Mohamed_Ould_Ghazouani","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%D0%9C%D1%83%D1%85%D0%B0%D0%BC%D0%BC%D0%B5%D0%B4_%D0%A3%D0%BB%D1%8C%D0%B4_%D0%93%D0%B0%D0%B7%D1%83%D0%B0%D0%BD%D0%B8_02_%2818-02-2022%29.jpg/500px-%D0%9C%D1%83%D1%85%D0%B0%D0%BC%D0%BC%D0%B5%D0%B4_%D0%A3%D0%BB%D1%8C%D0%B4_%D0%93%D0%B0%D0%B7%D1%83%D0%B0%D0%BD%D0%B8_02_%2818-02-2022%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/500px-Flag_of_Mauritania.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Seal_of_Mauritania_%282018%29.svg/500px-Seal_of_Mauritania_%282018%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mauritania_%28orthographic_projection%29.svg/500px-Mauritania_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Nouakchott","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Mauritanian"}, 
            currency: [{"demonym":"Mauritanian","unit":"ouguiya"}], 
            tld: {"name":".mr"}, 
            largestCity: [{"name":"Nouakchott","type":"largest city"}], 
        }, 
        {
            country: {"name":"Mauritius","url":"https://en.wikipedia.org/wiki/Mauritius"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Pravind Jugnauth","url":"https://en.wikipedia.org/wiki/Pravind_Jugnauth","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/The_Prime_Minister%2C_Shri_Narendra_Modi_meeting_the_Prime_Minister_of_the_Republic_of_Mauritius%2C_Mr._Pravind_Kumar_Jugnauth%2C_in_New_Delhi_on_December_06%2C_2019_%281%29_%28cropped%29.jpg/500px-thumbnail.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/500px-Flag_of_Mauritius.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Coat_of_arms_of_Mauritius.svg/500px-Coat_of_arms_of_Mauritius.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mauritius_%28orthographic_projection_with_inset%29.svg/500px-Mauritius_%28orthographic_projection_with_inset%29.svg.png"}, 
            capital: [{"name":"Port Louis","type":"capital"}], 
            language: {"list":["English","French","Mauritian Creole"]}, 
            demonym: {"name":"Mauritian"}, 
            currency: [{"demonym":"Mauritian","unit":"rupee"}], 
            tld: {"name":".mu"}, 
            largestCity: [{"name":"Port Louis","type":"largest city"}], 
        }, 
        {
            country: {"name":"Mexico","url":"https://en.wikipedia.org/wiki/Mexico"}, 
            leader: {"title":"President","pos":"president","name":"Andrés Manuel López Obrador","url":"https://en.wikipedia.org/wiki/Andr%C3%A9s_Manuel_L%C3%B3pez_Obrador","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Andr%C3%A9s_Manuel_L%C3%B3pez_Obrador_in_North_American_Leaders%27_Summit_2023_%2852644828441%29.jpg/500px-Andr%C3%A9s_Manuel_L%C3%B3pez_Obrador_in_North_American_Leaders%27_Summit_2023_%2852644828441%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/500px-Flag_of_Mexico.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Coat_of_arms_of_Mexico.svg/500px-Coat_of_arms_of_Mexico.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MEX_orthographic.svg/500px-MEX_orthographic.svg.png"}, 
            capital: [{"name":"Mexico City","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Mexican"}, 
            currency: [{"demonym":"Mexican","unit":"peso"}], 
            tld: {"name":".mx"}, 
            largestCity: [{"name":"Mexico City","type":"largest city"}], 
        }, 
        {
            country: {"name":"Micronesia","url":"https://en.wikipedia.org/wiki/Federated_States_of_Micronesia"}, 
            leader: {"title":"President","pos":"president","name":"Wesley Simina","url":"https://en.wikipedia.org/wiki/Wesley_Simina","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/T.H._Wesley_W._Simina.jpg/500px-T.H._Wesley_W._Simina.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/500px-Flag_of_the_Federated_States_of_Micronesia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_the_Federated_States_of_Micronesia.svg/500px-Seal_of_the_Federated_States_of_Micronesia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Micronesia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg/500px-Micronesia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Palikir","type":"capital"}], 
            largestCity: [{"name":"Weno","type":"largest town"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Micronesian"}, 
            currency: [{"full":"United States dollar"}], 
            tld: {"name":".fm"}, 
        }, 
        {
            country: {"name":"Moldova","url":"https://en.wikipedia.org/wiki/Moldova"}, 
            leader: {"title":"President","pos":"president","name":"Maia Sandu","url":"https://en.wikipedia.org/wiki/Maia_Sandu","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Meeting_of_the_President_of_Ukraine_with_the_President_of_the_Republic_of_Moldova_in_Kyiv_%2823%29_%28cropped%29.jpg/500px-Meeting_of_the_President_of_Ukraine_with_the_President_of_the_Republic_of_Moldova_in_Kyiv_%2823%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/500px-Flag_of_Moldova.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Coat_of_arms_of_Moldova.svg/500px-Coat_of_arms_of_Moldova.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Location_Moldova_Europe.png/500px-Location_Moldova_Europe.png"}, 
            capital: [{"name":"Chișinău","type":"capital"}], 
            language: {"list":["Romanian"]}, 
            demonym: {"name":"Moldovan"}, 
            currency: [{"demonym":"Moldovan","unit":"leu"}], 
            tld: {"name":".md"}, 
            largestCity: [{"name":"Chișinău","type":"largest city"}], 
        }, 
        {
            country: {"name":"Monaco","url":"https://en.wikipedia.org/wiki/Monaco"}, 
            leader: {"title":"Sovereign Prince","pos":"sovereign prince","name":"Albert II","url":"https://en.wikipedia.org/wiki/Albert_II,_Prince_of_Monaco","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Prince_Albert_II_of_Monaco_at_the_Enthronement_of_Naruhito_%281%29.jpg/500px-Prince_Albert_II_of_Monaco_at_the_Enthronement_of_Naruhito_%281%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/500px-Flag_of_Monaco.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Great_coat_of_arms_of_the_house_of_Grimaldi.svg/500px-Great_coat_of_arms_of_the_house_of_Grimaldi.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Location_Monaco_Europe.png/500px-Location_Monaco_Europe.png"}, 
            capital: [{"name":"Monaco","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Monégasque"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".mc"}, 
            largestCity: [{"name":"Monaco","type":"largest city"}], 
        }, 
        {
            country: {"name":"Mongolia","url":"https://en.wikipedia.org/wiki/Mongolia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Luvsannamsrain Oyun-Erdene","url":"https://en.wikipedia.org/wiki/Luvsannamsrain_Oyun-Erdene","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Luvsannamsrain_Oyun-Erdene_2022.jpg/500px-Luvsannamsrain_Oyun-Erdene_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/500px-Flag_of_Mongolia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/State_emblem_of_Mongolia.svg/500px-State_emblem_of_Mongolia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mongolia_%28orthographic_projection%29.svg/500px-Mongolia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Ulaanbaatar","type":"capital"}], 
            language: {"list":["Mongolian"]}, 
            demonym: {"name":"Mongolian"}, 
            currency: [{"demonym":"Mongolian","unit":"tögrög"}], 
            tld: {"name":".mn"}, 
            largestCity: [{"name":"Ulaanbaatar","type":"largest city"}], 
        }, 
        {
            country: {"name":"Montenegro","url":"https://en.wikipedia.org/wiki/Montenegro"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Dritan Abazović","url":"https://en.wikipedia.org/wiki/Dritan_Abazovi%C4%87","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Dritan_Abazovi%C4%87_PM_%28cropped%29.jpg/500px-Dritan_Abazovi%C4%87_PM_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/500px-Flag_of_Montenegro.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Montenegro.svg/500px-Coat_of_arms_of_Montenegro.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Europe-Montenegro.svg/500px-Europe-Montenegro.svg.png"}, 
            capital: [{"name":"Podgorica","type":"capital"}], 
            language: {"list":["Montenegrin"]}, 
            demonym: {"name":"Montenegrin"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".me"}, 
            largestCity: [{"name":"Podgorica","type":"largest city"}], 
        }, 
        {
            country: {"name":"Morocco","url":"https://en.wikipedia.org/wiki/Morocco"}, 
            leader: {"title":"King","pos":"king","name":"Mohammed VI","url":"https://en.wikipedia.org/wiki/Mohammed_VI_of_Morocco","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/King_Mohammed_VI_%28cropped%29.jpg/500px-King_Mohammed_VI_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Morocco_%28large_stroke%29.svg/500px-Flag_of_Morocco_%28large_stroke%29.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Coat_of_arms_of_Morocco.svg/500px-Coat_of_arms_of_Morocco.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Morocco_%28orthographic_projection%2C_WS_claimed%29.svg/500px-Morocco_%28orthographic_projection%2C_WS_claimed%29.svg.png"}, 
            capital: [{"name":"Rabat","type":"capital"}], 
            largestCity: [{"name":"Casablanca","type":"largest city"}], 
            language: {"list":["Arabic","Tamazight"]}, 
            demonym: {"name":"Moroccan"}, 
            currency: [{"demonym":"Moroccan","unit":"dirham"}], 
            tld: {"name":".ma"}, 
        }, 
        {
            country: {"name":"Mozambique","url":"https://en.wikipedia.org/wiki/Mozambique"}, 
            leader: {"title":"President","pos":"president","name":"Filipe Nyusi","url":"https://en.wikipedia.org/wiki/Filipe_Nyusi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Filipe_Nyusi_-_2019_%28cropped%29.jpg/500px-Filipe_Nyusi_-_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/500px-Flag_of_Mozambique.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Emblem_of_Mozambique.svg/500px-Emblem_of_Mozambique.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mozambique_%28orthographic_projection%29.svg/500px-Mozambique_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Maputo","type":"capital"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"Mozambican"}, 
            currency: [{"demonym":"Mozambican","unit":"metical"}], 
            tld: {"name":".mz"}, 
            largestCity: [{"name":"Maputo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Myanmar","url":"https://en.wikipedia.org/wiki/Myanmar"}, 
            leader: {"title":"Chairman of the State Administration Council","pos":"chairman of the State Administration Council","name":"Min Aung Hlaing","url":"https://en.wikipedia.org/wiki/Min_Aung_Hlaing","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%9C%D0%B8%D0%BD_%D0%90%D1%83%D0%BD_%D0%A5%D0%BB%D0%B0%D0%B9%D0%BD_%D0%B2_%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD%D0%B5_04_%2825-06-2021%29_%28cropped_3%29.jpg/500px-%D0%9C%D0%B8%D0%BD_%D0%90%D1%83%D0%BD_%D0%A5%D0%BB%D0%B0%D0%B9%D0%BD_%D0%B2_%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD%D0%B5_04_%2825-06-2021%29_%28cropped_3%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/500px-Flag_of_Myanmar.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/State_seal_of_Myanmar.svg/500px-State_seal_of_Myanmar.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Myanmar_%28orthographic_projection%29.svg/500px-Myanmar_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Naypyidaw","type":"capital"}], 
            largestCity: [{"name":"Yangon","type":"largest city"}], 
            language: {"list":["Burmese"]}, 
            demonym: {"name":"Burmese"}, 
            currency: [{"demonym":"Burmese","unit":"kyat"}], 
            tld: {"name":".mm"}, 
        }, 
        {
            country: {"name":"Namibia","url":"https://en.wikipedia.org/wiki/Namibia"}, 
            leader: {"title":"President","pos":"president","name":"Hage Geingob","url":"https://en.wikipedia.org/wiki/Hage_Geingob","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/2020_Hage_Geingob.jpg/500px-2020_Hage_Geingob.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/500px-Flag_of_Namibia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Coat_of_arms_of_Namibia.svg/500px-Coat_of_arms_of_Namibia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Namibia_%28orthographic_projection%29.svg/500px-Namibia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Windhoek","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Namibian"}, 
            currency: [{"demonym":"Namibian","unit":"dollar"},{"other":"South African rand"}], 
            tld: {"name":".na"}, 
            largestCity: [{"name":"Windhoek","type":"largest city"}], 
        }, 
        {
            country: {"name":"Nauru","url":"https://en.wikipedia.org/wiki/Nauru"}, 
            leader: {"title":"President","pos":"president","name":"Russ Kun","url":"https://en.wikipedia.org/wiki/Russ_Kun","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Russ_Kun_2023.jpg/500px-Russ_Kun_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/500px-Flag_of_Nauru.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Coat_of_arms_of_Nauru.svg/500px-Coat_of_arms_of_Nauru.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/NRU_orthographic.svg/500px-NRU_orthographic.svg.png"}, 
            capital: [{"name":"Yaren","type":"capital"}], 
            largestCity: [{"name":"Denigomodu","type":"largest city"}], 
            language: {"list":["Nauruan","English"]}, 
            demonym: {"name":"Nauruan"}, 
            currency: [{"full":"Australian dollar"}], 
            tld: {"name":".nr"}, 
        }, 
        {
            country: {"name":"Nepal","url":"https://en.wikipedia.org/wiki/Nepal"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Pushpa Kamal Dahal","url":"https://en.wikipedia.org/wiki/Pushpa_Kamal_Dahal","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Pushpa_Kamal_Dahal_2016.jpg/500px-Pushpa_Kamal_Dahal_2016.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/500px-Flag_of_Nepal.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/500px-Emblem_of_Nepal.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nepal_%28orthographic_projection%29.svg/500px-Nepal_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Kathmandu","type":"capital"}], 
            language: {"list":["Nepali"]}, 
            demonym: {"name":"Nepalese"}, 
            currency: [{"demonym":"Nepalese","unit":"rupee"}], 
            tld: {"name":".np"}, 
            largestCity: [{"name":"Kathmandu","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Netherlands","url":"https://en.wikipedia.org/wiki/Kingdom_of_the_Netherlands"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Mark Rutte","url":"https://en.wikipedia.org/wiki/Mark_Rutte","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mark_Rutte%2C_23.03.23_%28cropped%29.jpg/500px-Mark_Rutte%2C_23.03.23_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/500px-Flag_of_the_Netherlands.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Koninklijk_wapen_van_het_koninkrijk_der_Nederlanden.svg/500px-Koninklijk_wapen_van_het_koninkrijk_der_Nederlanden.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kingdom_of_the_Netherlands_%28orthographic_projection%29.svg/500px-Kingdom_of_the_Netherlands_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Amsterdam","type":"capital"}], 
            language: {"list":["Dutch"]}, 
            demonym: {"name":"Dutch"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".nl"}, 
            largestCity: [{"name":"Amsterdam","type":"largest city"}], 
        }, 
        {
            country: {"name":"New Zealand","url":"https://en.wikipedia.org/wiki/New_Zealand"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Chris Hipkins","url":"https://en.wikipedia.org/wiki/Chris_Hipkins","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Chris_Hipkins_NZ_Labour_%282%29.jpg/500px-Chris_Hipkins_NZ_Labour_%282%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/500px-Flag_of_New_Zealand.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coat_of_arms_of_New_Zealand.svg/500px-Coat_of_arms_of_New_Zealand.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NZL_orthographic_NaturalEarth.svg/500px-NZL_orthographic_NaturalEarth.svg.png"}, 
            capital: [{"name":"Wellington","type":"capital"}], 
            largestCity: [{"name":"Auckland","type":"largest city"}], 
            language: {"list":["English","Māori","NZ Sign Language"]}, 
            demonym: {"name":"New Zealander"}, 
            currency: [{"demonym":"New Zealand","unit":"dollar"}], 
            tld: {"name":".nz"}, 
        }, 
        {
            country: {"name":"Nicaragua","url":"https://en.wikipedia.org/wiki/Nicaragua"}, 
            leader: {"title":"President","pos":"president","name":"Daniel Ortega","url":"https://en.wikipedia.org/wiki/Daniel_Ortega","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Daniel_Ortega_2014_%28cropped%29.jpg/500px-Daniel_Ortega_2014_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/500px-Flag_of_Nicaragua.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_Nicaragua.svg/500px-Coat_of_arms_of_Nicaragua.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/NIC_orthographic.svg/500px-NIC_orthographic.svg.png"}, 
            capital: [{"name":"Managua","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Nicaraguan"}, 
            currency: [{"demonym":"Nicaraguan","unit":"córdoba"}], 
            tld: {"name":".ni"}, 
            largestCity: [{"name":"Managua","type":"largest city"}], 
        }, 
        {
            country: {"name":"Niger","url":"https://en.wikipedia.org/wiki/Niger"}, 
            leader: {"title":"President of the National Council for the Safeguard of the Homeland","pos":"president of the National Council for the Safeguard of the Homeland","name":"Abdourahamane Tchiani","url":"https://en.wikipedia.org/wiki/Abdourahamane_Tchiani","imgUrl":""}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/500px-Flag_of_Niger.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Coat_of_arms_of_Niger.svg/500px-Coat_of_arms_of_Niger.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Niger_%28orthographic_projection%29.svg/500px-Niger_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Niamey","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Nigerien"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".ne"}, 
            largestCity: [{"name":"Niamey","type":"largest city"}], 
        }, 
        {
            country: {"name":"Nigeria","url":"https://en.wikipedia.org/wiki/Nigeria"}, 
            leader: {"title":"President","pos":"president","name":"Bola Tinubu","url":"https://en.wikipedia.org/wiki/Bola_Tinubu","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bola_Tinubu_portrait.jpg/500px-Bola_Tinubu_portrait.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/500px-Flag_of_Nigeria.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_Nigeria.svg/500px-Coat_of_arms_of_Nigeria.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nigeria_%28orthographic_projection%29.svg/500px-Nigeria_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Abuja","type":"capital"}], 
            largestCity: [{"name":"Lagos","type":"largest city"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Nigerian"}, 
            currency: [{"demonym":"Nigerian","unit":"naira"}], 
            tld: {"name":".ng"}, 
        }, 
        {
            country: {"name":"North Korea","url":"https://en.wikipedia.org/wiki/North_Korea"}, 
            leader: {"title":"General Secretary of the Workers' Party","pos":"general secretary of the Workers' Party","name":"Kim Jong Un","url":"https://en.wikipedia.org/wiki/Kim_Jong_Un","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg/500px-Kim_Jong-un_April_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/500px-Flag_of_North_Korea.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Emblem_of_the_Democratic_People%27s_Republic_of_Korea.svg/500px-Emblem_of_the_Democratic_People%27s_Republic_of_Korea.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Democratic_People%27s_Republic_of_Korea_%28orthographic_projection%29.svg/500px-Democratic_People%27s_Republic_of_Korea_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Pyongyang","type":"capital"}], 
            language: {"list":["Korean"]}, 
            demonym: {"name":"North Korean"}, 
            currency: [{"demonym":"North Korean","unit":"won"}], 
            tld: {"name":".kp"}, 
            largestCity: [{"name":"Pyongyang","type":"largest city"}], 
        }, 
        {
            country: {"name":"North Macedonia","url":"https://en.wikipedia.org/wiki/North_Macedonia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Dimitar Kovačevski","url":"https://en.wikipedia.org/wiki/Dimitar_Kova%C4%8Devski","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Prime_Minister_Dimitar_Kova%C4%8Devski_%28Kovachevski%29_of_North_Macedonia_in_Washington%2C_D.C._on_8_May_2023_-_52882131968_%28cropped%29.jpg/500px-Prime_Minister_Dimitar_Kova%C4%8Devski_%28Kovachevski%29_of_North_Macedonia_in_Washington%2C_D.C._on_8_May_2023_-_52882131968_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/500px-Flag_of_North_Macedonia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Coat_of_arms_of_North_Macedonia.svg/500px-Coat_of_arms_of_North_Macedonia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Europe-Republic_of_North_Macedonia.svg/500px-Europe-Republic_of_North_Macedonia.svg.png"}, 
            capital: [{"name":"Skopje","type":"capital"}], 
            language: {"list":["Macedonian","Albanian"]}, 
            demonym: {"name":"Macedonian"}, 
            currency: [{"demonym":"Macedonian","unit":"denar"}], 
            tld: {"name":".mk"}, 
            largestCity: [{"name":"Skopje","type":"largest city"}], 
        }, 
        {
            country: {"name":"Norway","url":"https://en.wikipedia.org/wiki/Norway"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Jonas Gahr Støre","url":"https://en.wikipedia.org/wiki/Jonas_Gahr_St%C3%B8re","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Nordic_prime_ministers%E2%80%99_meeting_in_Helsinki_1.11.2022_-_52469398971_%28cropped%29.jpg/500px-Nordic_prime_ministers%E2%80%99_meeting_in_Helsinki_1.11.2022_-_52469398971_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/500px-Flag_of_Norway.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Coat_of_arms_of_Norway.svg/500px-Coat_of_arms_of_Norway.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Europe-Norway_%28orthographic_projection%29.svg/500px-Europe-Norway_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Oslo","type":"capital"}], 
            language: {"list":["Norwegian","Sámi"]}, 
            demonym: {"name":"Norwegian"}, 
            currency: [{"demonym":"Norwegian","unit":"krone"}], 
            tld: {"name":".no"}, 
            largestCity: [{"name":"Oslo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Oman","url":"https://en.wikipedia.org/wiki/Oman"}, 
            leader: {"title":"Sultan and Prime Minister","pos":"sultan and prime minister","name":"Haitham bin Tariq","url":"https://en.wikipedia.org/wiki/Haitham_bin_Tariq","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Secretary_Pompeo_Meets_with_the_Sultan_of_Oman_Haitham_bin_Tariq_Al_Said_%2849565463757%29_%28cropped%29.jpg/500px-Secretary_Pompeo_Meets_with_the_Sultan_of_Oman_Haitham_bin_Tariq_Al_Said_%2849565463757%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/500px-Flag_of_Oman.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/National_emblem_of_Oman.svg/500px-National_emblem_of_Oman.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Oman_%28better%29_%28orthographic_projection%29.svg/500px-Oman_%28better%29_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Muscat","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Omani"}, 
            currency: [{"demonym":"Omani","unit":"rial"}], 
            tld: {"name":".om"}, 
            largestCity: [{"name":"Muscat","type":"largest city"}], 
        }, 
        {
            country: {"name":"Pakistan","url":"https://en.wikipedia.org/wiki/Pakistan"}, 
            leader: {"title":"Caretaker Prime Minister","pos":"caretaker prime minister","name":"Anwaar ul Haq Kakar","url":"https://en.wikipedia.org/wiki/Anwaar_ul_Haq_Kakar","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Anwar_ul_Haq_Kakar.jpg/500px-Anwar_ul_Haq_Kakar.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/500px-Flag_of_Pakistan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/State_emblem_of_Pakistan.svg/500px-State_emblem_of_Pakistan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/PAK_orthographic.svg/500px-PAK_orthographic.svg.png"}, 
            capital: [{"name":"Islamabad","type":"capital"}], 
            largestCity: [{"name":"Karachi","type":"largest city"}], 
            language: {"list":["Urdu","English"]}, 
            demonym: {"name":"Pakistani"}, 
            currency: [{"demonym":"Pakistani","unit":"rupee"}], 
            tld: {"name":".pk"}, 
        }, 
        {
            country: {"name":"Palau","url":"https://en.wikipedia.org/wiki/Palau"}, 
            leader: {"title":"President","pos":"president","name":"Surangel Whipps Jr.","url":"https://en.wikipedia.org/wiki/Surangel_Whipps_Jr.","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Surangel_Whipps_Jr._20220909.jpg/500px-Surangel_Whipps_Jr._20220909.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/500px-Flag_of_Palau.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Seal_of_Palau.svg/500px-Seal_of_Palau.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Palau_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg/500px-Palau_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg.png"}, 
            capital: [{"name":"Ngerulmud","type":"capital"}], 
            largestCity: [{"name":"Koror","type":"largest city"}], 
            language: {"list":["Palauan"]}, 
            demonym: {"name":"Palauan"}, 
            currency: [{"full":"United States dollar"}], 
            tld: {"name":".pw"}, 
        }, 
        {
            country: {"name":"Palestine","url":"https://en.wikipedia.org/wiki/State_of_Palestine"}, 
            leader: {"title":"President","pos":"president","name":"Mahmoud Abbas","url":"https://en.wikipedia.org/wiki/Mahmoud_Abbas","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mahmoud_Abbas_2021_%28cropped%29.jpg/500px-Mahmoud_Abbas_2021_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/500px-Flag_of_Palestine.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Coat_of_arms_of_Palestine.svg/500px-Coat_of_arms_of_Palestine.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/State_of_Palestine_%28orthographic_projection%29.svg/500px-State_of_Palestine_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Jerusalem","type":"proclaimed"},{"name":"Ramallah","type":"administrative"}], 
            largestCity: [{"name":"Gaza City","type":"largest city"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Palestinian"}, 
            currency: [{"full":"Israeli new shekel"},{"other":"Egyptian pound"},{"other":"Jordanian dinar"}], 
            tld: {"name":".ps"}, 
        }, 
        {
            country: {"name":"Panama","url":"https://en.wikipedia.org/wiki/Panama"}, 
            leader: {"title":"President","pos":"president","name":"Laurentino Cortizo","url":"https://en.wikipedia.org/wiki/Laurentino_Cortizo","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Laurentino_Cortizo_%2852134360482%29_%28cropped%29.jpg/500px-Laurentino_Cortizo_%2852134360482%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/500px-Flag_of_Panama.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Coat_of_arms_of_Panama.svg/500px-Coat_of_arms_of_Panama.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PAN_orthographic.svg/500px-PAN_orthographic.svg.png"}, 
            capital: [{"name":"Panama City","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Panamanian"}, 
            currency: [{"demonym":"Panamanian","unit":"balboa"},{"other":"United States dollar"}], 
            tld: {"name":".pa"}, 
            largestCity: [{"name":"Panama City","type":"largest city"}], 
        }, 
        {
            country: {"name":"Papua New Guinea","url":"https://en.wikipedia.org/wiki/Papua_New_Guinea"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"James Marape","url":"https://en.wikipedia.org/wiki/James_Marape","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/James_Marape_-_2023_%2852829685765%29_%28cropped%29.jpg/500px-James_Marape_-_2023_%2852829685765%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/500px-Flag_of_Papua_New_Guinea.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/National_emblem_of_Papua_New_Guinea.svg/500px-National_emblem_of_Papua_New_Guinea.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Papua_New_Guinea_%28orthographic_projection%29.svg/500px-Papua_New_Guinea_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Port Moresby","type":"capital"}], 
            language: {"list":["English","Hiri Motu","PNG Sign Language","Tok Pisin"]}, 
            demonym: {"name":"Papua New Guinean"}, 
            currency: [{"demonym":"Papua New Guinean","unit":"kina"}], 
            tld: {"name":".pg"}, 
            largestCity: [{"name":"Port Moresby","type":"largest city"}], 
        }, 
        {
            country: {"name":"Paraguay","url":"https://en.wikipedia.org/wiki/Paraguay"}, 
            leader: {"title":"President","pos":"president","name":"Santiago Peña","url":"https://en.wikipedia.org/wiki/Santiago_Pe%C3%B1a","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Santi_Pe%C3%B1a_Foto_Oficial.jpg/500px-Santi_Pe%C3%B1a_Foto_Oficial.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/500px-Flag_of_Paraguay.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coat_of_arms_of_Paraguay.svg/500px-Coat_of_arms_of_Paraguay.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/PRY_orthographic.svg/500px-PRY_orthographic.svg.png"}, 
            capital: [{"name":"Asunción","type":"capital"}], 
            language: {"list":["Spanish","Guarani"]}, 
            demonym: {"name":"Paraguayan"}, 
            currency: [{"demonym":"Paraguayan","unit":"guaraní"}], 
            tld: {"name":".py"}, 
            largestCity: [{"name":"Asunción","type":"largest city"}], 
        }, 
        {
            country: {"name":"Peru","url":"https://en.wikipedia.org/wiki/Peru"}, 
            leader: {"title":"President","pos":"president","name":"Dina Boluarte","url":"https://en.wikipedia.org/wiki/Dina_Boluarte","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MISA_Y_TE_DEUM_POR_FIESTAS_PATRIAS_EN_LA_CATEDRAL_DE_LIMA%2C_ASISTE_PRESIDENTA_DE_LA_REPUBLICA_Y_GABINETE_MINISTERIAL_%28cropped%29.jpg/500px-MISA_Y_TE_DEUM_POR_FIESTAS_PATRIAS_EN_LA_CATEDRAL_DE_LIMA%2C_ASISTE_PRESIDENTA_DE_LA_REPUBLICA_Y_GABINETE_MINISTERIAL_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/500px-Flag_of_Peru.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_nacional_del_Per%C3%BA.svg/500px-Escudo_nacional_del_Per%C3%BA.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PER_orthographic.svg/500px-PER_orthographic.svg.png"}, 
            capital: [{"name":"Lima","type":"capital"}], 
            language: {"list":["Spanish","Quechua","Aymara"]}, 
            demonym: {"name":"Peruvian"}, 
            currency: [{"demonym":"Peruvian","unit":"sol"}], 
            tld: {"name":".pe"}, 
            largestCity: [{"name":"Lima","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Philippines","url":"https://en.wikipedia.org/wiki/Philippines"}, 
            leader: {"title":"President","pos":"president","name":"Bongbong Marcos","url":"https://en.wikipedia.org/wiki/Bongbong_Marcos","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ferdinand_R._Marcos_Jr_%28cropped%29.jpg/500px-Ferdinand_R._Marcos_Jr_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/500px-Flag_of_the_Philippines.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_the_Philippines.svg/500px-Coat_of_arms_of_the_Philippines.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/PHL_orthographic.svg/500px-PHL_orthographic.svg.png"}, 
            capital: [{"name":"Manila","type":"capital"}], 
            largestCity: [{"name":"Quezon City","type":"largest city"}], 
            language: {"list":["Filipino","English"]}, 
            demonym: {"name":"Filipino"}, 
            currency: [{"demonym":"Philippine","unit":"peso"}], 
            tld: {"name":".ph"}, 
        }, 
        {
            country: {"name":"Poland","url":"https://en.wikipedia.org/wiki/Poland"}, 
            leader: {"title":"President","pos":"president","name":"Andrzej Duda","url":"https://en.wikipedia.org/wiki/Andrzej_Duda","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Prezydent_Rzeczypospolitej_Polskiej_Andrzej_Duda.jpg/500px-Prezydent_Rzeczypospolitej_Polskiej_Andrzej_Duda.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/500px-Flag_of_Poland.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Herb_Polski.svg/500px-Herb_Polski.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/EU-Poland_%28orthographic_projection%29.svg/500px-EU-Poland_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Warsaw","type":"capital"}], 
            language: {"list":["Polish"]}, 
            demonym: {"name":"Polish"}, 
            currency: [{"demonym":"Polish","unit":"złoty"}], 
            tld: {"name":".pl"}, 
            largestCity: [{"name":"Warsaw","type":"largest city"}], 
        }, 
        {
            country: {"name":"Portugal","url":"https://en.wikipedia.org/wiki/Portugal"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"António Costa","url":"https://en.wikipedia.org/wiki/Ant%C3%B3nio_Costa","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ant%C3%B3nio_Costa_2017.jpg/500px-Ant%C3%B3nio_Costa_2017.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/500px-Flag_of_Portugal.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Coat_of_arms_of_Portugal.svg/500px-Coat_of_arms_of_Portugal.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/EU-Portugal_%28orthographic_projection%29.svg/500px-EU-Portugal_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Lisbon","type":"capital"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"Portuguese"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".pt"}, 
            largestCity: [{"name":"Lisbon","type":"largest city"}], 
        }, 
        {
            country: {"name":"Qatar","url":"https://en.wikipedia.org/wiki/Qatar"}, 
            leader: {"title":"Emir","pos":"emir","name":"Tamim bin Hamad Al Thani","url":"https://en.wikipedia.org/wiki/Tamim_bin_Hamad_Al_Thani","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/%D8%AA%D9%85%D9%8A%D9%85_%D8%A8%D9%86_%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%AE%D9%84%D9%8A%D9%81%D8%A9_%D8%A2%D9%84_%D8%AB%D8%A7%D9%86%D9%8A_%2849759678641%29_%28cropped%29.jpg/500px-%D8%AA%D9%85%D9%8A%D9%85_%D8%A8%D9%86_%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%AE%D9%84%D9%8A%D9%81%D8%A9_%D8%A2%D9%84_%D8%AB%D8%A7%D9%86%D9%8A_%2849759678641%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/500px-Flag_of_Qatar.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Emblem_of_Qatar_%282022%E2%80%93present%29.svg/500px-Emblem_of_Qatar_%282022%E2%80%93present%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/QAT_orthographic.svg/500px-QAT_orthographic.svg.png"}, 
            capital: [{"name":"Doha","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Qatari"}, 
            currency: [{"demonym":"Qatari","unit":"riyal"}], 
            tld: {"name":".qa"}, 
            largestCity: [{"name":"Doha","type":"largest city"}], 
        }, 
        {
            country: {"name":"Romania","url":"https://en.wikipedia.org/wiki/Romania"}, 
            leader: {"title":"President","pos":"president","name":"Klaus Iohannis","url":"https://en.wikipedia.org/wiki/Klaus_Iohannis","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/EPP_Athens%2C_2-3_December%2C_2022_%2852539790143%29_%28cropped%29.jpg/500px-EPP_Athens%2C_2-3_December%2C_2022_%2852539790143%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/500px-Flag_of_Romania.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coat_of_arms_of_Romania.svg/500px-Coat_of_arms_of_Romania.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/EU-Romania_%28orthographic_projection%29.svg/500px-EU-Romania_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Bucharest","type":"capital"}], 
            language: {"list":["Romanian"]}, 
            demonym: {"name":"Romanian"}, 
            currency: [{"demonym":"Romanian","unit":"leu"}], 
            tld: {"name":".ro"}, 
            largestCity: [{"name":"Bucharest","type":"largest city"}], 
        }, 
        {
            country: {"name":"Russia","url":"https://en.wikipedia.org/wiki/Russia"}, 
            leader: {"title":"President","pos":"president","name":"Vladimir Putin","url":"https://en.wikipedia.org/wiki/Vladimir_Putin","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg/500px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/500px-Flag_of_Russia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coat_of_Arms_of_the_Russian_Federation.svg/500px-Coat_of_Arms_of_the_Russian_Federation.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Russian_Federation_%28orthographic_projection%29_-_All_Territorial_Disputes.svg/500px-Russian_Federation_%28orthographic_projection%29_-_All_Territorial_Disputes.svg.png"}, 
            capital: [{"name":"Moscow","type":"capital"}], 
            language: {"list":["Russian"]}, 
            demonym: {"name":"Russian"}, 
            currency: [{"demonym":"Russian","unit":"ruble"}], 
            tld: {"name":".ru"}, 
            largestCity: [{"name":"Moscow","type":"largest city"}], 
        }, 
        {
            country: {"name":"Rwanda","url":"https://en.wikipedia.org/wiki/Rwanda"}, 
            leader: {"title":"President","pos":"president","name":"Paul Kagame","url":"https://en.wikipedia.org/wiki/Paul_Kagame","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Paul_Kagame_2014.jpg/500px-Paul_Kagame_2014.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/500px-Flag_of_Rwanda.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/500px-Coat_of_arms_of_Rwanda.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Location_Rwanda_AU_Africa.svg/500px-Location_Rwanda_AU_Africa.svg.png"}, 
            capital: [{"name":"Kigali","type":"capital"}], 
            language: {"list":["Kinyarwanda","French","English","Swahili"]}, 
            demonym: {"name":"Rwandan"}, 
            currency: [{"demonym":"Rwandan","unit":"franc"}], 
            tld: {"name":".rw"}, 
            largestCity: [{"name":"Kigali","type":"largest city"}], 
        }, 
        {
            country: {"name":"Saint Kitts and Nevis","url":"https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Terrance Drew","url":"https://en.wikipedia.org/wiki/Terrance_Drew","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Terrance_Drew_2022.jpg/500px-Terrance_Drew_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/500px-Flag_of_Saint_Kitts_and_Nevis.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Coat_of_arms_of_Saint_Kitts_and_Nevis.svg/500px-Coat_of_arms_of_Saint_Kitts_and_Nevis.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/KNA_orthographic.svg/500px-KNA_orthographic.svg.png"}, 
            capital: [{"name":"Basseterre","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Kittitian"}, 
            currency: [{"full":"East Caribbean dollar"}], 
            tld: {"name":".kn"}, 
            largestCity: [{"name":"Basseterre","type":"largest city"}], 
        }, 
        {
            country: {"name":"Saint Lucia","url":"https://en.wikipedia.org/wiki/Saint_Lucia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Philip J. Pierre","url":"https://en.wikipedia.org/wiki/Philip_J._Pierre","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Philip_J_Pierre_Christmas_2020_%28cropped%29.png/500px-Philip_J_Pierre_Christmas_2020_%28cropped%29.png"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/500px-Flag_of_Saint_Lucia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coat_of_arms_of_Saint_Lucia.svg/500px-Coat_of_arms_of_Saint_Lucia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Saint_Lucia_on_the_globe_%28Americas_centered%29.svg/500px-Saint_Lucia_on_the_globe_%28Americas_centered%29.svg.png"}, 
            capital: [{"name":"Castries","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Saint Lucian"}, 
            currency: [{"full":"East Caribbean dollar"}], 
            tld: {"name":".lc"}, 
            largestCity: [{"name":"Castries","type":"largest city"}], 
        }, 
        {
            country: {"name":"Saint Vincent and the Grenadines","url":"https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Ralph Gonsalves","url":"https://en.wikipedia.org/wiki/Ralph_Gonsalves","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ralph_Gonsalves_2023.jpg/500px-Ralph_Gonsalves_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/500px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Coat_of_arms_of_Saint_Vincent_and_the_Grenadines.svg/500px-Coat_of_arms_of_Saint_Vincent_and_the_Grenadines.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/VCT_orthographic.svg/500px-VCT_orthographic.svg.png"}, 
            capital: [{"name":"Kingstown","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Vincentian and Grenadinian"}, 
            currency: [{"full":"East Caribbean dollar"}], 
            tld: {"name":".vc"}, 
            largestCity: [{"name":"Kingstown","type":"largest city"}], 
        }, 
        {
            country: {"name":"Samoa","url":"https://en.wikipedia.org/wiki/Samoa"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Fiamē Naomi Mataʻafa","url":"https://en.wikipedia.org/wiki/Fiam%C4%93_Naomi_Mata%CA%BBafa","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fiam%C4%93_Naomi_Mata%CA%BBafa_2_June_2022.jpg/500px-Fiam%C4%93_Naomi_Mata%CA%BBafa_2_June_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/500px-Flag_of_Samoa.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coat_of_arms_of_Samoa.svg/500px-Coat_of_arms_of_Samoa.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Samoa_on_the_globe_%28Polynesia_centered%29.svg/500px-Samoa_on_the_globe_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Apia","type":"capital"}], 
            language: {"list":["Samoan","English"]}, 
            demonym: {"name":"Samoan"}, 
            currency: [{"demonym":"Samoan","unit":"tālā"}], 
            tld: {"name":".ws"}, 
            largestCity: [{"name":"Apia","type":"largest city"}], 
        }, 
        {
            country: {"name":"San Marino","url":"https://en.wikipedia.org/wiki/San_Marino"}, 
            leader: {"title":"Secretary for Foreign and Political Affairs","pos":"secretary for Foreign and Political Affairs","name":"Luca Beccari","url":"https://en.wikipedia.org/wiki/Luca_Beccari","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Luca_Beccari_San_Marino_%28cropped%29.jpg/500px-Luca_Beccari_San_Marino_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/500px-Flag_of_San_Marino.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_San_Marino.svg/500px-Coat_of_arms_of_San_Marino.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Location_San_Marino_Europe.png/500px-Location_San_Marino_Europe.png"}, 
            capital: [{"name":"San Marino","type":"capital"}], 
            largestCity: [{"name":"Dogana","type":"largest settlement"}], 
            language: {"list":["Italian"]}, 
            demonym: {"name":"Sammarinese"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".sm"}, 
        }, 
        {
            country: {"name":"São Tomé and Príncipe","url":"https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Patrice Trovoada","url":"https://en.wikipedia.org/wiki/Patrice_Trovoada","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dr._Partice_Emery_Trovoda%2C_October_28%2C_2015_%28cropped%29.jpg/500px-Dr._Partice_Emery_Trovoda%2C_October_28%2C_2015_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/500px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/500px-Coat_of_arms_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa.svg/500px-Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa.svg.png"}, 
            capital: [{"name":"São Tomé","type":"capital"}], 
            language: {"list":["Portuguese"]}, 
            demonym: {"name":"São Toméan"}, 
            currency: [{"demonym":"São Tomé and Príncipe","unit":"dobra"}], 
            tld: {"name":".st"}, 
            largestCity: [{"name":"São Tomé","type":"largest city"}], 
        }, 
        {
            country: {"name":"Saudi Arabia","url":"https://en.wikipedia.org/wiki/Saudi_Arabia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Mohammed bin Salman","url":"https://en.wikipedia.org/wiki/Mohammed_bin_Salman","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mohammad_bin_Salman_October_2019_%28cropped%29.jpg/500px-Mohammad_bin_Salman_October_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/500px-Flag_of_Saudi_Arabia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Emblem_of_Saudi_Arabia.svg/500px-Emblem_of_Saudi_Arabia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saudi_Arabia_%28orthographic_projection%29.svg/500px-Saudi_Arabia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Riyadh","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Saudi"}, 
            currency: [{"demonym":"Saudi","unit":"riyal"}], 
            tld: {"name":".sa"}, 
            largestCity: [{"name":"Riyadh","type":"largest city"}], 
        }, 
        {
            country: {"name":"Senegal","url":"https://en.wikipedia.org/wiki/Senegal"}, 
            leader: {"title":"President","pos":"president","name":"Macky Sall","url":"https://en.wikipedia.org/wiki/Macky_Sall","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/President_Macky_Sall_in_2020.jpg/500px-President_Macky_Sall_in_2020.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/500px-Flag_of_Senegal.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Coat_of_arms_of_Senegal.svg/500px-Coat_of_arms_of_Senegal.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Senegal_%28orthographic_projection%29.svg/500px-Senegal_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Dakar","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Senegalese"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".sn"}, 
            largestCity: [{"name":"Dakar","type":"largest city"}], 
        }, 
        {
            country: {"name":"Serbia","url":"https://en.wikipedia.org/wiki/Serbia"}, 
            leader: {"title":"President","pos":"president","name":"Aleksandar Vučić","url":"https://en.wikipedia.org/wiki/Aleksandar_Vu%C4%8Di%C4%87","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aleksandar_Vu%C4%8Di%C4%87_2019_%28cropped%29.jpg/500px-Aleksandar_Vu%C4%8Di%C4%87_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/500px-Flag_of_Serbia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_Serbia.svg/500px-Coat_of_arms_of_Serbia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Serbia_%28orthographic_projection%29.svg/500px-Serbia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Belgrade","type":"capital"}], 
            language: {"list":["Serbian"]}, 
            demonym: {"name":"Serbian"}, 
            currency: [{"demonym":"Serbian","unit":"dinar"}], 
            tld: {"name":".rs"}, 
            largestCity: [{"name":"Belgrade","type":"largest city"}], 
        }, 
        {
            country: {"name":"Seychelles","url":"https://en.wikipedia.org/wiki/Seychelles"}, 
            leader: {"title":"President","pos":"president","name":"Wavel Ramkalawan","url":"https://en.wikipedia.org/wiki/Wavel_Ramkalawan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wavel_Ramkalawan_-_president_of_Seychelles_%28cropped%29.jpg/500px-Wavel_Ramkalawan_-_president_of_Seychelles_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/500px-Flag_of_Seychelles.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Coat_of_arms_of_Seychelles.svg/500px-Coat_of_arms_of_Seychelles.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Location_Seychelles_AU_Africa.svg/500px-Location_Seychelles_AU_Africa.svg.png"}, 
            capital: [{"name":"Victoria","type":"capital"}], 
            language: {"list":["English","French","Seychellois Creole"]}, 
            demonym: {"name":"Seychellois"}, 
            currency: [{"demonym":"Seychellois","unit":"rupee"}], 
            tld: {"name":".sc"}, 
            largestCity: [{"name":"Victoria","type":"largest city"}], 
        }, 
        {
            country: {"name":"Sierra Leone","url":"https://en.wikipedia.org/wiki/Sierra_Leone"}, 
            leader: {"title":"President","pos":"president","name":"Julius Maada Bio","url":"https://en.wikipedia.org/wiki/Julius_Maada_Bio","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Julius_Maada_Bio_-_2023_%28cropped%29.jpg/500px-Julius_Maada_Bio_-_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/500px-Flag_of_Sierra_Leone.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Coat_of_arms_of_Sierra_Leone.svg/500px-Coat_of_arms_of_Sierra_Leone.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sierra_Leone_%28orthographic_projection%29.svg/500px-Sierra_Leone_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Freetown","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Sierra Leonean"}, 
            currency: [{"demonym":"Sierra Leonean","unit":"leone"}], 
            tld: {"name":".sl"}, 
            largestCity: [{"name":"Freetown","type":"largest city"}], 
        }, 
        {
            country: {"name":"Singapore","url":"https://en.wikipedia.org/wiki/Singapore"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Lee Hsien Loong","url":"https://en.wikipedia.org/wiki/Lee_Hsien_Loong","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lee_Hsien_Loong_2022.jpg/500px-Lee_Hsien_Loong_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/500px-Flag_of_Singapore.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Coat_of_arms_of_Singapore.svg/500px-Coat_of_arms_of_Singapore.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Singapore_on_the_globe_%28Southeast_Asia_centered%29_zoom.svg/500px-Singapore_on_the_globe_%28Southeast_Asia_centered%29_zoom.svg.png"}, 
            capital: [{"name":"Singapore","type":"capital"}], 
            language: {"list":["English","Malay","Mandarin","Tamil"]}, 
            demonym: {"name":"Singaporean"}, 
            currency: [{"demonym":"Singapore","unit":"dollar"}], 
            tld: {"name":".sg"}, 
            largestCity: [{"name":"Singapore","type":"largest city"}], 
        }, 
        {
            country: {"name":"Slovakia","url":"https://en.wikipedia.org/wiki/Slovakia"}, 
            leader: {"title":"Interim Prime Minister","pos":"interim prime minister","name":"Ľudovít Ódor","url":"https://en.wikipedia.org/wiki/%C4%BDudov%C3%ADt_%C3%93dor","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PMSZ-78_%28cropped%29.jpg/500px-PMSZ-78_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/500px-Flag_of_Slovakia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Coat_of_arms_of_Slovakia.svg/500px-Coat_of_arms_of_Slovakia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/EU-Slovakia.svg/500px-EU-Slovakia.svg.png"}, 
            capital: [{"name":"Bratislava","type":"capital"}], 
            language: {"list":["Slovak"]}, 
            demonym: {"name":"Slovak"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".sk"}, 
            largestCity: [{"name":"Bratislava","type":"largest city"}], 
        }, 
        {
            country: {"name":"Slovenia","url":"https://en.wikipedia.org/wiki/Slovenia"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Robert Golob","url":"https://en.wikipedia.org/wiki/Robert_Golob","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Robert_Golob_-_52114942369_%28cropped%29.jpg/500px-Robert_Golob_-_52114942369_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/500px-Flag_of_Slovenia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Coat_of_arms_of_Slovenia.svg/500px-Coat_of_arms_of_Slovenia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EU-Slovenia.svg/500px-EU-Slovenia.svg.png"}, 
            capital: [{"name":"Ljubljana","type":"capital"}], 
            language: {"list":["Slovene"]}, 
            demonym: {"name":"Slovene"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".si"}, 
            largestCity: [{"name":"Ljubljana","type":"largest city"}], 
        }, 
        {
            country: {"name":"the Solomon Islands","url":"https://en.wikipedia.org/wiki/Solomon_Islands"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Manasseh Sogavare","url":"https://en.wikipedia.org/wiki/Manasseh_Sogavare","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%81%D0%B5_%D0%A1%D0%BE%D0%B3%D0%B0%D0%B2%D0%B0%D1%80%D0%B5_%2828532489095%29.jpg/500px-%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%81%D0%B5_%D0%A1%D0%BE%D0%B3%D0%B0%D0%B2%D0%B0%D1%80%D0%B5_%2828532489095%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/500px-Flag_of_the_Solomon_Islands.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_the_Solomon_Islands.svg/500px-Coat_of_arms_of_the_Solomon_Islands.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Solomon_Islands_on_the_globe_%28Oceania_centered%29.svg/500px-Solomon_Islands_on_the_globe_%28Oceania_centered%29.svg.png"}, 
            capital: [{"name":"Honiara","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Solomon Islander"}, 
            currency: [{"demonym":"Solomon Islands","unit":"dollar"}], 
            tld: {"name":".sb"}, 
            largestCity: [{"name":"Honiara","type":"largest city"}], 
        }, 
        {
            country: {"name":"Somalia","url":"https://en.wikipedia.org/wiki/Somalia"}, 
            leader: {"title":"President","pos":"president","name":"Hassan Sheikh Mohamud","url":"https://en.wikipedia.org/wiki/Hassan_Sheikh_Mohamud","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Somali_President_Hassan_Sheikh_Mohamud_at_Djiboutian_presidential_palace_in_Djibouti%2C_Djibouti%2C_September_24%2C_2023_-_%28cropped%29.jpg/500px-Somali_President_Hassan_Sheikh_Mohamud_at_Djiboutian_presidential_palace_in_Djibouti%2C_Djibouti%2C_September_24%2C_2023_-_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/500px-Flag_of_Somalia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Somalia.svg/500px-Coat_of_arms_of_Somalia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Somalia_%28orthographic_projection%29.svg/500px-Somalia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Mogadishu","type":"capital"}], 
            language: {"list":["Somali","Arabic"]}, 
            demonym: {"name":"Somali"}, 
            currency: [{"demonym":"Somali","unit":"shilling"}], 
            tld: {"name":".so"}, 
            largestCity: [{"name":"Mogadishu","type":"largest city"}], 
        }, 
        {
            country: {"name":"South Africa","url":"https://en.wikipedia.org/wiki/South_Africa"}, 
            leader: {"title":"President","pos":"president","name":"Cyril Ramaphosa","url":"https://en.wikipedia.org/wiki/Cyril_Ramaphosa","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Prime_Minister_Sunak_met_with_President_Ramaphosa_of_South_Africa_in_Number_10_-_2022_%28cropped%29.jpg/500px-Prime_Minister_Sunak_met_with_President_Ramaphosa_of_South_Africa_in_Number_10_-_2022_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/500px-Flag_of_South_Africa.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Coat_of_arms_of_South_Africa.svg/500px-Coat_of_arms_of_South_Africa.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ZAF_orthographic.svg/500px-ZAF_orthographic.svg.png"}, 
            capital: [{"name":"Pretoria","type":"executive"},{"name":"Cape Town","type":"legislative"},{"name":"Bloemfontein","type":"judicial"}], 
            largestCity: [{"name":"Johannesburg","type":"largest city"}], 
            language: {"list":["Afrikaans","English","Ndebele","Sepedi","Sesotho","Setswana","South African Sign Language","Swazi","Tshivenda","Xhosa","Xitsonga","Zulu"]}, 
            demonym: {"name":"South African"}, 
            currency: [{"demonym":"South African","unit":"rand"}], 
            tld: {"name":".za"}, 
        }, 
        {
            country: {"name":"South Korea","url":"https://en.wikipedia.org/wiki/South_Korea"}, 
            leader: {"title":"President","pos":"president","name":"Yoon Suk-yeol","url":"https://en.wikipedia.org/wiki/Yoon_Suk-yeol","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/South_Korea_President_Yoon_Suk_Yeol_portrait.jpg/500px-South_Korea_President_Yoon_Suk_Yeol_portrait.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/500px-Flag_of_South_Korea.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Emblem_of_South_Korea.svg/500px-Emblem_of_South_Korea.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Republic_of_Korea_%28orthographic_projection%29.svg/500px-Republic_of_Korea_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Seoul","type":"capital"}], 
            language: {"list":["Korean"]}, 
            demonym: {"name":"South Korean"}, 
            currency: [{"demonym":"South Korean","unit":"won"}], 
            tld: {"name":".kr"}, 
            largestCity: [{"name":"Seoul","type":"largest city"}], 
        }, 
        {
            country: {"name":"South Sudan","url":"https://en.wikipedia.org/wiki/South_Sudan"}, 
            leader: {"title":"President","pos":"president","name":"Salva Kiir Mayardit","url":"https://en.wikipedia.org/wiki/Salva_Kiir_Mayardit","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/President_Barack_Obama_and_First_Lady_Michelle_Obama_greet_His_Excellency_Salva_Kiir_Mayardit%2C_President_of_the_Republic_of_South_Sudan_%28cropped%29.jpg/500px-President_Barack_Obama_and_First_Lady_Michelle_Obama_greet_His_Excellency_Salva_Kiir_Mayardit%2C_President_of_the_Republic_of_South_Sudan_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/500px-Flag_of_South_Sudan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coat_of_arms_of_South_Sudan.svg/500px-Coat_of_arms_of_South_Sudan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/South_Sudan_%28orthographic_projection%29_highlighted.svg/500px-South_Sudan_%28orthographic_projection%29_highlighted.svg.png"}, 
            capital: [{"name":"Juba","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"South Sudanese"}, 
            currency: [{"demonym":"South Sudanese","unit":"pound"}], 
            tld: {"name":".ss"}, 
            largestCity: [{"name":"Juba","type":"largest city"}], 
        }, 
        {
            country: {"name":"Spain","url":"https://en.wikipedia.org/wiki/Spain"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Pedro Sánchez","url":"https://en.wikipedia.org/wiki/Pedro_S%C3%A1nchez","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pedro_S%C3%A1nchez_in_2023.jpg/500px-Pedro_S%C3%A1nchez_in_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/500px-Bandera_de_Espa%C3%B1a.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/500px-Escudo_de_Espa%C3%B1a_%28mazonado%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/EU-Spain_%28orthographic_projection%29.svg/500px-EU-Spain_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Madrid","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Spanish"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".es"}, 
            largestCity: [{"name":"Madrid","type":"largest city"}], 
        }, 
        {
            country: {"name":"Sri Lanka","url":"https://en.wikipedia.org/wiki/Sri_Lanka"}, 
            leader: {"title":"President","pos":"president","name":"Ranil Wickremesinghe","url":"https://en.wikipedia.org/wiki/Ranil_Wickremesinghe","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ranil_Wickremesinghe_before_the_funeral_of_Shinzo_Abe.jpg/500px-Ranil_Wickremesinghe_before_the_funeral_of_Shinzo_Abe.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/500px-Flag_of_Sri_Lanka.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_Sri_Lanka.svg/500px-Emblem_of_Sri_Lanka.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sri_Lanka_%28orthographic_projection%29.svg/500px-Sri_Lanka_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Sri Jayawardenepura Kotte","type":"legislative"},{"name":"Colombo","type":"executive and judicial"}], 
            largestCity: [{"name":"Colombo","type":"largest city"}], 
            language: {"list":["Sinhala","Tamil"]}, 
            demonym: {"name":"Sri Lankan"}, 
            currency: [{"demonym":"Sri Lankan","unit":"rupee"}], 
            tld: {"name":".lk"}, 
        }, 
        {
            country: {"name":"Sudan","url":"https://en.wikipedia.org/wiki/Sudan"}, 
            leader: {"title":"Chairman","pos":"chairman","name":"Abdel Fattah al-Burhan","url":"https://en.wikipedia.org/wiki/Abdel_Fattah_al-Burhan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Chairman_of_the_Sovereignty_Council_of_Sudan_Abdel_Fattah_Abdelrahman_Burhan_in_October_2019_%28cropped%29.jpg/500px-Chairman_of_the_Sovereignty_Council_of_Sudan_Abdel_Fattah_Abdelrahman_Burhan_in_October_2019_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/500px-Flag_of_Sudan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Emblem_of_Sudan.svg/500px-Emblem_of_Sudan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sudan_%28orthographic_projection%29_highlighted.svg/500px-Sudan_%28orthographic_projection%29_highlighted.svg.png"}, 
            capital: [{"name":"Khartoum","type":"capital"}], 
            largestCity: [{"name":"Omdurman","type":"largest city"}], 
            language: {"list":["Arabic","English"]}, 
            demonym: {"name":"Sudanese"}, 
            currency: [{"demonym":"Sudanese","unit":"pound"}], 
            tld: {"name":".sd"}, 
        }, 
        {
            country: {"name":"Suriname","url":"https://en.wikipedia.org/wiki/Suriname"}, 
            leader: {"title":"President","pos":"president","name":"Chan Santokhi","url":"https://en.wikipedia.org/wiki/Chan_Santokhi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%D0%A7%D0%B0%D0%BD%D0%B4%D1%80%D0%B8%D0%BA%D0%B0%D0%BF%D0%B5%D1%80%D1%81%D0%B0%D0%B4_%D0%A1%D0%B0%D0%BD%D1%82%D0%BE%D1%85%D0%B8_%28cropped%29.jpg/500px-%D0%A7%D0%B0%D0%BD%D0%B4%D1%80%D0%B8%D0%BA%D0%B0%D0%BF%D0%B5%D1%80%D1%81%D0%B0%D0%B4_%D0%A1%D0%B0%D0%BD%D1%82%D0%BE%D1%85%D0%B8_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/500px-Flag_of_Suriname.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Coat_of_arms_of_Suriname.svg/500px-Coat_of_arms_of_Suriname.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/SURINAME_orthographic.svg/500px-SURINAME_orthographic.svg.png"}, 
            capital: [{"name":"Paramaribo","type":"capital"}], 
            language: {"list":["Dutch"]}, 
            demonym: {"name":"Surinamese"}, 
            currency: [{"demonym":"Surinamese","unit":"dollar"}], 
            tld: {"name":".sr"}, 
            largestCity: [{"name":"Paramaribo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Sweden","url":"https://en.wikipedia.org/wiki/Sweden"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Ulf Kristersson","url":"https://en.wikipedia.org/wiki/Ulf_Kristersson","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/P061521-697284_%28cropped%29.jpg/500px-P061521-697284_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/500px-Flag_of_Sweden.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Great_coat_of_arms_of_Sweden.svg/500px-Great_coat_of_arms_of_Sweden.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/EU-Sweden_%28orthographic_projection%29.svg/500px-EU-Sweden_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Stockholm","type":"capital"}], 
            language: {"list":["Swedish"]}, 
            demonym: {"name":"Swedish"}, 
            currency: [{"demonym":"Swedish","unit":"krona"}], 
            tld: {"name":".se"}, 
            largestCity: [{"name":"Stockholm","type":"largest city"}], 
        }, 
        {
            country: {"name":"Switzerland","url":"https://en.wikipedia.org/wiki/Switzerland"}, 
            leader: {"title":"Federal Council","pos":"federal council","name":"Federal Council","url":"https://en.wikipedia.org/wiki/Federal_Council_(Switzerland)","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Bundesratsfoto_2023.jpg/500px-Bundesratsfoto_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/500px-Flag_of_Switzerland_%28Pantone%29.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Coat_of_Arms_of_Switzerland_%28Pantone%29.svg/500px-Coat_of_Arms_of_Switzerland_%28Pantone%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Europe-Switzerland.svg/500px-Europe-Switzerland.svg.png"}, 
            capital: [{"name":"Bern","type":"de facto"}], 
            largestCity: [{"name":"Zürich","type":"largest city"}], 
            language: {"list":["German","French","Italian","Romansh"]}, 
            demonym: {"name":"Swiss"}, 
            currency: [{"demonym":"Swiss","unit":"franc"}], 
            tld: {"name":".ch"}, 
        }, 
        {
            country: {"name":"Syria","url":"https://en.wikipedia.org/wiki/Syria"}, 
            leader: {"title":"President","pos":"president","name":"Bashar al-Assad","url":"https://en.wikipedia.org/wiki/Bashar_al-Assad","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bashar_al-Assad_meets_with_Khamenei_2022_%28cropped%29.jpeg/500px-Bashar_al-Assad_meets_with_Khamenei_2022_%28cropped%29.jpeg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/500px-Flag_of_Syria.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Coat_of_arms_of_Syria.svg/500px-Coat_of_arms_of_Syria.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Syria_%28orthographic_projection%29_disputed.svg/500px-Syria_%28orthographic_projection%29_disputed.svg.png"}, 
            capital: [{"name":"Damascus","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Syrian"}, 
            currency: [{"demonym":"Syrian","unit":"pound"}], 
            tld: {"name":".sy"}, 
            largestCity: [{"name":"Damascus","type":"largest city"}], 
        }, 
        {
            country: {"name":"Tajikistan","url":"https://en.wikipedia.org/wiki/Tajikistan"}, 
            leader: {"title":"President","pos":"president","name":"Emomali Rahmon","url":"https://en.wikipedia.org/wiki/Emomali_Rahmon","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2021_Moscow_Victory_Day_Parade_037_%28cropped%29.jpg/500px-2021_Moscow_Victory_Day_Parade_037_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/500px-Flag_of_Tajikistan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblem_of_Tajikistan.svg/500px-Emblem_of_Tajikistan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tajikistan_%28orthographic_projection%29.svg/500px-Tajikistan_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Dushanbe","type":"capital"}], 
            language: {"list":["Tajiki","Russian"]}, 
            demonym: {"name":"Tajikistani"}, 
            currency: [{"demonym":"Tajikistani","unit":"somoni"}], 
            tld: {"name":".tj"}, 
            largestCity: [{"name":"Dushanbe","type":"largest city"}], 
        }, 
        {
            country: {"name":"Tanzania","url":"https://en.wikipedia.org/wiki/Tanzania"}, 
            leader: {"title":"President","pos":"president","name":"Samia Suluhu Hassan","url":"https://en.wikipedia.org/wiki/Samia_Suluhu_Hassan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/International_leaders_sign_joint_statement_at_COP26_%2851649202102%29_%28Suluhu_crop%29.jpg/500px-International_leaders_sign_joint_statement_at_COP26_%2851649202102%29_%28Suluhu_crop%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/500px-Flag_of_Tanzania.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_arms_of_Tanzania.svg/500px-Coat_of_arms_of_Tanzania.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tanzania_%28orthographic_projection%29.svg/500px-Tanzania_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Dodoma","type":"capital"}], 
            largestCity: [{"name":"Dar es Salaam","type":"largest city"}], 
            language: {"list":["Swahili","English","Arabic"]}, 
            demonym: {"name":"Tanzanian"}, 
            currency: [{"demonym":"Tanzanian","unit":"shilling"}], 
            tld: {"name":".tz"}, 
        }, 
        {
            country: {"name":"Thailand","url":"https://en.wikipedia.org/wiki/Thailand"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Srettha Thavisin","url":"https://en.wikipedia.org/wiki/Srettha_Thavisin","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Srettha_Thavisin_at_Pheu_Thai_Party_headquarters%2CBangkok%2C_7_September_2023.jpg/500px-Srettha_Thavisin_at_Pheu_Thai_Party_headquarters%2CBangkok%2C_7_September_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/500px-Flag_of_Thailand.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Thailand.svg/500px-Emblem_of_Thailand.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Thailand_%28orthographic_projection%29.svg/500px-Thailand_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Bangkok","type":"capital"}], 
            language: {"list":["Thai"]}, 
            demonym: {"name":"Thai"}, 
            currency: [{"demonym":"Thai","unit":"baht"}], 
            tld: {"name":".th"}, 
            largestCity: [{"name":"Bangkok","type":"largest city"}], 
        }, 
        {
            country: {"name":"Togo","url":"https://en.wikipedia.org/wiki/Togo"}, 
            leader: {"title":"President","pos":"president","name":"Faure Gnassingbé","url":"https://en.wikipedia.org/wiki/Faure_Gnassingb%C3%A9","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Photo_Faure_Gnassingbe_2023.jpg/500px-Photo_Faure_Gnassingbe_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/500px-Flag_of_Togo.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Armoiries_du_Togo.svg/500px-Armoiries_du_Togo.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Location_Togo_AU_Africa.svg/500px-Location_Togo_AU_Africa.svg.png"}, 
            capital: [{"name":"Lomé","type":"capital"}], 
            language: {"list":["French"]}, 
            demonym: {"name":"Togolese"}, 
            currency: [{"full":"West African CFA franc"}], 
            tld: {"name":".tg"}, 
            largestCity: [{"name":"Lomé","type":"largest city"}], 
        }, 
        {
            country: {"name":"Tonga","url":"https://en.wikipedia.org/wiki/Tonga"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Siaosi Sovaleni","url":"https://en.wikipedia.org/wiki/Siaosi_Sovaleni","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Siaosi_Sovaleni_June_2022.jpg/500px-Siaosi_Sovaleni_June_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/500px-Flag_of_Tonga.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Tongan_coat_of_arms.svg/500px-Tongan_coat_of_arms.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tonga_on_the_globe_%28Polynesia_centered%29.svg/500px-Tonga_on_the_globe_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Nukuʻalofa","type":"capital"}], 
            language: {"list":["Tongan","English"]}, 
            demonym: {"name":"Tongan"}, 
            currency: [{"demonym":"Tongan","unit":"paʻanga"}], 
            tld: {"name":".to"}, 
            largestCity: [{"name":"Nukuʻalofa","type":"largest city"}], 
        }, 
        {
            country: {"name":"Trinidad and Tobago","url":"https://en.wikipedia.org/wiki/Trinidad_and_Tobago"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Keith Rowley","url":"https://en.wikipedia.org/wiki/Keith_Rowley","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/KeithRowley.jpg/500px-KeithRowley.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/500px-Flag_of_Trinidad_and_Tobago.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Coat_of_arms_of_Trinidad_and_Tobago.svg/500px-Coat_of_arms_of_Trinidad_and_Tobago.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Trinidad_and_Tobago_%28orthographic_projection%29.svg/500px-Trinidad_and_Tobago_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Port of Spain","type":"capital"}], 
            largestCity: [{"name":"Chaguanas","type":"largest city"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Trinidadian and Tobagonian"}, 
            currency: [{"demonym":"Trinidad and Tobago","unit":"dollar"}], 
            tld: {"name":".tt"}, 
        }, 
        {
            country: {"name":"Tunisia","url":"https://en.wikipedia.org/wiki/Tunisia"}, 
            leader: {"title":"President","pos":"president","name":"Kaïs Saïed","url":"https://en.wikipedia.org/wiki/Kais_Saied","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kais_Saied_2023.jpg/500px-Kais_Saied_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/500px-Flag_of_Tunisia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_arms_of_Tunisia.svg/500px-Coat_of_arms_of_Tunisia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tunisia_location_%28orthographic_projection%29.svg/500px-Tunisia_location_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Tunis","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Tunisian"}, 
            currency: [{"demonym":"Tunisian","unit":"dinar"}], 
            tld: {"name":".tn"}, 
            largestCity: [{"name":"Tunis","type":"largest city"}], 
        }, 
        {
            country: {"name":"Turkey","url":"https://en.wikipedia.org/wiki/Turkey"}, 
            leader: {"title":"President","pos":"president","name":"Recep Tayyip Erdoğan","url":"https://en.wikipedia.org/wiki/Recep_Tayyip_Erdo%C4%9Fan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Recep_Tayyip_Erdogan_in_Ukraine.jpg/500px-Recep_Tayyip_Erdogan_in_Ukraine.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/500px-Flag_of_Turkey.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Emblem_of_Turkey.svg/500px-Emblem_of_Turkey.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Turkey_%28orthographic_projection%29.svg/500px-Turkey_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Ankara","type":"capital"}], 
            largestCity: [{"name":"Istanbul","type":"largest city"}], 
            language: {"list":["Turkish"]}, 
            demonym: {"name":"Turkish"}, 
            currency: [{"demonym":"Turkish","unit":"lira"}], 
            tld: {"name":".tr"}, 
        }, 
        {
            country: {"name":"Turkmenistan","url":"https://en.wikipedia.org/wiki/Turkmenistan"}, 
            leader: {"title":"Chairman of the People's Council","pos":"chairman of the People's Council","name":"Gurbanguly Berdimuhamedow","url":"https://en.wikipedia.org/wiki/Gurbanguly_Berdimuhamedow","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gurbanguly_Berdimuhamedow_%282017-10-11%29_02.jpg/500px-Gurbanguly_Berdimuhamedow_%282017-10-11%29_02.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/500px-Flag_of_Turkmenistan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Emblem_of_Turkmenistan.svg/500px-Emblem_of_Turkmenistan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Turkmenistan_on_the_globe_%28Afro-Eurasia_centered%29.svg/500px-Turkmenistan_on_the_globe_%28Afro-Eurasia_centered%29.svg.png"}, 
            capital: [{"name":"Ashgabat","type":"capital"}], 
            language: {"list":["Turkmen"]}, 
            demonym: {"name":"Turkmenistani"}, 
            currency: [{"demonym":"Turkmenistani","unit":"manat"}], 
            tld: {"name":".tm"}, 
            largestCity: [{"name":"Ashgabat","type":"largest city"}], 
        }, 
        {
            country: {"name":"Tuvalu","url":"https://en.wikipedia.org/wiki/Tuvalu"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Kausea Natano","url":"https://en.wikipedia.org/wiki/Kausea_Natano","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kausea_Natano_June_2022.jpg/500px-Kausea_Natano_June_2022.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/500px-Flag_of_Tuvalu.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coat_of_arms_of_Tuvalu.svg/500px-Coat_of_arms_of_Tuvalu.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tuvalu_on_the_globe_%28Polynesia_centered%29.svg/500px-Tuvalu_on_the_globe_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Funafuti","type":"capital"}], 
            language: {"list":["Tuvaluan","English"]}, 
            demonym: {"name":"Tuvaluan"}, 
            currency: [{"demonym":"Tuvaluan","unit":"dollar"},{"other":"Australian dollar"}], 
            tld: {"name":".tv"}, 
            largestCity: [{"name":"Funafuti","type":"largest city"}], 
        }, 
        {
            country: {"name":"Uganda","url":"https://en.wikipedia.org/wiki/Uganda"}, 
            leader: {"title":"President","pos":"president","name":"Yoweri Museveni","url":"https://en.wikipedia.org/wiki/Yoweri_Museveni","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Museveni_July_2012_Cropped.jpg/500px-Museveni_July_2012_Cropped.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/500px-Flag_of_Uganda.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Coat_of_arms_of_Uganda.svg/500px-Coat_of_arms_of_Uganda.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Location_Uganda_AU_Africa.svg/500px-Location_Uganda_AU_Africa.svg.png"}, 
            capital: [{"name":"Kampala","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {}, 
            currency: [{"demonym":"Ugandan","unit":"shilling"}], 
            tld: {"name":".ug"}, 
            largestCity: [{"name":"Kampala","type":"largest city"}], 
        }, 
        {
            country: {"name":"Ukraine","url":"https://en.wikipedia.org/wiki/Ukraine"}, 
            leader: {"title":"President","pos":"president","name":"Volodymyr Zelenskyy","url":"https://en.wikipedia.org/wiki/Volodymyr_Zelenskyy","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Volodymyr_Zelensky_%2851941720577%29_%28cropped%29.jpg/500px-Volodymyr_Zelensky_%2851941720577%29_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/500px-Flag_of_Ukraine.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg/500px-Lesser_Coat_of_Arms_of_Ukraine.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ukraine_-_disputed_%28orthographic_projection%29.svg/500px-Ukraine_-_disputed_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Kyiv","type":"capital"}], 
            language: {"list":["Ukrainian"]}, 
            demonym: {"name":"Ukrainian"}, 
            currency: [{"demonym":"Ukrainian","unit":"hryvnia"}], 
            tld: {"name":".ua"}, 
            largestCity: [{"name":"Kyiv","type":"largest city"}], 
        }, 
        {
            country: {"name":"the United Arab Emirates","url":"https://en.wikipedia.org/wiki/United_Arab_Emirates"}, 
            leader: {"title":"President","pos":"president","name":"Sheikh Mohamed bin Zayed Al Nahyan","url":"https://en.wikipedia.org/wiki/Mohamed_bin_Zayed_Al_Nahyan","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/His_Highness_Sheikh_Mohammed_Bin_Zayed_Al_Nahyan%2C_at_Hyderabad_House%2C_in_New_Delhi_on_February_11%2C_2016.jpg/500px-His_Highness_Sheikh_Mohammed_Bin_Zayed_Al_Nahyan%2C_at_Hyderabad_House%2C_in_New_Delhi_on_February_11%2C_2016.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/500px-Flag_of_the_United_Arab_Emirates.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_United_Arab_Emirates.svg/500px-Emblem_of_the_United_Arab_Emirates.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/United_Arab_Emirates_%28orthographic_projection%29.svg/500px-United_Arab_Emirates_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Abu Dhabi","type":"capital"}], 
            largestCity: [{"name":"Dubai","type":"largest city"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Emirati"}, 
            currency: [{"demonym":"United Arab Emirates","unit":"dirham"}], 
            tld: {"name":".ae"}, 
        }, 
        {
            country: {"name":"the United Kingdom","url":"https://en.wikipedia.org/wiki/United_Kingdom"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Rishi Sunak","url":"https://en.wikipedia.org/wiki/Rishi_Sunak","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Portrait_of_Prime_Minister_Rishi_Sunak_%28cropped%29.jpg/500px-Portrait_of_Prime_Minister_Rishi_Sunak_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/500px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Royal_Coat_of_Arms_of_the_United_Kingdom_%28Tudor_crown%29.svg/500px-Royal_Coat_of_Arms_of_the_United_Kingdom_%28Tudor_crown%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Europe-UK_%28orthographic_projection%29.svg/500px-Europe-UK_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"London","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"British"}, 
            currency: [{"full":"Pound sterling"}], 
            tld: {"name":".uk"}, 
            largestCity: [{"name":"London","type":"largest city"}], 
        }, 
        {
            country: {"name":"the United States","url":"https://en.wikipedia.org/wiki/United_States"}, 
            leader: {"title":"President","pos":"president","name":"Joe Biden","url":"https://en.wikipedia.org/wiki/Joe_Biden","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/500px-Joe_Biden_presidential_portrait.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/500px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/500px-Greater_coat_of_arms_of_the_United_States.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/USA_orthographic.svg/500px-USA_orthographic.svg.png"}, 
            capital: [{"name":"Washington, D.C.","type":"capital"}], 
            largestCity: [{"name":"New York City","type":"largest city"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"American"}, 
            currency: [{"demonym":"United States","unit":"dollar"}], 
            tld: {"name":".us"}, 
        }, 
        {
            country: {"name":"Uruguay","url":"https://en.wikipedia.org/wiki/Uruguay"}, 
            leader: {"title":"President","pos":"president","name":"Luis Lacalle Pou","url":"https://en.wikipedia.org/wiki/Luis_Alberto_Lacalle_Pou","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Foto_Oficial_Presidente_Luis_Lacalle_Pou_%28cropped%29.jpg/500px-Foto_Oficial_Presidente_Luis_Lacalle_Pou_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/500px-Flag_of_Uruguay.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sol_de_Mayo-Bandera_de_Uruguay.svg/500px-Sol_de_Mayo-Bandera_de_Uruguay.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/URY_orthographic.svg/500px-URY_orthographic.svg.png"}, 
            capital: [{"name":"Montevideo","type":"capital"}], 
            language: {"list":["Spanish","Uruguayan Sign Language"]}, 
            demonym: {"name":"Uruguayan"}, 
            currency: [{"demonym":"Uruguayan","unit":"peso"}], 
            tld: {"name":".uy"}, 
            largestCity: [{"name":"Montevideo","type":"largest city"}], 
        }, 
        {
            country: {"name":"Uzbekistan","url":"https://en.wikipedia.org/wiki/Uzbekistan"}, 
            leader: {"title":"President","pos":"president","name":"Shavkat Mirziyoyev","url":"https://en.wikipedia.org/wiki/Shavkat_Mirziyoyev","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Shavkat_Mirziyoyev_official_portrait_%28cropped_2%29.jpg/500px-Shavkat_Mirziyoyev_official_portrait_%28cropped_2%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/500px-Flag_of_Uzbekistan.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/500px-Emblem_of_Uzbekistan.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uzbekistan_on_the_globe_%28Uzbekistan_centered%29.svg/500px-Uzbekistan_on_the_globe_%28Uzbekistan_centered%29.svg.png"}, 
            capital: [{"name":"Tashkent","type":"capital"}], 
            language: {"list":["Uzbek"]}, 
            demonym: {"name":"Uzbekistani"}, 
            currency: [{"demonym":"Uzbekistani","unit":"soum"}], 
            tld: {"name":".uz"}, 
            largestCity: [{"name":"Tashkent","type":"largest city"}], 
        }, 
        {
            country: {"name":"Vanuatu","url":"https://en.wikipedia.org/wiki/Vanuatu"}, 
            leader: {"title":"Prime Minister","pos":"prime minister","name":"Sato Kilman","url":"https://en.wikipedia.org/wiki/Sato_Kilman","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sato_Kilman%2C_February_2013_%28cropped%29.png/500px-Sato_Kilman%2C_February_2013_%28cropped%29.png"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/500px-Flag_of_Vanuatu.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Vanuatu.svg/500px-Coat_of_arms_of_Vanuatu.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29.svg/500px-Vanuatu_on_the_globe_%28Polynesia_centered%29.svg.png"}, 
            capital: [{"name":"Port Vila","type":"capital"}], 
            language: {"list":["Bislama","English","French"]}, 
            demonym: {"name":"Vanuatuan"}, 
            currency: [{"demonym":"Vanuatu","unit":"vatu"}], 
            tld: {"name":".vu"}, 
            largestCity: [{"name":"Port Vila","type":"largest city"}], 
        }, 
        {
            country: {"name":"Vatican City","url":"https://en.wikipedia.org/wiki/Vatican_City"}, 
            leader: {"title":"Sovereign","pos":"sovereign","name":"Pope Francis","url":"https://en.wikipedia.org/wiki/Pope_Francis","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Portrait_of_Pope_Francis_%282021%29_FXD.jpg/500px-Portrait_of_Pope_Francis_%282021%29_FXD.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Vatican_City_State_-_2023_version.svg/500px-Flag_of_Vatican_City_State_-_2023_version.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Coat_of_arms_of_Vatican_City_State_-_2023_version.svg/500px-Coat_of_arms_of_Vatican_City_State_-_2023_version.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Location_of_the_Vatican_City_in_Europe.svg/500px-Location_of_the_Vatican_City_in_Europe.svg.png"}, 
            capital: [{"name":"Vatican City","type":"capital"}], 
            language: {"list":["Latin","Italian"]}, 
            demonym: {"name":"Vaticanian"}, 
            currency: [{"full":"euro"}], 
            tld: {"name":".va"}, 
            largestCity: [{"name":"Vatican City","type":"largest city"}], 
        }, 
        {
            country: {"name":"Venezuela","url":"https://en.wikipedia.org/wiki/Venezuela"}, 
            leader: {"title":"President","pos":"president","name":"Nicolás Maduro","url":"https://en.wikipedia.org/wiki/Nicol%C3%A1s_Maduro","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Nicol%C3%A1s_Maduro_2022_%28cropped%29.jpeg/500px-Nicol%C3%A1s_Maduro_2022_%28cropped%29.jpeg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/500px-Flag_of_Venezuela.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Coat_of_arms_of_Venezuela.svg/500px-Coat_of_arms_of_Venezuela.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Venezuela_Orthographic_Map.svg/500px-Venezuela_Orthographic_Map.svg.png"}, 
            capital: [{"name":"Caracas","type":"capital"}], 
            language: {"list":["Spanish"]}, 
            demonym: {"name":"Venezuelan"}, 
            currency: [{"demonym":"Venezuelan","unit":"bolívar"},{"other":"United States dollar"}], 
            tld: {"name":".ve"}, 
            largestCity: [{"name":"Caracas","type":"largest city"}], 
        }, 
        {
            country: {"name":"Vietnam","url":"https://en.wikipedia.org/wiki/Vietnam"}, 
            leader: {"title":"General Secretary of the Communist Party","pos":"general secretary of the Communist Party","name":"Nguyễn Phú Trọng","url":"https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_Ph%C3%BA_Tr%E1%BB%8Dng","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Nguyen_Phu_Trong_in_2023.jpg/500px-Nguyen_Phu_Trong_in_2023.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/500px-Flag_of_Vietnam.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/500px-Emblem_of_Vietnam.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vietnam_%28orthographic_projection%29.svg/500px-Vietnam_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Hanoi","type":"capital"}], 
            largestCity: [{"name":"Ho Chi Minh City","type":"largest city"}], 
            language: {"list":["Vietnamese"]}, 
            demonym: {"name":"Vietnamese"}, 
            currency: [{"demonym":"Vietnamese","unit":"đồng"}], 
            tld: {"name":".vn"}, 
        }, 
        {
            country: {"name":"Yemen","url":"https://en.wikipedia.org/wiki/Yemen"}, 
            leader: {"title":"Chairman of the Presidential Leadership Council","pos":"chairman of the Presidential Leadership Council","name":"Rashad al-Alimi","url":"https://en.wikipedia.org/wiki/Rashad_al-Alimi","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Rashad_al-Alimi_-_2023_%28cropped%29.jpg/500px-Rashad_al-Alimi_-_2023_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/500px-Flag_of_Yemen.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Emblem_of_Yemen_%282%29.svg/500px-Emblem_of_Yemen_%282%29.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yemen_%28orthographic_projection%29.svg/500px-Yemen_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Sanaa","type":"capital"}], 
            language: {"list":["Arabic"]}, 
            demonym: {"name":"Yemeni"}, 
            currency: [{"demonym":"Yemeni","unit":"rial"}], 
            tld: {"name":".ye"}, 
            largestCity: [{"name":"Sanaa","type":"largest city"}], 
        }, 
        {
            country: {"name":"Zambia","url":"https://en.wikipedia.org/wiki/Zambia"}, 
            leader: {"title":"President","pos":"president","name":"Hakainde Hichilema","url":"https://en.wikipedia.org/wiki/Hakainde_Hichilema","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Hakainde_Hichilema_2022_%28cropped%29.jpg/500px-Hakainde_Hichilema_2022_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/500px-Flag_of_Zambia.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coat_of_arms_of_Zambia.svg/500px-Coat_of_arms_of_Zambia.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Zambia_%28orthographic_projection%29.svg/500px-Zambia_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Lusaka","type":"capital"}], 
            language: {"list":["English"]}, 
            demonym: {"name":"Zambian"}, 
            currency: [{"demonym":"Zambian","unit":"kwacha"}], 
            tld: {"name":".zm"}, 
            largestCity: [{"name":"Lusaka","type":"largest city"}], 
        }, 
        {
            country: {"name":"Zimbabwe","url":"https://en.wikipedia.org/wiki/Zimbabwe"}, 
            leader: {"title":"President","pos":"president","name":"Emmerson Mnangagwa","url":"https://en.wikipedia.org/wiki/Emmerson_Mnangagwa","imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Emmerson_Mnangagwa_Official_Portrait_%28cropped%29.jpg/500px-Emmerson_Mnangagwa_Official_Portrait_%28cropped%29.jpg"}, 
            flag: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/500px-Flag_of_Zimbabwe.svg.png"}, 
            symbol: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Zimbabwe.svg/500px-Coat_of_arms_of_Zimbabwe.svg.png"}, 
            map: {"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Zimbabwe_%28orthographic_projection%29.svg/500px-Zimbabwe_%28orthographic_projection%29.svg.png"}, 
            capital: [{"name":"Harare","type":"capital"}], 
            language: {"list":["Chewa","Chibarwe","English","Kalanga","Koisan","Nambya","Ndau","Ndebele","Shangani","Shona","Sotho","Tonga","Tswana","Venda","Xhosa","Zimbabwean sign language"]}, 
            demonym: {"name":"Zimbabwean"}, 
            currency: [{"demonym":"Zimbabwean","unit":"dollar"},{"other":"United States dollar"},{"other":"South African rand"}], 
            tld: {"name":".zw"}, 
            largestCity: [{"name":"Harare","type":"largest city"}], 
        }, 
    ];
    let contentClone = document.getElementById("content").cloneNode(true);
    let welcomeScreen = true;
    let score = 0;
    const fontSize = 16;
    let height, width;

    document.getElementById("update").innerHTML = `Last updated: ${lastChecked}`;

    generateQA();

    addEventListener("resize", resizer)

    function resizer(){
        height = window.innerHeight
            ||  document.documentElement.clientHeight
            ||  document.body.clientHeight;
        width = window.innerWidth
            ||  document.documentElement.clientWidth
            ||  document.body.clientWidth;
        let welcomeHeight = ((height/fontSize)) + "em";
        let quizHeight = ((height/fontSize) * 0.85) + "em";
        let qImgHeight = ((height/fontSize) * 0.40) + "em";

        if(width < 600){
            qImgHeight = ((height/fontSize) * 0.30) + "em";
        }

        if(width < 550){
            qImgHeight = ((height/fontSize) * 0.25) + "em";
        }

        document.getElementById("welcome-screen").style.height = welcomeHeight;
        document.getElementById("content").style.height = quizHeight;

        if(document.getElementById("question-image")){
            document.getElementById("question-image").style.height = qImgHeight;
        }
    }

    function generateQA(){
        let randomCountry = currentInfo[Math.floor(Math.random() * currentInfo.length)];
        let key = {
            capital: Math.floor(Math.random() * randomCountry.capital.length),
            currency: Math.floor(Math.random() * randomCountry.currency.length),
            language: Math.floor(Math.random() * randomCountry.language.list.length),
            largestCity: Math.floor(Math.random() * randomCountry.largestCity.length),
        };
        let randomCapital = randomCountry.capital[key.capital];
        let randomLargestCity = randomCountry.largestCity[key.largestCity];
        let qa = {};
        let allAnswers = [];
        let otherAnswers = [];
        let possibleAnswers = [];
        let currName;
        let chars = {
            " ": "_",
            "ã": "a",
            "é": "e",
            "í": "i",
        }

        document.getElementById("start-btn").addEventListener('click', toggleWelcome);
    
        resizer();
        chooseQA();
        getAllAnswers();
        deduplicateAnswers();
        shuffleAnswers();
        displayInfo();

        function toggleWelcome(){
            welcomeScreen = false;
            displayInfo();
        }

        function chooseQA(){
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
                    questionImg: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/leader.jpg`,
                    answer: `${randomCountry.leader.name}`,
                    ansProp: "leader",
                    ansSub: "name",
                },
                {
                    // 5
                    question: `Which country's leader is this?`,
                    questionImg: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/leader.jpg`,
                    answer: `${randomCountry.country.name}`,
                    ansProp: "country",
                    ansSub: "name",
                },
                {
                    // 6
                    question: `Who is the leader of ${randomCountry.country.name}?`,
                    answer: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/leader.jpg`,
                    ansProp: "country",
                    ansSub: "name",
                    check: "leim_cona",
                },
                {
                    // 7
                    question: `Which leader's name is ${randomCountry.leader.name}?`,
                    answer: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/leader.jpg`,
                    ansProp: "country",
                    ansSub: "name",
                    check: "leim_cona",
                },
                {
                    // 8
                    question: `Which country does this flag belong to?`,
                    questionImg: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/flag.jpg`,
                    answer: `${randomCountry.country.name}`,
                    ansProp: "country",
                    ansSub: "name",
                },
                {
                    // 9
                    question: `Which flag belongs to ${randomCountry.country.name}?`,
                    answer: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/flag.jpg`,
                    ansProp: "country",
                    ansSub: "name",
                    check: "flim_cona",
                },
                {
                    // 10
                    question: `Which country is this symbol associated with?`,
                    questionImg: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/symbol.jpg`,
                    answer: `${randomCountry.country.name}`,
                    ansProp: "country",
                    ansSub: "name",
                },
                {
                    // 11
                    question: `Which symbol is associated with ${randomCountry.country.name}?`,
                    answer: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/symbol.jpg`,
                    ansProp: "country",
                    ansSub: "name",
                    check: "syim_cona",
                },
                {
                    // 12
                    question: `Which country is highlighted on this map?`,
                    questionImg: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/map.jpg`,
                    answer: `${randomCountry.country.name}`,
                    ansProp: "country",
                    ansSub: "name",
                },
                {
                    // 13
                    question: `Which map shows ${randomCountry.country.name} being highlighted?`,
                    answer: `./images/${randomCountry.country.name.replaceAll(/[ ãéí]/g, m => chars[m])}/map.jpg`,
                    ansProp: "country",
                    ansSub: "name",
                    check: "maim_cona",
                },
                {
                    // 14
                    question: `What is ${getCapitalType()} of ${randomCountry.country.name}?`,
                    answer: `${randomCapital.name}`,
                    ansProp: "capital",
                    ansSub: "name",
                    check: "rcna_cana",
                },
                {
                    // 15
                    question: `${randomCapital.name} is ${getCapitalType()} of what country?`,
                    answer: `${randomCountry.country.name}`,
                    ansProp: "country",
                    ansSub: "name",
                    check: "rcna_cona"
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
                    question: `The ${getCurrencyUnit()} is a currency used in which country?`,
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
                    question: `${randomLargestCity.name} is ${getLargestCityType()} of what country?`,
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
                    currName = randomCountry.currency[key.currency].full;
                    return currName;
                } else if (Object.hasOwn(randomCountry.currency[key.currency], "demonym")){
                    currName = randomCountry.currency[key.currency].demonym + " " + randomCountry.currency[key.currency].unit;
                    return currName;
                } else if (Object.hasOwn(randomCountry.currency[key.currency], "unit")){
                    currName = randomCountry.demonym.name + " " + randomCountry.currency[key.currency].unit;
                    return currName;
                } else if (Object.hasOwn(randomCountry.currency[key.currency], "other")){
                    currName = randomCountry.currency[key.currency].other;
                    return currName;
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
            for(let i=0; i < currentInfo.length; i++){
                if(qa.ansProp == "capital"){
                    for(let j=0; j < currentInfo[i][qa.ansProp].length; j++){
                        allAnswers.push(currentInfo[i][qa.ansProp][j][qa.ansSub]);
                    };
                } else if (qa.ansProp == "language"){
                    for(let j=0; j < currentInfo[i][qa.ansProp][qa.ansSub].length; j++){
                        allAnswers.push(currentInfo[i][qa.ansProp][qa.ansSub][j]);
                    };
                } else if (qa.ansProp == "currency"){
                    for(let j=0; j < currentInfo[i][qa.ansProp].length; j++){
                        if(Object.hasOwn(currentInfo[i][qa.ansProp][j], "unit")){
                            allAnswers.push(currentInfo[i][qa.ansProp][j].unit);
                        } else if (Object.hasOwn(currentInfo[i][qa.ansProp][j], "full")){
                            otherAnswers.push(currentInfo[i][qa.ansProp][j].full)
                        } else if (Object.hasOwn(currentInfo[i][qa.ansProp][j], "other")){
                            otherAnswers.push(currentInfo[i][qa.ansProp][j].other)
                        }
                    };
                } else if (qa.ansProp == "largestCity"){
                    for(let j=0; j < currentInfo[i][qa.ansProp].length; j++){
                        allAnswers.push(currentInfo[i][qa.ansProp][j][qa.ansSub]);
                    }
                } else {
                    allAnswers.push(currentInfo[i][qa.ansProp][qa.ansSub]);
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
                    currentInfo.forEach(obj => {
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
                    case ((qa.check == "lepo_cona") && (currentInfo[randNum_dedupedAns].leader.pos == randomCountry.leader.pos)):
                    case ((qa.check == "lena_lepo_cona") && (currentInfo[randNum_dedupedAns].leader.name == randomCountry.leader.name)):
                    case ((qa.check == "cona_lali") && (randDedupedAns in randomCountry.language.list)):
                    case ((qa.check == "lali_cona") && (findCountry.language.list.includes(randomCountry.language.list[key.language]))):
                    case ((qa.check == "cu_cona") && (isTrue.includes(true))):
                        continue;
    
                    // updates answers to get respective image from file
                    case (qa.check == "leim_cona"):
                        if(randomCountry[qa.ansProp][qa.ansSub] == randDedupedAns){
                            continue;
                        } else {
                            possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub].replaceAll(/[ ãéí]/g, m => chars[m])}/leader.jpg`;
                            randDedupedAns = `./images/${randDedupedAns.replaceAll(/[ ãéí]/g, m => chars[m])}/leader.jpg`;
                            break;
                        }
                    case (qa.check == "flim_cona"):
                        if(randomCountry[qa.ansProp][qa.ansSub] == randDedupedAns){
                            continue;
                        } else {
                            possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub].replaceAll(/[ ãéí]/g, m => chars[m])}/flag.jpg`;
                            randDedupedAns = `./images/${randDedupedAns.replaceAll(/[ ãéí]/g, m => chars[m])}/flag.jpg`;
                            break;
                        }
                    case (qa.check == "syim_cona"):
                        if(randomCountry[qa.ansProp][qa.ansSub] == randDedupedAns){
                            continue;
                        } else {
                            possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub].replaceAll(/[ ãéí]/g, m => chars[m])}/symbol.jpg`;
                            randDedupedAns = `./images/${randDedupedAns.replaceAll(/[ ãéí]/g, m => chars[m])}/symbol.jpg`;
                            break;
                        }
                    case (qa.check == "maim_cona"):
                        if(randomCountry[qa.ansProp][qa.ansSub] == randDedupedAns){
                            continue;
                        } else {
                            possibleAnswers[0] = `./images/${randomCountry[qa.ansProp][qa.ansSub].replaceAll(/[ ãéí]/g, m => chars[m])}/map.jpg`;
                            randDedupedAns = `./images/${randDedupedAns.replaceAll(/[ ãéí]/g, m => chars[m])}/map.jpg`;
                            break;
                        }              
                }
    
                possibleAnswers.push(randDedupedAns);
            }
        }
    
        function shuffleAnswers(){
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
    
        function displayInfo(){
            let img1, img2, img3, img4, aImgHeight, aImgWidth, rightAns;

            if(!welcomeScreen){
                document.getElementById("welcome-screen").style.display = "none";
                document.getElementById("quiz").style.display = "block";
                document.getElementById("score").innerHTML = `Score: ${score}`;
                document.getElementById("score").style.fontFamily = "sunny";
                document.getElementById("question-text").innerHTML = qa.question;
        
                if(qa.questionImg){
                    document.getElementById("question-image").style.display = "flex";
                    document.getElementById("question-image").src = qa.questionImg;
                } else {
                    document.getElementById("question-image").remove();
                }
        
                if(possibleAnswers[0].endsWith(".jpg")){
                    if(width > 1217){
                        aImgHeight = ((height/fontSize) * 0.04) + "em";
                        aImgWidth = ((width/fontSize) * 0.06) + "em";

                        document.getElementById("answers-container").style.display = "grid";
                        document.getElementById("answers-container").style.gridAutoFlow = "column";
                        document.getElementById("answers-container").style.gridTemplateAreas = "a b c d";
                        document.getElementById("answers-container").style.gridAutoColumns = "auto";
                    }

                    if(width <= 1216){
                        aImgHeight = ((height/fontSize) * 0.06) + "em";
                        aImgWidth = ((width/fontSize) * 0.08) + "em";

                        document.getElementById("answers-container").style.display = "grid";
                        document.getElementById("answers-container").style.gridTemplateColumns = "repeat(2, 1fr)";
                    }

                    if(width <= 850){
                        aImgHeight = ((height/fontSize) * 0.08) + "em";
                        aImgWidth = ((width/fontSize) * 0.1) + "em";
                    }

                    if(width <= 650){
                        aImgHeight = ((height/fontSize) * 0.1) + "em";
                        aImgWidth = ((width/fontSize) * 0.12) + "em";
                    }

                    if(width <= 500){
                        aImgHeight = ((height/fontSize) * 0.12) + "em";
                        aImgWidth = ((width/fontSize) * 0.14) + "em";
                    }

                    img1 = document.createElement("img");
                    img2 = document.createElement("img");
                    img3 = document.createElement("img");
                    img4 = document.createElement("img");

                    img1.setAttribute("id", "aImg1");
                    img2.setAttribute("id", "aImg2");
                    img3.setAttribute("id", "aImg3");
                    img4.setAttribute("id", "aImg4");

                    img1.src = possibleAnswers[0];
                    img2.src = possibleAnswers[1];
                    img3.src = possibleAnswers[2];
                    img4.src = possibleAnswers[3];
        
                    document.getElementById("answer1").appendChild(img1);
                    document.getElementById("answer2").appendChild(img2);
                    document.getElementById("answer3").appendChild(img3);
                    document.getElementById("answer4").appendChild(img4);

                    if(document.getElementById("aImg1").style.width >= document.getElementById("aImg1").style.height){
                        document.getElementById("aImg1").style.width = aImgWidth;
                    } else {
                        document.getElementById("aImg1").style.height = aImgHeight;
                    }

                    if(document.getElementById("aImg2").style.width >= document.getElementById("aImg2").style.height){
                        document.getElementById("aImg2").style.width = aImgWidth;
                    } else {
                        document.getElementById("aImg2").style.height = aImgHeight;
                    }

                    if(document.getElementById("aImg3").style.width >= document.getElementById("aImg3").style.height){
                        document.getElementById("aImg3").style.width = aImgWidth;
                    } else {
                        document.getElementById("aImg3").style.height = aImgHeight;
                    }

                    if(document.getElementById("aImg4").style.width >= document.getElementById("aImg4").style.height){
                        document.getElementById("aImg4").style.width = aImgWidth;
                    } else {
                        document.getElementById("aImg4").style.height = aImgHeight;
                    }

                } else {
                    document.getElementById("answer1").innerHTML = possibleAnswers[0];
                    document.getElementById("answer2").innerHTML = possibleAnswers[1];
                    document.getElementById("answer3").innerHTML = possibleAnswers[2];
                    document.getElementById("answer4").innerHTML = possibleAnswers[3];
                }

                if(
                        document.getElementById("answer1").innerHTML == qa.answer
                    ||  (qa.check == "leim_cona" && document.getElementById("answer1").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "flim_cona" && document.getElementById("answer1").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "syim_cona" && document.getElementById("answer1").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "maim_cona" && document.getElementById("answer1").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "cona_cu" && document.getElementById("answer1").innerHTML == currName)
                    ||  (qa.check == "rcna_cana" && document.getElementById("answer1").innerHTML == randomCapital.name)
                    ||  (qa.answer.endsWith(".jpg") && document.getElementById("answer1").children[0].src.endsWith(qa.answer.substring(2, qa.answer.length)))
                ){
                    rightAns = "answer1";
                    document.getElementById("answer1").addEventListener('click', rightAnswer);
                    document.getElementById("answer2").addEventListener('click', wrongAnswer);
                    document.getElementById("answer3").addEventListener('click', wrongAnswer);
                    document.getElementById("answer4").addEventListener('click', wrongAnswer);
                }
                
                if(
                        document.getElementById("answer2").innerHTML == qa.answer
                    ||  (qa.check == "leim_cona" && document.getElementById("answer2").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "flim_cona" && document.getElementById("answer2").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "syim_cona" && document.getElementById("answer2").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "maim_cona" && document.getElementById("answer2").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "cona_cu" && document.getElementById("answer2").innerHTML == currName)
                    ||  (qa.check == "rcna_cana" && document.getElementById("answer2").innerHTML == randomCapital.name)
                    ||  (qa.answer.endsWith(".jpg") && document.getElementById("answer2").children[0].src.endsWith(qa.answer.substring(2, qa.answer.length)))
                ){
                    rightAns = "answer2";
                    document.getElementById("answer1").addEventListener('click', wrongAnswer);
                    document.getElementById("answer2").addEventListener('click', rightAnswer);
                    document.getElementById("answer3").addEventListener('click', wrongAnswer);
                    document.getElementById("answer4").addEventListener('click', wrongAnswer);
                }
                
                if(
                        document.getElementById("answer3").innerHTML == qa.answer
                    ||  (qa.check == "leim_cona" && document.getElementById("answer3").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "flim_cona" && document.getElementById("answer3").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "syim_cona" && document.getElementById("answer3").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "maim_cona" && document.getElementById("answer3").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "cona_cu" && document.getElementById("answer3").innerHTML == currName)
                    ||  (qa.check == "rcna_cana" && document.getElementById("answer3").innerHTML == randomCapital.name)
                    ||  (qa.answer.endsWith(".jpg") && document.getElementById("answer3").children[0].src.endsWith(qa.answer.substring(2, qa.answer.length)))
                ){
                    rightAns = "answer3";
                    document.getElementById("answer1").addEventListener('click', wrongAnswer);
                    document.getElementById("answer2").addEventListener('click', wrongAnswer);
                    document.getElementById("answer3").addEventListener('click', rightAnswer);
                    document.getElementById("answer4").addEventListener('click', wrongAnswer);
                }
                
                if(
                        document.getElementById("answer4").innerHTML == qa.answer
                    ||  (qa.check == "leim_cona" && document.getElementById("answer4").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "flim_cona" && document.getElementById("answer4").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "syim_cona" && document.getElementById("answer4").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "maim_cona" && document.getElementById("answer4").children[0].src.endsWith(qa.answer.replaceAll(" ", "%20").substring(2, qa.answer.replaceAll(" ", "%20").length)))
                    ||  (qa.check == "cona_cu" && document.getElementById("answer4").innerHTML == currName)
                    ||  (qa.check == "rcna_cana" && document.getElementById("answer4").innerHTML == randomCapital.name)
                    ||  (qa.answer.endsWith(".jpg") && document.getElementById("answer4").children[0].src.endsWith(qa.answer.substring(2, qa.answer.length)))
                ){
                    rightAns = "answer4";
                    document.getElementById("answer1").addEventListener('click', wrongAnswer);
                    document.getElementById("answer2").addEventListener('click', wrongAnswer);
                    document.getElementById("answer3").addEventListener('click', wrongAnswer);
                    document.getElementById("answer4").addEventListener('click', rightAnswer);
                }
            }

            function rightAnswer(e){
                e.currentTarget.style.background = "green";
                setTimeout(function(){
                    score++;
                    document.getElementById("content").replaceWith(contentClone.cloneNode(true));
                    generateQA();
                }, 1000);
            }
    
            function wrongAnswer(e){
                e.currentTarget.style.background = "red";
                document.getElementById(rightAns).style.background = "green";
                setTimeout(function(){
                    score--;
                    document.getElementById("content").replaceWith(contentClone.cloneNode(true));
                    generateQA();
                }, 1000);
            }
        }
    }

})();
