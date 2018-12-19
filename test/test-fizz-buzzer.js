const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should return fizz for 3, buzz for 5, and fizzbuzz for both multiples', function() {
        const normalCases = [
            [5, 'buzz'],
            [15, 'fizz-buzz'],
            [9, 'fizz'],
            [11, 11]
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input[0]);
            expect(answer).to.equal(input[1]);
        });
    });

    it('should return error for non-numeric values', function() {
        const errorCases = ['a', 'z', '2', true];

        errorCases.forEach(function(value) {
            const answer = function() {
                fizzBuzzer(value);
            };
            expect(answer).to.throw(Error);
        });
        
    });
});