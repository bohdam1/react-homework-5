import { Link, useLocation } from "react-router-dom";
import css from "./MoveItem.module.css"
export const MoveItem = ({movietitle,poster,name,id})=>{
    const location = useLocation()
    let pathToImg = 'https://image.tmdb.org/t/p/w500' + poster;
    return(
        <li className={css.meve_item}>
            <Link to={`/moves/${id}`} state={{from: location}}>
                <img src ={pathToImg} alt={poster} className={css.move_img}/>
                <p className={css.title}>{movietitle??name}</p>
            </Link>
        </li>
    )
}
