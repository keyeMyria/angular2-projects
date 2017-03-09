import { swap, findMinElementIndex, merge } from './utils';

export class Sorting {

    static bubbleSort(array: number[]): number[] {
        if (array.length < 2) { return array; }

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }

        return array;
    }

    static insertionSort(array: number[]): number[] {
        if (array.length < 2) { return array; }

        for (let i = 1; i < array.length; i++) {
            let j = i;

            while (j >= 0 && array[j] < array[j - 1]) {
                swap(array, j, j - 1);
                j--;
            }
        }

        return array;
    }

    static selectionSort(array: number[]): number[] {
        if (array.length < 2) { return array; }

        for (let i = 0; i < array.length; i++) {
            let minIndex: number = findMinElementIndex(array, i);
            swap(array, minIndex, i);
        }

        return array;
    }

    static mergeSort(array: number[], startIndex = 0, lastIndex = array.length): number[] {
        if (array.length <= 1) { return array; }
        let middle = Math.floor((lastIndex - startIndex) / 2);
        let left = array.slice(startIndex, middle);
        let right = array.slice(middle, lastIndex);

        return merge(Sorting.mergeSort(left), Sorting.mergeSort(right));
    }

    static quickSort(array: number[]): number[] {
        _quickSort(array);
        console.log(array.toString());
        return array;
    }
}

function _quickSort(array: number[],  startIndex: number = 0, endIndex: number = array.length - 1) {
    
}