import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import List from "../../components/List";
import { getFavoriteMovies } from "../../services/Favourite";
import { styles } from "./styles";
import { favoriteMovieState } from "../../recoilStore/Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteMovies = ({ navigation }) => {
  const [favoriteMovies, setFavoriteMovieState] = useState([]);

  const [favMovieKey, setFavMovieKey] = useState([]);

  const favMovie = useRecoilValue(favoriteMovieState);
  const [favoritMovie, setFavoriteMovie] = useRecoilState(favoriteMovieState);
  
  const loadFavorite = async () => {
    try {
        // const key = await AsyncStorage.getAllKeys
      const value = await AsyncStorage.getItem("key");
      if (value !== null) {
        setFavoriteMovie(JSON.parse(value));
      }
    } catch (error) {
      console.log("loading", error);
    }
  };
  // load favorite
  useEffect(() => {
    loadFavorite();
  }, []);

  console.log("here>>>>>>>>>", favMovie);

//   useEffect(() => {
//     const getFavoriteMovies = async () => {
//       await AsyncStorage.getAllKeys().then((value) => {
//         setFavMovieKey(value);
//       });

//       await AsyncStorage.multiGet(favMovieKey).then((values) => {
//         if (values.length !== 0) {
//           let result = JSON.parse(values[0][1]);

//           setFavoriteMovieState([result]);
//         }
//       });
//     };
//     getFavoriteMovies();
//   }, []);
//   console.log(favoriteMovies);
  return (
    <View style={styles.carousel}>
      {favMovie === null && <ActivityIndicator />}
      {favMovie && (
        <List
          navigation={navigation}
          content={favMovie}
          title="Favorite Movies"
        />
      )}
    </View>
  );
};

export default FavoriteMovies;
