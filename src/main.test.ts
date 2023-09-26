import { expect, test } from "vitest"
import {
    isPalindrome,
    stringLength,
    sortArrayOfNumbers,
    sqrt,
    sumArray,
    fetchUserData,
    nextFibonacci,
} from "./main"

test('stringLength()', () => {
    expect(stringLength('four')).toBe(4);
    expect(stringLength('')).toBe(0);
})

test('isPalindrome()', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('aa')).toBe(true);
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('ab')).toBe(false);
})

test('sortArrayOfNumbers()', () => {
    expect(sortArrayOfNumbers([1,3,2])).toEqual([1,2,3]);
    expect(sortArrayOfNumbers([1])).toEqual([1]);
    expect(sortArrayOfNumbers([])).toEqual([]);
})

test('sqrt()', () => {
    expect(sqrt(4)).toBe(2);
    expect(sqrt(0)).toBe(0);
    expect(() => sqrt(-1)).toThrowError('negative number');
})

test('sumArray()', () => {
    expect(sumArray([1,2,3])).toBe(6);
    expect(sumArray([1])).toBeGreaterThan(0);
    expect(sumArray([])).toBe(0);
    expect(sumArray([1,2,3,-6])).toBe(0);
})

const keys = [
    'id',
    'name',
    'username',
    'email',
    'address',
    'phone',
    'website',
    'company'
];

test('fetchUserData()', async () => {
    expect(Object.keys(await fetchUserData(1))).toEqual(keys);
    expect(Object.keys(await fetchUserData(10))).toEqual(keys);
    expect(() => fetchUserData(0)).rejects.toThrowError('invalid id');
    expect(() => fetchUserData(-7)).rejects.toThrowError('invalid id');
    expect(() => fetchUserData(11)).rejects.toThrowError('invalid id');
})

test('nextFibonacci()', () => {
    expect(nextFibonacci([0, 1, 1, 2, 3])).toBe(5);
    expect(nextFibonacci([10, 50])).toBe(60);
    expect(nextFibonacci([])).toBe(0);
    expect(nextFibonacci([0])).toBe(0);
    expect(nextFibonacci([0, 1])).toBe(1);
    expect(() => nextFibonacci([1,2,4])).toThrow();
    expect(() => nextFibonacci([0, 0, 1])).toThrow();
})