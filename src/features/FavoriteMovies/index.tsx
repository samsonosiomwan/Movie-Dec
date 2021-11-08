import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import List from "../../components/List";
import { styles } from "./styles";
import { favoriteMovieState } from "../../recoilStore/Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteMovies = ({ navigation }) => {
  const favMovie = useRecoilValue(favoriteMovieState);
  const [favoritMovie, setFavoriteMovie] = useRecoilState(favoriteMovieState);

  const loadFavorite = async () => {
    try {
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

  return (
    <View style={styles.carousel}>
      {favMovie === null && <ActivityIndicator />}
      {favMovie.length !== 0 ? (
        <List
          navigation={navigation}
          content={favMovie}
          title="Favorite Movies"
        />
      ) : (
        <View>
          <Text style={styles.favMovieHeading}>Favorite Movie</Text>
          <Text style={styles.favMovieText}>
            You dont have any favorite movie, Click a movie to add favorites
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavoriteMovies;
