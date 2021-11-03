import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, API_KEY } from "../../../utils/envConstants";

const getMovieTrailer = (movie_id:number) => {
  const endpoint = `${BASE_URL}/movie/${movie_id}/videos?${API_KEY}`;
  return useQuery("getMovieTrailer", () => {
    return axios.get(endpoint);
  });
};

export default getMovieTrailer;
