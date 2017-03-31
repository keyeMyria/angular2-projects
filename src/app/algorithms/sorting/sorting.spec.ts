import { Sorting, partition } from './sorting';

describe('Sorting', () => {
    it('Bubble sorting', () => {
        expect(Sorting.bubbleSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.bubbleSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.bubbleSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.bubbleSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });

    it('Insertion sorting', () => {
        expect(Sorting.insertionSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.insertionSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.insertionSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.insertionSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });

    it('Selection sorting', () => {
        expect(Sorting.selectionSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.selectionSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.selectionSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.selectionSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });

    it('Merge Sorting', () => {
        expect(Sorting.mergeSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.mergeSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.mergeSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.mergeSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });

    it('Partition function', () => {
        let items: number[] = [6, 10, 3, 7, 0, 23, 1, 9];
        expect(partition(items, 0, items.length - 1)).toBe(4, 'return start index in right side');
        expect(items).toEqual([6, 1, 3, 0, 7, 23, 10, 9], 'smaller elements in left side and bigger elements in right side');
    });

    it('Quick Sort', () => {
        expect(Sorting.quickSort([])).toEqual([], 'correct sort empty array');
        expect(Sorting.quickSort([1])).toEqual([1], 'correct array which length = 1');
        expect(Sorting.quickSort([2,1])).toEqual([1, 2], 'correct array which length = 2');
        expect(Sorting.quickSort([6, 4, 3, 7, 0])).toEqual([0, 3, 4, 6, 7], 'correct sort any length array');
    });
});