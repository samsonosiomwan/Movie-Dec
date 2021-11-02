;
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, API_KEY } from "../../../utils/envConstants";

const getUpcomingMovies = () => {
  const endpoint = `${BASE_URL}movie/upcoming?${API_KEY}`;
  return useQuery("getUpcomingMovies", () => {
    return axios.get(endpoint);
  });
};

export default getUpcomingMovies;
