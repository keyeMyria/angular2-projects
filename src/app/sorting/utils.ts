export function swap<T>(items: T[], left: number, right: number): void {
    if (left > items.length - 1 || right > items.length - 1) {
        throw new Error('Array index of bound exception');
    }

    let tmp = items[left];
    items[left] = items[right];
    items[right] = tmp;
}

export function findMinElementIndex(array: number[], startIndex: number = 0): number {
    if (startIndex > array.length - 1) {
        throw new Error('Array index of bound exception');
    }

    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[i] < array[startIndex]) {
            startIndex = i;
        }
    }
    return startIndex;
}

export function merge(first: number[], second: number[]): number[] {
    let resultArray = (new Array(first.length + second.length)).fill(0);
    let currentFirstIndex = 0;
    let currentSecondIndex = 0;

    while (currentFirstIndex + currentSecondIndex < resultArray.length) {
        if (currentFirstIndex < first.length && currentSecondIndex < second.length) {
            for (let i = currentFirstIndex; i < first.length; i++) {
                if (first[i] <= second[currentSecondIndex]) {
                    resultArray[currentFirstIndex + currentSecondIndex] = first[i];
                    currentFirstIndex++;
                } else {
                    break;
                }
            }

            for (let i = currentSecondIndex; i < second.length; i++) {
                if (second[i] < first[currentFirstIndex]) {
                    resultArray[currentFirstIndex + currentSecondIndex] = second[i];
                    currentSecondIndex++;
                } else {
                    break;
                }
            }
        } else {
            if (currentFirstIndex < first.length) {
                for (let i = currentFirstIndex; i < first.length; i++) {
                    resultArray[currentFirstIndex + currentSecondIndex] = first[i];
                    currentFirstIndex++;
                }
            } else {
                for (let i = currentSecondIndex; i < second.length; i++) {
                    resultArray[currentFirstIndex + currentSecondIndex] = second[i];
                    currentSecondIndex++;
                }
            }
        }
    }

    return resultArray;
}