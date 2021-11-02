import React from 'react'
import { Video, AVPlaybackStatus } from "expo-av";


const VideoPlayer = ({onClose}) => {
    return (
      <Video
        // ref={video}
        // onPlaybackStatusUpdate={() => onClose()}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: "100%", height: "100%" }}
      />
    );
}

export default VideoPlayer;