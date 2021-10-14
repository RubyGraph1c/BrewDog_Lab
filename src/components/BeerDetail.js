import React from 'react';

const BeerDetail = ({ beer, addToFavourites }) => {

    const handleToggle = function (beer) {
        addToFavourites(beer);
    }

    return (
        <div>
            <h2>{beer.name}</h2>
            <button onClick={() => {handleToggle(beer)}}>Add to Favourites!</button>
        </div>

    )
}

export default BeerDetail;