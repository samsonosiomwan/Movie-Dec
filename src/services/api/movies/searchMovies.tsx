import axios from "axios";
import { BASE_URL, API_KEY } from "../../../utils/envConstants";



const searchMovieTv = async (query:string, movieType:string) => {
  const resp = await axios.get(
    `${BASE_URL}search/${movieType}?${API_KEY}&query=${query}`
  );
  console.log("ffff",resp);
  return resp.data.results;
};
export default searchMovieTv;

