import { fetchOnCast } from "components/Fetch_API/Fetch_API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MoveCast.module.css"

 const MoveCast = () => {
    const [Cast, setCast] = useState(null);
    const { moveid } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOnCast(moveid);
                setCast(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [moveid]);

    if (!Cast) return <div>Loading...</div>;

    const actorList = Cast.data ? Cast.data.cast : [];

    return (
        <ul className={css.cast_list}>
            {actorList.map((item) => {
                const profilePath = item.profile_path 
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}` 
                    : 'https://via.placeholder.com/200'; // Placeholder image if profile path is missing

                return (
                    <li className={css.cast_item} key={item.id}>
                        <img className={css.cast_img} src={profilePath} alt={item.name} />
                        <p className={css.cast_name}>{item.name}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default MoveCast;