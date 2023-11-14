import { findHeroById } from "./services/hero.service";


const hero = findHeroById(2);

console.log(hero?.name ?? 'Hero not found'); //si hero es undefined, no se puede acceder a la propiedad name y da error