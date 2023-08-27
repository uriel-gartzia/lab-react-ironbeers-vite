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
    try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log('Aquí debo recibir la lista de cervezas desde la API', response)

        setBeersList(response.data)  
    } catch (error) {
        console.log(error)
    }
   

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
            <div className="beers-card">
                <Link to={`/beers/${eachBeer._id}`}>
                    <img src={eachBeer.image_url} alt="" width={50}/>
                    <h3 className="text-list">{eachBeer.name}</h3>
                </Link>

                <div className="tagline-list">
                    <p>{eachBeer.tagline}</p>
                    <p><b>Created by: </b>{eachBeer.contributed_by}</p>
                </div>
            </div>
            <hr />
            </>
            )
            
        })}
        

        </>
        
    )
}

export default AllBeersPage;
