import { bubbleSort, insertionSort, selectionSort } from './sorting';

describe('Bubble sorting', () => {
    it('should correct sort', () => {
        expect(bubbleSort([])).toEqual([], 'correct sort empty array');
        expect(bubbleSort([1])).toEqual([1], 'correct array which length = 1');
        expect(bubbleSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(bubbleSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});

describe('Insertion sorting', () => {
    it('should correct sort', () => {
        expect(insertionSort([])).toEqual([], 'correct sort empty array');
        expect(insertionSort([1])).toEqual([1], 'correct array which length = 1');
        expect(insertionSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(insertionSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});

describe('Selection sorting', () => {
    it('should correct sort', () => {
        expect(selectionSort([])).toEqual([], 'correct sort empty array');
        expect(selectionSort([1])).toEqual([1], 'correct array which length = 1');
        expect(selectionSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(selectionSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});