import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShows } from "../store/AllShowsSlice";
import { Link } from "react-router-dom";
import AddShowForm from "./AddShow";

const AllShows = () => {
    const dispatch = useDispatch()

    const allShows = useSelector((state)=> {
        return state.allShows.showList
        console.log(state)
    })

    useEffect(() => {
        dispatch(fetchAllShows())
    }, [])

    return (
        <div>
            <h1>List of All Shows!</h1>
            <hr></hr>
            <AddShowForm />
            {
                allShows.map((show) => {
                    return (
                        <div key={(show.id)}>
                            <Link to={`/allshows/${show.id}`}>
                                <h1>{show.name}</h1>
                            </Link>
                            
                            {/* <h3>{show.genre}</h3>
                            <h3>{show.network}</h3>
                            <h3>{show.seasons}</h3> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllShows