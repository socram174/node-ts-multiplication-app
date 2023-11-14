import { describe, expect, it, test } from '@jest/globals';

// A A A = arrange act assert

describe('Test in the App file', () => {
    test('should be 30', () => {
        
        // 1. Arrange
        const num1 = 10;
        const num2 = 20;


        // 2. Act
        const result = num1 + num2;

        // 3. Assert
        expect(result).toBe(30);

    });
});