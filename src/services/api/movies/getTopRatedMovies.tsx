import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, API_KEY } from "../../../utils/envConstants";

 const getTopRatedMovies = () => {
  const endpoint = `${BASE_URL}movie/top_rated?${API_KEY}`;
  return useQuery("getTopRatedMovies", () => {
    return axios.get(endpoint);
  });
};

export default getTopRatedMovies;