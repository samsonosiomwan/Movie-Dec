import axios from 'axios'
import {useQuery} from 'react-query'
import {BASE_URL, API_KEY} from '../../../utils/envConstants'

 const getPopularMovies = () => {
    const endpoint =`${BASE_URL}movie/popular?${API_KEY}`;
    return useQuery('getPopularMovies', ()=>{
        return axios.get(endpoint);
    })
}
export default getPopularMovies;