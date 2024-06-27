import React, { useEffect, useState } from "react";
import { fetchApi } from "components/Fetch_API/Fetch_API";
import { MoveItem } from "components/MoveItem/MoveItem";
import css from "./MoveList.module.css"

export const MoveList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApi();
                setMovies(data.results); // передбачається, що у відповіді є поле 'results'
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div>
            <h1 className={css.title}>Trending Movies</h1>
            <ul className={css.list_move}>
                {movies.map(movie => (
                    <MoveItem 
                        key={movie.id} 
                        movietitle={movie.title} 
                        poster={movie.poster_path} 
                        name={movie.name} 
                        id={movie.id} 
                    /> 
                ))}
            </ul>
        </div>
    );
};
