import Address from "./Address";
import Config from "./Config";

export default class Api {
    public static async url(type: string, config?: Config): Promise<string | null> {
        if (!config) {
            config = new Config()
        }
        const urls = await this.get<string[]>('_test-urls', {
            type,
            preselectGDPR: String(config.preselectGDPR),
        })
        return urls[0] ?? null;
    }

    public static async address(type: string): Promise<Address> {
        return (await this.get<Address[]>('_test-inputs', {type}))[0];
    }

    private static async get<T>(path: string, params: Record<string, string>): Promise<T> {
        const url = new URL(`${process.env.BASE_URL}/${path}`)
        for (const [name, value] of Object.entries(params)) {
            url.searchParams.append(name, value)
        }
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`GET ${url} failed with status ${response.status} ${response.statusText}`)
        }
        return await response.json() as T
    }
}
