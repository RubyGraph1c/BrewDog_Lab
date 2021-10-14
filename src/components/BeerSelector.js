import React from 'react';


const BeerSelector = ({ beers, onBeerClick }) => {

    const handleChange = function (event) {
        onBeerClick(beers[event.target.value])

    }

    const beerOptions = beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>

    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a beer!</option>

            {beerOptions}
        </select>
    )
}

export default BeerSelector;
