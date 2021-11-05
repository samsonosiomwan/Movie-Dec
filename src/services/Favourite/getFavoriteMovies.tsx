import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRecoilState} from 'recoil'
import {favoriteMovieState} from "../../recoilStore/Atoms"



// get all favourite movies from async storage using getAllKeys
const getFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] =
    useRecoilState(favoriteMovieState);
    
  // try {
  //   const keys =  AsyncStorage.getAllKeys().then((value) => {
  //        // let  result = JSON.parse(value);
  //        //  setStatus(value);
  //      });
  //   // const keys =  AsyncStorage.getItem("favoriteMovies");
  //   // const result =  AsyncStorage.multiGet(keys);
  //   // do something what you need with response
  //  return keys;
  // } catch (error) {
  //   // do something...
  // }
};
 export default getFavoriteMovies
