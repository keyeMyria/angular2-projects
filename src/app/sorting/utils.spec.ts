import { swap, findMinElementIndex } from './utils';

describe('Swap two element', () => {

    it('should swap to array element', () => {
        let numbers = [4, 5];
        swap(numbers, 0, 1);
        expect(numbers).toEqual([5, 4]);
    });

    it('should throw error (array index of bound exception)', () => {
        let numbers = [4, 5];
        expect(() => {swap(numbers, 1, 2)}).toThrow(new Error('Array index of bound exception'));
    });
});

describe('Find minimal element and return index', () => {
    it('should return index of minimal element', () => {
        let array = [5, 3, 10, 7, 1, 4];
        expect(findMinElementIndex(array)).toBe(4, 'index element');
    });

    it('should throw error', () => {
        let array = [5, 3, 10, 7, 1, 4];
        expect(() => findMinElementIndex(array, 6)).toThrow(new Error('Array index of bound exception'));
    });
});