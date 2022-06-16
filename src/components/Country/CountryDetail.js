import React from 'react'
import { numberWithCommas } from '../../helpers/numberWithCommas'

const CountryDetail = ({ country }) => {

    const getLanguages = () => {
        if (Object.values(country.languages).length > 1) {
            return Object.values(country.languages).join(", ")
        }
            
        return Object.values(country.languages)[0]
    }

    return (
        <>
            {country && (
                <>
                    <div className="column is-4">
                        <img src={country.flags.png } alt={country.name.common} />
                    </div>
                    <div className="column is-8">
                        <h4 className="title is-4">{country.name.common}</h4>
                        <div className="columns">
                            <div className="column is-5">
                                <p className="mb-2">
                                    <b>Native Name:</b> {Object.values(country.name.nativeName)[0].common}
                                </p>
                                <p className="mb-2"><b>Population:</b> {numberWithCommas(country?.population)}</p>
                                <p className="mb-2"><b>Region:</b> {country.region}</p>
                                <p className="mb-2"><b>Sub Region:</b> {country.subregion}</p>
                                <p className="mb-2"><b>Capital:</b> {country.capital}</p>
                            </div>
                            <div className="column is-7">
                                <p className="mb-2"><b>Top Level Domain:</b> {country.tld[0]}</p>
                                <p className="mb-2"><b>Currencies:</b> {Object.values(country.currencies)[0].name}</p>
                                <p className="mb-2"><b>Languages:</b> { getLanguages() }.</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default CountryDetail