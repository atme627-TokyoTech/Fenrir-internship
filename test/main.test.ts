import { isValid } from '../src/main';

test('test', () => {
    expect(isValid('()')).toBe(true);
});