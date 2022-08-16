

//1. create a request variable
var request = new XMLHttpRequest();
// 2.create a new connection
request.open('GET', 'https://restcountries.com/v3.1/all', true);
// 3. send request
request.send();
// 4. load response
request.onload = function () {
    let data = JSON.parse(this.response);

    //countries from Asia///

    let countriesFromAsia = data.filter((x) => x.region === "Asia");
    console.log("Countries from Asia:");

    console.log(countriesFromAsia);

    //Population under 2 lacs //

    let populationUnder2Lacs = data.filter(y => y.population < 200000);
    console.log("Countries with population less than 2 lacs:");
    console.log(populationUnder2Lacs);

    //Name,Capital,Flag//
    
    let info = data.forEach(details => {
      console.log(`
      Name: ${details.name.official}
      Capital: ${details.capital}
      Flag: ${details.flags.png}
      `);
    });
    

    //Total population//

    let totalPopulation = data.reduce((total,a) => a.population);
    console.log(`Total Population:${totalPopulation}`);

    //country which use Currency Code as USD //

    let currencyDollars = data.filter(z=> z.currencies=== "USD");
    console.log("Countries which use Currency Code as USD");
    console.log(currencyDollars);


  };
  /*------------------------------OUTPUT--------------------------------
Day7_arrayMethods.js:16 Countries from Asia:
Day7_arrayMethods.js:18 (50) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {name: {…}, tld: Array(1), cca2: 'KW', ccn3: '414', cca3: 'KWT', …}1: {name: {…}, tld: Array(1), cca2: 'AF', ccn3: '004', cca3: 'AFG', …}2: {name: {…}, tld: Array(1), cca2: 'ID', ccn3: '360', cca3: 'IDN', …}3: {name: {…}, tld: Array(3), cca2: 'TW', ccn3: '158', cca3: 'TWN', …}4: {name: {…}, tld: Array(1), cca2: 'TR', ccn3: '792', cca3: 'TUR', …}5: {name: {…}, tld: Array(1), cca2: 'IL', ccn3: '376', cca3: 'ISR', …}6: {name: {…}, tld: Array(1), cca2: 'MM', ccn3: '104', cca3: 'MMR', …}7: {name: {…}, tld: Array(2), cca2: 'JP', ccn3: '392', cca3: 'JPN', …}8: {name: {…}, tld: Array(1), cca2: 'KG', ccn3: '417', cca3: 'KGZ', …}9: {name: {…}, tld: Array(1), cca2: 'KH', ccn3: '116', cca3: 'KHM', …}10: {name: {…}, tld: Array(1), cca2: 'AZ', ccn3: '031', cca3: 'AZE', …}11: {name: {…}, tld: Array(1), cca2: 'MY', ccn3: '458', cca3: 'MYS', …}12: {name: {…}, tld: Array(1), cca2: 'BH', ccn3: '048', cca3: 'BHR', …}13: {name: {…}, tld: Array(1), cca2: 'IN', ccn3: '356', cca3: 'IND', …}14: {name: {…}, tld: Array(2), cca2: 'KZ', ccn3: '398', cca3: 'KAZ', …}15: {name: {…}, tld: Array(1), cca2: 'OM', ccn3: '512', cca3: 'OMN', …}16: {name: {…}, tld: Array(2), cca2: 'AE', ccn3: '784', cca3: 'ARE', …}17: {name: {…}, tld: Array(3), cca2: 'LK', ccn3: '144', cca3: 'LKA', …}18: {name: {…}, tld: Array(1), cca2: 'TJ', ccn3: '762', cca3: 'TJK', …}19: {name: {…}, tld: Array(2), cca2: 'SY', ccn3: '760', cca3: 'SYR', …}20: {name: {…}, tld: Array(1), cca2: 'GE', ccn3: '268', cca3: 'GEO', …}21: {name: {…}, tld: Array(1), cca2: 'BT', ccn3: '064', cca3: 'BTN', …}22: {name: {…}, tld: Array(1), cca2: 'VN', ccn3: '704', cca3: 'VNM', …}23: {name: {…}, tld: Array(1), cca2: 'UZ', ccn3: '860', cca3: 'UZB', …}24: {name: {…}, tld: Array(1), cca2: 'YE', ccn3: '887', cca3: 'YEM', …}25: {name: {…}, tld: Array(2), cca2: 'KR', ccn3: '410', cca3: 'KOR', …}26: {name: {…}, tld: Array(1), cca2: 'PK', ccn3: '586', cca3: 'PAK', …}27: {name: {…}, tld: Array(1), cca2: 'AM', ccn3: '051', cca3: 'ARM', …}28: {name: {…}, tld: Array(1), cca2: 'TM', ccn3: '795', cca3: 'TKM', …}29: {name: {…}, tld: Array(1), cca2: 'LA', ccn3: '418', cca3: 'LAO', …}30: {name: {…}, tld: Array(1), cca2: 'MN', ccn3: '496', cca3: 'MNG', …}31: {name: {…}, tld: Array(1), cca2: 'NP', ccn3: '524', cca3: 'NPL', …}32: {name: {…}, tld: Array(1), cca2: 'IQ', ccn3: '368', cca3: 'IRQ', …}33: {name: {…}, tld: Array(2), cca2: 'TH', ccn3: '764', cca3: 'THA', …}34: {name: {…}, tld: Array(2), cca2: 'SA', ccn3: '682', cca3: 'SAU', …}35: {name: {…}, tld: Array(2), cca2: 'JO', ccn3: '400', cca3: 'JOR', …}36: {name: {…}, tld: Array(1), cca2: 'LB', ccn3: '422', cca3: 'LBN', …}37: {name: {…}, tld: Array(2), cca2: 'IR', ccn3: '364', cca3: 'IRN', …}38: {name: {…}, tld: Array(1), cca2: 'PH', ccn3: '608', cca3: 'PHL', …}39: {name: {…}, tld: Array(2), cca2: 'HK', ccn3: '344', cca3: 'HKG', …}40: {name: {…}, tld: Array(1), cca2: 'MO', ccn3: '446', cca3: 'MAC', …}41: {name: {…}, tld: Array(1), cca2: 'KP', ccn3: '408', cca3: 'PRK', …}42: {name: {…}, tld: Array(1), cca2: 'MV', ccn3: '462', cca3: 'MDV', …}43: {name: {…}, tld: Array(3), cca2: 'SG', ccn3: '702', cca3: 'SGP', …}44: {name: {…}, tld: Array(2), cca2: 'QA', ccn3: '634', cca3: 'QAT', …}45: {name: {…}, tld: Array(5), cca2: 'CN', ccn3: '156', cca3: 'CHN', …}46: {name: {…}, tld: Array(2), cca2: 'PS', ccn3: '275', cca3: 'PSE', …}47: {name: {…}, tld: Array(1), cca2: 'BD', ccn3: '050', cca3: 'BGD', …}48: {name: {…}, tld: Array(1), cca2: 'TL', ccn3: '626', cca3: 'TLS', …}49: {name: {…}, tld: Array(1), cca2: 'BN', ccn3: '096', cca3: 'BRN', …}length: 50[[Prototype]]: Array(0)
Day7_arrayMethods.js:23 Countries with population less than 2 lacs:
Day7_arrayMethods.js:24 (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {name: {…}, tld: Array(1), cca2: 'PW', ccn3: '585', cca3: 'PLW', …}1: {name: {…}, tld: Array(1), cca2: 'LI', ccn3: '438', cca3: 'LIE', …}2: {name: {…}, tld: Array(1), cca2: 'TV', ccn3: '798', cca3: 'TUV', …}3: {name: {…}, tld: Array(1), cca2: 'BL', ccn3: '652', cca3: 'BLM', …}4: {name: {…}, tld: Array(1), cca2: 'LC', ccn3: '662', cca3: 'LCA', …}5: {name: {…}, tld: Array(1), cca2: 'AW', ccn3: '533', cca3: 'ABW', …}6: {name: {…}, tld: Array(1), cca2: 'GS', ccn3: '239', cca3: 'SGS', …}7: {name: {…}, tld: Array(1), cca2: 'TC', ccn3: '796', cca3: 'TCA', …}8: {name: {…}, tld: Array(1), cca2: 'FO', ccn3: '234', cca3: 'FRO', …}9: {name: {…}, tld: Array(1), cca2: 'AQ', ccn3: '010', cca3: 'ATA', …}10: {name: {…}, tld: Array(1), cca2: 'FM', ccn3: '583', cca3: 'FSM', …}11: {name: {…}, tld: Array(1), cca2: 'WF', ccn3: '876', cca3: 'WLF', …}12: {name: {…}, tld: Array(1), cca2: 'GI', ccn3: '292', cca3: 'GIB', …}13: {name: {…}, tld: Array(1), cca2: 'BM', ccn3: '060', cca3: 'BMU', …}14: {name: {…}, tld: Array(2), cca2: 'SH', ccn3: '654', cca3: 'SHN', …}15: {name: {…}, tld: Array(1), cca2: 'AG', ccn3: '028', cca3: 'ATG', …}16: {name: {…}, tld: Array(1), cca2: 'KY', ccn3: '136', cca3: 'CYM', …}17: {name: {…}, tld: Array(2), cca2: 'BQ', ccn3: '535', cca3: 'BES', …}18: {name: {…}, tld: Array(2), cca2: 'HM', ccn3: '334', cca3: 'HMD', …}19: {name: {…}, tld: Array(1), cca2: 'CX', ccn3: '162', cca3: 'CXR', …}20: {name: {…}, tld: Array(1), cca2: 'MS', ccn3: '500', cca3: 'MSR', …}21: {name: {…}, tld: Array(1), cca2: 'NF', ccn3: '574', cca3: 'NFK', …}22: {name: {…}, tld: Array(1), cca2: 'AS', ccn3: '016', cca3: 'ASM', …}23: {name: {…}, tld: Array(1), cca2: 'GU', ccn3: '316', cca3: 'GUM', …}24: {name: {…}, tld: Array(1), cca2: 'GD', ccn3: '308', cca3: 'GRD', …}25: {name: {…}, tld: Array(1), cca2: 'SM', ccn3: '674', cca3: 'SMR', …}26: {name: {…}, tld: Array(1), cca2: 'TO', ccn3: '776', cca3: 'TON', …}27: {name: {…}, tld: Array(1), cca2: 'VG', ccn3: '092', cca3: 'VGB', …}28: {name: {…}, tld: Array(1), cca2: 'KN', ccn3: '659', cca3: 'KNA', …}29: {name: {…}, tld: Array(1), cca2: 'MH', ccn3: '584', cca3: 'MHL', …}30: {name: {…}, tld: Array(1), cca2: 'AX', ccn3: '248', cca3: 'ALA', …}31: {name: {…}, tld: Array(1), cca2: 'MC', ccn3: '492', cca3: 'MCO', …}32: {name: {…}, tld: Array(1), cca2: 'IM', ccn3: '833', cca3: 'IMN', …}33: {name: {…}, tld: Array(1), cca2: 'GG', ccn3: '831', cca3: 'GGY', …}34: {name: {…}, tld: Array(1), cca2: 'PN', ccn3: '612', cca3: 'PCN', …}35: {name: {…}, tld: Array(1), cca2: 'CK', ccn3: '184', cca3: 'COK', …}36: {name: {…}, tld: Array(2), cca2: 'MF', ccn3: '663', cca3: 'MAF', …}37: {name: {…}, tld: Array(1), cca2: 'AI', ccn3: '660', cca3: 'AIA', …}38: {name: {…}, tld: Array(1), cca2: 'CC', ccn3: '166', cca3: 'CCK', …}39: {name: {…}, tld: Array(1), cca2: 'VC', ccn3: '670', cca3: 'VCT', …}40: {name: {…}, tld: Array(1), cca2: 'SC', ccn3: '690', cca3: 'SYC', …}41: {name: {…}, tld: Array(1), cca2: 'PM', ccn3: '666', cca3: 'SPM', …}42: {name: {…}, tld: Array(1), cca2: 'TK', ccn3: '772', cca3: 'TKL', …}43: {name: {…}, tld: Array(1), cca2: 'FK', ccn3: '238', cca3: 'FLK', …}44: {name: {…}, tld: Array(1), cca2: 'BV', ccn3: '074', cca3: 'BVT', …}45: {name: {…}, tld: Array(1), cca2: 'AD', ccn3: '020', cca3: 'AND', …}46: {name: {…}, tld: Array(1), cca2: 'NR', ccn3: '520', cca3: 'NRU', …}47: {name: {…}, tld: Array(1), cca2: 'VI', ccn3: '850', cca3: 'VIR', …}48: {name: {…}, tld: Array(1), cca2: 'DM', ccn3: '212', cca3: 'DMA', …}49: {name: {…}, tld: Array(1), cca2: 'SX', ccn3: '534', cca3: 'SXM', …}50: {name: {…}, tld: Array(1), cca2: 'NU', ccn3: '570', cca3: 'NIU', …}51: {name: {…}, tld: Array(1), cca2: 'CW', ccn3: '531', cca3: 'CUW', …}52: {name: {…}, tld: Array(1), cca2: 'VA', ccn3: '336', cca3: 'VAT', …}53: {name: {…}, tld: Array(1), cca2: 'JE', ccn3: '832', cca3: 'JEY', …}54: {name: {…}, tld: Array(1), cca2: 'WS', ccn3: '882', cca3: 'WSM', …}55: {name: {…}, tld: Array(1), cca2: 'IO', ccn3: '086', cca3: 'IOT', …}56: {name: {…}, tld: Array(1), cca2: 'TF', ccn3: '260', cca3: 'ATF', …}57: {name: {…}, tld: Array(1), cca2: 'SJ', ccn3: '744', cca3: 'SJM', …}58: {name: {…}, tld: Array(1), cca2: 'UM', ccn3: '581', cca3: 'UMI', …}59: {name: {…}, tld: Array(1), cca2: 'MP', ccn3: '580', cca3: 'MNP', …}60: {name: {…}, tld: Array(1), cca2: 'GL', ccn3: '304', cca3: 'GRL', …}61: {name: {…}, tld: Array(1), cca2: 'KI', ccn3: '296', cca3: 'KIR', …}length: 62[[Prototype]]: Array(0)
Day7_arrayMethods.js:29 
      Name: State of Kuwait
      Capital: Kuwait City
      Flag: https://flagcdn.com/w320/kw.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Palau
      Capital: Ngerulmud
      Flag: https://flagcdn.com/w320/pw.png
      
Day7_arrayMethods.js:29 
      Name: Principality of Liechtenstein
      Capital: Vaduz
      Flag: https://flagcdn.com/w320/li.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Moldova
      Capital: Chișinău
      Flag: https://flagcdn.com/w320/md.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Angola
      Capital: Luanda
      Flag: https://flagcdn.com/w320/ao.png
      
Day7_arrayMethods.js:29 
      Name: Plurinational State of Bolivia
      Capital: Sucre
      Flag: https://flagcdn.com/w320/bo.png
      
Day7_arrayMethods.js:29 
      Name: Tuvalu
      Capital: Funafuti
      Flag: https://flagcdn.com/w320/tv.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Peru
      Capital: Lima
      Flag: https://flagcdn.com/w320/pe.png
      
Day7_arrayMethods.js:29 
      Name: New Caledonia
      Capital: Nouméa
      Flag: https://flagcdn.com/w320/nc.png
      
Day7_arrayMethods.js:29 
      Name: Federal Republic of Germany
      Capital: Berlin
      Flag: https://flagcdn.com/w320/de.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Botswana
      Capital: Gaborone
      Flag: https://flagcdn.com/w320/bw.png
      
Day7_arrayMethods.js:29 
      Name: Islamic Republic of Afghanistan
      Capital: Kabul
      Flag: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
      
Day7_arrayMethods.js:29 
      Name: Hungary
      Capital: Budapest
      Flag: https://flagcdn.com/w320/hu.png
      
Day7_arrayMethods.js:29 
      Name: Burkina Faso
      Capital: Ouagadougou
      Flag: https://flagcdn.com/w320/bf.png
      
Day7_arrayMethods.js:29 
      Name: Canada
      Capital: Ottawa
      Flag: https://flagcdn.com/w320/ca.png
      
Day7_arrayMethods.js:29 
      Name: Collectivity of Saint Barthélemy
      Capital: Gustavia
      Flag: https://flagcdn.com/w320/bl.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Indonesia
      Capital: Jakarta
      Flag: https://flagcdn.com/w320/id.png
      
Day7_arrayMethods.js:29 
      Name: Republic of China (Taiwan)
      Capital: Taipei
      Flag: https://flagcdn.com/w320/tw.png
      
Day7_arrayMethods.js:29 
      Name: Saint Lucia
      Capital: Castries
      Flag: https://flagcdn.com/w320/lc.png
      
Day7_arrayMethods.js:29 
      Name: Aruba
      Capital: Oranjestad
      Flag: https://flagcdn.com/w320/aw.png
      
Day7_arrayMethods.js:29 
      Name: Gabonese Republic
      Capital: Libreville
      Flag: https://flagcdn.com/w320/ga.png
      
Day7_arrayMethods.js:29 
      Name: South Georgia and the South Sandwich Islands
      Capital: King Edward Point
      Flag: https://flagcdn.com/w320/gs.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Liberia
      Capital: Monrovia
      Flag: https://flagcdn.com/w320/lr.png
      
Day7_arrayMethods.js:29 
      Name: Turks and Caicos Islands
      Capital: Cockburn Town
      Flag: https://flagcdn.com/w320/tc.png
      
Day7_arrayMethods.js:29 
      Name: Sahrawi Arab Democratic Republic
      Capital: El Aaiún
      Flag: https://flagcdn.com/w320/eh.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Turkey
      Capital: Ankara
      Flag: https://flagcdn.com/w320/tr.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Mali
      Capital: Bamako
      Flag: https://flagcdn.com/w320/ml.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Benin
      Capital: Porto-Novo
      Flag: https://flagcdn.com/w320/bj.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Cyprus
      Capital: Nicosia
      Flag: https://flagcdn.com/w320/cy.png
      
Day7_arrayMethods.js:29 
      Name: Federal Republic of Somalia
      Capital: Mogadishu
      Flag: https://flagcdn.com/w320/so.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Niger
      Capital: Niamey
      Flag: https://flagcdn.com/w320/ne.png
      
Day7_arrayMethods.js:29 
      Name: Faroe Islands
      Capital: Tórshavn
      Flag: https://flagcdn.com/w320/fo.png
      
Day7_arrayMethods.js:29 
      Name: Portuguese Republic
      Capital: Lisbon
      Flag: https://flagcdn.com/w320/pt.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Senegal
      Capital: Dakar
      Flag: https://flagcdn.com/w320/sn.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Cuba
      Capital: Havana
      Flag: https://flagcdn.com/w320/cu.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Belarus
      Capital: Minsk
      Flag: https://flagcdn.com/w320/by.png
      
Day7_arrayMethods.js:29 
      Name: Barbados
      Capital: Bridgetown
      Flag: https://flagcdn.com/w320/bb.png
      
Day7_arrayMethods.js:29 
      Name: Tunisian Republic
      Capital: Tunis
      Flag: https://flagcdn.com/w320/tn.png
      
Day7_arrayMethods.js:29 
      Name: State of Israel
      Capital: Jerusalem
      Flag: https://flagcdn.com/w320/il.png
      
Day7_arrayMethods.js:29 
      Name: Italian Republic
      Capital: Rome
      Flag: https://flagcdn.com/w320/it.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Union of Myanmar
      Capital: Naypyidaw
      Flag: https://flagcdn.com/w320/mm.png
      
Day7_arrayMethods.js:29 
      Name: Antarctica
      Capital: undefined
      Flag: https://flagcdn.com/w320/aq.png
      
Day7_arrayMethods.js:29 
      Name: Federated States of Micronesia
      Capital: Palikir
      Flag: https://flagcdn.com/w320/fm.png
      
Day7_arrayMethods.js:29 
      Name: Territory of the Wallis and Futuna Islands
      Capital: Mata-Utu
      Flag: https://flagcdn.com/w320/wf.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Djibouti
      Capital: Djibouti
      Flag: https://flagcdn.com/w320/dj.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Congo
      Capital: Brazzaville
      Flag: https://flagcdn.com/w320/cg.png
      
Day7_arrayMethods.js:29 
      Name: Gibraltar
      Capital: Gibraltar
      Flag: https://flagcdn.com/w320/gi.png
      
Day7_arrayMethods.js:29 
      Name: Democratic Republic of the Congo
      Capital: Kinshasa
      Flag: https://flagcdn.com/w320/cd.png
      
Day7_arrayMethods.js:29 
      Name: Belize
      Capital: Belmopan
      Flag: https://flagcdn.com/w320/bz.png
      
Day7_arrayMethods.js:29 
      Name: Bermuda
      Capital: Hamilton
      Flag: https://flagcdn.com/w320/bm.png
      
Day7_arrayMethods.js:29 
      Name: Commonwealth of Australia
      Capital: Canberra
      Flag: https://flagcdn.com/w320/au.png
      
Day7_arrayMethods.js:29 
      Name: Saint Helena, Ascension and Tristan da Cunha
      Capital: Jamestown
      Flag: https://flagcdn.com/w320/sh.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Cameroon
      Capital: Yaoundé
      Flag: https://flagcdn.com/w320/cm.png
      
Day7_arrayMethods.js:29 
      Name: Russian Federation
      Capital: Moscow
      Flag: https://flagcdn.com/w320/ru.png
      
Day7_arrayMethods.js:29 
      Name: Antigua and Barbuda
      Capital: Saint John's
      Flag: https://flagcdn.com/w320/ag.png
      
Day7_arrayMethods.js:29 
      Name: Japan
      Capital: Tokyo
      Flag: https://flagcdn.com/w320/jp.png
      
Day7_arrayMethods.js:29 
      Name: Cayman Islands
      Capital: George Town
      Flag: https://flagcdn.com/w320/ky.png
      
Day7_arrayMethods.js:29 
      Name: Bonaire, Sint Eustatius and Saba
      Capital: Kralendijk
      Flag: https://flagcdn.com/w320/bq.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Honduras
      Capital: Tegucigalpa
      Flag: https://flagcdn.com/w320/hn.png
      
Day7_arrayMethods.js:29 
      Name: Heard Island and McDonald Islands
      Capital: undefined
      Flag: https://flagcdn.com/w320/hm.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Burundi
      Capital: Gitega
      Flag: https://flagcdn.com/w320/bi.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Paraguay
      Capital: Asunción
      Flag: https://flagcdn.com/w320/py.png
      
Day7_arrayMethods.js:29 
      Name: Argentine Republic
      Capital: Buenos Aires
      Flag: https://flagcdn.com/w320/ar.png
      
Day7_arrayMethods.js:29 
      Name: French Polynesia
      Capital: Papeetē
      Flag: https://flagcdn.com/w320/pf.png
      
Day7_arrayMethods.js:29 
      Name: Democratic Republic of São Tomé and Príncipe
      Capital: São Tomé
      Flag: https://flagcdn.com/w320/st.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Lesotho
      Capital: Maseru
      Flag: https://flagcdn.com/w320/ls.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Sudan
      Capital: Khartoum
      Flag: https://flagcdn.com/w320/sd.png
      
Day7_arrayMethods.js:29 
      Name: Republic of El Salvador
      Capital: San Salvador
      Flag: https://flagcdn.com/w320/sv.png
      
Day7_arrayMethods.js:29 
      Name: Territory of Christmas Island
      Capital: Flying Fish Cove
      Flag: https://flagcdn.com/w320/cx.png
      
Day7_arrayMethods.js:29 
      Name: Kyrgyz Republic
      Capital: Bishkek
      Flag: https://flagcdn.com/w320/kg.png
      
Day7_arrayMethods.js:29 
      Name: Federative Republic of Brazil
      Capital: Brasília
      Flag: https://flagcdn.com/w320/br.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Cambodia
      Capital: Phnom Penh
      Flag: https://flagcdn.com/w320/kh.png
      
Day7_arrayMethods.js:29 
      Name: Montserrat
      Capital: Plymouth
      Flag: https://flagcdn.com/w320/ms.png
      
Day7_arrayMethods.js:29 
      Name: Republic of South Africa
      Capital: Pretoria,Bloemfontein,Cape Town
      Flag: https://flagcdn.com/w320/za.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Guatemala
      Capital: Guatemala City
      Flag: https://flagcdn.com/w320/gt.png
      
Day7_arrayMethods.js:29 
      Name: United States of America
      Capital: Washington, D.C.
      Flag: https://flagcdn.com/w320/us.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Azerbaijan
      Capital: Baku
      Flag: https://flagcdn.com/w320/az.png
      
Day7_arrayMethods.js:29 
      Name: Malaysia
      Capital: Kuala Lumpur
      Flag: https://flagcdn.com/w320/my.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Colombia
      Capital: Bogotá
      Flag: https://flagcdn.com/w320/co.png
      
Day7_arrayMethods.js:29 
      Name: Islamic Republic of Mauritania
      Capital: Nouakchott
      Flag: https://flagcdn.com/w320/mr.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Bahrain
      Capital: Manama
      Flag: https://flagcdn.com/w320/bh.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Belgium
      Capital: Brussels
      Flag: https://flagcdn.com/w320/be.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Chile
      Capital: Santiago
      Flag: https://flagcdn.com/w320/cl.png
      
Day7_arrayMethods.js:29 
      Name: Republic of North Macedonia
      Capital: Skopje
      Flag: https://flagcdn.com/w320/mk.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Mozambique
      Capital: Maputo
      Flag: https://flagcdn.com/w320/mz.png
      
Day7_arrayMethods.js:29 
      Name: Territory of Norfolk Island
      Capital: Kingston
      Flag: https://flagcdn.com/w320/nf.png
      
Day7_arrayMethods.js:29 
      Name: American Samoa
      Capital: Pago Pago
      Flag: https://flagcdn.com/w320/as.png
      
Day7_arrayMethods.js:29 
      Name: Federal Democratic Republic of Ethiopia
      Capital: Addis Ababa
      Flag: https://flagcdn.com/w320/et.png
      
Day7_arrayMethods.js:29 
      Name: Guadeloupe
      Capital: Basse-Terre
      Flag: https://flagcdn.com/w320/gp.png
      
Day7_arrayMethods.js:29 
      Name: Guam
      Capital: Hagåtña
      Flag: https://flagcdn.com/w320/gu.png
      
Day7_arrayMethods.js:29 
      Name: Republic of India
      Capital: New Delhi
      Flag: https://flagcdn.com/w320/in.png
      
Day7_arrayMethods.js:29 
      Name: Commonwealth of Puerto Rico
      Capital: San Juan
      Flag: https://flagcdn.com/w320/pr.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Spain
      Capital: Madrid
      Flag: https://flagcdn.com/w320/es.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Kazakhstan
      Capital: Nur-Sultan
      Flag: https://flagcdn.com/w320/kz.png
      
Day7_arrayMethods.js:29 
      Name: Sultanate of Oman
      Capital: Muscat
      Flag: https://flagcdn.com/w320/om.png
      
Day7_arrayMethods.js:29 
      Name: United Arab Emirates
      Capital: Abu Dhabi
      Flag: https://flagcdn.com/w320/ae.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Poland
      Capital: Warsaw
      Flag: https://flagcdn.com/w320/pl.png
      
Day7_arrayMethods.js:29 
      Name: Guiana
      Capital: Cayenne
      Flag: https://flagcdn.com/w320/gf.png
      
Day7_arrayMethods.js:29 
      Name: Grenada
      Capital: St. George's
      Flag: https://flagcdn.com/w320/gd.png
      
Day7_arrayMethods.js:29 
      Name: Democratic Socialist Republic of Sri Lanka
      Capital: Sri Jayawardenepura Kotte
      Flag: https://flagcdn.com/w320/lk.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Tajikistan
      Capital: Dushanbe
      Flag: https://flagcdn.com/w320/tj.png
      
Day7_arrayMethods.js:29 
      Name: Syrian Arab Republic
      Capital: Damascus
      Flag: https://flagcdn.com/w320/sy.png
      
Day7_arrayMethods.js:29 
      Name: State of Libya
      Capital: Tripoli
      Flag: https://flagcdn.com/w320/ly.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Haiti
      Capital: Port-au-Prince
      Flag: https://flagcdn.com/w320/ht.png
      
Day7_arrayMethods.js:29 
      Name: Republic of San Marino
      Capital: City of San Marino
      Flag: https://flagcdn.com/w320/sm.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Tonga
      Capital: Nuku'alofa
      Flag: https://flagcdn.com/w320/to.png
      
Day7_arrayMethods.js:29 
      Name: Virgin Islands
      Capital: Road Town
      Flag: https://flagcdn.com/w320/vg.png
      
Day7_arrayMethods.js:29 
      Name: Georgia
      Capital: Tbilisi
      Flag: https://flagcdn.com/w320/ge.png
      
Day7_arrayMethods.js:29 
      Name: State of Eritrea
      Capital: Asmara
      Flag: https://flagcdn.com/w320/er.png
      
Day7_arrayMethods.js:29 
      Name: United Republic of Tanzania
      Capital: Dodoma
      Flag: https://flagcdn.com/w320/tz.png
      
Day7_arrayMethods.js:29 
      Name: Czech Republic
      Capital: Prague
      Flag: https://flagcdn.com/w320/cz.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Kosovo
      Capital: Pristina
      Flag: https://flagcdn.com/w320/xk.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Bhutan
      Capital: Thimphu
      Flag: https://flagcdn.com/w320/bt.png
      
Day7_arrayMethods.js:29 
      Name: Arab Republic of Egypt
      Capital: Cairo
      Flag: https://flagcdn.com/w320/eg.png
      
Day7_arrayMethods.js:29 
      Name: Federation of Saint Christopher and Nevis
      Capital: Basseterre
      Flag: https://flagcdn.com/w320/kn.png
      
Day7_arrayMethods.js:29 
      Name: Socialist Republic of Vietnam
      Capital: Hanoi
      Flag: https://flagcdn.com/w320/vn.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Marshall Islands
      Capital: Majuro
      Flag: https://flagcdn.com/w320/mh.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Austria
      Capital: Vienna
      Flag: https://flagcdn.com/w320/at.png
      
Day7_arrayMethods.js:29 
      Name: Independent State of Papua New Guinea
      Capital: Port Moresby
      Flag: https://flagcdn.com/w320/pg.png
      
Day7_arrayMethods.js:29 
      Name: Commonwealth of the Bahamas
      Capital: Nassau
      Flag: https://flagcdn.com/w320/bs.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Croatia
      Capital: Zagreb
      Flag: https://flagcdn.com/w320/hr.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Slovenia
      Capital: Ljubljana
      Flag: https://flagcdn.com/w320/si.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Uzbekistan
      Capital: Tashkent
      Flag: https://flagcdn.com/w320/uz.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Finland
      Capital: Helsinki
      Flag: https://flagcdn.com/w320/fi.png
      
Day7_arrayMethods.js:29 
      Name: Co-operative Republic of Guyana
      Capital: Georgetown
      Flag: https://flagcdn.com/w320/gy.png
      
Day7_arrayMethods.js:29 
      Name: Åland Islands
      Capital: Mariehamn
      Flag: https://flagcdn.com/w320/ax.png
      
Day7_arrayMethods.js:29 
      Name: Principality of Monaco
      Capital: Monaco
      Flag: https://flagcdn.com/w320/mc.png
      
Day7_arrayMethods.js:29 
      Name: Slovak Republic
      Capital: Bratislava
      Flag: https://flagcdn.com/w320/sk.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Yemen
      Capital: Sana'a
      Flag: https://flagcdn.com/w320/ye.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Malawi
      Capital: Lilongwe
      Flag: https://flagcdn.com/w320/mw.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Gambia
      Capital: Banjul
      Flag: https://flagcdn.com/w320/gm.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Panama
      Capital: Panama City
      Flag: https://flagcdn.com/w320/pa.png
      
Day7_arrayMethods.js:29 
      Name: Isle of Man
      Capital: Douglas
      Flag: https://flagcdn.com/w320/im.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Ireland
      Capital: Dublin
      Flag: https://flagcdn.com/w320/ie.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Korea
      Capital: Seoul
      Flag: https://flagcdn.com/w320/kr.png
      
Day7_arrayMethods.js:29 
      Name: Hellenic Republic
      Capital: Athens
      Flag: https://flagcdn.com/w320/gr.png
      
Day7_arrayMethods.js:29 
      Name: Bailiwick of Guernsey
      Capital: St. Peter Port
      Flag: https://flagcdn.com/w320/gg.png
      
Day7_arrayMethods.js:29 
      Name: Islamic Republic of Pakistan
      Capital: Islamabad
      Flag: https://flagcdn.com/w320/pk.png
      
Day7_arrayMethods.js:29 
      Name: Pitcairn Group of Islands
      Capital: Adamstown
      Flag: https://flagcdn.com/w320/pn.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Armenia
      Capital: Yerevan
      Flag: https://flagcdn.com/w320/am.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Malta
      Capital: Valletta
      Flag: https://flagcdn.com/w320/mt.png
      
Day7_arrayMethods.js:29 
      Name: Turkmenistan
      Capital: Ashgabat
      Flag: https://flagcdn.com/w320/tm.png
      
Day7_arrayMethods.js:29 
      Name: Dominican Republic
      Capital: Santo Domingo
      Flag: https://flagcdn.com/w320/do.png
      
Day7_arrayMethods.js:29 
      Name: Solomon Islands
      Capital: Honiara
      Flag: https://flagcdn.com/w320/sb.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Vanuatu
      Capital: Port Vila
      Flag: https://flagcdn.com/w320/vu.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Madagascar
      Capital: Antananarivo
      Flag: https://flagcdn.com/w320/mg.png
      
Day7_arrayMethods.js:29 
      Name: Lao People's Democratic Republic
      Capital: Vientiane
      Flag: https://flagcdn.com/w320/la.png
      
Day7_arrayMethods.js:29 
      Name: Cook Islands
      Capital: Avarua
      Flag: https://flagcdn.com/w320/ck.png
      
Day7_arrayMethods.js:29 
      Name: Saint Martin
      Capital: Marigot
      Flag: https://flagcdn.com/w320/mf.png
      
Day7_arrayMethods.js:29 
      Name: Mongolia
      Capital: Ulan Bator
      Flag: https://flagcdn.com/w320/mn.png
      
Day7_arrayMethods.js:29 
      Name: Martinique
      Capital: Fort-de-France
      Flag: https://flagcdn.com/w320/mq.png
      
Day7_arrayMethods.js:29 
      Name: French Republic
      Capital: Paris
      Flag: https://flagcdn.com/w320/fr.png
      
Day7_arrayMethods.js:29 
      Name: Central African Republic
      Capital: Bangui
      Flag: https://flagcdn.com/w320/cf.png
      
Day7_arrayMethods.js:29 
      Name: Anguilla
      Capital: The Valley
      Flag: https://flagcdn.com/w320/ai.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Eswatini
      Capital: Mbabane
      Flag: https://flagcdn.com/w320/sz.png
      
Day7_arrayMethods.js:29 
      Name: United Kingdom of Great Britain and Northern Ireland
      Capital: London
      Flag: https://flagcdn.com/w320/gb.png
      
Day7_arrayMethods.js:29 
      Name: Iceland
      Capital: Reykjavik
      Flag: https://flagcdn.com/w320/is.png
      
Day7_arrayMethods.js:29 
      Name: Federal Democratic Republic of Nepal
      Capital: Kathmandu
      Flag: https://flagcdn.com/w320/np.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Ghana
      Capital: Accra
      Flag: https://flagcdn.com/w320/gh.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Iraq
      Capital: Baghdad
      Flag: https://flagcdn.com/w320/iq.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Thailand
      Capital: Bangkok
      Flag: https://flagcdn.com/w320/th.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Denmark
      Capital: Copenhagen
      Flag: https://flagcdn.com/w320/dk.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Serbia
      Capital: Belgrade
      Flag: https://flagcdn.com/w320/rs.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Uganda
      Capital: Kampala
      Flag: https://flagcdn.com/w320/ug.png
      
Day7_arrayMethods.js:29 
      Name: Territory of the Cocos (Keeling) Islands
      Capital: West Island
      Flag: https://flagcdn.com/w320/cc.png
      
Day7_arrayMethods.js:29 
      Name: Montenegro
      Capital: Podgorica
      Flag: https://flagcdn.com/w320/me.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Saudi Arabia
      Capital: Riyadh
      Flag: https://flagcdn.com/w320/sa.png
      
Day7_arrayMethods.js:29 
      Name: Hashemite Kingdom of Jordan
      Capital: Amman
      Flag: https://flagcdn.com/w320/jo.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Suriname
      Capital: Paramaribo
      Flag: https://flagcdn.com/w320/sr.png
      
Day7_arrayMethods.js:29 
      Name: New Zealand
      Capital: Wellington
      Flag: https://flagcdn.com/w320/nz.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Kenya
      Capital: Nairobi
      Flag: https://flagcdn.com/w320/ke.png
      
Day7_arrayMethods.js:29 
      Name: United Mexican States
      Capital: Mexico City
      Flag: https://flagcdn.com/w320/mx.png
      
Day7_arrayMethods.js:29 
      Name: Bosnia and Herzegovina
      Capital: Sarajevo
      Flag: https://flagcdn.com/w320/ba.png
      
Day7_arrayMethods.js:29 
      Name: Saint Vincent and the Grenadines
      Capital: Kingstown
      Flag: https://flagcdn.com/w320/vc.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Seychelles
      Capital: Victoria
      Flag: https://flagcdn.com/w320/sc.png
      
Day7_arrayMethods.js:29 
      Name: Saint Pierre and Miquelon
      Capital: Saint-Pierre
      Flag: https://flagcdn.com/w320/pm.png
      
Day7_arrayMethods.js:29 
      Name: Tokelau
      Capital: Fakaofo
      Flag: https://flagcdn.com/w320/tk.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Bulgaria
      Capital: Sofia
      Flag: https://flagcdn.com/w320/bg.png
      
Day7_arrayMethods.js:29 
      Name: Falkland Islands
      Capital: Stanley
      Flag: https://flagcdn.com/w320/fk.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Latvia
      Capital: Riga
      Flag: https://flagcdn.com/w320/lv.png
      
Day7_arrayMethods.js:29 
      Name: Réunion Island
      Capital: Saint-Denis
      Flag: https://flagcdn.com/w320/re.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Guinea
      Capital: Conakry
      Flag: https://flagcdn.com/w320/gn.png
      
Day7_arrayMethods.js:29 
      Name: Lebanese Republic
      Capital: Beirut
      Flag: https://flagcdn.com/w320/lb.png
      
Day7_arrayMethods.js:29 
      Name: Grand Duchy of Luxembourg
      Capital: Luxembourg
      Flag: https://flagcdn.com/w320/lu.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Mauritius
      Capital: Port Louis
      Flag: https://flagcdn.com/w320/mu.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Estonia
      Capital: Tallinn
      Flag: https://flagcdn.com/w320/ee.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Norway
      Capital: Oslo
      Flag: https://flagcdn.com/w320/no.png
      
Day7_arrayMethods.js:29 
      Name: Union of the Comoros
      Capital: Moroni
      Flag: https://flagcdn.com/w320/km.png
      
Day7_arrayMethods.js:29 
      Name: Bolivarian Republic of Venezuela
      Capital: Caracas
      Flag: https://flagcdn.com/w320/ve.png
      
Day7_arrayMethods.js:29 
      Name: Islamic Republic of Iran
      Capital: Tehran
      Flag: https://flagcdn.com/w320/ir.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Sweden
      Capital: Stockholm
      Flag: https://flagcdn.com/w320/se.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Fiji
      Capital: Suva
      Flag: https://flagcdn.com/w320/fj.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Philippines
      Capital: Manila
      Flag: https://flagcdn.com/w320/ph.png
      
Day7_arrayMethods.js:29 
      Name: Hong Kong Special Administrative Region of the People's Republic of China
      Capital: City of Victoria
      Flag: https://flagcdn.com/w320/hk.png
      
Day7_arrayMethods.js:29 
      Name: Oriental Republic of Uruguay
      Capital: Montevideo
      Flag: https://flagcdn.com/w320/uy.png
      
Day7_arrayMethods.js:29 
      Name: Macao Special Administrative Region of the People's Republic of China
      Capital: undefined
      Flag: https://flagcdn.com/w320/mo.png
      
Day7_arrayMethods.js:29 
      Name: Swiss Confederation
      Capital: Bern
      Flag: https://flagcdn.com/w320/ch.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Trinidad and Tobago
      Capital: Port of Spain
      Flag: https://flagcdn.com/w320/tt.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Rwanda
      Capital: Kigali
      Flag: https://flagcdn.com/w320/rw.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Albania
      Capital: Tirana
      Flag: https://flagcdn.com/w320/al.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Guinea-Bissau
      Capital: Bissau
      Flag: https://flagcdn.com/w320/gw.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Côte d'Ivoire
      Capital: Yamoussoukro
      Flag: https://flagcdn.com/w320/ci.png
      
Day7_arrayMethods.js:29 
      Name: Democratic People's Republic of Korea
      Capital: Pyongyang
      Flag: https://flagcdn.com/w320/kp.png
      
Day7_arrayMethods.js:29 
      Name: Bouvet Island
      Capital: undefined
      Flag: https://flagcdn.com/w320/bv.png
      
Day7_arrayMethods.js:29 
      Name: Principality of Andorra
      Capital: Andorra la Vella
      Flag: https://flagcdn.com/w320/ad.png
      
Day7_arrayMethods.js:29 
      Name: Republic of the Maldives
      Capital: Malé
      Flag: https://flagcdn.com/w320/mv.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Nauru
      Capital: Yaren
      Flag: https://flagcdn.com/w320/nr.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Singapore
      Capital: Singapore
      Flag: https://flagcdn.com/w320/sg.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Zimbabwe
      Capital: Harare
      Flag: https://flagcdn.com/w320/zw.png
      
Day7_arrayMethods.js:29 
      Name: Virgin Islands of the United States
      Capital: Charlotte Amalie
      Flag: https://flagcdn.com/w320/vi.png
      
Day7_arrayMethods.js:29 
      Name: Commonwealth of Dominica
      Capital: Roseau
      Flag: https://flagcdn.com/w320/dm.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of Morocco
      Capital: Rabat
      Flag: https://flagcdn.com/w320/ma.png
      
Day7_arrayMethods.js:29 
      Name: Department of Mayotte
      Capital: Mamoudzou
      Flag: https://flagcdn.com/w320/yt.png
      
Day7_arrayMethods.js:29 
      Name: State of Qatar
      Capital: Doha
      Flag: https://flagcdn.com/w320/qa.png
      
Day7_arrayMethods.js:29 
      Name: Sint Maarten
      Capital: Philipsburg
      Flag: https://flagcdn.com/w320/sx.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Costa Rica
      Capital: San José
      Flag: https://flagcdn.com/w320/cr.png
      
Day7_arrayMethods.js:29 
      Name: Niue
      Capital: Alofi
      Flag: https://flagcdn.com/w320/nu.png
      
Day7_arrayMethods.js:29 
      Name: Country of Curaçao
      Capital: Willemstad
      Flag: https://flagcdn.com/w320/cw.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Cabo Verde
      Capital: Praia
      Flag: https://flagcdn.com/w320/cv.png
      
Day7_arrayMethods.js:29 
      Name: Kingdom of the Netherlands
      Capital: Amsterdam
      Flag: https://flagcdn.com/w320/nl.png
      
Day7_arrayMethods.js:29 
      Name: Romania
      Capital: Bucharest
      Flag: https://flagcdn.com/w320/ro.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Sierra Leone
      Capital: Freetown
      Flag: https://flagcdn.com/w320/sl.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Nicaragua
      Capital: Managua
      Flag: https://flagcdn.com/w320/ni.png
      
Day7_arrayMethods.js:29 
      Name: People's Democratic Republic of Algeria
      Capital: Algiers
      Flag: https://flagcdn.com/w320/dz.png
      
Day7_arrayMethods.js:29 
      Name: Jamaica
      Capital: Kingston
      Flag: https://flagcdn.com/w320/jm.png
      
Day7_arrayMethods.js:29 
      Name: Togolese Republic
      Capital: Lomé
      Flag: https://flagcdn.com/w320/tg.png
      
Day7_arrayMethods.js:29 
      Name: Vatican City State
      Capital: Vatican City
      Flag: https://flagcdn.com/w320/va.png
      
Day7_arrayMethods.js:29 
      Name: Bailiwick of Jersey
      Capital: Saint Helier
      Flag: https://flagcdn.com/w320/je.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Ecuador
      Capital: Quito
      Flag: https://flagcdn.com/w320/ec.png
      
Day7_arrayMethods.js:29 
      Name: Independent State of Samoa
      Capital: Apia
      Flag: https://flagcdn.com/w320/ws.png
      
Day7_arrayMethods.js:29 
      Name: British Indian Ocean Territory
      Capital: Diego Garcia
      Flag: https://flagcdn.com/w320/io.png
      
Day7_arrayMethods.js:29 
      Name: Federal Republic of Nigeria
      Capital: Abuja
      Flag: https://flagcdn.com/w320/ng.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Zambia
      Capital: Lusaka
      Flag: https://flagcdn.com/w320/zm.png
      
Day7_arrayMethods.js:29 
      Name: Territory of the French Southern and Antarctic Lands
      Capital: Port-aux-Français
      Flag: https://flagcdn.com/w320/tf.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Chad
      Capital: N'Djamena
      Flag: https://flagcdn.com/w320/td.png
      
Day7_arrayMethods.js:29 
      Name: Svalbard og Jan Mayen
      Capital: Longyearbyen
      Flag: https://flagcdn.com/w320/sj.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Lithuania
      Capital: Vilnius
      Flag: https://flagcdn.com/w320/lt.png
      
Day7_arrayMethods.js:29 
      Name: Ukraine
      Capital: Kyiv
      Flag: https://flagcdn.com/w320/ua.png
      
Day7_arrayMethods.js:29 
      Name: People's Republic of China
      Capital: Beijing
      Flag: https://flagcdn.com/w320/cn.png
      
Day7_arrayMethods.js:29 
      Name: United States Minor Outlying Islands
      Capital: Washington DC
      Flag: https://flagcdn.com/w320/um.png
      
Day7_arrayMethods.js:29 
      Name: Commonwealth of the Northern Mariana Islands
      Capital: Saipan
      Flag: https://flagcdn.com/w320/mp.png
      
Day7_arrayMethods.js:29 
      Name: State of Palestine
      Capital: Ramallah
      Flag: https://flagcdn.com/w320/ps.png
      
Day7_arrayMethods.js:29 
      Name: Greenland
      Capital: Nuuk
      Flag: https://flagcdn.com/w320/gl.png
      
Day7_arrayMethods.js:29 
      Name: Republic of South Sudan
      Capital: Juba
      Flag: https://flagcdn.com/w320/ss.png
      
Day7_arrayMethods.js:29 
      Name: People's Republic of Bangladesh
      Capital: Dhaka
      Flag: https://flagcdn.com/w320/bd.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Equatorial Guinea
      Capital: Malabo
      Flag: https://flagcdn.com/w320/gq.png
      
Day7_arrayMethods.js:29 
      Name: Republic of Namibia
      Capital: Windhoek
      Flag: https://flagcdn.com/w320/na.png
      
Day7_arrayMethods.js:29 
      Name: Democratic Republic of Timor-Leste
      Capital: Dili
      Flag: https://flagcdn.com/w320/tl.png
      
Day7_arrayMethods.js:29 
      Name: Nation of Brunei, Abode of Peace
      Capital: Bandar Seri Begawan
      Flag: https://flagcdn.com/w320/bn.png
      
Day7_arrayMethods.js:29 
      Name: Independent and Sovereign Republic of Kiribati
      Capital: South Tarawa
      Flag: https://flagcdn.com/w320/ki.png
      
Day7_arrayMethods.js:40 Total Population:119446
Day7_arrayMethods.js:45 Countries which use Currency Code as USD
Day7_arrayMethods.js:46 []length: 0[[Prototype]]: Array(0)
  */