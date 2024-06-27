import { NavLink } from "react-router-dom"
import css from "./Header.module.css"

export const Header = ()=>{
    return(
        <header className={css.header}>
            <NavLink to="/" className={css.oval_link}>Home</NavLink>
            <NavLink to="/moves" className={css.oval_link}>Moves</NavLink>
            
        </header>
    )
}