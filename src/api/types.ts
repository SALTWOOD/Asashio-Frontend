import type { AxiosResponse } from "axios";

export abstract class API {
    protected constructor(
        public readonly path: string,
        public readonly method: HttpMethod,
        public readonly query?: Record<string, unknown>,
        public readonly headers?: Record<string, string>,
        public readonly body? : Record<string, unknown>
    ) { }
}

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    HEAD = "HEAD"
}

export class Response<T extends object> {
    constructor(
        public readonly data: T,
        public readonly status: number,
        public readonly message: string | null,
        public readonly headers: AxiosResponse['headers'],
    ) {}
}