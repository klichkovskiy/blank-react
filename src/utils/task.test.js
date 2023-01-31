const oneTask = require('./task');
const twoTask = require('./task');
const threeTask = require('./task');
const fourTask = require('./task');
const fiveTask = require('./task');
const sixTask = require('./task');

test('oneTask', () => {
    expect(oneTask([1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3])).toStrictEqual([1, 4, 6, 74]);
    expect(oneTask([1, 1, 1, 4, 5, 5, 1, 6, 6, 74, 74, 74, 3])).toStrictEqual([1, 5, 6, 74]);
    expect(oneTask([1, 1, 1, 3, 3, 4, 5, 5, 1, 6, 6, 74])).toStrictEqual([1, 3, 5, 6]);
});

test('twoTask', () => {
    expect(twoTask({ a: 1, b: 1 }, { a: 1, b: 1 })).toBeTruthy();
    expect(twoTask({ a: 1, b: 1, c: 4 }, { a: 1, b: 1, c: 4 })).toBeTruthy();
    expect(twoTask({ a: 1, b: 1 }, { a: 2, b: 1 })).toBeFalsy();
    expect(twoTask({ a: 1, b: 1, c: 4 }, { a: 1, b: 1 })).toBeFalsy();
});

test('threeTask', () => {
    expect(threeTask('Шла Саша по шоссе и сосала сушку')).toBe(12);
    expect(threeTask('Тестовое задание')).toBe(8);
});

test('fourTask', () => {
    expect(fourTask([1, 3, 4, 8, 10, 11, 14, 30, 33, 57, 66, 110, 213, 246])).toStrictEqual([10, 14, 30, 66]);
    expect(fourTask([30, 33, 34, 36, 57, 60, 66, 98, 99, 100, 110, 213, 246])).toStrictEqual([30, 34, 60, 66, 98]);
});


test('fiveTaskTask', () => {
    expect(fiveTask('аргентина манит негра')).toBeTruthy();
    expect(fiveTask('шалаш')).toBeTruthy();
    expect(fiveTask('палиндром')).toBeFalsy();
    expect(fiveTask('аргентина не манит негра')).toBeFalsy();
});

test('sixTask', () => {
    expect(sixTask()).toContain('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz1617fizz19buzz');
});
