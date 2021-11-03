// import React from 'react'
import React, { useState, useCallback, useRef } from "react";

import {getMovieTrailer} from "../../services/api/movies"
import { ActivityIndicator, Button, View, Alert,Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Colors from "../../utils/themes/colors";



interface Props {
    video_id?:number
    onClose?:()=>void
}
const height = Dimensions.get("screen").height
const VideoPlayer = ({ onClose, video_id}: Props) => {
  const { isLoading, error, data } = getMovieTrailer(video_id);
//   console.log("now here",data?.data.results[0].key)
  const movieKey = data?.data?.results[0]?.key;
  const videoID = `${movieKey}`

 
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        onClose() //close mode after playing video
        Alert.alert("trailer has finished playing!");
      }
    }, []);

    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  return (
    //   {isLoading ? :""}
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{backgroundColor:Colors.black}}>
          <YoutubePlayer
            height={height / 3}
            play={playing}
            videoId={videoID}
            onChangeState={onStateChange}
          />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
          <Button title="go back" onPress={onClose} />
        </View>
      )}
    </>
  );
};

export default VideoPlayer;