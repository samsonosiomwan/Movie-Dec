import axios from 'axios'
import {useQuery} from 'react-query'

export const getPopularMovies = () => {
    const endpoint =
      "https://api.themoviedb.org/3/movie/popular?api_key=3a21d1cd8a2a16c068ee04b06e631e0c";
    return useQuery('getPopularMovies', ()=>{
        return axios.get(endpoint);
    })
}