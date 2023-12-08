export default class Config {
    firstName: string
    lastName: string
    companyName: string
    companyId: string
    companyVatId: string
    street: string
    city: string
    zip: string
    phone: string
    email: string
    countryCode: string
    regionCode: string | null

    constructor(
        firstName: string,
        lastName: string,
        companyName: string,
        companyId: string,
        companyVatId: string,
        street: string,
        city: string,
        zip: string,
        phone: string,
        email: string,
        countryCode: string,
        regionCode: string | null
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.companyName = companyName
        this.companyId = companyId
        this.companyVatId = companyVatId
        this.street = street
        this.city = city
        this.zip = zip
        this.phone = phone
        this.email = email
        this.countryCode = countryCode
        this.regionCode = regionCode
    }
}
