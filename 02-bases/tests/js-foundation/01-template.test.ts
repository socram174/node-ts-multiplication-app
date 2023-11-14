import { describe, expect, it, test } from '@jest/globals';
import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.ts', () => {
    test('emailTemplate should contain a greeting', () => {

        expect(emailTemplate).toContain('Hi, ');
    })

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {

        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');

        expect( emailTemplate ).toContain( '{{name}}' );
        expect( emailTemplate ).toContain( '{{orderId}}' );

    });
});