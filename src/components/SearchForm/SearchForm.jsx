import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'; 
import css from "./SerchForm.module.css"

export const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [, setSearchParams] = useSearchParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams({ query: searchTerm }); // Встановлюємо параметр "query" у URL
        
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className={css.input}
            />
            <button type="submit" className={css.button}>Search</button>
        </form>
    );
};