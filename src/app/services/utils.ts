export class Utils {

    static clone(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }

    static urlParams(params: Object) {
        let queryArray = [];

        for (let i in params) {
            if (params.hasOwnProperty(i)) {
                queryArray.push(`${i}=${params[i]}`);
            }
        }

        return queryArray.join('&');
    }

    static transformArrayToObject(array: any[], key: string): Object {
        let obj = {};
        array = Utils.clone(array);

        array.forEach(item => {
            obj[item[key]] = item;
        });

        return obj;
    }

    static sortByDate(items): void {
        return items.sort((a, b) => {
            return (new Date(a.activeFrom)).getTime() - (new Date(b.activeFrom)).getTime();
        });
    }
}