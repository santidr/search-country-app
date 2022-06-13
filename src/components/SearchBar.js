import { useContext, useState } from 'react'
import { Countries } from '../context/CountriesContext'
import { Region } from '../context/RegionContext'
import { fetchData } from '../helpers/fetchData'

const styles = {
    padding: 30,
}

const SearchBar = () => {
    const { countries, setCountries, setLoading, setError } = useContext(Countries)
    const [searchInput, setSearchInput] = useState('')

    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    const { regionSelected, setRegionSelected } = useContext(Region)

    const handleRegionSelector = (e) => {
        setRegionSelected(e.target.value)
    }

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleOnSearch = (e) => {

        if (e.key !== 'Backspace') {
            setCountries(countries.filter(country =>
                country.name.common.toLowerCase().includes(searchInput))
            )
        } else {
            fetchData(`https://restcountries.com/v3.1/region/${ regionSelected }`)
            .then(data => {
                setCountries(data)
                setLoading(false)
            })
            .catch(e => setError(e))
        }
    }

    return (
        <div className="columns">
            <div className="column is-5" style={styles}>
                <input
                    className="input"
                    type="text"
                    placeholder="Search for a country..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleOnSearch}
                />
            </div>

            <div className="column is-7" style={styles}>
                <div className="select is-flex is-justify-content-flex-end">
                    <select
                        onChange={handleRegionSelector}
                    >
                        {regions.map((item, i) => (
                            <option
                                key={i}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchBar