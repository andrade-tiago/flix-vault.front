import axios from "axios"

export const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
  },
})

export const imgBaseURL = 'https://image.tmdb.org/t/p/'
