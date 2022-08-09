import Api from './Api'
import Config from "./Config";

export default class Url {

    public static domain(): string {
        return `${process.env.BASE_URL}`.replace('https://', '')
    }

    public static async index(config?: Config): Promise<string|null> {
        if (!config) {
            return new Promise((resolve) => {
                resolve(`${process.env.BASE_URL}/`)
            })
        }
        return Api.single('index', config);
    }

    public static async productWithoutVariants(config?: Config): Promise<string|null> {
        return Api.single('product-without-variant', config);
    }

    public static async productWithSingleVariant(config?: Config): Promise<string|null> {
        return Api.single('product-single-active-variant', config);
    }

    public static async productWithSingleSelectedVariant(config?: Config): Promise<string|null> {
        return Api.single('product-single-active-selected-variant', config);
    }

    public static async productWithVariants(config?: Config): Promise<string|null> {
        return Api.single('product-with-variants', config);
    }

    public static async productWithVariantsSelected(config?: Config): Promise<string|null> {
        return Api.single('product-with-variants-selected', config);
    }
}
