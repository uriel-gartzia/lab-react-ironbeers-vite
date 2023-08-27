import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

const [ randomBeerDetails, setRandomBeerDetails ] = useState(null)

useEffect(() => {
    getRandomBeer()
}, [])

const getRandomBeer = async () => {
    try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        console.log('Aquí me llega una cerveza random', response)

        setRandomBeerDetails(response.data)
    } catch (error) {
        console.log(error)
    }
}

if (randomBeerDetails === null) {
    return <h3>Loading...</h3>
}
    return(
        <>
            <img src={randomBeerDetails.image_url} alt="" width={100}/>
            <h1>{randomBeerDetails.name}</h1>
            <p>{randomBeerDetails.tagline}</p>
            <p><b>First brewed: </b> {randomBeerDetails.first_brewed}</p>
            <p><b>Attenuation level: </b>{randomBeerDetails.attenuation_level}</p>
            <p>{randomBeerDetails.description}</p>
            <p>{randomBeerDetails.contributed_by}</p>
        </>
    )
}

export default RandomBeersPage;
