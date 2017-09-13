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
