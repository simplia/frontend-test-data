import axios from 'axios';

export default class Url {
    public static async single(type: string): Promise<string> {
        const response = await axios.get(`${process.env.BASE_URL}/_test-urls`, {
            params: {
                type: type
            }
        })
        return response.data[0];
    }
}
