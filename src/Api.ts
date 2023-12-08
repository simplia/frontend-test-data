import axios from 'axios';
import Address from "./Address";
import Config from "./Config";

export default class Api {
    public static async url(type: string, config?: Config): Promise<string | null> {
        if (!config) {
            config = new Config()
        }
        const response = await axios.get(`${process.env.BASE_URL}/_test-urls`, {
            params: {
                type,
                preselectGDPR: config.preselectGDPR
            }
        })
        if (response.data.length === 0) {
            return null;
        }
        return response.data[0];
    }

    public static async address(type: string): Promise<Address> {
        return (await this.request(type)).data[0];
    }

    private static request(type: string): Promise<any> {
        return axios.get(`${process.env.BASE_URL}/_test-inputs`, {
            params: {type}
        })
    }
}
