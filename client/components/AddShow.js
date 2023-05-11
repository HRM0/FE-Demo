import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewShow } from "../store/AllShowsSlice";


const AddShowForm = () => {
    const [showName,setShowName] = useState("")
    const [genre, setGenre] = useState("")
    const [network, setNetwork] = useState("")
    const [seasons, setSeasons] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newShow = {
            name: showName,
            genre: genre,
            network: network,
            seasons: seasons,
        }

        try {   
            dispatch(addNewShow(newShow))
            setShowName("")
            setGenre("")
            setNetwork("")
            setSeasons(1)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Fill out the form to add a new show!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="showName" 
                    value={showName}
                    onChange={(e) => setShowName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <input 
                    type="text" 
                    name="genre" 
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="network">Network</label>
                    <input 
                    type="text" 
                    name="network" 
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="seasons">Seasons</label>
                    <input 
                    type="text" 
                    name="seasons" 
                    value={seasons}
                    onChange={(e) => setSeasons(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddShowForm