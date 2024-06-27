import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchOnSearch } from 'components/Fetch_API/Fetch_API'; 
import { MoveItem } from 'components/MoveItem/MoveItem';
import css from "./SerchList.module.css"

export const SearchList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchList, setSearchList] = useState([]); // Зміна на масив для зберігання результатів пошуку
   
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await fetchOnSearch(searchTerm); 
                const reviewsArray = data.results; 
                setSearchList(reviewsArray);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [searchTerm]); // Відслідковування змін searchTerm для перезавантаження даних при його зміні
    
    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            setSearchTerm(query); // Встановлення значення searchTerm з параметрів URL
        }
    }, [searchParams]);

    return (
        <ul className={css.list_move}>
           {searchList.map(({ id, title, poster_path, name }) => (
                    <MoveItem 
                        key={id} 
                        movietitle={title} 
                        poster={poster_path} 
                        name={name} 
                        id={id} 
                    /> 
                ))}
        </ul>
    );
};
