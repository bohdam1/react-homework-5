import { fetchOnReviews } from "components/Fetch_API/Fetch_API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MoveReviews.module.css"

const MoveReviews = () => {
    const [Reviews, setReviews] = useState([]);
    const { moveid } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await fetchOnReviews(moveid); 
                const reviewsArray = data.results; 
                setReviews(reviewsArray);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [moveid]);

    if (Reviews.length === 0) return <div>Loading...</div>;

    return (
        <ul className={css.reviews_list}>
            {Reviews.map(({ id, author, content, created_at }) => (
                <li className={css.reviews_item} key={id}>
                    <p className={css.reviews_autor}>Author: {author}</p>
                    <p className={css.reviews_content}>Content: {content}</p>
                    <p className={css.reviews_data}>Created At: {created_at}</p>
                    
                </li>
            ))}
        </ul>
    );
};

export default MoveReviews;