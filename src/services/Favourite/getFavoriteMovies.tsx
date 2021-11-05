import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { favoriteMovieState } from "../../recoilStore/Atoms";

// get all favourite movies from async storage using getAllKeys
const getFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] =
    useRecoilState(favoriteMovieState);
};
export default getFavoriteMovies;
