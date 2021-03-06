import React, { useEffect, useState } from "react";
import { View, Dimensions, ActivityIndicator } from "react-native";
import { useRecoilState } from "recoil";
import { errorState } from "../../recoilStore/Atoms";
import { getPopularMovies } from "../../services/api/movies";
import { styles } from "./style";
import List from "../../components/List";

//getting the screen height
const dimentions = Dimensions.get("screen");

const PopularMovies = ({ navigation }) => {
  const { isLoading, error, data } = getPopularMovies();

  const [popularMoviesError, setPopularMoviesError] =
    useRecoilState(errorState);

  if (error) {
    let popularMovies: any = error;
    setPopularMoviesError({ ...popularMoviesError, popularMovies });
  }
  const [popularMovies, setPopularMovies] = useState([]);

  const movies: any = data?.data?.results;

  useEffect(() => {
    setPopularMovies(movies);
  }, [movies]);

  return (
    <View style={styles.carousel}>
      {isLoading && <ActivityIndicator />}
      {popularMovies && (
        <List
          navigation={navigation}
          content={popularMovies}
          title="popular movies"
        />
      )}
    </View>
  );
};

export default PopularMovies;
