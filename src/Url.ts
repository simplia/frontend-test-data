import Api from './Api'

export default class Url {
    public static async index(): Promise<string> {
        return new Promise((resolve) => {
            resolve(`${process.env.BASE_URL}/`)
        })
    }

    public static async productWithoutVariants(): Promise<string> {
        return Api.single('product-without-variant');
    }

    public static async productWithSingleVariant(): Promise<string> {
        return Api.single('product-single-active-variant');
    }

    public static async productWithSingleSelectedVariant(): Promise<string> {
        return Api.single('product-single-active-selected-variant');
    }

    public static async productWithVariants(): Promise<string> {
        return Api.single('product-with-variants');
    }

    public static async productWithVariantsSelected(): Promise<string> {
        return Api.single('product-with-variants-selected');
    }
}
