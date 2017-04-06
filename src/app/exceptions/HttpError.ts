export class HttpError implements Error {

    _error: any;
    name: string = 'HttpError';
    status: number;
    message: string;

    get original() {
        return this._error;
    }

    set original(error) {
        this._error = error;
    }

    constructor(error: any = {}) {
        this.original = error;
        this.status = error.status;
        this.message = error.message;
    }
}