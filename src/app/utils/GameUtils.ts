export class GameUtils {

    static shuffleArray <T>(array: T[]): T[] {
        let tmpArray: T[] = Object.assign([], array);
        for(let i = 0; i < tmpArray.length; i++) {
            let r = GameUtils.rand(i, tmpArray.length);
            let tmp = tmpArray[i];
            tmpArray[i] = tmpArray[r];
            tmpArray[r] = tmp;
        }
        return tmpArray;
    }

    static rand(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}