

const happy = require('../../assets/humores/happy.png');
const terrible = require('../../assets/humores/terrible.png')
const sad = require('../../assets/humores/sad.png')
const radiant = require('../../assets/humores/radiant.png')
const ok = require('../../assets/humores/ok.png')

const moodList = [
    {
        id: 1,
        image: happy,
        date: 'HOJE, 23 DE JANEIRO',
        color: 'red',
        humor: 'FELIZ',
        hours: '08:35',
        actions: ['party', 'cook', 'sport'],
        desc: 'Hoje foi um dia muito bom joguei...',
    },
    {
        id: 2,
        image: terrible,
        date: 'ONTEM, 22 DE JANEIRO',
        color: 'blue',
        humor: 'MAL',
        hours: '08:35',
        actions: ['party', 'cook', 'sport'],
        desc: 'Lorem ipsum dolor sit'

    },
    {
        id: 3,
        image: sad,
        date: '20 DE JANEIRO',
        color: 'green',
        humor: 'TRISTE',
        hours: '08:35',
        actions: ['party', 'cook', 'sport'],
        desc: 'Lorem ipsum dolor sit'

    },
    {
        id: 4,
        image: radiant,
        date: '29 DE JANEIRO',
        color: '#00BFFF',
        humor: 'Radiante',
        hours: '08:35',
        actions: ['party', 'cook', 'sport'],
        desc: 'Lorem ipsum dolor sit'

    },
    {
        id: 5,
        image: ok,
        date: '18 DE JANEIRO',
        color: '#FF8C00',
        humor: 'Ok',
        hours: '08:35',
        actions: ['party', 'cook', 'sport'],
        desc: 'Lorem ipsum dolor sit'

    }
]

export default moodList