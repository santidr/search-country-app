import React from 'react';
import NavBar from './components/UI/NavBar'

import CountriesContext from './context/CountriesContext';
import RegionContext from './context/RegionContext';
import AppRouter from './router/AppRouter';

const App = () => {

    return (
        <>
            <NavBar />

            <RegionContext>
                <CountriesContext>
                    <AppRouter />
                </CountriesContext>
            </RegionContext>
        </>
    )
}

export default App