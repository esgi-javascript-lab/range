"use strict";

const { describe, it } = require("mocha");
const { expect } = require("chai");
const { range } = require("../src/array");

describe("array", function() {
    describe("range", function() {
        it("calling range() with an incorrect number of argument should throw an error", function() {
            expect(() => range()).to.throw(Error);
            expect(() => range(1, 5, 1)).to.throw(Error);
            expect(() => range(1, 5)).to.not.throw();
        });

        it("calling range() without numbers should throw an error", function() {
            expect(() => range("1", 5)).to.throw(TypeError);
            expect(() => range(1, "5")).to.throw(TypeError);
        });

        it("calling range() with Infinity should throw an error", function() {
            expect(() => range(-Infinity, 5)).to.throw(RangeError);
            expect(() => range(1, Infinity)).to.throw(RangeError);
        });

        it("range(1, 5) should return an array", function() {
            expect(range(1, 5)).to.be.an("array");
        });

        it("range(1, 5) should return [1, 2, 3, 4, 5]", function() {
            expect(range(1, 5)).to.deep.equal([1, 2, 3, 4, 5]);
        });

        it("range(5, 1) should return [5, 4, 3, 2, 1]", function() {
            expect(range(5, 1)).to.deep.equal([5, 4, 3, 2, 1]);
        });

        it("range(-1, -5) should return [-1, -2, -3, -4, -5]", function() {
            expect(range(-1, -5)).to.deep.equal([-1, -2, -3, -4, -5]);
        });

        it("range(-5, -1) should return [-5, -4, -3, -2, -1]", function() {
            expect(range(-5, -1)).to.deep.equal([-5, -4, -3, -2, -1]);
        });
    });
});
