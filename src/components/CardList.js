import { useContext, useEffect, useState } from 'react'

import Card from './Card'
import Pagination from './Pagination'

import { fetchData } from '../helpers/fetchData'
import { Region } from '../context/RegionContext'
import { Countries } from '../context/CountriesContext'

const CardList = () => {

    const { regionSelected } = useContext(Region)
    const { countries, setCountries, loading, setLoading, error, setError } = useContext(Countries)

    // Pagination
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage ] = useState(12)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {

        fetchData(`https://restcountries.com/v3.1/region/${ regionSelected }`)
            .then(data => {
                setCountries(data)
                setLoading(false)
            })
            .catch(e => setError(e))

    }, [ regionSelected, setError, setCountries, setLoading ])

    if (error) console.log(error)

    return (
        <>
            <div className="columns is-full-mobile is-half-tablet is-flex-wrap-wrap mx-2">
                { loading && <h3>Loading data...</h3> }
                { currentCountries.map((item, index) => (
                    <Card key={index} country={ item } />
                ))}
            </div>

            <div className="columns">
                <div className="column">
                    <Pagination 
                        totalPosts={ countries.length }
                        postsPerPage={ postsPerPage }
                        paginate={ paginate }
                        currentPage={ currentPage }
                    />
                </div>
            </div>
        </>
    )
}

export default CardList