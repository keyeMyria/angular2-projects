export function swap<T>(items: T[], left: number, right: number): void {
    if(left > items.length - 1 || right > items.length - 1) {
        throw new Error('Array index of bound exception');
    }

    let tmp = items[left];
    items[left] = items[right];
    items[right] = tmp;
}

export function findMinElementIndex(array: number[], startIndex: number = 0): number {
    if(startIndex > array.length - 1) {
        throw new Error('Array index of bound exception');
    }

    for(let i = startIndex + 1; i < array.length; i++) {
        if(array[i] < array[startIndex]) {
            startIndex = i;
        }
    }
    return startIndex;
}