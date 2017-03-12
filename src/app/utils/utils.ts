export class Utils {

    static clone(object: any) {
        return JSON.parse(JSON.stringify(object));
    }
}