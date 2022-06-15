import { Link } from 'react-router-dom'
import { numberWithCommas } from '../../helpers/numberWithCommas'

const Card = ({ country }) => {
    return (
        <div className="column is-3 is-full-mobile">
            <Link to={`/country/${country.name.common}`}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={country.flags.png} alt={country.flag} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <h5 className="title is-5 pb-3">{country.name.common}</h5>
                        <p className="subtitle is-6 mb-2"><b>Population:</b> {numberWithCommas(country?.population)}</p>
                        <p className="subtitle is-6 mb-2"><b>Region</b>: {country?.region}</p>
                        <p className="subtitle is-6 mb-2"><b>Capital:</b> {country.capital && country.capital[0]}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card