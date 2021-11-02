import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, API_KEY } from "../../../utils/envConstants";

const getMovie = (movie_id:number) => {
  const endpoint = `${BASE_URL}/movie/${movie_id}?${API_KEY}`;
  return useQuery("getMovie", () => {
    return axios.get(endpoint);
  });
};

export default getMovie;
