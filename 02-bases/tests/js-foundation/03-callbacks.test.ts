import { describe, expect, it, test } from '@jest/globals';
import { getUserById } from '../../src/js-foundation/03-callbacks';


describe('js-foundation/03-callbacks.ts', () => {

    test('get user by id should return error if user does not exist', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done(); //Se llama cuando se sabe que ya estan los resultados
        });

    });

    test('get user by id should return John Doe', (done) => {

        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({ //To be no funciona para objetos ya que compara referencias. Usar toEqual o toStrictEqual
                id: 1,
                name: 'John Doe'
            });

            done(); //Se llama cuando se sabe que ya estan los resultados
        });

    });

});