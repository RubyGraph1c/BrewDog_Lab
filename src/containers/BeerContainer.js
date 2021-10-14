import React, { useState, useEffect } from 'react';
import BeerSelector from '../components/BeerSelector';
import BeerDetail from '../components/BeerDetail';
import FavouriteBeers from '../components/FavouriteBeers';


const BeerContainer = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function () {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(beers => setBeers(beers))
    }

    const onBeerClick = function (beer) {
        setSelectedBeer(beer);
    }

    const addToFavourites = function (beerToUpdate) {
        const updatedBeers = beers.map((beer) => {
            if (beer.name === beerToUpdate.name) {
                beer.favourite = true;
            }
            return beer;
        })
        setBeers(updatedBeers);
    }

return (
    <div className="main-container">
        <BeerSelector beers={beers} onBeerClick={onBeerClick} />
        {selectedBeer ? <BeerDetail beer={selectedBeer} addToFavourites={addToFavourites} /> : null}
        <FavouriteBeers beers={beers}/>
    </div>
)
}

export default BeerContainer;