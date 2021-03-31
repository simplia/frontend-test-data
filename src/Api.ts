import axios from 'axios';
import Config from "./Config";

export default class Url {
    public static async single(type: string, config?: Config): Promise<string> {
        if (!config) {
            config = new Config()
        }
        const response = await axios.get(`${process.env.BASE_URL}/_test-urls`, {
            params: {
                type,
                javascript: config.javascript
            }
        })
        return response.data[0];
    }
}
