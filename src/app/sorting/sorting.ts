import { swap, findMinElementIndex, merge } from './utils';

export function bubbleSort(array: number[]): number[] {
    if (array.length < 2) return array;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
}

export function insertionSort(array: number[]): number[] {
    if (array.length < 2) return array;

    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j >= 0 && array[j] < array[j - 1]) {
            swap(array, j, j - 1);
            j--;
        }
    }

    return array;
}

export function selectionSort(array: number[]): number[] {
    if (array.length < 2) return array;

    for (let i = 0; i < array.length; i++) {
        let minIndex: number = findMinElementIndex(array, i);
        swap(array, minIndex, i);
    }

    return array;
}

export function mergeSort(array: number[]) {
    return console.log(_mergeSort(array));
}

function _mergeSort(array: number[], startIndex = 0, lastIndex = array.length) {
    if (array.length === 1) return array;
    let middle = Math.floor((lastIndex - startIndex) / 2);
    let left = array.slice(startIndex, middle);
    let right = array.slice(middle, lastIndex);

    return merge(_mergeSort(left), _mergeSort(right));
}