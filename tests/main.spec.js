import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
    describe('Smoke Tests', () => {
        it('should exist the sum method', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exist the sub method', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exist the mult method', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exist the div method', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 4 when sum 2 and 2', () => {
            expect(sum(2,2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when sub 6 and 2', () => {
            expect(sub(6,2)).to.be.equal(4);
        });

        it('should return -4 when sub 6 and 10', ()  => {
            expect(sub(6, 10)).to.be.equal(-4);
        })
    });

    describe('Mult', () => {
        it('should return 4 when multiplying 2 and 2', () => {
            expect(mult(2,2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return 1 when dividing 2 and 2', () => {
            expect(div(2,2)).to.be.equal(1);
        });

        it('should return `Division by zero not allowed` when divide by 0', () => {
            expect(div(4, 0)).to.be.equal('Division by 0 not allowed');
        })
    });
});
