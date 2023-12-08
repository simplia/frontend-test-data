import Api from './Api'
import Address from './Address'

export default class Input {

    public static domain(): string {
        return `${process.env.BASE_URL}`.replace('https://', '')
    }

    public static async validAddress(): Promise<Address> {
        return Api.address('validAddress');
    }

    public static async searchAnyResult(): Promise<string> {
        return new Promise((resolve) => {
            resolve('%debugSearchAnyResult%')
        });
    }

    public static async searchNoResult(): Promise<string> {
        return new Promise((resolve) => {
            resolve('%debugSearchNoResult%')
        });
    }

}
