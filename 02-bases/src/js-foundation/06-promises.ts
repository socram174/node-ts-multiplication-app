import { httpClientPlugin as http } from '../plugins/http-client.plugin';
//const { http } = require('../plugins');

export const getPokemonById = async (id: string|number): Promise<string> => {

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        const pokemon = await http.get(url);
        return pokemon.name;


    } catch (error) {

        throw `Pokemon not found with id ${id}`;
    }
    


    // const response = await fetch(url);
    // const pokemon = await response.json();

    //throw new Error('Pokemon no existe');


    // return fetch(url)
    //  .then( (response) => response.json())
    //  .then( () => { throw new Error('Pokemon no existe')})
    //  .then( (pokemon) => pokemon.name );

   // return 'Pokemon'; //Si no hay return explicito retorna undefined

};

//module.exports = getPokemonById;


//El async transforma el valor de retorno de una funcion en una promesa
//await es un codigo bloqueante que no deja que las siguientes lineas continuen hasta que se reuelva el fetch