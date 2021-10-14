import React from 'react';

const FavouriteBeers = ({ beers }) => {
    const beerNodes = beers.filter((beer) => {
        return beer.favourite === true 
    }).map((beer) => {
        return <p>{beer.name}</p>
    })
    return (
        <div>
            <h2>Favourite Beers</h2>
            {beerNodes}
        </div>
    )
}

export default FavouriteBeers;

//pass in all beers then filter for favourite beers(beers with favourite key:true)