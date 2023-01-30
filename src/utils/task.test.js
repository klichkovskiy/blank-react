const oneTask = require('./task');
const twoTask = require('./task');

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

