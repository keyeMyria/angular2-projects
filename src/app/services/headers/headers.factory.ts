import { Headers } from '@angular/http';

export function loginHeaders(lang: string, headers: Headers = new Headers()): Headers {
    headers = langsHeader(headers, lang);
    headers = applicationJsonHeader(headers);

    return headers;
}

export function formDataHeaders(lang: string, token: string, headers: Headers = new Headers()): Headers {
    headers = langsHeader(headers, lang);
    headers = xAuthTokenHeader(headers, token);

    return headers;
}

export function apiRequestHeaders(lang: string, token: string, headers: Headers = new Headers()): Headers {
    headers = langsHeader(headers, lang);
    headers = applicationJsonHeader(headers);
    headers = xAuthTokenHeader(headers, token);

    return headers;
}

function langsHeader(headers: Headers = new Headers(), lang: string): Headers {
    headers.append('Accept-Language', lang);
    return headers;
}

function applicationJsonHeader(headers: Headers = new Headers()): Headers {
    headers.append('Content-Type', 'application/json');
    return headers;
}

function xAuthTokenHeader(headers: Headers = new Headers(), token: string): Headers {
    headers.append('x-auth-token', token);
    return headers;
}