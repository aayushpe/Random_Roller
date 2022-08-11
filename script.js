const form = document.querySelector('#searchForm');

const espers_gold = [
    'Donar',
    'Jin Yuyao',
    'Tiye',
    'Lewis',
    'Tang Xuan',
    'Narmer',
    'Li Ling',
    'Triki',
    'Hyde',
    'Biondina',
    'Gabrielle',
    'Sally',
    'Ollie',
    'Lucas',
    'Sienna',
    'Ahmed',
    'Zora',
    'Ophelia'
];

const espers_purple = [
    'Djoser',
    'Mona',
    'Jiang Man',
    'Celine',
    'Kara',
    'Eira',
    'Falken',
    'Lu Yi',
    'Fabrice',
    'Arcana',
    'Sander',
    'Alexa',
    'Heng Yue',
    'Luo Yan',
    'Chloe',
    'Catherine',
    'Pritzker',
    'Jacob',
    'Ren Si',
    'Long Mian',
    'Lynn',
    'Dhalia',
    'Xie Chuyi',
    'Xie Yuzhi',
    'Meredith',
    'Kaylee',
    'Aurelius',
    'Stewart',
    'Xiao Yin'
];

const espers_blue = [
    'Bardon',
    'Chang Pu',
    'Brynn',
    'Drew',
    'Li Ao',
    'Zelmer',
    'Hall',
    'Tang yun',
    'Freddy',
    'David',
    'Berenice',
    'Leon',
    'Helena',
    'Unky Chai',
    'Jeanne'
];

const espers_gold_shimmer = [
    'Raven',
    'Cecillia',
    'Tevor',
    'Jiang Juli',
    'Unas'
];

const espers_purple_shimmer = [
    'Asenath',
    'Catherine',
    'Lin Xiao',
    'Anesidora',
    'Alice',
    'Bonnie',
    'Taylor',
    'Nicole',
    'Laura'
];

const espers_blue_shimmer = [
    'Q',
    'Melanie',
    'Lauren',
    'Chalmers',
    'Layla'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

form.addEventListener('submit' , async (e) => {
    e.preventDefault();
    
    tenRoll(espers_gold, espers_purple, espers_blue, espers_gold_shimmer, espers_purple_shimmer, espers_blue_shimmer);
});

const tenRoll = (espers_gold, espers_purple, espers_blue, espers_gold_shimmer, espers_purple_shimmer, espers_blue_shimmer) => {

    const containter = document.createElement('div');
    containter.classList.add('containter-fluid', 'mt-3', 'text-center');

    for(let count = 1; count <= 10; count++){
        const esper = document.createElement('p');
        
        const roll = getRandomInt(100); // Rarity Type
        const roll_type = getRandomInt(100); // Shimmer or Non Shimmer
        
        if(roll === 1 && roll_type > 7){
            esper.innerHTML = `${espers_gold[Math.floor(Math.random() * espers_gold.length)]} - LEGENDARY!!`
        } else if (roll === 1 && roll_type <= 7){esper.innerHTML = `${espers_gold_shimmer[Math.floor(Math.random() * espers_gold_shimmer.length)]} - SHIMMER LEGENDARY!!`}

        else if (roll <= 9 && roll_type > 7){
            esper.innerHTML = `${espers_purple[Math.floor(Math.random() * espers_purple.length)]} - EPIC!`
        } else if (roll <=9 && roll_type <= 7){esper.innerHTML = `${espers_purple_shimmer[Math.floor(Math.random() * espers_purple_shimmer.length)]} - SHIMMER EPIC!`}

        else if (roll > 9 && roll_type > 7){
            esper.innerHTML = espers_blue[Math.floor(Math.random() * espers_blue.length)]
        } else if (roll > 9 && roll_type <= 7){esper.innerHTML = `${espers_blue_shimmer[Math.floor(Math.random() * espers_blue_shimmer.length)]} - SHIMMER RARE`}

        containter.appendChild(esper);
        document.body.append(containter);
    }
    
    const line = document.createElement('hr')
    document.body.append(line);
}

