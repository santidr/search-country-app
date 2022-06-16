import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { singleCountryByName } from "../api/api"
import CountryDetail from "../components/Country/CountryDetail"
import { Countries } from "../context/CountriesContext"
import { fetchData } from "../helpers/fetchData"

const CountryPage = () => {

    const navigate = useNavigate()

    const { loading, setLoading } = useContext(Countries)

    const { name } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        setLoading(true)

        fetchData(singleCountryByName(name))
            .then(data => {
                setCountry(data[0])
                setLoading(false)
            }).catch(e => console.log(e))

    }, [name, setLoading])

    return (
        <>
            <div className="columns m-3">
                <div className="column">
                    <button
                        className="button"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>
            </div>

            <div className="columns is-variable is-8-widescreen m-3">
                { loading && <h2>Loading data...</h2> }

                { country && (
                    <CountryDetail country={country} />
                )}
            </div>
        </>
    )
}

export default CountryPage