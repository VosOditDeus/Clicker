// import axios from 'axios';
// // import * as  Phaser from 'phaser'
//
// export function shuffle(array) {
//     let currentIndex = array.length, temporaryValue, randomIndex;
//
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//
//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//
//     return array;
// }
//
// export const currencyChoices = {
//     'eur': '€',
//     'usd': '$',
//     'gbp': '£',
// };
//
// export const choices = [1,2,5,10,100,1000,'free'];
//
//
// export function setAuthorizationToken(token) {
//     if (token) {
//         axios.defaults.headers.common['authorization'] = `bearer ${token}`
//     } else {
//         delete axios.defaults.headers.common['authorization']
//     }
// }
//
// export function normalizing(object,scale,anchor){
//     object.scale.setTo(scale);
//     object.anchor.setTo(anchor);
// }
//
// export function aligning(objects,aligning,where){
//     for (let i=0; i<objects.length;i++){
//      objects[i].alignTo(aligning[i],where[i])
//     }
// }
//
// const colors =['red','green','yellow','blue','grey','black','purple','white','pink'];
// export  const  shuffledColors = shuffle(colors);
//



export const  monstersData = [
    {name: 'Aerocephal',        image: 'aerocephal',        maxHealth: 10},
    {name: 'Arcana Drake',      image: 'arcana_drake',      maxHealth: 20},
    {name: 'Aurum Drakueli',    image: 'aurum-drakueli',    maxHealth: 30},
    {name: 'Bat',               image: 'bat',               maxHealth: 5},
    {name: 'Daemarbora',        image: 'daemarbora',        maxHealth: 10},
    {name: 'Deceleon',          image: 'deceleon',          maxHealth: 10},
    {name: 'Demonic Essence',   image: 'demonic_essence',   maxHealth: 15},
    {name: 'Dune Crawler',      image: 'dune_crawler',      maxHealth: 8},
    {name: 'Green Slime',       image: 'green_slime',       maxHealth: 3},
    {name: 'Nagaruda',          image: 'nagaruda',          maxHealth: 13},
    {name: 'Rat',               image: 'rat',               maxHealth: 2},
    {name: 'Scorpion',          image: 'scorpion',          maxHealth: 2},
    {name: 'Skeleton',          image: 'skeleton',          maxHealth: 6},
    {name: 'Snake',             image: 'snake',             maxHealth: 4},
    {name: 'Spider',            image: 'spider',            maxHealth: 4},
    {name: 'Stygian Lizard',    image: 'stygian_lizard',    maxHealth: 20}
];


export const upgradeButtonsData = [
    {icon: 'dagger', name: 'Attack', level: 1, cost: 5, purchaseHandler: function(button, player) {
        player.clickDmg += 1;
    }},
    {icon: 'swordIcon1', name: 'Auto-Attack', level: 0, cost: 25, purchaseHandler: function(button, player) {
        player.dps += 5;
    }}
]