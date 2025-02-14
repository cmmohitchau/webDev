import {describe , expect , it} from "@jest/globals";
import { sum } from "..";
import { mul } from "..";

describe("testing sum function" , () => {
    it('adds 1 + 2 equal 3' , () => {
        expect(sum(1,2)).toBe(3);
    })

    it('it should -1 + -2 equals to -3' , () => {
        expect(sum(-1,-2)).toBe(-3);
    })
})

describe("testing mul function" , () => {
    it('adds 1 * 2 equal 2' , () => {
        expect(mul(1,2)).toBe(2);
    })

    it('it should -1 + -2 equals to -3' , () => {
        expect(mul(-1,-2)).toBe(2);
    })

    it('it should -1 + -2 equals to -3' , () => {
        expect(mul(0,2)).toBe(0);
    })
})