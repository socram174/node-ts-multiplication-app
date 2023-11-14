//console.log(process.env);

const {SHELL, USERNAME} = process.env;

//console.table({SHELL, USERNAME});

export const characters = ['Goku', 'Vegeta','Iron Man', 'Trunks'];

const [,,,trunks] = characters;

//console.log(trunks);