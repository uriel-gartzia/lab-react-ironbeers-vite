import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const [ beerDetails, setBeerDetails ] = useState("")

    let { beerId } = useParams()

    useEffect(() => {
        getBeerDetails()
    }, [])

    const getBeerDetails = async () =>  {

    try {

        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        console.log('Aquí debería llegarme los parámetros dinámicos de cada cerveza', response)

        setBeerDetails(response.data)

    } catch (error) {
        console.log(error)
    }

    }

    if (beerDetails === "") {
        <h3>Loading...</h3>
    }
   
    return(

        <>
            <img src={beerDetails.image_url} alt="" width={100}/>
            <h1>{beerDetails.name}</h1>
            <p>{beerDetails.tagline}</p>
            <p><b>First brewed: </b> {beerDetails.first_brewed}</p>
            <p><b>Attenuation level: </b>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>{beerDetails.contributed_by}</p>
        </>
    )
}

export default BeerDetailsPage;
