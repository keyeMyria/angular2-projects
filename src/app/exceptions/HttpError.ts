export class HttpError implements Error {

    name: string = 'HttpError';

    constructor(public message: string) {
    }
}