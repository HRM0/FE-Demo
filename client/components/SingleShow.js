import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleShow } from "../store/singleShowSlice";

const SingleShow = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    const singleShow = useSelector((state) => {
        
        return state.singleShow.singleShow
    })
    
    useEffect(() => {
        dispatch(fetchSingleShow(id))
    },[])
    return (
        <div>
            <h1>{singleShow.name}</h1>
            <h3>{singleShow.genre}</h3>
            <h3>{singleShow.network}</h3>
            <h3>{singleShow.seasons}</h3>
        </div>
    )
}

export default SingleShow