import React from "react";
import { View } from "react-native";
import { getPopularMovies } from "../../services/api/movies";

const PopularMovies = () => {
  const { isLoading, error, data } = getPopularMovies();
  console.log(data);
  return <View></View>;
};

export default PopularMovies;
