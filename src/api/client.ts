import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";
import { HttpMethod, type API, Response } from "./types";

export class Client {
    private instance: AxiosInstance;
    public static readonly supportedMethods = [
        HttpMethod.GET,
        HttpMethod.POST,
        HttpMethod.PUT,
        HttpMethod.DELETE
    ];

    constructor(
        private readonly timeout: number = 10000,
        private readonly baseURL: string | null = null
    ) {
        this.instance = axios.create({
            baseURL: baseURL ?? undefined,
            timeout: timeout,
        });
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => error
        );
    }

    public async request<T extends object>(api: API): Promise<Response<T>> {
        let response: AxiosResponse | AxiosError;

        if (Client.supportedMethods.includes(api.method)) {
            response = await this.instance.request({
                method: api.method,
                url: api.path,
                params: api.query,
                headers: api.headers,
                data: api.body,
            });
        } else {
            // 判断指定 method 是否为 HttpMethod 枚举中的成员
            // 如果是的话，说明是本笨蛋忘记添加 case 了，报错信息要特化
            if (Object.values(HttpMethod).includes(api.method)) {
                throw new Error(`Not implemented HTTP method: ${api.method}`);
            }
            throw new Error(`Unsupported HTTP method: ${api.method}`);
        }

        if (response instanceof Error) throw response;

        return new Response<T>(
            response.data,
            response.status,
            response.data.message ?? null,
            response.headers
        );
    }
}