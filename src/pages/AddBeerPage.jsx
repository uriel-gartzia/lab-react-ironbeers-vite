import axios from "axios";
import { useState } from "react";


function AddBeerPage() {


//Creamos un estado para cada input controlado del form
    const [ nameInput, setNameInput ] = useState("")
    const [ taglineInput, setTaglineInput ] = useState("")
    const [ descriptionInput, setDescriptionInput ] = useState("")
    const [ firstBrewedInput, setFirstBrewedInput ] = useState("")
    const [ brewersTipsInput, setBrewersTipsInput ] = useState("")
    const [ attenuationLevelInput, setAttenuationLevelInput ] = useState(0)
    const [ contributedByInput, setContributedByInput ] = useState("")

//Una función (handle) para modificar el valor del estado con lo que escribe cliente
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNameInput(event.target.value)
    }

    const handleTaglineChange = (event) => {
        console.log(event.target.value)
        setTaglineInput(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        console.log(event.target.value)
        setDescriptionInput(event.target.value)
    }

    const handleFirstBrewedChange = (event) => {
        console.log(event.target.value)
        setFirstBrewedInput(event.target.value)
    }

    const handleBrewersTipsChange = (event) => {
        console.log(event.target.value)
        setBrewersTipsInput(event.target.value)
    }

    const handleAttenuationLevelChange = (event) => {
        console.log(event.target.value)
        setAttenuationLevelInput(event.target.value)
    }

    const handleContributedByChange = (event) => {
        console.log(event.target.value)
        setContributedByInput(event.target.value)
    }

    //hacemos la llamada a la API y introducimos el nuevo objeto en el array
    const getFormInfo = async (event) => {

        console.log('creando una cerveza nueva')
        event.preventDefault() //prevenir comportamiento normal del form

        // creamos el nuevo objeto con sus propiedades y sus nuevos valores
        let newBeer = {
            name: nameInput,
            tagline: taglineInput,
            description: descriptionInput,
            first_brewed: firstBrewedInput,
            brewers_tips: brewersTipsInput,
            attenuation_level: attenuationLevelInput,
            contributed_by: contributedByInput
        }
        
        try {
             const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
             console.log('Aquí me llegará el nuevo objeto creado', response.data)

        } catch (error) {
            console.log(error)
        }
    }


    return(

        <>
        <form >
            <label>Name </label>
            <input type="text" name="name" onChange={handleNameChange} value={nameInput}/>

            <br /> 

            <label>Tagline </label>
            <input type="text" name="tagline" onChange={handleTaglineChange} value={taglineInput}/>

            <br />

            <label>Description </label>
            <textarea name="description" type="text" onChange={handleDescriptionChange} value={descriptionInput}></textarea>

            <br />

            <label>First brewed </label>
            <input name="first_brewed" type="text" onChange={handleFirstBrewedChange} value={firstBrewedInput}></input>

            <br />

            <label>Brewed's tips </label>
            <input name="brewers_tips" type="text" onChange={handleBrewersTipsChange} value={brewersTipsInput}></input>

            <br />

            <label>Attenuation Level </label>
            <input name="attenuation_level" type="number" onChange={handleAttenuationLevelChange} value={attenuationLevelInput}></input>

            <br />

            <label>Contributed By </label>
            <input name="contributed_by" type="text" onChange={handleContributedByChange} value={contributedByInput}></input>

            <br />

            <button onClick={getFormInfo} type="submit">Add beer </button>
        </form>
        </>
    )
}

export default AddBeerPage;
