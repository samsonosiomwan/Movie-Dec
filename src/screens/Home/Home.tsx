import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import PopularMovies from "../../features/PopularMovies";
import UpcomingMovies from "../../features/UpcomingMovies";
import TopRatedMovies from "../../features/TopRatedMovies";
import { useRecoilValue } from "recoil";
import { errorState } from "../../recoilStore/Atoms";
import Error from "../../components/Error";
import { styles } from "./styles";
import FavoriteMovies from "../../features/FavoriteMovies";
import * as Network from "expo-network";
import { useRecoilState } from "recoil";
import { offlineState } from "../../recoilStore/Atoms";

//   Network.getNetworkStateAsync().then(
//   (value)=>{
//    console.log( value)
//   }
// ).catch((error)=>{
//   console.log(error)
// });

const Home = ({ navigation }) => {
  const error = useRecoilValue(errorState);
  // const connectionStatus = async () =>{
  // const {isConnected, isInternetReachable} = await Network.getNetworkStateAsync();
  // return isConnected
  //  }
  const [online, setOnline] = useState(true);
  const [offlineStatus, setOfflineStatus] = useRecoilState(offlineState);
  useEffect(() => {
    Network.getNetworkStateAsync()
      .then((value) => {
        setOnline(value.isConnected);
        setOfflineStatus(value.isConnected);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {online !== true ? (
        <ScrollView style={styles.offlineContainer}>
          <FavoriteMovies navigation={navigation} />
        </ScrollView>
      ) : (
        <ScrollView style={styles.container}>
          {error.popularMovies ||
          error.topRatedMovies ||
          error.upComingMovies ? (
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
              <FavoriteMovies navigation={navigation} />
            </>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Home;
