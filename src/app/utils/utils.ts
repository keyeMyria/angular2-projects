export class Utils {

    static clone(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }
}