import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/trending/all/day?"
const API_KEY = "b92c3b0ca542098203e43e1df91196da"

export async function fetchApi() {
    const response = await axios.get(`${BASE_URL}api_key=${API_KEY}`);
    return response.data;
}

const BASE_URL_MOVIESID = "https://api.themoviedb.org/3/movie/"

export async function fetchOnMoviesId (moviesId) {
    const data = await axios.get(`${BASE_URL_MOVIESID}${moviesId}?api_key=${API_KEY}`)

    return data;
}

export async function fetchOnCast (moviesId) {
    const data = await axios.get(`${BASE_URL_MOVIESID}${moviesId}/credits?api_key=${API_KEY}`)

    return data;
}

export async function fetchOnReviews (moviesId) {
    const data = await axios.get(`${BASE_URL_MOVIESID}${moviesId}/reviews?api_key=${API_KEY}`)

    return data;
}

const BASE_URL_SEARCH_QUERY = "https://api.themoviedb.org/3/search/movie?"

export async function fetchOnSearch (query) {
    const data = await axios.get(`${BASE_URL_SEARCH_QUERY}api_key=${API_KEY}&query=${query}`)

    return data;
}