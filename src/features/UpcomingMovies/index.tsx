import React, { useEffect, useState } from "react";
import { View, Dimensions, ActivityIndicator } from "react-native";
import {useRecoilState} from "recoil"
import {errorState} from "../../recoilStore/Atoms"
import { getUpcomingMovies } from "../../services/api/movies";
import { SliderBox } from "react-native-image-slider-box";
import {styles} from './styles'
import {IMAGE_URI} from '../../utils/envConstants'

// interface IpopularMovies {
//     movieImages:string
// }
//getting the screen height
const dimentions = Dimensions.get('screen');
console.log("hhhhhhh",dimentions)
const UpcomingMovies = () => {
  // const { isLoading, error, data } = getPopularMovies();

  const { isLoading, error, data } = getUpcomingMovies();
  const [movieImagePaths, setMovieImagePaths] = useState([]);
    const [upComingMoviesError, setUpComingMoviesError] = useRecoilState(errorState);
  
  if(error){
    let upComingMovies:any = error
    setUpComingMoviesError({ ...upComingMoviesError, upComingMovies});
  }
  const movies: any = data?.data?.results;

  useEffect(() => {
    const moviesPaths = [];

    data?.data?.results?.forEach((movie) => {
      // let moviesPaths = [];
      let imagePath = `${IMAGE_URI}${movie?.poster_path}`;
      moviesPaths.push(imagePath);
      // console.log(movie?.poster_path);
      setMovieImagePaths(moviesPaths);
    });
    // setMovieImagePaths(movies?.poster_path);
  }, [movies]);

  // console.log("here too", movieImagePaths);
  // console.log("here", movies);

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
        />
      )}
    </View>
  );
};

export default UpcomingMovies;
