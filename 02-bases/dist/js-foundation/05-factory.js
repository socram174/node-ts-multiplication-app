"use strict";
//Un factory function es una funcion que crea una funcion
// const { getUUID } = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin');
//const { getAge, getUUID } = require('../plugins'); //Viene de index.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'Marcos', birthdate: '1997-07-07'};
// const marcos = buildPerson(obj);
// console.log(marcos);
// module.exports = {
//     buildMakePerson,
// };
