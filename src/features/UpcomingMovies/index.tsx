import React, { useEffect, useState } from "react";
import { View, Dimensions, ActivityIndicator, Alert } from "react-native";
import { useRecoilState } from "recoil";
import { errorState } from "../../recoilStore/Atoms";
import { getUpcomingMovies } from "../../services/api/movies";
import { SliderBox } from "react-native-image-slider-box";
import { styles } from "./styles";
import { IMAGE_URI } from "../../utils/envConstants";

const dimentions = Dimensions.get("screen");

const UpcomingMovies = () => {
  const { isLoading, error, data } = getUpcomingMovies();
  const [movieImagePaths, setMovieImagePaths] = useState([]);
  const [upComingMoviesError, setUpComingMoviesError] =
    useRecoilState(errorState);

  if (error) {
    let upComingMovies: any = error;
    setUpComingMoviesError({ ...upComingMoviesError, upComingMovies });
  }
  const movies: any = data?.data?.results;

  useEffect(() => {
    const moviesPaths = [];

    data?.data?.results?.forEach((movie) => {
      let imagePath = `${IMAGE_URI}${movie?.poster_path}`;
      moviesPaths.push(imagePath);

      setMovieImagePaths(moviesPaths);
    });
  }, [movies]);

  return (
    <View style={styles.sliderContainer}>
      {isLoading && <ActivityIndicator />}
      {movieImagePaths && (
        <SliderBox
          images={movieImagePaths}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimentions.height / 1.5}
          autoplay={true}
          circleloop={true}
          onPress={() => {
            Alert.alert("Upcoming movie");
          }}
        />
      )}
    </View>
  );
};

export default UpcomingMovies;
