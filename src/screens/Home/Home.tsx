import React from 'react';
import {ScrollView} from 'react-native'
import PopularMovies from '../../features/PopularMovies';
import UpcomingMovies from "../../features/UpcomingMovies";
import TopRatedMovies from "../../features/TopRatedMovies";
import { useRecoilValue } from "recoil";
import {errorState} from '../../recoilStore/Atoms'
import Error from '../../components/Error';
import {styles} from "./styles"

const Home = ({ navigation }) => {
  const error = useRecoilValue(errorState);
  return (
    <ScrollView style={styles.container}>
      {error.popularMovies || error.topRatedMovies || error.upComingMovies ? (
        <Error
          erroText1={error.popularMovies}
          erroText2={error.topRatedMovies}
          errorText3={error.upComingMovies}
        />
      ) : (
        <>
          <UpcomingMovies />
          <PopularMovies navigation={navigation} />
          <TopRatedMovies navigation={navigation} />
        </>
      )}
      {/* <UpcomingMovies />
        <PopularMovies />
        <TopRatedMovies /> */}
    </ScrollView>
  );
};

export default Home