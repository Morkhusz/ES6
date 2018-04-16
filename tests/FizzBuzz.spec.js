import { expect } from 'chai';
import FizzBuzz from '../src/FizzBuzz.js';

describe('FizzBuzz', () => {

    it('should return `Fizz` when multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz');
        expect(FizzBuzz(6)).to.be.equal('Fizz');
    });

    it('should return `Buzz` when multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz');
        expect(FizzBuzz(10)).to.be.equal('Buzz');
    });

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
        expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
    });

    it('should return the passed number when not multiple of 3 nor 5', () => {
        expect(FizzBuzz(2)).to.be.equal(2);
    });

    it('should return the 0 when 0', () => {
        expect(FizzBuzz(0)).to.be.equal(0);
    });

});
