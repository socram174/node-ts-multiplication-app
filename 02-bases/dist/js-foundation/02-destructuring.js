"use strict";
//console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, USERNAME } = process.env;
//console.table({SHELL, USERNAME});
exports.characters = ['Goku', 'Vegeta', 'Iron Man', 'Trunks'];
const [, , , trunks] = exports.characters;
//console.log(trunks);
