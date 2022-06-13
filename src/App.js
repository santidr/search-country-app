import React from 'react';
import CardList from './components/CardList'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

import CountriesContext from './context/CountriesContext';
import RegionContext from './context/RegionContext';

const App = () => {

    return (
        <>
            <NavBar />
            
            <div className="container">
                <RegionContext>
                    <CountriesContext>
                        <SearchBar />
                        
                        <CardList />
                    </CountriesContext>
                </RegionContext>
            </div>
        </>
    )
}

export default App