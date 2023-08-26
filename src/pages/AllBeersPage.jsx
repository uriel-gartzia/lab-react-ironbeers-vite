import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AllBeersPage() {


// Aquí el estado con sus valor (data) y su set para modificar el valor
const [ beersList, setBeersList] = useState(null)


// Aquí el useEffect que hace la llamada cuando el componente AllBeersPage es montado
useEffect (() => {
    getBeersList()
}, [])

//Aquí la llamada a la API
const getBeersList = async () => {
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
    console.log('Aquí debo recibir la lista de cervezas desde la API', response)

    setBeersList(response.data)

}

// Cláusula de guardia hasta que la data es recibida
if (beersList === null) {
    return (
        <h3>Loading...</h3>
    )
}

// Render
    return(
        <>
        {beersList.map((eachBeer) => {

            return(
            <>
            <Link to={`/beers/${eachBeer._id}`}>
            <img src={eachBeer.image_url} alt="" width={50}/>
            <h2>{eachBeer.name}</h2>
            </Link>
               
               <p>{eachBeer.tagline}</p>
               <p><b>Created by: </b>{eachBeer.contributed_by}</p>
               <hr />
            </>
            )
            
        })}
        

        </>
        
    )
}

export default AllBeersPage;
