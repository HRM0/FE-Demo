import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./HomePage";
import AllShows from "./AllShows";

const App = () => {

    return(
        <div>
            <nav>
                <Link to="/"><h3>HomePage</h3></Link>
                <Link to="/allshows"><h3>All Shows</h3></Link>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/allshows" element={<AllShows />} />
                </Routes>
            </div>
        </div>
        
    )
}


export default App