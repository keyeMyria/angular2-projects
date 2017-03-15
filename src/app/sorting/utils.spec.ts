import { swap, findMinElementIndex, merge } from './utils';

describe('UtilsService', () => {
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

    describe('Should merge two sorted array in one sorted array', () => {
        it('should merge two empty array', () => {
            expect(merge([], [])).toEqual([]);
        });

        it('should merge array length 1 and empty array', () => {
            expect(merge([2], [])).toEqual([2]);
        });

        it('should merge two arrays', () => {
            expect(merge([], [])).toEqual([], 'correct merge empty array');
            expect(merge([1, 2], [])).toEqual([1, 2]);
            expect(merge([], [1, 2])).toEqual([1, 2]);
            expect(merge([3, 4, 7, 10], [1, 5, 8, 9])).toEqual([1, 3, 4, 5, 7, 8, 9, 10], 'first.length = second.length');
            expect(merge([0, 3, 4, 7, 10], [1, 5, 8, 9])).toEqual([0, 1, 3, 4, 5, 7, 8, 9, 10], 'first.length > second.length');
            expect(merge([3, 4, 7, 10], [1, 5, 8, 9, 10, 12])).toEqual([1, 3, 4, 5, 7, 8, 9, 10, 10, 12], 'first.length < second.length');
        });
    });
});