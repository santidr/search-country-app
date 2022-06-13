import { numberWithCommas } from '../helpers/numberWithCommas'

const Card = ({ country }) => {
    return (
        <div className="column is-3 is-full-mobile">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={ country.flags.png } alt={ country.flag } />
                    </figure>
                </div>
                <div className="card-header">
                    <div className="card-header-title">
                        <p className="title is-5">{ country.name.common }</p>
                    </div>
                </div>
                <div className="card-content">
                    
                    <p className="subtitle is-6 mb-2"><b>Population:</b> { numberWithCommas(country?.population) }</p>
                    <p className="subtitle is-6 mb-2"><b>Region</b>: { country?.region }</p>
                    <p className="subtitle is-6 mb-2"><b>Capital:</b> { country.capital && country.capital[0] }</p>
                </div>
            </div>
        </div>
    )
}

export default Card