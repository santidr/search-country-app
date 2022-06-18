import { useContext, useEffect, useState } from 'react'

import Card from './Card'
import Pagination from './Pagination'

import { fetchData } from '../../helpers/fetchData'
import { Region } from '../../context/RegionContext'
import { Countries } from '../../context/CountriesContext'
import { countryListByRegion } from '../../api/api'
import Spinner from '../UI/Spinner'

const CardList = () => {

    const { regionSelected } = useContext(Region)
    const { countries, setCountries, loading, setLoading, error, setError } = useContext(Countries)

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        setLoading(true)
        setCountries([])

        fetchData(countryListByRegion(regionSelected))
            .then(data => {
                setCountries(data)
                setLoading(false)
            })
            .catch(e => setError(e))

    }, [regionSelected, setError, setCountries, setLoading])

    if (error) console.log(error)

    return (
        <>
            <div className="columns is-variable is-2-mobile is-3-tablet is-8-widescreen is-flex-wrap-wrap mx-2 my-4">
                { loading && <Spinner /> }
                { currentCountries.map((item, index) => (
                    <Card key={index} country={item} />
                ))}
            </div>

            <div className="columns mx-2">
                <div className="column">
                    { !loading && (
                        <Pagination
                            totalPosts={countries.length}
                            postsPerPage={postsPerPage}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default CardList