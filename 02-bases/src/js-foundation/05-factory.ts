//Un factory function es una funcion que crea una funcion
// const { getUUID } = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin');
//const { getAge, getUUID } = require('../plugins'); //Viene de index.js

interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => { //una funcion que retorna una funcion

    return ({name, birthdate}: PersonOptions) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    
    }

}




// const obj = { name: 'Marcos', birthdate: '1997-07-07'};

// const marcos = buildPerson(obj);

// console.log(marcos);

// module.exports = {
//     buildMakePerson,
// };