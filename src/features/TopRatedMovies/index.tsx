import React, { useEffect, useState } from "react";
import { View, Dimensions, ActivityIndicator } from "react-native";
import { useRecoilState } from "recoil";
import { errorState } from "../../recoilStore/Atoms";
import { getTopRatedMovies } from "../../services/api/movies";
import { styles } from "./styles";
import List from "../../components/List";

const dimentions = Dimensions.get("screen");

const TopRatedMovies = ({ navigation }) => {
  const { isLoading, error, data } = getTopRatedMovies();

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedMoviesError, setTopRatedMoviesError] =
    useRecoilState(errorState);

  if (error) {
    let topRatedMovies: any = error;
    setTopRatedMoviesError({ ...topRatedMoviesError, topRatedMovies });
  }
  const movies: any = data?.data?.results;

  useEffect(() => {
    setTopRatedMovies(movies);
  }, [movies]);

  return (
    <View style={styles.carousel}>
      {isLoading && <ActivityIndicator />}

      {topRatedMovies && (
        <List
          navigation={navigation}
          content={topRatedMovies}
          title="top rated movies"
        />
      )}
    </View>
  );
};

export default TopRatedMovies;
