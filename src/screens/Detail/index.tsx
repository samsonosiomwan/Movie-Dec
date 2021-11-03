import React, {useState, useRef} from 'react'
import {  ActivityIndicator, ScrollView,Image, Text, View,Modal, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating'
import Error from '../../components/Error';
import {getMovie} from "../../services/api/movies"
import {styles} from "./styles"
import { IMAGE_URI } from "../../utils/envConstants";
import { imagePlaceHolder } from "../../utils/ImagePlaceHolder";
import PlayButton from '../../components/PlayButton';
import VideoPlayer from '../../components/Video'


const Detail = ({route}) => {
    const movieId = route.params.movieId;

    const { isLoading, error, data } = getMovie(movieId);
    const movieDetail = data?.data;
    const [modalVisible, setModalVisible] = useState(false)
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const showVideo = () => {
        setModalVisible(!modalVisible);
    }
    
    // console.log("i am here now", data?.data)
        return (
          < >
            <ScrollView style={styles.background}>
              {error && (
                <Error
                  erroText1={JSON.stringify(error)}
                  erroText2=""
                  errorText3=""
                />
              )}
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <>
                  <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={
                      movieDetail.poster_path
                        ? { uri: IMAGE_URI + movieDetail.backdrop_path }
                        : imagePlaceHolder
                    }
                  />

                  <View style={styles.container}>
                    <View style={styles.playbutton}>
                      <PlayButton handlePress={showVideo} />
                    </View>

                    <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                    {/* <Text>Original Language : {movieDetail.original_language}</Text> */}
                    {movieDetail.spoken_languages && (
                      <View style={styles.languageContainer}>
                        {movieDetail?.spoken_languages.map((spokenLanguage) => {
                          return (
                            <Text
                              key={spokenLanguage.iso_639_1}
                              style={styles.language}
                            >
                              {spokenLanguage.name}
                            </Text>
                          );
                        })}
                      </View>
                    )}
                    {/* showing vote_average with star rating libary */}
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      starSize={30}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      rating={movieDetail.vote_average / 2}
                      fullStarColor={"gold"}
                    />
                    <Text style={styles.overview}>{movieDetail.overview}</Text>
                    <Text
                      style={styles.popularity}
                    >{`popularity : ${movieDetail.popularity} views`}</Text>
                    <Text
                      style={styles.popularity}
                    >{`Vote Count : ${movieDetail.vote_count} `}</Text>
                  </View>
                  {/* <View style={styles.container}>
                  <Text style={styles.movieTitle}>
                    {movieDetail.overview} */}
                  {/* title, backdrop, vote_average, vote_count, language,
                    popularity, overview and poster_path */}
                  {/* </Text>
                </View> */}
                </>
              )}
            </ScrollView>
            <Modal animationType="slide" visible={modalVisible} style={styles.container}>
              <View style={styles.videoModal}>
                <VideoPlayer onClose={showVideo} video_id={movieId} />
                <TouchableOpacity onPress={() => showVideo()}>
                </TouchableOpacity>
              </View>
            </Modal>
          </>
        );
}

export default Detail