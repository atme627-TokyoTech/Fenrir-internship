import { isValid } from '../src/main';

test('test1', () => {
    expect(isValid('()')).toBe(true);
});

test('test2', () => {
    expect(isValid('([]){}')).toBe(true);
});

test('test3', () => {
    expect(isValid('({)}')).toBe(false);
});