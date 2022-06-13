import { createContext, useState } from 'react'

export const Countries = createContext()

const CountriesContext = ({ children }) => {

    const [ countries, setCountries ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    return (
        <Countries.Provider value={{
            countries, setCountries,
            loading, setLoading,
            error, setError
        }}>
            { children }
        </Countries.Provider>
    )
}

export default CountriesContext