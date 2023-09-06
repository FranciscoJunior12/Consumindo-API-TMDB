import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Moviecard from "../components/Moviecard";

import './MoviesGrid.css'

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);

    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(() => {

        const search = `${searchURL}?${apiKey}&query=${query}`;
        getSearchedMovies(search);


    }, [query]);



    return (

        <div className="container">
            <h2 className="h2">Resultados para: <span className="query-text"> {query}</span></h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Caregando...</p>}
                {movies.length > 0 && movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}

            </div>
        </div>
    );

}

export default Search;