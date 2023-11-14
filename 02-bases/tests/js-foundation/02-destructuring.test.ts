import { describe, expect, it, test } from '@jest/globals';
import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {

    test('characters should contain Goku, Vegeta', () => {

        expect(characters).toContain('Goku');
        expect(characters).toContain('Vegeta');



    })

    test('first character should be Goku and second Vegeta', () => {

        const [goku, vegeta] = characters;

        expect(goku).toBe('Goku');
        expect(vegeta).toBe('Vegeta');

    })



});
