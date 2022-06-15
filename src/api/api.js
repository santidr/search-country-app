export const countryListByRegion = (region) => {
    return `https://restcountries.com/v3.1/region/${ region }`
}

export const singleCountryByName = (name) => {
    return `https://restcountries.com/v3.1/name/${ name }`
}