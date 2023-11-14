"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
//const { http } = require('../plugins');
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield http_client_plugin_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (error) {
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
});
exports.getPokemonById = getPokemonById;
//module.exports = getPokemonById;
//El async transforma el valor de retorno de una funcion en una promesa
//await es un codigo bloqueante que no deja que las siguientes lineas continuen hasta que se reuelva el fetch
