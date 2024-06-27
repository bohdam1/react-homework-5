import { fetchOnMoviesId } from "components/Fetch_API/Fetch_API";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import css from "./SingleMove.module.css"

const SimgleMove = () => {
    const [movie, setMovie] = useState(null);
    const { moveid } = useParams();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOnMoviesId(moveid);
                setMovie(data); // передбачається, що у відповіді є об'єкт з інформацією про фільм
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [moveid]);

    if (!movie) return <div>Loading...</div>;
    const movies = movie.data;
    let pathToImg = 'https://image.tmdb.org/t/p/w500' + movies.poster_path;

    
    const backLink = location.state?.from ?? "/";

    return (
        <section className={css.section}>
            <Link to={backLink} className={css.link}>Back</Link>
            <div className={css.movie_card}>
                <div>
                    <img src={pathToImg} alt={movies.title} className={css.movie_img} />
                </div>
                <div>
                    <h2 className={css.movie_title}>{movies.title}</h2>
                    <p className={css.movie_average}>Average: {movies.vote_average}</p>
                    <p className={css.movie_overview}>{movies.overview}</p>
                    <div className={css.list_link}>
                        <Link to={"cast"} className={css.link}>Cast</Link>
                        <Link to={"reviews"} className={css.link}>Reviews</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </section>
    );
};
export default SimgleMove