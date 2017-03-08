import { Sorting } from './sorting';

describe('Bubble sorting', () => {
    it('should correct sort', () => {
        expect(Sorting.bubbleSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.bubbleSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.bubbleSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.bubbleSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});

describe('Insertion sorting', () => {
    it('should correct sort', () => {
        expect(Sorting.insertionSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.insertionSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.insertionSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.insertionSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});

describe('Selection sorting', () => {
    it('should correct sort', () => {
        expect(Sorting.selectionSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.selectionSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.selectionSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.selectionSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});

describe('Merge Sorting', () => {
    it('should correct sort', () => {
        expect(Sorting.mergeSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.mergeSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.mergeSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.mergeSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});

// describe('Quick Sort', () => {
//     it('should correct sort', () => {
//         expect(Sorting.quickSort([])).toEqual([], 'correct sort empty array');
//         expect(Sorting.quickSort([1])).toEqual([1], 'correct array which length = 1');
//         expect(Sorting.quickSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
//         expect(Sorting.quickSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
//     });
// });